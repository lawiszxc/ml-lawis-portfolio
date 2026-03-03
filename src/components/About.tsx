import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.section
        className="mt-22 px-5 md:px-15"
        id="about"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="font-bold hover:scale-105 cursor-default">About Me.</h3>

        <div className="mt-8">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/graduation_pic.png"
              alt="my_gradpic"
              className="h-55 w-55 object-cover bg-amber-400 rounded-full"
            />

            <h3 className="text-[#020618] text-center font-bold">
              Hi, I'm Mark Laurence.
            </h3>
          </div>

          <p className="text-muted-foreground text-justify mt-3">
            I build web applications that are simple, reliable, and easy to use.
            I focus on writing clean and organized code so the system can run
            smoothly and be easy to maintain in the future.
            <br /> <br />
            I’m Mark Laurence Lawis, a web developer skilled in Laravel, React,
            and Vue. I work on backend tasks such as building APIs, handling
            system logic, and managing MySQL databases. I also create frontend
            interfaces using Tailwind CSS and Shadcn UI to build clean and
            responsive designs.
            <br /> <br />
            Most of my hands-on experience comes from developing our capstone
            project, where I applied my skills in both frontend and backend
            development. Through this project, I learned how to build a complete
            system, connect APIs, manage databases, and handle real application
            workflows.
            <br /> <br />
            Although I have not yet worked in a professional company setting, I
            continuously practice, improve my skills, and build projects to
            prepare myself for real-world development. I am eager to learn,
            grow, and gain professional experience as a developer.
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default About;
