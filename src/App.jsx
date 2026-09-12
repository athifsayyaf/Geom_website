import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Buildings,
  EnvelopeSimple,
  GlobeHemisphereEast,
  LinkedinLogo,
  List,
  MapPin,
  Mountains,
  Newspaper,
  Siren,
  Snowflake,
  Waves,
  X,
} from "@phosphor-icons/react";
import publications from "./data/publications.json";

const asset = (filename) => `${import.meta.env.BASE_URL}assets/${filename}`;

const members = [
  { name: "Achu AL", role: "Postdoctoral Researcher", years: "2026–Present" },
  { name: "Sahil Kaushal", role: "PhD Scholar · PMRF", years: "2022–Present", image: asset("image1.jpg") },
  { name: "Shah Masudul Islam", role: "PhD Scholar", years: "2023–Present", image: asset("image2.jpg") },
  { name: "Nandhana S", role: "PhD Scholar · DST–INSPIRE", years: "2025–Present", image: asset("image3.jpg") },
  { name: "Shagun Sandal", role: "PhD Scholar", years: "2025–Present", image: asset("image4.jpg") },
  { name: "E. S. Faizah", role: "MS Thesis", years: "2025–2026", image: asset("image5.jpg") },
];

const externalStudents = [
  "Saju",
  "Ameen",
  "Anaha",
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
  { name: "UAV Drone - RGB, Thermal and LiDAR", image: asset("image17.jpg"), text: "High-resolution aerial imagery, thermal mapping, terrain monitoring and 3D modelling." },
  { name: "Terrestrial LiDAR", image: asset("image21.jpg"), text: "Detailed 3D point clouds of slopes, structures and geomorphic features." },
  { name: "Total station", image: asset("image20.jpg"), text: "Precision land surveying and validation of remote-sensing datasets." },
  { name: "GNSS", image: asset("image19.jpg"), text: "High-accuracy positioning for ground control, surveys and georeferencing." },
  { name: "UV–Vis spectrophotometer", image: asset("image24.png"), text: "Chemical analysis of water and soil samples for environmental assessments." },
  { name: "Ground Penetrating Radar (GPR)", image: asset("image30.jpg"), text: "Subsurface imaging for shallow stratigraphy, buried structures and landslide investigations." },
  { name: "Electrical Resistivity Tomography (ERT)", image: asset("image31.jpg"), text: "Geophysical profiling of subsurface moisture, weathering and material contrasts." },
];

