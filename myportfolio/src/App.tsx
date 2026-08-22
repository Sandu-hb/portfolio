import { Navbar } from "@/layout/navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/project";
import { Experience } from "@/sections/experience";
import { TechStack } from "@/sections/TechStack";
import { Blogs } from "@/sections/Blogs";
import { Contact } from "@/sections/contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;