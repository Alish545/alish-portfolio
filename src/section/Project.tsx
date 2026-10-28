import { ArrowUpRight } from "lucide-react";
import CareKTMScreens from "./CareKTMScreens";
import { projects } from "@/data/projects";

const Project = () => (
  <section id="projects" className="section-wrap section-space">
    <div className="section-heading heading-inline">
      <div>
        <p className="eyebrow">01 / Selected work</p>
        <h2>
          Real products.
          <br />
          <em>Hands-on contributions.</em>
        </h2>
      </div>
      <p className="muted section-aside">
        A selection of professional and academic work, with a focus on what I
        helped build.
      </p>
    </div>
    <div className="project-list">
      {projects.map((p, i) => (
        <article className="project-row" key={p.title}>
          <div className="project-image">
            {p.image ? (
              <img
                src={
                  p.image.startsWith("/")
                    ? p.image
                    : `${import.meta.env.BASE_URL}${p.image}`
                }
                alt={`${p.title} interface preview`}
                loading="lazy"
              />
            ) : (
              <CareKTMScreens />
            )}
          </div>
          <div className="project-copy">
            <p className="eyebrow">
              0{i + 1} / {p.type}
            </p>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p className="muted contribution">
              <span>My contribution</span>
              {p.contribution}
            </p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a
              className="text-link project-link case-study-link"
              href={`?project=${i + 1}`}
            >
              View case study <ArrowUpRight size={17} />
            </a>
            {p.link ? (
              <a
                className="text-link project-link"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                {p.label}
                <ArrowUpRight size={17} />
              </a>
            ) : (
              <p className="project-note">{p.note}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);
export default Project;