const projects = [
  {
    icon: <Mountains weight="duotone" />,
    title: "Assessing Glacier Retreat and Landslide-River Interactions in High Mountain Asia",
    role: "Principal Investigator",
    agency: "Science and Engineering Research Board (SERB), Government of India",
    duration: "2022-2024",
    funding: "Rs. 32.47 Lakhs",
    keywords: ["Glaciers", "Landslides", "Channel Erosion", "Himalaya", "Climate Change"],
  },
  {
    icon: <Waves weight="duotone" />,
    title: "Modelling and Predicting Hydro-Meteorological Disasters in the Indian Himalaya",
    role: "Co-Principal Investigator",
    agency: "STARS Programme, Ministry of Education, Government of India",
    duration: "2023-2026",
    funding: "Rs. 50.50 Lakhs",
    keywords: ["Floods", "Landslides", "Climate Extremes", "Forecasting", "Hydrology"],
  },
  {
    icon: <GlobeHemisphereEast weight="duotone" />,
    title: "AI-based Water Quality Prediction Using Satellite Data and Socio-economic Indicators",
    role: "Principal Investigator",
    agency: "Kurita Water and Environment Foundation, Japan",
    duration: "2023-2024",
    funding: "Rs. 2.24 Lakhs",
    keywords: ["Machine Learning", "Water Quality", "Remote Sensing", "Environmental Analytics"],
  },
  {
    icon: <Mountains weight="duotone" />,
    title: "Rainfall-induced Soil-Bedrock Landslides: Volume Estimation and Uncertainty Analysis",
    role: "Principal Investigator",
    agency: "ISRO - Disaster Management Support Programme (DMSP)",
    duration: "2024-2027",
    funding: "Rs. 33.00 Lakhs",
    keywords: ["Landslides", "UAV LiDAR", "Volume Estimation", "Uncertainty", "Scaling Laws"],
  },
  {
    icon: <Siren weight="duotone" />,
    title: "SURE-ALERT: System for Unprecedented Rainfall-induced Landslide Early Warning Technique",
    role: "Co-Principal Investigator",
    agency: "ISRO - Disaster Management Support Programme (DMSP)",
    duration: "2024",
    funding: "Rs. 5.70 Lakhs",
    keywords: ["Early Warning", "Satellite Rainfall", "Disaster Risk Reduction", "Geospatial AI"],
  },
  {
    icon: <Waves weight="duotone" />,
    title: "Hydro-Enforced Topographic LiDAR DEMs for 2D & 3D Hydrodynamic Modelling",
    role: "Principal Investigator",
    agency: "Centre for Water Resources Development and Management (CWRDM)",
    duration: "2025-2026",
    funding: "Rs. 15.50 Lakhs",
    keywords: ["LiDAR", "DEM", "Hydrodynamic Modelling", "Flood Simulation"],
  },
  {
    icon: <Snowflake weight="duotone" />,
    title: "UNDOCRYORISK: Understanding Debris Flows Originating from the Mountain Cryosphere",
    role: "Co-Principal Investigator",
    agency: "Ministry of Earth Sciences (MoES)",
    duration: "2025-2028",
    funding: "Rs. 39.42 Lakhs",
    keywords: ["Cryosphere", "Debris Flows", "Climate Change", "Hazard Assessment"],
  },
  {
    icon: <GlobeHemisphereEast weight="duotone" />,
    title: "TRACE-Himalaya: Tracking Accelerated Catchment Erosion and Sediment Mobilization in Himalayan Headwaters",
    role: "Principal Investigator",
    agency: "Ministry of Earth Sciences (MoES)",
    duration: "2026-2029",
    funding: "Rs. 39.00 Lakhs",
    keywords: ["Sediment Dynamics", "River Systems", "Remote Sensing", "Climate Change", "Earth Observation"],
  },
];

