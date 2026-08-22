const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Flutter",
  "HTML5/CSS3",
  "Node.js",
  "Express.js",
  "Rest API",
  "MSSQL",
  "Neon",
  "PostgreSQL",
  "VS Code",
  "GitHub",
  "Git",
  "C",
  "Python",
  "Figma",
  "Java",
  "Postman",
];

const categories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Flutter", "HTML5/CSS3"],
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "Rest API", "MSSQL", "Neon", "PostgreSQL"],
  },
  {
    title: "Tools & Other ",
    skills: ["VS Code", "GitHub", "Git", "C", "Python", "Figma", "Java", "Postman"],
  },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Technologies I{" "}
            <span className="font-serif italic font-normal text-white">
              work with.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A versatile set of modern technologies, libraries, and tools I use
            to build robust, responsive, and scalable digital solutions.
          </p>
        </div>

        {/* Categorized Tech Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in flex flex-col justify-between"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 pb-2 border-b border-border/50">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 rounded-xl bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Moving Marquee Strip */}
        <div className="relative overflow-hidden pt-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="flex-shrink-0 px-8 py-4">
                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors cursor-default">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
