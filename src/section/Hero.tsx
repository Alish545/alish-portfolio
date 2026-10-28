import DownloadCV from "@/components/DownloadCV";
import { ArrowRight, ChevronDown } from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "TanStack Query",
  "React Native",
];

const Hero = () => {
  return (
    <section className="original-hero relative flex items-center" id="home">
      {/* BG */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.avif`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#a3a3a3",
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 23 + 7) % 100}%`,
              animation: `slow-drift ${15 + (i % 7) * 3}s ease-in-out infinite`,
              animationDelay: `${i % 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content section-wrap relative z-10">
        <div className="hero-main grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <div className="hero-main-copy space-y-6">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Frontend Developer · Web & Mobile
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building{" "}
                <span className="text-primary glass-text">responsive</span>{" "}
                <br />
                web interfaces with
                <br />
                <span className="font-serif italic font-normal text-white">
                  clean UI
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 text-left leading-relaxed">
                {" "}
                Hi, I'm Alish Tuladhar — a Frontend Developer with 1.5+ years of
                professional experience building responsive web and mobile
                applications with React.js, TypeScript, React Native, and
                Flutter.
              </p>
            </div>

            {/* CTA */}
            <div className="hero-actions flex flex-wrap gap-3 animate-fade-in animation-delay-300">
              <a href="#contact" className="hero-contact-button">
                Contact Me <ArrowRight className="w-5 h-5" />
              </a>

              <DownloadCV className="hero-cv-button" />
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow Me: </span>
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/Alish545",
                  label: "GitHub Personal",
                  caption: "Personal",
                },
                {
                  icon: FaGithub,
                  href: "https://github.com/Alish500",
                  label: "GitHub Work",
                  caption: "Work",
                },
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  caption: "",
                  href: "https://www.linkedin.com/in/alish-tuladhar-a6377831b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
                },
                {
                  icon: FaInstagram,
                  label: "Instagram",
                  caption: "",
                  href: "https://www.instagram.com/alishtuladhar?igsh=cHgyNHZ3dmh4dHhr&utm_source=qr",
                },
              ].map((social, idx) => {
                const Icon = social.icon;

                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="inline-flex items-center gap-2 p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                    {social.caption && (
                      <span className="text-xs">{social.caption}</span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
          {/* Right Column */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="hero-portrait relative mx-auto w-full">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={`${import.meta.env.BASE_URL}profile-pic.webp`}
                  alt="Alish Tuladhar"
                  width={1280}
                  height={1600}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 right-0 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available For Work{" "}
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 left-0 sm:-left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1.5+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="hero-toolkit animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="skills-marquee">
              {[0, 1].map((group) => (
                <div
                  className="skills-marquee-group"
                  key={group}
                  aria-hidden={group === 1 ? true : undefined}
                >
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xl font-semibold text-muted-foreground/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-scroll flex justify-center animate-fade-in animation-delay-800 cursor-pointer z-10">
          {" "}
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-muted-foreground z-10"
          >
            <span className="text-xs uppercase tracking-wider hover:text-primary transition-colors duration-300">
              Scroll
            </span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
