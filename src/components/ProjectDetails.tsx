import { TiArrowBack } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import useProjectDetails from "@/data/useProjectDetails";
import { motion } from "motion/react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projects = useProjectDetails();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="px-15 py-8">Project not found</p>;
  }

  return (
    <>
      <ScrollToTop />

      <motion.div
        className="px-5 md:px-15 py-8"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <a
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 font-bold text-lg hover:scale-105 text-red-400"
        >
          <TiArrowBack size={20} />
          Go Back
        </a>
        <section className="mt-4">
          <h2 className="font-bold">{project.title}</h2>
          <p>Capstone Project</p>

          <div className="flex flex-col mt-6">
            <h4 className="font-bold">Project Overview</h4>

            <p className="mt-3 text-justify">{project.project_overview}</p>
          </div>

          <div className="flex w-full flex-col mt-8">
            <h4 className="font-bold">Technologies Used</h4>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div
                  key={tech.tech}
                  className={`outline-1 mt-3 hover:scale-105 cursor-default px-3 py-0.5 ${tech.color} rounded-md flex flex-wrap items-center gap-2 ${tech.text}`}
                >
                  {tech.logo}
                  <p className={`${tech.text}`}>{tech.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <img
              className="outline-2 rounded-xl object-contain hover:scale-110"
              src={project.image}
              alt="3.png"
            />
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default ProjectDetails;
