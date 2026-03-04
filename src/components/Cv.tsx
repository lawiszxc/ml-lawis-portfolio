import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const Cv = () => {
  return (
    <>
      <motion.section
        className="mt-22 px-5 md:px-15"
        id="cv"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold hover:scale-105 cursor-default">
            Curriculum Vitae.
          </h3>
          <a href="/Mark_Laurence_CV.pdf" download>
            <Button
              size="sm"
              className="md:hidden flex hover:transition-transform hover:scale-105 gap-2"
            >
              <FaDownload size={14} />
            </Button>

            <Button
              size="sm"
              className="hidden md:flex hover:transition-transform hover:scale-105 gap-2"
            >
              <FaDownload size={14} /> Download CV
            </Button>
          </a>
        </div>

        <div className="mt-8">
          <img
            src="/Mark_Laurence_CV.jpg"
            className="w-full rounded-xl outline-1"
            alt="my_cv"
          />
        </div>
      </motion.section>
    </>
  );
};

export default Cv;
