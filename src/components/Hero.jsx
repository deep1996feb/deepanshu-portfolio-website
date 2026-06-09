function Hero() {
  const techStack = [
    "Django REST Framework",
    "FastAPI",
    "Redis",
    "Celery",
    "WebSockets",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "GenAI",
  ];

  return (
    <section className="min-h-[85vh] bg-gray-950 text-white flex items-center px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center">
          <img
            src="/profile_pic.jpeg"
            alt="Deepanshu Soni"
            className="
              w-72
              h-72
              md:w-[380px]
              md:h-[380px]
              object-cover
              object-top
              rounded-full
              border-4
              border-cyan-400
              shadow-2xl
              shadow-cyan-500/30
              hover:scale-105
              hover:shadow-cyan-400/50
              transition
              duration-300
            "
          />

          <div className="mt-5 bg-green-500/20 text-white px-4 py-2 rounded-full text-sm border border-green-500/30 hover:scale-105 transition duration-300 cursor-pointer">
            🟢 Available for Work
          </div>

          <div className="grid grid-cols-1 gap-3 mt-5 w-full max-w-xs">
            <div className="bg-gray-900/80 border border-gray-700 rounded-xl py-3 text-center hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 cursor-pointer">
              <p className="text-white font-bold text-lg">💼 2+ Years</p>
              <p className="text-white text-sm">Experience</p>
            </div>

            <div className="bg-gray-900/80 border border-gray-700 rounded-xl py-3 text-center hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 cursor-pointer">
              <p className="text-white font-bold text-lg">🚀 6+ Projects</p>
              <p className="text-white text-sm">Completed</p>
            </div>

            <div className="bg-gray-900/80 border border-gray-700 rounded-xl py-3 text-center hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300 cursor-pointer">
              <p className="text-white font-bold text-lg">⚡ Immediate</p>
              <p className="text-white text-sm">Joiner</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            👋 Welcome To My Portfolio
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-5 leading-tight">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Deepanshu Soni
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">
            Python Backend Developer | FastAPI | Django | AI Integration
          </h2>

          <p className="text-gray-300 text-xl font-light leading-9 tracking-wide max-w-2xl mb-8">
            Transforming ideas into scalable backend systems with Python, Django,
            FastAPI, Redis, MySQL, PostgreSQL and AI technologies while building secure,
            high-performance, and production-ready applications.
         </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-cyan-500/10 text-white rounded-full border border-cyan-500/20 hover:bg-cyan-400 hover:text-black hover:scale-110 transition duration-300 cursor-pointer"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
            href="#projects"
            className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black hover:scale-105 transition duration-300"
            >
            View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black hover:scale-105 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;