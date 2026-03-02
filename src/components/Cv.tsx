import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";

const Cv = () => {
  return (
    <>
      <section className="mt-22 px-15" id="cv">
        <div className="flex justify-between items-center">
          <h3 className="font-bold hover:scale-105 cursor-default">
            Curriculum Vitae.
          </h3>
          <a href="/Mark_Laurence_CV.pdf" download>
            <Button
              size="sm"
              className="hover:transition-transform hover:scale-105 gap-2"
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
      </section>
    </>
  );
};

export default Cv;
