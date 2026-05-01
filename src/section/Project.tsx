import { ArrowUpRight } from "lucide-react";

const commonTags = ["React", "TypeScript", "Tailwind CSS"];
const aiTags = ["Python", "YOLOv8", "CNN", "OpenCV", "FastAPI", "MySQL"];

const hasValidLink = (link?: string) => {
  return Boolean(link && link.trim() !== "" && link.trim() !== "#");
};

const projects = [
  {
    title: "PickNCare",
    description:
      "A modern healthcare platform focused on connecting users with medical services, enabling easy appointment booking, health tracking, and access to reliable care solutions through a clean and user-friendly interface.",
    image: "/pickncare.png",
    tags: commonTags,
    link: "https://pickncare.com",
  },
  {
    title: "CrypticaDigital",
    description:
      "A digital agency website showcasing services like web development, branding, and digital marketing, built with a strong focus on performance, modern UI/UX, and helping businesses grow their online presence.",
    image: "/crypticadigital.png",
    tags: commonTags,
    link: "https://crypticadigital.com",
  },
  {
    title: "Real Estate",
    description:
      "A property listing platform that allows users to browse, search, and explore real estate listings with advanced filters, interactive UI, and a seamless user experience for buyers and sellers.",
    image: "/real-estate.png",
    tags: commonTags,
    link: "#",
  },
  {
    title: "BinaryBurst Solutions",
    description:
      "A professional IT solutions platform providing services such as cybersecurity, cloud infrastructure, and managed IT support, designed to simplify complex technology and deliver reliable business solutions.",
    image: "/binaryburstsolutions.png",
    tags: commonTags,
    link: "https://binaryburstsolutions.com",
  },
  {
    title: "School Management System",
    description:
      "A comprehensive system for managing school operations, including student records, attendance, exams, and communication, built to streamline administrative workflows and improve efficiency.",
    image: "/SMS.png",
    tags: commonTags,
    link: "#",
  },
  {
    title: "Vehicle Number Plate Detection",
    description:
      "An Automatic Number Plate Recognition system that detects vehicle number plates using YOLOv8 and recognizes characters using a custom CNN model. Integrated with a FastAPI web application where users can upload images or videos and get recognized plate numbers in real time.",
    image: "/number-plate.png",
    tags: aiTags,
    link: "https://github.com/Alish545/Number-Plate-Project",
  },
];

const Project = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="projects">
      {/* Bg GLow  */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-ssm font-medium tracking-wider uppercase animate-fade-in">
            Feature Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Here are some of the projects I've worked on.
          </p>
        </div>

        {/* project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const showLink = hasValidLink(project.link);

            return (
              <div
                key={index}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image.replace("/", "")}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                  {showLink && (
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight />
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {showLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-1 bg-surface text-muted-foreground text-xs font-medium border border-border/50 rounded-full hover:border-primary/50 hover:text-primary transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
