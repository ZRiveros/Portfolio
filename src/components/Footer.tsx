function Footer() {
  return (
    <footer className="max-w-6xl mx-auto p-8 mt-16 mb-8">
      <div className="rounded-3xl border-2 border-gray-300 bg-black/30 backdrop-blur-sm p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zebastian Riveros. All rights reserved.
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/ZRiveros" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors text-2xl"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/zebastian-riveros-a650b91ab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a 
              href="mailto:Zebastian.Riveros@outlook.com"
              className="text-gray-400 hover:text-blue-400 transition-colors text-2xl"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>

          {/* Right - Made with */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              Built with <span className="text-blue-400">React</span> & <span className="text-blue-400">TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;