function Projects() {
  const projects = [
    {
      badge: "⭐ Featured Project",
      highlight: "🚀 Most Advanced Project",
      title: "Scalable Social Media Backend",
      description:
        "A scalable social media backend built with Django REST Framework, featuring JWT authentication, follow system, feed API, likes, comments, real-time chat, notifications, and online/offline user status.",
      tech: ["DRF", "MySQL", "Redis", "WebSockets", "JWT", "Docker"],
      features: [
        "Real-Time Chat",
        "Notifications",
        "Follow System",
        "Feed API",
        "Online/Offline Status",
      ],
      github:
        "https://github.com/deep1996feb/scalable-social-media-backend-project",
      type: "featured",
    },
    {
      badge: "🤖 AI Project",
      highlight: "🤖 Latest AI Project",
      title: "AI Powered Backend System",
      description:
        "A FastAPI based AI content generation backend with Google Gemini AI integration, JWT authentication, Redis caching, prompt history, usage limits, and multiple content generation modes.",
      tech: ["FastAPI", "Gemini AI", "SQLAlchemy", "Redis", "JWT", "MySQL"],
      features: [
        "AI Content Generation",
        "Prompt History",
        "Redis Caching",
        "JWT Auth",
        "Usage Tracking",
      ],
      github: "https://github.com/deep1996feb/ai-content-assistant-api",
      type: "featured",
    },
    {
      badge: "📈 AI Finance Project",
      highlight: "📈 Real-Time Market Analysis",
      title: "AI Stock Analysis Platform",
      description:
        "An AI-powered stock analysis platform that fetches live stock data, calculates SMA/EMA indicators, analyzes market trends, generates Buy/Sell recommendations, and provides AI explanations.",
      tech: ["FastAPI", "Pandas", "Redis", "Gemini AI", "Yahoo Finance"],
      features: [
        "Live Stock Data",
        "SMA/EMA Indicators",
        "Trend Analysis",
        "Buy/Sell Recommendation",
        "AI Explanation",
      ],
      github: "https://github.com/deep1996feb/AI-Stock-Analysis",
      type: "wip",
    },
    {
      badge: "🛒 Company Project",
      highlight: "🔒 Private Repository",
      title: "Consciousroot Marketplace",
      description:
        "An e-commerce marketplace backend with vendor, affiliate, user, and driver roles, product management, commission system, wishlist, cart, and reviews.",
      tech: ["Django", "DRF", "MySQL", "Pandas"],
      features: [
        "Vendor Management",
        "Affiliate System",
        "Commission Flow",
        "Product APIs",
        "Cart & Wishlist",
      ],
      github: null,
      type: "private",
    },
    {
      badge: "🏥 Healthcare Project",
      highlight: "🔒 Private Repository",
      title: "Healium Healthcare Platform",
      description:
        "A healthcare camp management backend covering user registration, medical tests, doctor consultation, prescriptions, medicine distribution, and reports.",
      tech: ["Django", "DRF", "MySQL", "REST APIs"],
      features: [
        "Camp Management",
        "Patient Registration",
        "Doctor Consultation",
        "Prescriptions",
        "Reports",
      ],
      github: null,
      type: "private",
    },
    {
      badge: "🏛️ Government Project",
      highlight: "🔒 Private Repository",
      title: "Anchal Project",
      description:
        "A Bihar government healthcare project focused on pregnancy tracking, ASHA worker workflows, hospital checkups, expected delivery dates, prescriptions, and ABHA integration.",
      tech: ["Django", "DRF", "MySQL", "ABHA API"],
      features: [
        "Pregnancy Tracking",
        "ASHA Worker Flow",
        "Hospital Checkups",
        "ABHA Integration",
        "Health Records",
      ],
      github: null,
      type: "private",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-950 text-white px-6 py-16 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          A selection of backend systems, AI-powered APIs, and real-world
          business applications I have worked on.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group rounded-2xl p-7 transition duration-300 hover:-translate-y-2 ${
                project.type === "featured"
                  ? "bg-gradient-to-br from-cyan-500/10 to-gray-950 border-2 border-cyan-400 shadow-xl shadow-cyan-500/20"
                  : "bg-gray-950/80 border border-gray-700 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20"
              }`}
            >
              <span className="inline-block text-sm mb-3 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.badge}
              </span>

              <div className="mb-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                    project.type === "featured"
                      ? "bg-cyan-400 text-black"
                      : project.type === "wip"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-gray-800 text-gray-400 border border-gray-700"
                  }`}
                >
                  {project.highlight}
                </span>
              </div>

              <h3
                className={`text-2xl font-bold mb-4 transition ${
                  project.type === "featured"
                    ? "text-cyan-400"
                    : "group-hover:text-cyan-400"
                }`}
              >
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-5">
                {project.description}
              </p>

              <div className="mb-5">
                <h4 className="text-sm text-cyan-400 font-semibold mb-3">
                  Key Features
                </h4>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-300 text-sm">
                  {project.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-4 py-2 rounded-full bg-gray-900 text-cyan-400 border border-cyan-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-cyan-500 text-cyan-400 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black hover:scale-105 transition duration-300"
                >
                  🔗 View Code
                </a>
              ) : project.type === "wip" ? (
                <span className="inline-block border border-yellow-500/40 text-yellow-400 px-5 py-2 rounded-lg">
                  🚧 Code Coming Soon
                </span>
              ) : (
                <span className="inline-block border border-gray-700 text-gray-400 px-5 py-2 rounded-lg">
                  🔒 Private / Company Project
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;