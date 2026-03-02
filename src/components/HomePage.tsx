import Home from "@/components/Home";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Cv from "@/components/Cv";
import Contact from "@/components/Contact";

const MainLayout = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Cv />
      <Contact />
    </>
  );
};

export default MainLayout;
