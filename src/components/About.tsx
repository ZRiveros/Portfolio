import Me from '../assets/Me.jpg';

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto p-8 mt-8 space-y-8">
      {/* Hero Section */}
      <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-8 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
          {/* Vänster - Bild i egen box */}
          <div className="flex-shrink-0 flex justify-center w-full lg:w-auto">
            <div className="rounded-2xl border-2 border-gray-600/50 bg-black/20 p-4 backdrop-blur-sm">
              <img 
                src={Me} 
                alt="Zebastian Riveros" 
                className="rounded-xl w-72 h-72 lg:w-96 lg:h-96 object-cover shadow-2xl" 
              />
            </div>
          </div>

          {/* Höger - All information */}
          <div className="flex-grow text-center lg:text-left space-y-6">
            {/* Namn och titel */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-2 text-white">
                Zebastian Riveros
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-400 mb-3 font-light">
                Junior Web Developer .NET
              </h2>
              <div className="flex justify-center lg:justify-start mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold text-green-200 bg-green-500/15 border border-green-400/40">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                  </span>
                  Open to work
                </span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Full-stack developer with a passion for clean architecture and modern web technologies.
              </p>
            </div>

            {/* Separator line */}
            <div className="border-t border-gray-600/50"></div>

            {/* Internship & Thesis info */}
            <div className="space-y-4">
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <h3 className="text-xl lg:text-2xl text-blue-400 mb-2 font-semibold flex items-center gap-2 justify-center lg:justify-start">
                  <i className="fa-solid fa-briefcase"></i>
                  Internship at CTEK
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Maximizing Battery Performance - Focus on DevOps practices, cloud solutions, and continuous integration/deployment (CI/CD) pipelines.
                </p>
              </div>

              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <h3 className="text-xl lg:text-2xl text-purple-400 mb-2 font-semibold flex items-center gap-2 justify-center lg:justify-start">
                  <i className="fa-solid fa-graduation-cap"></i>
                  Thesis Project at CTEK
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  Migrating a legacy backend API that controls the production admin application. The project involved restructuring from <span className="text-purple-300 font-semibold">CherryPy</span> to <span className="text-purple-300 font-semibold">FastAPI</span> with proper REST standards. This admin portal manages essential production and support data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* About Me */}
        <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-3 text-white text-center flex items-center justify-center gap-3">
            <i className="fa-solid fa-user"></i>
            About Me
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            I enjoy building applications with a clear structure, maintainable code, and a strong connection between frontend and backend. I'm particularly interested in how different technologies interact in real-world projects, from APIs and databases to user-friendly interfaces.
          </p>
        </div>

        {/* Education */}
        <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-3 text-white text-center flex items-center justify-center gap-3">
            <i className="fa-solid fa-graduation-cap"></i>
            Education
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            I hold a diploma in Web Development .NET from EC Utbildning, completed in June 2026. The programme centred on full-stack applications and modern web technologies — .NET development, frontend frameworks such as Angular and React, and working with both relational and NoSQL databases.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mt-3">
            Since graduating I've kept building on that foundation, currently working through{' '}
            <a
              href="https://learn.microsoft.com/en-us/training/dotnet/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Microsoft's official .NET learning paths
            </a>{' '}
            alongside my own projects. I'm driven by learning, problem-solving, and continuously improving my technical skills through hands-on development.
          </p>
        </div>

        {/* Background */}
        <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-bold mb-3 text-white text-center flex items-center justify-center gap-3">
            <i className="fa-solid fa-briefcase"></i>
            Background
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            I currently work as a machine operator at Freudenberg Household Materials through Lernia — running and monitoring production equipment with a focus on quality control, troubleshooting, and continuous improvement — while building as a developer alongside it.
          </p>
          <p className="text-base text-gray-300 leading-relaxed mt-3">
            Before moving into web development I spent several years as a chef, and in warehouse and industrial environments. That background taught me to work in a structured, solution-oriented, and efficient way under pressure — something I carry directly into how I approach code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;