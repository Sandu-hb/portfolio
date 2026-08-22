import { ArrowUpRight, BookOpen, Calendar, Clock } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const blogs = [
  {
    title: "Building Real-Time Web Apps with WebSockets & React",
    description:
      "A deep dive into setting up low-latency bidirectional communication using WebSockets, optimizing performance, and handling state synchronization.",
    date: "Feb 2026",
    readTime: "5 min read",
    tag: "Web Development",
    link: "#",
  },
  {
    title: "Integrating XRPL Blockchain with Web Applications",
    description:
      "How to implement secure decentralized payments and wallet authentication in modern web frameworks using the XRP Ledger.",
    date: "Jan 2026",
    readTime: "7 min read",
    tag: "Blockchain",
    link: "#",
  },
  {
    title: "Designing Robotics with Raspberry Pi and Python",
    description:
      "Practical insights into motor driver interfacing, inverse kinematics, and gesture control for interactive hardware robotics projects.",
    date: "Dec 2025",
    readTime: "6 min read",
    tag: "Robotics & IoT",
    link: "#",
  },
];

export const Blogs = () => {
  return (
    <section id="blogs" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Articles & Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Thoughts &{" "}
            <span className="font-serif italic font-normal text-white">
              articles.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Exploring web development, hardware robotics, blockchain systems,
            and emerging technologies through practical guides and case studies.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogs.map((blog, idx) => (
            <a
              key={idx}
              href={blog.link}
              className="group glass p-8 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 glow-border animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div>
                {/* Meta info: Tag & Read Time */}
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    {blog.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm text-justify leading-relaxed mb-6">
                  {blog.description}
                </p>
              </div>

              {/* Footer info: Date & Read More */}
              <div className="pt-6 border-t border-border/50 flex items-center justify-between text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{blog.date}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:underline">
                  Read Article
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-400">
          <AnimatedBorderButton>
            <BookOpen className="w-4 h-4" />
            View All Articles
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
