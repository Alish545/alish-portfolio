import { ArrowUpRight } from "lucide-react";
const experiments = [
  {
    name: "APEX Fitness",
    subtitle: "Dubai fitness landing page",
    description:
      "A fitness landing-page concept for the Dubai market, with English/Arabic support, AED pricing, and a dark visual style.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://github.com/Alish500/dubai-fitness-hub",
    image: "apex-preview.webp",
    detailImage: "apex-reviews-preview.webp",
    note: "UI exploration · AI-assisted project",
  },
  {
    name: "IronPulse Gym",
    subtitle: "Fitness website",
    description:
      "A fitness website exploring a bold gym identity, built with React, shadcn/ui, Tailwind CSS, and Framer Motion.",
    tags: ["React", "TypeScript", "shadcn/ui", "Framer Motion"],
    url: "https://github.com/Alish500/ironpulse-dynamics",
    image: "ironpulse-preview.webp",
    detailImage: undefined,
    note: "AI-assisted project · Credited to Cryptica Digital",
  },
];
const Experiments = () => (
  <section id="experiments" className="section-wrap experiments-section">
    <div className="section-heading heading-inline">
      <div>
        <p className="eyebrow">Side projects / UI exploration</p>
        <h2>
          A little room
          <br />
          <em>to experiment.</em>
        </h2>
      </div>
      <p className="muted section-aside">
        AI-assisted projects exploring visual direction and frontend interfaces.
      </p>
    </div>
    <div className="experiments-grid">
      {experiments.map((project) => (
        <article className="experiment-card" key={project.name}>
          <a
            className="experiment-screenshot"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} repository`}
          >
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={`${project.name} homepage interface`}
              width={1600}
              height={780}
              loading="lazy"
              decoding="async"
            />
          </a>
          <div className="experiment-body">
            <p className="eyebrow">{project.subtitle}</p>
            <h3>{project.name}</h3>
            <p className="muted">{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {project.detailImage && (
              <details className="experiment-detail">
                <summary>More interface details</summary>
                <img
                  src={`${import.meta.env.BASE_URL}${project.detailImage}`}
                  alt="APEX Fitness testimonial section design"
                  loading="lazy"
                  decoding="async"
                />
                <p>
                  Testimonial section · Concept content shown in the project UI.
                </p>
              </details>
            )}
            <div className="experiment-base">
              <span>{project.note}</span>
              <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} repository`}
              >
                Repository
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default Experiments;
