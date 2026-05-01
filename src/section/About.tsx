import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Experienced in building clean, responsive, and user-friendly interfaces using React.js, TypeScript/TSX, and Tailwind CSS.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "I focus on understanding requirements clearly and turning them into practical, usable frontend solutions.",
  },
  {
    icon: Rocket,
    title: "Web & Mobile Support",
    description:
      "Hands-on experience supporting web platforms, React Native basics, Flutter basics, iOS/Android deployment, and Apple In-App Purchase flows.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Comfortable working with backend developers, UI/UX designers, QA, project managers, and DevOps teams in real project environments.",
  },
];

const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="aniamte-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-justify">
              <p>
                I’m Alish Tuladhar, a Frontend Developer and recent B.Sc. CSIT
                graduate with 1 year and 3 months of frontend development
                experience, including a 3-month internship and ongoing work as a
                Junior Frontend Developer.
              </p>

              <p>
                I primarily work with React.js, TypeScript/TSX, and Tailwind
                CSS, building clean, responsive, and user-friendly web
                interfaces. I have worked on real projects such as healthcare
                booking platforms, real estate web interfaces, school management
                systems, and mobile-supported application flows.
              </p>

              <p>
                Along with web development, I’m also familiar with React Native
                basics, Flutter basics, iOS/Android deployment support, and
                Apple In-App Purchase integration. I enjoy learning new tools,
                improving my frontend skills, and creating interfaces that are
                simple, usable, and visually polished.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 text-justify">
              <p className="text-lg font-medium italic text-foreground">
                My goal is to grow as a frontend developer by building
                practical, responsive, and user-focused digital products. I
                focus on clean UI, reusable components, smooth user experience,
                and continuous learning while contributing value to real-world
                projects.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
