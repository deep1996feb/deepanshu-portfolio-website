import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-cyan-400">
            Deepanshu Soni
          </h3>

          <p className="text-gray-400 text-sm">
            Python Backend Developer
          </p>

          <p className="text-gray-500 text-xs mt-1">
            Building Scalable APIs & AI-Powered Solutions
          </p>
        </div>

        {/* Center */}
        <p className="text-gray-400 text-sm text-center">
          © 2026 Deepanshu Soni. Designed & Built with React, Tailwind CSS & Passion 🚀
        </p>

        {/* Right Side */}
        <div className="flex items-center gap-6 text-2xl">

          <a
            href="https://github.com/deep1996feb"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-cyan-400
              hover:scale-125
              hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
              transition
              duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/deepanshu-soni-033b181a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-cyan-400
              hover:scale-125
              hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
              transition
              duration-300
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:soni.deepanshu.cs@gmail.com"
            className="
              text-gray-400
              hover:text-cyan-400
              hover:scale-125
              hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
              transition
              duration-300
            "
          >
            <FaEnvelope />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;