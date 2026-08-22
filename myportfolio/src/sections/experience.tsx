const experiences = [
  {
    period: "2024 — Present",
    role: "Undergraduate - BSc (Hons) in Information Technology",
    company: "University of Moratuwa",
    description:
      "Currently pursuing my undergraduate degree in Information Technology, with a growing focus on Software Engineering, Full-Stack Development, and emerging technologies. Building practical projects while continuously developing my technical and problem-solving skills.",
    current: true,
  },
  {
    period: "2020 — 2023",
    role: "GCE Advanced Level",
    company: "Pushpadana Girls' College - Kandy",
    description:
      "Successfully completed my Advanced Level studies in the Biological Science stream and qualified for university entrance, marking an important step toward my higher education journey.",
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            A journey that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline from academic milestones to my journey as an IT undergraduate at UOM
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/70 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
          {/* Mobile left line */}
          <div className="block md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot — center on desktop, left on mobile */}
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Card — left side for even, right side for odd */}
                {idx % 2 === 0 ? (
                  <>
                    {/* Left card */}
                    <div className="pl-10 md:pl-0 md:pr-10">
                      <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 md:text-right">
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                      </div>
                    </div>
                    {/* Empty right column */}
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    {/* Empty left column */}
                    <div className="hidden md:block" />
                    {/* Right card */}
                    <div className="pl-10 md:pl-10">
                      <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};