function Skills() {
  const skills = [
    { name: "Python", level: "Backend" },
    { name: "Django", level: "Framework" },
    { name: "DRF", level: "REST APIs" },
    { name: "FastAPI", level: "Modern APIs" },

    { name: "MySQL", level: "Database" },
    { name: "PostgreSQL", level: "Database" },
    { name: "Redis", level: "Caching" },
    { name: "JWT", level: "Authentication" },

    { name: "WebSockets", level: "Realtime" },
    { name: "Celery", level: "Background Tasks" },
    { name: "Docker", level: "DevOps" },
    { name: "AWS", level: "Cloud" },

    { name: "Pandas", level: "Data Processing" },
    { name: "NumPy", level: "Numerical Computing" },
    { name: "GenAI", level: "AI Integration" },
    { name: "GitHub", level: "Version Control" },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-950 text-white px-6 py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14 text-lg">
          Technologies I use to build scalable APIs, real-time applications,
          AI-powered solutions, and production-ready backend systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-gray-900/70
                border
                border-gray-700
                rounded-2xl
                p-6
                hover:border-cyan-400
                hover:shadow-lg
                hover:shadow-cyan-500/20
                hover:-translate-y-2
                hover:scale-105
                transition
                duration-300
                cursor-pointer
              "
            >
              <div className="
                w-12
                h-12
                rounded-xl
                bg-cyan-500/10
                text-cyan-400
                flex
                items-center
                justify-center
                text-xl
                font-bold
                mb-5
                group-hover:scale-110
                transition
                duration-300
              ">
                {skill.name.charAt(0)}
              </div>

              <h3 className="
                text-xl
                font-semibold
                mb-2
                group-hover:text-cyan-400
                transition
              ">
                {skill.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {skill.level}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;