const newsItems = [
  {
    title: "Conference updates",
    text: "A space for GEOM Lab conference participation, invited talks and field-school updates.",
  },
  {
    title: "Student achievements",
    text: "Milestones from scholars, thesis students and collaborators across field, lab and modelling work.",
  },
  {
    title: "Field notes",
    text: "Short blog-style updates from campaigns, instrument deployments and new datasets.",
  },
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

const navItems = ["Research", "People", "Projects", "Facilities", "Publications", "News", "Gallery"];

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
            <h1>Decoding Earth&apos;s<br />Dynamic Landscapes.</h1>
            <p className="hero-intro">We integrate geomorphology, Earth observation, AI and environmental analytics to understand landscape change.</p>
            <div className="hero-actions">
              <a className="button primary" href="#research">Explore our research <ArrowRight weight="bold" /></a>
              <a className="text-link" href="#people">Meet the team</a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={asset("image17.jpg")} alt="GEOM Lab drone survey in the mountains" />
            <div className="hero-badge"><Mountains weight="duotone" /><span>Field science<br />from ridge to river</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Research themes">
          <span>Geomorphology</span><i /> <span>Remote Sensing & GIS</span><i /> <span>Natural Hazards</span><i /> <span>Machine Learning</span><i /> <span>Sustainability</span>
        </section>

        <section className="section research" id="research">
          <SectionHeading eyebrow="What we study" title="From Mountains to Rivers. From Data to Decisions." intro="From mountains to rivers, we investigate Earth's dynamic landscapes using field observations, remote sensing, geophysics and environmental analytics to build safer and more resilient communities." />
          <div className="research-grid">
            <article className="research-feature">
              <span>01</span><h3>Landslides & natural hazards</h3>
              <p>We study co-seismic, post-seismic and rainfall-induced landslides, from failure controls to sediment budgets and cascading risk.</p>
              <img src={asset("image22.jpg")} alt="Field survey of a landslide-affected river valley" />
            </article>
            <div className="research-stack">
              <article><span>02</span><h3>Remote sensing & AI</h3><p>Satellite, UAV and machine-learning methods turn large datasets into actionable terrain intelligence.</p></article>
              <article><span>03</span><h3>Rivers, coasts & sediment</h3><p>We track erosion and accretion, quantify sediment budgets and study water quality from headwaters to ocean interfaces.</p></article>
              <article><span>04</span><h3>Early warning systems</h3><p>Near-real-time workflows combine weather models and landslide databases to strengthen mountain resilience.</p></article>
            </div>
          </div>
        </section>

        <section className="section people" id="people">
          <SectionHeading eyebrow="People" title="The GEOM team" intro="A field-driven group of researchers working across scales, sensors and mountain systems." />
          <div className="people-grid">
            {members.map((member) => (
              <article className="person-card" key={member.name}>
                <div className="person-photo">
                  {member.image ? <img src={member.image} alt={member.name} /> : <span>{member.name.split(" ").map((part) => part[0]).join("")}</span>}
                </div>
                <h3>{member.name}</h3><p>{member.role}</p><small>{member.years}</small>
              </article>
            ))}
          </div>
          <div className="external-students">
            <p className="eyebrow">External students</p>
            <div>{externalStudents.map((student) => <span key={student}>{student}</span>)}</div>
          </div>
          <div className="alumni-panel">
            <div><p className="eyebrow">Alumni</p><h3>A growing field network</h3></div>
            <button className="button outline" onClick={() => setShowAlumni(!showAlumni)} aria-expanded={showAlumni}>{showAlumni ? "Hide alumni" : "View alumni"} <ArrowRight /></button>
            {showAlumni && <div className="alumni-list">{alumni.map((person) => <p key={person}>{person}</p>)}</div>}
          </div>
        </section>

        <section className="section pi-section">
          <div className="pi-image"><img src={asset("yunus-ali-pulpadan.jpeg")} alt="Dr. Yunus Ali Pulpadan" /></div>
          <div className="pi-copy">
            <p className="eyebrow">Principal investigator</p>
            <h2>Dr. Yunus Ali Pulpadan</h2>
            <p className="pi-role">Assistant Professor · Department of Earth & Environmental Sciences</p>
            <p>Dr. Yunus Ali Pulpadan leads the GEOM team at IISER Mohali. His work applies geomorphology, remote sensing, GIS and machine learning to natural hazards, especially landslides, and to river and coastal morphology across local, regional and global scales.</p>
            <p>He earned his PhD from The University of Tokyo and is a recipient of the Japanese Government Monbukagakusho (MEXT) Scholarship.</p>
            <div className="profile-links">
              <a href="https://www.iisermohali.ac.in/faculty/ees/yunusp" target="_blank" rel="noreferrer">IISER profile <ArrowUpRight /></a>
              <a href="https://sites.google.com/view/yunusp/profile" target="_blank" rel="noreferrer">Academic profile <ArrowUpRight /></a>
              <a href="https://scholar.google.com/citations?hl=en&user=l3WMApQAAAAJ" target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight /></a>
              <a href="https://www.linkedin.com/search/results/all/?keywords=GEOM%20Lab%20IISER%20Mohali" target="_blank" rel="noreferrer"><LinkedinLogo /> LinkedIn</a>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <SectionHeading eyebrow="Projects" title="Active and recent funded work" intro="Research projects connect high-mountain hazards, hydrology, geophysics, satellite data and decision-ready terrain intelligence." />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">{project.icon}</div>
                <div>
                  <h3>{project.title}</h3>
                  <dl>
                    <div><dt>Role</dt><dd>{project.role}</dd></div>
                    <div><dt>Funding agency</dt><dd>{project.agency}</dd></div>
                    <div><dt>Duration</dt><dd>{project.duration}</dd></div>
                    <div><dt>Funding</dt><dd>{project.funding}</dd></div>
                  </dl>
                  <p>{project.keywords.join(" · ")}</p>
                </div>
              </article>
            ))}
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
          <a className="button outline scholar-button" href="https://scholar.google.com/citations?hl=en&user=l3WMApQAAAAJ" target="_blank" rel="noreferrer">Latest on Google Scholar <ArrowUpRight /></a>
        </section>

        <section className="section news" id="news">
          <SectionHeading eyebrow="News & blogs" title="Updates from the lab" intro="A home for conference notes, student achievements, field updates and short blog-style dispatches from GEOM Lab." />
          <div className="news-grid">
            {newsItems.map((item) => (
              <article className="news-card" key={item.title}>
                <Newspaper weight="duotone" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
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
          <div><p className="eyebrow light">Work with us</p><h2>Let’s decode<br />landscape evolution together.</h2></div>
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
