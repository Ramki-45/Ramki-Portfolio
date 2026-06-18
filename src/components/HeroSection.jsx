import { ArrowDown } from "lucide-react";
import ramki_photo from "../assets/ramki_photo.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left z-10 space-y-6">
            <h1 className="text-[clamp(2rem,6vw,3.5rem)] font-bold tracking-tight leading-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Ramki
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-xl opacity-0 animate-fade-in-delay-3 leading-relaxed">
              Full Stack Developer crafting modern and scalable web solutions. I
              bridge design with functionality to create seamless user
              experiences. Let’s build something extraordinary together.
            </p>

            <div className="pt-6 sm:pt-8 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Profile Photo - Hidden on Mobile */}
          <div className="hidden lg:block">
            <img
              src={ramki_photo}
              alt="Ramki"
              className="w-80 h-80 object-cover rounded-full border-4 border-primary shadow-lg"
            />
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          {" "}
          <span className="text-sm text-foreground/80 mb-2">Scroll</span>{" "}
          <ArrowDown className="h-5 w-5 text-primary" />{" "}
        </div>
      </div>
    </section>
  );
};
