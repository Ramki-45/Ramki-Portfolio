import { Code, User, Briefcase } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-foreground/70">
              I specialize in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="text-foreground/70">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies to stay at
              the forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-6">
            {[ 
              { Icon: Code, title: "Web Development", desc: "Creating responsive websites and web applications with modern frameworks." },
              { Icon: User, title: "UI/UX Design", desc: "Designing intuitive user interfaces and seamless user experiences." },
              { Icon: Briefcase, title: "Project Management", desc: "Leading projects from conception to completion with agile methodologies." }
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{title}</h4>
                    <p className="text-foreground/70">{desc}</p>
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
