import Me from '../assets/Me.jpg';

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto p-8 mt-8 space-y-8">
      {/* Hero Section */}
      <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-8 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Vänster - Bild i egen box */}
          <div className="flex-shrink-0">
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
              <h2 className="text-2xl lg:text-3xl text-blue-400 mb-4 font-light">
                Junior Web Developer .NET
              </h2>
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
                  Migrating a legacy backend API that controls the production admin application. The project involves restructuring from <span className="text-purple-300 font-semibold">CherryPy</span> to <span className="text-purple-300 font-semibold">FastAPI</span> with proper REST standards. This admin portal manages essential production and support data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Me */}
        <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold mb-4 text-white text-center flex items-center justify-center gap-3">
            <i className="fa-solid fa-user"></i>
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I enjoy building applications with a clear structure, maintainable code, and a strong connection between frontend and backend. I'm particularly interested in how different technologies interact in real-world projects, from APIs and databases to user-friendly interfaces.
          </p>
        </div>

        {/* Education */}
        <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold mb-4 text-white text-center flex items-center justify-center gap-3">
            <i className="fa-solid fa-graduation-cap"></i>
            Education
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am currently studying Web development.NET with a focus on full-stack applications and modern web technologies. My background includes .NET development, frontend frameworks such as Angular and React, and working with both relational and SQL databases.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            I'm driven by learning, problem-solving, and continuously improving my technical skills through hands-on projects and real-world development experience.
          </p>
        </div>

        {/* Background */}
        <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold mb-4 text-white text-center flex items-center justify-center gap-3">
            <i className="fa-solid fa-briefcase"></i>
            Background
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Before transitioning into web development, I worked for several years in the restaurant industry as a chef, as well as within warehouse and industrial environments. This background has strengthened my ability to work structured, solution-oriented, and efficiently in fast-paced settings — skills I bring with me into my work as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;