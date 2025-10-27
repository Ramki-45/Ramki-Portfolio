import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Nxt Watch",
    description: "A beautiful media player app using React",
    image: "/Projects/nxtwatch.png",
    tags: ["React", "Node", "Express"],
    domainUrl: "https://nxt045.ccbp.tech",
    githubUrl: "https://github.com/Ramki-45/NxtWatch",
  },
  {
    id: 2,
    title: "Nxt Trendz",
    description: "A beautiful E-Commerce app using React With API Integration",
    image: "/Projects/nxttrendz.png",
    tags: ["React", "Node", "Express"],
    domainUrl: "https://ramkitrendz.ccbp.tech",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Jobby App",
    description: "A Job search Application using React with API Integration",
    image: "/Projects/jobyapp.png",
    tags: ["React", "Node", "Express"],
    domainUrl: "https://joby02.ccbp.tech",
    githubUrl: "https://github.com/Ramki-45/Jobby-App",
  },
  {
    id: 4,
    title: "Emoji Game",
    description:
      "Test your memory by clicking each emoji only once. Can you beat your top score? 🧠✨",
    image: "/Projects/emojigame.png",
    tags: ["React", "Node", "Express"],
    domainUrl: "https://emojiram01.ccbp.tech",
    githubUrl: "https://github.com/Ramki-45/Emoji-Game",
  },
  {
    id: 5,
    title: "Color Gradient",
    description:
      "Generates smooth and customizable gradients dynamically.",
    image: "/Projects/colorgradient.png",
    tags: ["React", "Node", "Express"],
    domainUrl: "https://ramkigr01.ccbp.tech",
    githubUrl: "https://github.com/Ramki-45/Gradient-Generator",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was crafted with focus
          on detail, performance, and seamless user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.domainUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ramki-45"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
