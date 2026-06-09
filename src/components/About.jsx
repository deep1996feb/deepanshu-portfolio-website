function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white px-6 py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-10 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div className="bg-gray-950/70 border border-cyan-500/20 rounded-2xl p-8 shadow-lg shadow-cyan-500/10 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-cyan-500/20 transition duration-300">

            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
              Python Backend Developer
            </h3>

            <p className="text-gray-300 text-lg leading-8 tracking-wide mb-4">
              Backend developer with 2+ years of industry experience building scalable APIs,
              real-time applications, and production-ready backend systems using Django,
              Django REST Framework, FastAPI, Redis, WebSockets, and SQL databases.
            </p>

            <p className="text-gray-300 text-lg leading-8 tracking-wide">
              Experienced in healthcare, e-commerce, social media, and AI-powered
              applications with a strong focus on performance optimization,
              scalability, security, and clean architecture.
            </p>

          </div>

          {/* Right Side Stats */}
          <div className="grid grid-cols-2 gap-4">

            {[
              { title: "2+", text: "Industry Experience" },
              { title: "6+", text: "Major Projects" },
              { title: "DRF", text: "API Development" },
              { title: "FastAPI", text: "Modern Backend" },
            ].map((item) => (
              <div
                key={item.text}
                className="
                  bg-gray-950
                  rounded-xl
                  p-5
                  border
                  border-gray-700
                  hover:border-cyan-400
                  hover:-translate-y-1
                  hover:scale-105
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                  transition
                  duration-300
                  cursor-pointer
                "
              >
                <h4 className="text-cyan-400 text-2xl font-bold">
                  {item.title}
                </h4>

                <p className="text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;