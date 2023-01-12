import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from './components/qualification/Qualification';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="App">
        <ParticlesBackground/>
      <Header />
      <main className="main">
        <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
          <Contact />
      </main>
          <Footer />
          <ScrollUp />
    </div>
  );
}

export default App;
