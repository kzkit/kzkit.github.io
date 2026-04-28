import { motion as Motion } from "framer-motion";
import "./App.css";

const projects = [
  {
    name: "Wakey",
    meta: "macOS utility",
    image: "/wakey-icon.png",
    description:
      "Smart triggers and custom schedules to keep your Mac awake when you need it. Fast, lightweight, and built in Swift.",
    accent: "foil-wakey",
  },
];

function ProjectCard({ project }) {
  return (
    <Motion.article
      className={`project-card ${project.accent}`}
      tabIndex={0}
      aria-labelledby={`${project.name}-title`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="card-foil" aria-hidden="true" />
      <div className="card-glare" aria-hidden="true" />

      <div className="card-frame">
        <div className="card-topline">
          <span>{project.meta}</span>
        </div>

        <div className="card-art" aria-hidden="true">
          <img src={project.image} alt="" />
        </div>

        <div className="card-copy">
          <div>
            <h3 id={`${project.name}-title`}>{project.name}</h3>
          </div>
          <p>{project.description}</p>
        </div>
      </div>
    </Motion.article>
  );
}

function App() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#projects">
        skip to projects
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a href="#home" aria-label="Go to the top of the homepage">
          zkk
        </a>
        <a href="#projects">projects</a>
        <a href="https://www.linkedin.com/in/kzkit/" target="_blank">contact</a>
      </nav>

      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <div className="hero-layout">
          <div className="hero-copy">
            <h1 id="hero-title">
              Zhen Kit
              <br />
              Kong
            </h1>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <h2 id="projects-title">building tools i use</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>copyright 2026 Zhen Kit Kong</span>
      </footer>
    </main>
  );
}

export default App;
