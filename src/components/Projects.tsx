import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useProjectDetails from "@/data/useProjectDetails";

const Projects = () => {
  const location = useLocation();
  const projects = useProjectDetails();

  useEffect(() => {
    const offset = 85;
    window.scrollTo({ top: 0 - offset, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <section className="mt-22 px-15" id="projects">
        <h3 className="font-bold hover:scale-105 cursor-default">Projects.</h3>

        <div className="mt-8 grid grid-cols-2 gap-8 px-4">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className={`outline-2 ${project.outline_color} h-auto rounded-4xl overflow-hidden hover:scale-105 cursor-pointer`}
            >
              <img src={project.image} alt={project.image} className="h-48" />

              <div className="flex text-left flex-col px-4 py-5">
                <h6 className="font-bold">{project.title}</h6>
                <small className="text-muted-foreground">{project.type}</small>

                <Button
                  className={`h-7 gap-2 w-full px-3.5 py-3 mt-4 ${project.bg_color}`}
                >
                  <FaArrowUpRightFromSquare />
                  View Details.
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
