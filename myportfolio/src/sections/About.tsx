import { useEffect, useRef, useState } from "react";
import { Code2, FolderGit2, Trophy, BookOpen } from "lucide-react";

const stats = [
  { value: 10, suffix: "+", label: "Technologies", icon: Code2, description: "Modern tools & frameworks mastered" },
  { value: 2, suffix: "+", label: "Projects", icon: FolderGit2, description: "Real-world apps built & deployed" },
  { value: 4, suffix: "+", label: "Competitions", icon: Trophy, description: "Hackathons & competitions entered" },
  { value: 2, suffix: "+", label: "Technical Articles", icon: BookOpen, description: "Published on Medium" },
];

function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({
  stat,
  idx,
  started,
}: {
  stat: (typeof stats)[0];
  idx: number;
  started: boolean;
}) {
  const count = useCountUp(stat.value, 1200 + idx * 100, started);
  const [hovered, setHovered] = useState(false);
  const Icon = stat.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative glass rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 animate-fade-in overflow-hidden cursor-default group"
      style={{
        animationDelay: `${(idx + 1) * 100}ms`,
        transform: hovered ? "translateY(-3px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "transform 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Subtle shimmer on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(32,178,166,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="p-4 flex flex-col items-center justify-center text-center relative z-10">
        {/* Icon */}
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center mb-2 transition-all duration-300"
          style={{
            background: hovered ? "rgba(32,178,166,0.2)" : "rgba(32,178,166,0.08)",
          }}
        >
          <Icon
            className="w-4 h-4 transition-all duration-300"
            style={{ color: hovered ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.6)" }}
          />
        </div>

        {/* Count */}
        <span className="text-3xl font-bold text-primary tabular-nums">
          {count}{stat.suffix}
        </span>

        {/* Label */}
        <span className="text-sm font-semibold text-foreground mt-1">
          {stat.label}
        </span>

        {/* Description */}
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {stat.description}
        </p>


      </div>
    </div>
  );
}

export const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-justify">
              <p>
                Hello! I’m Sanduni Bandara, a third year Information Technology undergraduate at the Faculty of Information Technology, University of Moratuwa. I’m passionate about Software Engineering and Full-Stack Development, with a growing interest in exploring emerging technologies and building meaningful digital solutions.
              </p>
              <p>
                I enjoy turning ideas into practical applications through problem-solving, creativity, and continuous learning. As a member of MoraSpirit, I have the opportunity to contribute to university initiatives, collaborate with others, and gain valuable experiences beyond academics.
              </p>
              <p>
                Beyond my studies, I enjoy exploring new technologies, writing blogs, following emerging trends in the tech industry, and hiking and discovering new places. I believe every project and experience is an opportunity to learn and grow.
              </p>
            </div>
          </div>

          {/* Right Column - Interactive Stats */}
          <div ref={statsRef} className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} idx={idx} started={started} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};