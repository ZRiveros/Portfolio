import HtmlIcon from '../icons/HTML.svg';
import CssIcon from '../icons/CSS.svg';
import JsIcon from '../icons/JavaScript.svg';
import CSharpIcon from '../icons/CSharp.svg';
import ReactIcon from '../icons/React.svg';
import AngularIcon from '../icons/Angular.svg';
import PythonIcon from '../icons/Python.svg';
import MySqlIcon from '../icons/SQL.svg';
import AzureIcon from '../icons/Azure.svg';
import GitIcon from '../icons/Git.svg';
import GitHubIcon from '../icons/GitHub.svg';
import NetCoreIcon from '../icons/NET.svg';
import TailwindIcon from '../icons/Tailwind.svg';
import TypeScriptIcon from '../icons/TypeScript.svg';
import VSCodeIcon from '../icons/VSC.svg';
import VisualStudioIcon from '../icons/VS.svg';
import LinuxIcon from '../icons/Linux.svg';

function Skills() {
    return (
        <section id="skills" className="max-w-6xl mx-auto p-8 mt-8">
          <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6 hover:scale-105 hover:border-white hover:shadow-xl transition-all duration-300">
            <h1 className="text-4xl font-bold mb-4 text-white text-center flex items-center justify-center gap-3">
              <i className="fa-solid fa-book"></i>
              Skills & Technologies
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed text-center mb-8 max-w-3xl mx-auto">
              Throughout my education at EC Utbildning, I have gained a solid foundation in software development, covering both frontend and backend technologies.
            </p>

            {/* Scrollande ikon-banner med SVG logotyper */}
            <div className="overflow-hidden whitespace-nowrap py-6 bg-white/5 rounded-2xl">
              <div className="inline-flex animate-scroll items-center">
                {/* Första uppsättningen */}
                <div className="flex flex-col items-center mx-8">
                    <img src={HtmlIcon} alt="HTML5" className="h-16 w-16" />
                    <span className="text-white text-sm mt-2">HTML5</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={CssIcon} alt="CSS3" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">CSS3</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={JsIcon} alt="JavaScript" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={TypeScriptIcon} alt="TypeScript" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">TypeScript</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={CSharpIcon} alt="C#" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">C#</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={NetCoreIcon} alt=".NET Core" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">.NET Core</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={ReactIcon} alt="React" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">React</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={AngularIcon} alt="Angular" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Angular</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={TailwindIcon} alt="Tailwind CSS" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Tailwind</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={PythonIcon} alt="Python" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={MySqlIcon} alt="MySQL" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">MySQL</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={AzureIcon} alt="Azure" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Azure</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={GitIcon} alt="Git" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={GitHubIcon} alt="GitHub" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">GitHub</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={VSCodeIcon} alt="VS Code" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">VS Code</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={VisualStudioIcon} alt="Visual Studio" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Visual Studio</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={LinuxIcon} alt="Linux" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Linux</span>
                </div>
                
                {/* Duplicera för seamless loop */}
                <div className="flex flex-col items-center mx-8">
                  <img src={HtmlIcon} alt="HTML5" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">HTML5</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={CssIcon} alt="CSS3" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">CSS3</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={JsIcon} alt="JavaScript" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">JavaScript</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={TypeScriptIcon} alt="TypeScript" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">TypeScript</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={CSharpIcon} alt="C#" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">C#</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={NetCoreIcon} alt=".NET Core" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">.NET Core</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={ReactIcon} alt="React" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">React</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={AngularIcon} alt="Angular" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Angular</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={TailwindIcon} alt="Tailwind CSS" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Tailwind</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={PythonIcon} alt="Python" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Python</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={MySqlIcon} alt="MySQL" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">MySQL</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={AzureIcon} alt="Azure" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Azure</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={GitIcon} alt="Git" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Git</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={GitHubIcon} alt="GitHub" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">GitHub</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={VSCodeIcon} alt="VS Code" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">VS Code</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={VisualStudioIcon} alt="Visual Studio" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Visual Studio</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={LinuxIcon} alt="Linux" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Linux</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                  <img src={CssIcon} alt="CSS3" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">CSS3</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Skills;