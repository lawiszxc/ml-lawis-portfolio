import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <hr className="mx-5" />
        <div className="flex flex-col items-center h-30 mt-6">
          <p className="font-light">
            &copy; 2026 Mark Laurence Lawis. All rights reserved.
          </p>

          <div className="flex mt-3 gap-6">
            <a
              href="https://www.instagram.com/mlawiszxc/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100015197490575"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="https://github.com/lawis2229"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
