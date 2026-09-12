import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scholarUserId = "l3WMApQAAAAJ";
const scholarProfileUrl = `https://scholar.google.com/citations?hl=en&user=${scholarUserId}`;
const outputPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/data/publications.json",
);

const maxPublications = Number.parseInt(process.env.SCHOLAR_PUBLICATION_LIMIT || "8", 10);

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function absoluteScholarUrl(href) {
  if (!href) return scholarProfileUrl;
  if (href.startsWith("http")) return href;
  return `https://scholar.google.com${href.replace(/&amp;/g, "&")}`;
}

function readAttribute(tag, name) {
  const match = tag.match(new RegExp(`${name}=(["'])(.*?)\\1`));
  return match?.[2] || "";
}

function parsePublications(html) {
  const rows = html.match(/<tr\b[^>]*class=(["'])gsc_a_tr\1[^>]*>[\s\S]*?<\/tr>/g) || [];

  return rows.map((row) => {
    const titleMatch = row.match(/<a\b([^>]*)>([\s\S]*?)<\/a>/);
    const metadata = [...row.matchAll(/<div\b[^>]*class=(["'])gs_gray\1[^>]*>([\s\S]*?)<\/div>/g)].map((match) => decodeHtml(match[2].replace(/<[^>]*>/g, "")));
    const yearMatch = row.match(/<span\b[^>]*class=(["'])gsc_a_h gsc_a_hc gs_ibl\1[^>]*>(\d{4})<\/span>/);

    if (!titleMatch || readAttribute(titleMatch[1], "class") !== "gsc_a_at") return null;

    return {
      year: yearMatch?.[2] || "",
      title: decodeHtml(titleMatch[2].replace(/<[^>]*>/g, "")),
      journal: metadata[1] || "Google Scholar",
      href: absoluteScholarUrl(readAttribute(titleMatch[1], "href")),
    };
  }).filter(Boolean);
}

async function fetchScholarPublications() {
  const urls = [
    `${scholarProfileUrl}&cstart=0&pagesize=20&sortby=pubdate`,
    `${scholarProfileUrl}&cstart=0&pagesize=100&sortby=pubdate`,
    scholarProfileUrl,
  ];

  for (const url of urls) {
    const response = await fetch(url, {
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9",
        "user-agent": "Mozilla/5.0",
      },
    });

    if (!response.ok) {
      throw new Error(`Google Scholar returned ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    const publications = parsePublications(html);

    if (publications.length > 0) {
      return publications.slice(0, maxPublications);
    }
  }

  throw new Error("No publications were found in the Google Scholar response.");
}

async function main() {
  const previous = await readFile(outputPath, "utf8").catch(() => "[]");
  const publications = await fetchScholarPublications();
  const next = `${JSON.stringify(publications, null, 2)}\n`;

  if (previous === next) {
    console.log("Recent publications are already up to date.");
    return;
  }

  await writeFile(outputPath, next);
  console.log(`Updated ${publications.length} recent publications from Google Scholar.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
