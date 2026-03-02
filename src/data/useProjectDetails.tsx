import { BsFillBootstrapFill } from "react-icons/bs";
import { FaLaravel } from "react-icons/fa";
import { SiAdguard, SiIonic, SiMysql, SiVuedotjs } from "react-icons/si";

const useProjectDetails = () => {
  const projects = [
    {
      id: "lydo-youth-system",
      image: "/capstone/3.png",
      title: "LYDO Youth Profiling and Management System",
      type: "Capstone Project",
      outline_color: "outline-amber-500",
      bg_color: "bg-amber-500 hover:bg-amber-500",
      project_overview:
        "LYDO Youth Profiling and Management System is a web-based system designed to help the Local Youth Development Office manage and organize youth information more efficiently. This system allows the office to record, update, and monitor youth profiles, events, and activities in one centralized platform. It reduces manual paperwork and makes data tracking faster, easier, and more accurate. The goal of this project is to provide a simple, organized, and user-friendly system that supports better youth data management and decision-making.",
      technologies: [
        {
          tech: "VUE",
          color: "bg-green-600",
          text: "text-white",
          logo: <SiVuedotjs size={20} />,
        },
        {
          tech: "LARAVEL",
          color: "bg-orange-500",
          text: "text-white",
          logo: <FaLaravel size={20} />,
        },
        {
          tech: "MYSQL",
          color: "bg-blue-900",
          text: "text-white",
          logo: <SiMysql size={20} />,
        },
        {
          tech: "BOOTSTRAP THEME",
          color: "bg-violet-800",
          text: "text-white",
          logo: <BsFillBootstrapFill size={20} />,
        },
        {
          tech: "JWT AUTH",
          color: "bg-black",
          text: "text-white",
          logo: <SiAdguard size={20} />,
        },
      ],
    },

    {
      id: "laundry-booking-system",
      image: "/capstone/2.png",
      title: "Laundry Booking System with Mobile App",
      type: "Capstone Project",
      outline_color: "outline-cyan-500",
      bg_color: "bg-cyan-500 hover:bg-cyan-500",
      project_overview:
        "The Laundry Booking System with Mobile App is a convenient and user-friendly application that allows users to schedule and manage laundry services anytime, anywhere using their smartphones. It enables users to easily check available time slots, view pricing, and track the status of their laundry. This system makes the laundry process faster, simpler, and hassle-free for both customers and service providers.",
      technologies: [
        {
          tech: "VUE",
          color: "bg-green-600",
          text: "text-white",
          logo: <SiVuedotjs size={20} />,
        },
        {
          tech: "LARAVEL",
          color: "bg-orange-500",
          text: "text-white",
          logo: <FaLaravel size={20} />,
        },
        {
          tech: "MYSQL",
          color: "bg-blue-900",
          text: "text-white",
          logo: <SiMysql size={20} />,
        },
        {
          tech: "BOOTSTRAP THEME",
          color: "bg-violet-800",
          text: "text-white",
          logo: <BsFillBootstrapFill size={20} />,
        },
        {
          tech: "JWT AUTH",
          color: "bg-black",
          text: "text-white",
          logo: <SiAdguard size={20} />,
        },
        {
          tech: "IONIC FRAMEWORK - VUE",
          color: "bg-blue-500",
          text: "text-white",
          logo: <SiIonic size={20} />,
        },
      ],
    },
    {
      id: "home-services-system",
      image: "/capstone/1.png",
      title: "Home Services Online Portal System",
      type: "Capstone Project",
      outline_color: "outline-emerald-500",
      bg_color: "bg-emerald-500 hover:bg-emerald-500",
      project_overview:
        "The Home Services Online Portal System is a system that helps people book and manage different home services such as cleaning, plumbing, electrical work, and repairs from anywhere. It allows users to see which service providers are available, check their schedules, compare prices, and track the progress of their requested services. This system makes getting home tasks done much faster, easier, and more organized, while also helping service providers manage their work and serve more customers efficiently.",
      technologies: [
        {
          tech: "LARAVEL",
          color: "bg-orange-500",
          text: "text-white",
          logo: <FaLaravel size={20} />,
        },
        {
          tech: "MYSQL",
          color: "bg-blue-900",
          text: "text-white",
          logo: <SiMysql size={20} />,
        },
        {
          tech: "BOOTSTRAP THEME",
          color: "bg-violet-800",
          text: "text-white",
          logo: <BsFillBootstrapFill size={20} />,
        },
      ],
    },
  ];
  return projects;
};

export default useProjectDetails;
