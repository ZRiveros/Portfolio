function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 m-4 mx-auto max-w-5xl rounded-full border-2 border-gray-300 bg-black/30 backdrop-blur-sm sticky top-4 z-50">
      {/* ZR Logo till vänster */}
      <div className="flex items-center ml-4 cursor-pointer" onClick={() => scrollToSection('about')}>
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-lg"></div>
          <div className="relative flex items-center justify-center w-full h-full rounded-full border-2 border-white/30 bg-black/40 backdrop-blur-sm">
            <span className="text-xl font-bold text-white font-serif">ZR</span>
          </div>
        </div>
      </div>

      {/* Navigation länkar */}
      <ul className="flex gap-6 list-none items-center">
        <li 
          onClick={() => scrollToSection('about')}
          className="text-white text-xl font-medium cursor-pointer hover:text-blue-400 transition-colors"
        >
          <i className="fa-solid fa-address-card"></i> About me
        </li>
        <li 
          onClick={() => scrollToSection('skills')}
          className="text-white text-xl font-medium cursor-pointer hover:text-blue-400 transition-colors"
        >
          <i className="fa-solid fa-book"></i> Skills
        </li>
        <li 
          onClick={() => scrollToSection('projects')}
          className="text-white text-xl font-medium cursor-pointer hover:text-blue-400 transition-colors"
        >
          <i className="fa-solid fa-briefcase"></i> Projects
        </li>
        
        {/* GitHub länk */}
        <li>
          <a 
            href="https://github.com/ZRiveros" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white text-2xl cursor-pointer hover:text-purple-400 transition-colors"
            title="Visit my GitHub"
          >
            <i className="fa-brands fa-github"></i>Github
          </a>
        </li>
        
        <li 
          onClick={() => scrollToSection('contact')}
          className="text-white text-xl font-medium cursor-pointer hover:text-blue-400 transition-colors"
        >
          <i className="fa-solid fa-envelope"></i> Contact
        </li>
      </ul>

      {/* Tom div för att balansera layouten */}
      <div className="w-12"></div>
    </nav>
  );
}

export default Navbar;