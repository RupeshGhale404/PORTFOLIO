import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './sections/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;