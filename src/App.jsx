import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  EnvelopeSimple,
  List,
  MapPin,
  Mountains,
  X,
} from "@phosphor-icons/react";

const asset = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`;

const members = [
  { name: "Sahil Kaushal", role: "PhD Scholar · PMRF", years: "2022–Present", image: asset("image1.jpg") },
  { name: "Shah Masudul Islam", role: "PhD Scholar", years: "2023–Present", image: asset("image2.jpg") },
  { name: "Nandhana S", role: "PhD Scholar · DST–INSPIRE", years: "2025–Present", image: asset("image3.jpg") },
  { name: "Shagun Sandal", role: "PhD Scholar", years: "2025–Present", image: asset("image4.jpg") },
  { name: "E. S. Faizah", role: "MS Thesis", years: "2025–2026", image: asset("image5.jpg") },
];

const alumni = [
  "Dr. Sandeep Panda · Postdoctoral Research Fellow · 2023–2024",
  "Athif Sayyaf · Project Assistant · 2025–2026",
  "Raja Rajeshwaran · MS Thesis · 2024–2025",
  "Jiyadh Thanveer VP · Project Assistant · 2023–2024",
  "Adin Ishan · MS Thesis · 2024–2025",
  "Alok Bachhar · MS Thesis · 2024–2025",
  "Arun Negi · MS Thesis · 2023–2024",
  "Aryan Dhansyan · MS Thesis · 2023–2024",
  "Devesh Sharma · MS Thesis · 2023–2024",
  "Yuvika Beetan · MS Thesis · 2023–2024",
  "Ajay Singh · MS Thesis · 2022–2023",
  "Satish Kumar Kumawat · MS Thesis · 2022–2023",
];

const equipment = [
  { name: "UAV drone", image: asset("image17.jpg"), text: "High-resolution aerial imagery, terrain mapping, monitoring and 3D modelling." },
  { name: "Terrestrial LiDAR", image: asset("image19.jpg"), text: "Detailed 3D point clouds of slopes, structures and geomorphic features." },
  { name: "Total station", image: asset("image20.jpg"), text: "Precision land surveying and validation of remote-sensing datasets." },
  { name: "GNSS", image: asset("image21.jpg"), text: "High-accuracy positioning for ground control, surveys and georeferencing." },
  { name: "UV–Vis spectrophotometer", image: asset("image24.png"), text: "Chemical analysis of water and soil samples for environmental assessments." },
  { name: "Muffle furnace", image: asset("image26.png"), text: "Controlled high-temperature analysis of soil and sediment samples." },
];

const publications = [
  { year: "2025", title: "Rapid evacuation of suspended sediment loads during landslides in steep gradient rivers", journal: "Environmental Research Communications 7(3), 031002" },
  { year: "2025", title: "Unveiling the amplifying impact: Anthropogenic activities and the two-fold surge in landslides in the Lesser Himalayas", journal: "CATENA 250, 108771" },
  { year: "2025", title: "Towards synergistic AI-driven ensemble framework for earthquake and rainfall induced landslide risks in Sikkim Himalayas", journal: "Natural Hazards" },
  { year: "2025", title: "Decoding the dynamics of July 2024 Mundakkai–Chooralmala landslide in Kerala", journal: "Landslides" },
  { year: "2024", title: "A rapid run-out assessment methodology for the 2024 Wayanad debris flow", journal: "npj Natural Hazards 1(1)" },
  { year: "2024", title: "Numerical model derived intensity-duration thresholds for early warning of rainfall-induced debris flows in the Himalayas", journal: "Natural Hazards and Earth System Sciences" },
];

const gallery = [
  { src: asset("image33.jpg"), alt: "Field team studying a mountain slope" },
  { src: asset("image34.jpg"), alt: "UAV field deployment" },
  { src: asset("image29.jpg"), alt: "Researchers working beside a mountain river" },
  { src: asset("image30.jpg"), alt: "Survey instrumentation in mountainous terrain" },
  { src: asset("image31.jpg"), alt: "Researcher collecting field measurements" },
  { src: asset("image32.jpg"), alt: "GEOM Lab field team wearing safety vests" },
  { src: asset("image35.jpg"), alt: "Field team inspecting a steep slope" },
  { src: asset("image37.jpg"), alt: "Researcher servicing a monitoring station" },
];

const navItems = ["Research", "People", "Facilities", "Publications", "Gallery"];

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2>{title}</h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAlumni, setShowAlumni] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeImage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="GEOM Lab home">
          <img src={asset("geom-logo.png")} alt="GEOM Lab" />
          <span><strong>GEOM LAB</strong><small>IISER Mohali</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <ArrowUpRight weight="bold" /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <List />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow light">Geomorphology of Mountains & Valleys Lab</p>
            <h1>Reading landscapes.<br />Reducing risk.</h1>
            <p className="hero-intro">We investigate how landslides, rivers and changing mountain environments shape the places where people live.</p>
            <div className="hero-actions">
              <a className="button primary" href="#research">Explore our research <ArrowRight weight="bold" /></a>
              <a className="text-link" href="#people">Meet the team</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={asset("image17.jpg")} alt="GEOM Lab drone survey in the mountains" />
            <div className="hero-badge"><Mountains weight="duotone" /><span>Field science<br />from ridge to river</span></div>
          </div>
          <div className="hero-stat"><strong>4</strong><span>continents of research experience</span></div>
        </section>

        <section className="ticker" aria-label="Research themes">
          <span>Natural hazards</span><i /> <span>Remote sensing</span><i /> <span>Geomorphology</span><i /> <span>GIS & machine learning</span><i /> <span>Early warning</span>
        </section>

        <section className="section research" id="research">
          <SectionHeading eyebrow="What we study" title="Science for dynamic terrain" intro="Our work connects field observations, Earth observation and computation to understand fast-changing landscapes." />
          <div className="research-grid">
            <article className="research-feature">
              <span>01</span><h3>Landslides & natural hazards</h3>
              <p>We study co-seismic, post-seismic and rainfall-induced landslides, from failure controls to sediment budgets and cascading risk.</p>
              <img src={asset("image22.jpg")} alt="Field survey of a landslide-affected river valley" />
            </article>
            <div className="research-stack">
              <article><span>02</span><h3>Remote sensing & AI</h3><p>Satellite, UAV and machine-learning methods turn large datasets into actionable terrain intelligence.</p></article>
              <article><span>03</span><h3>Rivers, coasts & sediment</h3><p>We track erosion, accretion, suspended sediment and water quality from headwaters to ocean interfaces.</p></article>
              <article><span>04</span><h3>Early warning systems</h3><p>Near-real-time workflows combine weather models and landslide databases to strengthen mountain resilience.</p></article>
            </div>
          </div>
        </section>

        <section className="section pi-section">
          <div className="pi-image"><img src={asset("yunus-ali-pulpadan.jpeg")} alt="Dr. Yunus Ali Pulpadan" /></div>
          <div className="pi-copy">
            <p className="eyebrow">Principal investigator</p>
            <h2>Dr. Yunus Ali Pulpadan</h2>
            <p className="pi-role">Assistant Professor · Department of Earth & Environmental Sciences</p>
            <p>Dr. Yunus leads GEOM Lab at IISER Mohali. His work applies geomorphology, remote sensing, GIS and machine learning to natural hazards—especially landslides—and to river and coastal morphology across local, regional and global scales.</p>
            <p>He earned his PhD from The University of Tokyo and is a recipient of the Japanese Government Monbukagakusho (MEXT) Scholarship.</p>
            <div className="profile-links">
              <a href="https://www.iisermohali.ac.in/faculty/ees/yunusp" target="_blank" rel="noreferrer">IISER profile <ArrowUpRight /></a>
              <a href="https://sites.google.com/view/yunusp/profile" target="_blank" rel="noreferrer">Academic profile <ArrowUpRight /></a>
            </div>
          </div>
        </section>

        <section className="section people" id="people">
          <SectionHeading eyebrow="People" title="The GEOM team" intro="A field-driven group of researchers working across scales, sensors and mountain systems." />
          <div className="people-grid">
            {members.map((member) => (
              <article className="person-card" key={member.name}>
                <div className="person-photo"><img src={member.image} alt={member.name} /></div>
                <h3>{member.name}</h3><p>{member.role}</p><small>{member.years}</small>
              </article>
            ))}
          </div>
          <div className="alumni-panel">
            <div><p className="eyebrow">Alumni</p><h3>A growing field network</h3></div>
            <button className="button outline" onClick={() => setShowAlumni(!showAlumni)} aria-expanded={showAlumni}>{showAlumni ? "Hide alumni" : "View alumni"} <ArrowRight /></button>
            {showAlumni && <div className="alumni-list">{alumni.map((person) => <p key={person}>{person}</p>)}</div>}
          </div>
        </section>

        <section className="section facilities" id="facilities">
          <SectionHeading eyebrow="Lab facilities" title="Tools that travel from lab to landscape" intro="Integrated sensing, surveying and analytical facilities support the full chain from field measurement to environmental interpretation." />
          <div className="equipment-grid">
            {equipment.map((item, index) => (
              <article className="equipment-card" key={item.name}>
                <div className="equipment-image"><img src={item.image} alt={item.name} /></div>
                <div><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section publications" id="publications">
          <SectionHeading eyebrow="Selected publications" title="Recent work" intro="Current research spanning landslide dynamics, sediment transport, hazard assessment and Earth observation." />
          <div className="publication-list">
            {publications.map((pub) => (
              <a key={pub.title} href={pub.href || "https://sites.google.com/view/yunusp/publications"} target="_blank" rel="noreferrer">
                <span className="pub-year">{pub.year}</span><span className="pub-title"><strong>{pub.title}</strong><small>{pub.journal}</small></span><ArrowUpRight />
              </a>
            ))}
          </div>
          <a className="button dark" href="https://sites.google.com/view/yunusp/publications" target="_blank" rel="noreferrer">View all publications <ArrowUpRight /></a>
        </section>

        <section className="section gallery" id="gallery">
          <SectionHeading eyebrow="In the field" title="Where the questions begin" intro="Surveying rivers, slopes and landslide terrain across the Himalayas and beyond." />
          <div className="gallery-grid">
            {gallery.map((image, index) => (
              <button key={image.src} className={`gallery-item item-${index + 1}`} onClick={() => setActiveImage(image)} aria-label={`Open image: ${image.alt}`}>
                <img src={image.src} alt={image.alt} /><span>View image <ArrowUpRight /></span>
              </button>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div><p className="eyebrow light">Work with us</p><h2>Let’s understand<br />the terrain together.</h2></div>
          <div className="contact-details">
            <a href="mailto:yunusp@iisermohali.ac.in"><EnvelopeSimple weight="duotone" /><span><small>Email</small>yunusp@iisermohali.ac.in</span></a>
            <p><MapPin weight="duotone" /><span><small>Find us</small>Room 5F6, AB2 · IISER Mohali<br />Knowledge City, Sector 81, SAS Nagar, Punjab 140306</span></p>
            <p><Buildings weight="duotone" /><span><small>Department</small>Earth & Environmental Sciences</span></p>
          </div>
        </section>
      </main>

      <footer><a className="brand footer-brand" href="#top"><img src={asset("geom-logo.png")} alt="" /><span><strong>GEOM LAB</strong><small>IISER Mohali</small></span></a><p>Geomorphology of Mountains & Valleys Lab</p><p>© {new Date().getFullYear()} GEOM Lab</p></footer>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeImage.alt} onClick={() => setActiveImage(null)}>
          <button onClick={() => setActiveImage(null)} aria-label="Close image"><X /></button>
          <img src={activeImage.src} alt={activeImage.alt} />
          <p>{activeImage.alt}</p>
        </div>
      )}
    </>
  );
}
