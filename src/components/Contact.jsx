function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white px-6 py-16 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-400 mb-12 text-lg">
          I am currently available for immediate joining and open to Python Backend Developer opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Email */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h3 className="text-cyan-400 text-xl font-semibold mb-3">
              📧 Email
            </h3>

            <div className="flex flex-col gap-2">

              <a
                href="mailto:soni.deepanshu.cs@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                soni.deepanshu.cs@gmail.com
              </a>

              <a
                href="mailto:deepsoni871@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition duration-300"
              >
                deepsoni871@gmail.com
              </a>

            </div>
          </div>

          {/* Phone */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h3 className="text-cyan-400 text-xl font-semibold mb-3">
              📱 Phone
            </h3>

            <a
              href="tel:+91XXXXXXXXXX"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              +91 8595408696
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h3 className="text-cyan-400 text-xl font-semibold mb-3">
              💼 LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/deepanshu-soni-033b181a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition duration-300 underline underline-offset-4"
            >
              linkedin.com/in/deepanshu-soni-033b181a7
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h3 className="text-cyan-400 text-xl font-semibold mb-3">
              💻 GitHub
            </h3>

            <a
              href="https://github.com/deep1996feb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              github.com/deep1996feb
            </a>
          </div>

          {/* Location */}
          <div className="md:col-span-2 bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 transition duration-300">
            <h3 className="text-cyan-400 text-xl font-semibold mb-3">
              📍 Location
            </h3>

            <p className="text-gray-300">
              Ghaziabad, Uttar Pradesh, India
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;