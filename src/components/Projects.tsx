function Projects() {
  return (
      <section id="projects" className="max-w-6xl mx-auto p-8 mt-8 space-y-8">
        {/* Header Section */}
        <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
          <h1 className="text-4xl font-bold mb-4 text-white text-center flex items-center justify-center gap-3">
            <i className="fa-solid fa-folder-open"></i>
            Projects
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed text-center mb-4 max-w-3xl mx-auto">
            Below are some of the projects I've worked on during my education and in my own time. The focus is on structure, problem-solving, and applying modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
              <i className="fa-solid fa-code-branch text-blue-400"></i>
              My first React Project
            </h2>
            <a href="https://zriveros.github.io/reactapp/#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-3 transition-colors">
              <i className="fa-brands fa-github"></i>
              <span>GitHub Repository</span>
            </a>
            <p className="text-gray-300 leading-relaxed">
              First React assignment — simple UI, working logic, lots of learning.
            </p>      
          </div>

          {/* Project 2 */}
          <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
              <i className="fa-solid fa-code-branch text-blue-400"></i>
              Alpha – Project Management Portal
            </h2>
            <a href="https://github.com/ZRiveros/Alpha-ProjectManager#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-3 transition-colors">
              <i className="fa-brands fa-github"></i>
              <span>GitHub Repository</span>
            </a>
            <p className="text-gray-300 leading-relaxed">
              A clean and modern project dashboard built using ASP.NET Core Razor Pages.
            </p>      
          </div>

          {/* Project 3 */}
          <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
              <i className="fa-solid fa-code-branch text-blue-400"></i>
              Umbraco Onatrix – CMS Website
            </h2>
            <a href="https://github.com/ZRiveros/Umbraco-CMS-Onatrix#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-3 transition-colors">
              <i className="fa-brands fa-github"></i>
              <span>GitHub Repository</span>
            </a>
            <p className="text-gray-300 leading-relaxed">
              Clean build static website in Umbraco CMS.
            </p>      
          </div>

          {/* Project 4 */}
          <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold mb-3 text-white flex items-center gap-2">
              <i className="fa-solid fa-code-branch text-blue-400"></i>
              FastAPI Todo Fullstack Application
            </h2>
            <a href="https://github.com/ZRiveros/FastAPI-Todo-Fullstack#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-3 transition-colors">
              <i className="fa-brands fa-github"></i>
              <span>GitHub Repository</span>
            </a>
            <p className="text-gray-300 leading-relaxed">
              A simple full-stack Todo application built with FastAPI, Angular, and MongoDB.
            </p>      
          </div>
        </div>

        {/* More Projects CTA */}
        <div className="rounded-3xl border-2 border-gray-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-8 hover:scale-105 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2 text-white flex items-center justify-center md:justify-start gap-3">
                <i className="fa-solid fa-rocket text-blue-400"></i>
                More Projects on GitHub
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These are just a few highlights. Check out my GitHub profile for more projects!
              </p>
            </div>
            <a 
              href="https://github.com/ZRiveros" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-blue-500/50"
            >
              <i className="fa-brands fa-github text-xl"></i>
              <span>Visit GitHub Profile</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
  );
}

export default Projects;