import logo from './logo.svg';
import Hero from "./components/Hero.jsx";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    
    <div className="font-poppins bg-slate-900 text-white">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
// This is the main App component that renders the Hero section