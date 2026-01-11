import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills/>
      <Project/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;