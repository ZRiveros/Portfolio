import HtmlIcon from '../Icons/HTML.svg';
import CssIcon from '../Icons/CSS.svg';
import JsIcon from '../Icons/JavaScript.svg';
import CSharpIcon from '../Icons/CSharp.svg';
import ReactIcon from '../Icons/React.svg';
import AngularIcon from '../Icons/Angular.svg';
import PythonIcon from '../Icons/Python.svg';
import MySqlIcon from '../Icons/SQL.svg';
import AzureIcon from '../Icons/Azure.svg';
import GitIcon from '../Icons/Git.svg';
import GitHubIcon from '../Icons/GitHub.svg';
import NetCoreIcon from '../Icons/NET.svg';
import TailwindIcon from '../Icons/Tailwind.svg';
import TypeScriptIcon from '../Icons/TypeScript.svg';
import VSCodeIcon from '../Icons/VSC.svg';
import VisualStudioIcon from '../Icons/VS.svg';
import LinuxIcon from '../Icons/Linux.svg';
import GodotIcon from '../Icons/Godot.svg';
import ClaudeIcon from '../Icons/Claude.svg';
import OpenAIIcon from '../Icons/OpenAI.svg';
import MicrosoftIcon from '../Icons/Microsoft.svg';

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

            {/* Scrolling icons banner with SVG logos */}
            <div className="overflow-hidden whitespace-nowrap py-6 bg-white/5 rounded-2xl">
              <div className="inline-flex animate-scroll items-center">
                {/* First set */}
                <div className="flex flex-col items-center mx-8">
                    <img src={HtmlIcon} alt="HTML5" className="h-16 w-16" />
                    <span className="text-white text-sm mt-2">HTML5</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                    <img src={MicrosoftIcon} alt="Microsoft" className="h-16 w-16" />
                    <span className="text-white text-sm mt-2">Microsoft</span>
                </div>
                <div className="flex flex-col items-center mx-8">
                    <img src={OpenAIIcon} alt="OpenAI" className="h-16 w-16" />
                    <span className="text-white text-sm mt-2">OpenAI</span>
                </div>
                  <div className="flex flex-col items-center mx-8">
                    <img src={ClaudeIcon} alt="Claude" className="h-16 w-16" />
                    <span className="text-white text-sm mt-2">Claude</span>
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
                  <img src={GodotIcon} alt="Godot Engine" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Godot</span>
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
                  <img src={GodotIcon} alt="Godot Engine" className="h-16 w-16" />
                  <span className="text-white text-sm mt-2">Godot</span>
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
              </div>
            </div>
          </div>
        </section>
    );
}

export default Skills;