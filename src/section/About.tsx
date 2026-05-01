import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I write clean, maintainable code that follows best practices and design patterns.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "I thrive on solving complex problems with innovative and efficient solutions.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "I optimize web applications for speed and performance, ensuring fast load times and smooth interactions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "I excel in collaborative environments, working effectively with cross-functional teams to achieve project goals.",
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

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a frontend developer focused on building modern, responsive,
                and user-friendly web applications. I enjoy turning ideas into
                real products using technologies like React, TypeScript, and
                Tailwind CSS, with a strong emphasis on clean design and smooth
                user experience.
              </p>

              <p>
                My approach combines both creativity and logic — I care about
                how things look just as much as how they work. Whether it’s
                crafting reusable components, optimizing performance, or adding
                subtle animations, I aim to create interfaces that feel
                intuitive and engaging.
              </p>

              <p>
                Outside of coding, I’m constantly learning and exploring new
                tools in the frontend ecosystem. I’m passionate about improving
                my skills and building projects that not only solve problems but
                also deliver a polished, professional experience.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to craft meaningful digital experiences that are
                not only visually appealing but also intuitive and impactful. I
                strive to build products that solve real problems, enhance user
                interaction, and maintain high standards of performance and
                accessibility. Through continuous learning and attention to
                detail, I aim to grow as a developer while delivering work that
                creates lasting value.
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
