import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import Marquee from "react-fast-marquee";
import { Link } from "react-scroll";
import { GrContact } from "react-icons/gr";
import { FaLaravel } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiVuedotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const tech_stacks = [
  {
    color: "bg-orange-500",
    name: "LARAVEL",
    logo: <FaLaravel size={19} />,
    text: "text-white",
  },
  {
    color: "bg-cyan-300",
    name: "REACT",
    logo: <RiReactjsLine size={19} />,
    text: "text-black",
  },
  {
    color: "bg-green-600",
    name: "VUE",
    logo: <SiVuedotjs size={19} />,
    text: "text-white",
  },
  {
    color: "bg-blue-400",
    name: "TAILWIND",
    logo: <RiTailwindCssFill size={19} />,
    text: "text-white",
  },
  {
    color: "bg-blue-900",
    name: "MYSQL",
    logo: <SiMysql size={19} />,
    text: "text-white",
  },
  {
    color: "bg-black",
    name: "SHADCN UI",
    logo: <SiShadcnui size={19} />,
    text: "text-white",
  },
  {
    color: "bg-yellow-400",
    name: "JAVASCRIPT",
    logo: <IoLogoJavascript size={19} />,
    text: "text-black",
  },
  {
    color: "bg-blue-500",
    name: "TYPESCRIPT",
    logo: <BiLogoTypescript size={19} />,
    text: "text-white",
  },
];

const Home = () => {
  return (
    <>
      <motion.section
        className="mt-5 relative h-165 mx-5 md:mx-15"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HexagonBackground className="h-full rounded-2xl absolute w-full" />

        <div className="flex flex-col justify-center items-center gap-5 top-11 cursor-default relative">
          <h1 className="text-[#020618] text-center -tracking-wider md:tracking-wide">
            Aspiring
            <br /> Entry&ndash;Level <br /> Web Developer
          </h1>

          <p className="text-center text-base md:text-lg">
            I create simple, clean, and modern web solutions while improving my
            skills in backend and frontend development. Always willing to learn
            and build better user experiences.
          </p>

          <div className="flex gap-2">
            <Button
              className="transition-transform duration-200 hover:scale-105 gap-2"
              asChild
            >
              <Link to="contact" smooth={true} duration={500} offset={-85}>
                <GrContact />
                Hire me!
              </Link>
            </Button>
            <a href="/Mark_Laurence_CV.pdf" download>
              <Button
                variant="link"
                className="bg-gray-300 transition-transform duration-200 hover:scale-105 gap-2"
              >
                <FaDownload />
                Download CV
              </Button>
            </a>
          </div>

          <div className="w-full mt-4 px-2">
            <Marquee
              className="overflow-hidden bottom-0"
              gradient={false}
              speed={70}
            >
              <div className="flex">
                {tech_stacks.map((tech) => (
                  <div
                    key={tech.name}
                    className={`card h-auto ${tech.color} py-2 px-4 rounded-sm mr-2 hover:scale-105 cursor-default`}
                  >
                    <small className={`flex ${tech.text} items-center gap-2`}>
                      {tech.logo} {tech.name}
                    </small>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
