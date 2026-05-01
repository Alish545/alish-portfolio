const experiences = [
  {
    period: "May 2025 — Present",
    role: "Junior Frontend Developer",
    company: "Binaryburst Solution, Bhaktapur",
    description:
      "Working as a Frontend Developer in a team of 3, collaborating with backend developers, UI/UX designers, QA, project manager, and DevOps team using GitHub for version control. Building production-level frontend modules, reusable UI components, responsive layouts, API integrations, and role-based application flows.",
    technologies: [
      "React.js",
      "TypeScript/TSX",
      "Tailwind CSS",
      "REST APIs",
      "Formik",
      "Yup",
      "GitHub",
    ],
    current: true,
  },
  {
    period: "May 2025 — Present",
    role: "Frontend Developer",
    company: "Binaryburst Solution — Pickncare",
    description:
      "Worked on Pickncare, a healthcare booking web and mobile application available on web, iOS, and Android. Developed major frontend modules including authentication, dashboards, booking/request flow, pricing, profile management, and admin-side pages. Built role/subscription-based frontend logic and supported payment, subscription, and mobile app flows.",
    technologies: [
      "React.js",
      "TypeScript/TSX",
      "Tailwind CSS",
      "Formik",
      "Yup",
      "REST APIs",
      "Stripe",
      "Google Sign-In",
      "Apple Sign-In",
      "Flutter Basics",
    ],
    current: true,
  },
  {
    period: "April 2026 — Present",
    role: "Frontend Developer",
    company: "Binaryburst Solution — Real Estate Website / CRM Platform",
    description:
      "Working on a real estate website and CRM platform. Building landing and home pages for superadmin and agency sides, including a static superadmin homepage and dynamic agency landing page connected with CRM data. Developing step-based listing creation and edit flows with structured form-driven UI, API data handling, validation, and frontend state management.",
    technologies: [
      "React.js",
      "TypeScript/TSX",
      "Tailwind CSS",
      "TanStack Query",
      "REST APIs",
      "Formik",
      "Yup",
      "React Native Basics",
    ],
    current: true,
  },
  {
    period: "December 2025 — March 2026",
    role: "Frontend Developer",
    company: "Binaryburst Solution — Cryptica Digital Website",
    description:
      "Worked on Cryptica Digital Website. Built static frontend UI for navbar and main website pages including Home, About, SME Package, Services, Blog, Pricing, FAQ, and Contact sections. Developed dynamic theme category and blog management features, including create and edit functionality.",
    technologies: ["React.js", "TypeScript/TSX", "Tailwind CSS", "REST APIs"],
    current: false,
  },
  {
    period: "February 2025 — April 2025",
    role: "Frontend Developer Intern",
    company: "Binaryburst Solution, Bhaktapur",
    description:
      "Worked on frontend development for a School Management System focused on admin, teacher, and student workflows. Built reusable UI components such as dynamic tables, modals, forms, dropdowns, and searchable list layouts. Worked on role-based admin dashboard UI with permission-based navigation and protected frontend views.",
    technologies: [
      "React.js",
      "TypeScript/TSX",
      "Tailwind CSS",
      "React Query",
      "Axios",
      "Formik",
      "Yup",
      "React Router DOM",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth as a Frontend Developer,
            building responsive web applications, integrating REST APIs,
            creating role-based dashboards, and supporting live web and mobile
            products.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

                    <p className="text-muted-foreground">{exp.company}</p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
