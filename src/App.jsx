import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from './components/qualification/Qualification';
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

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
          <Testimonials />
          <Contact />
          <Footer />
      </main>
    </div>
  );
}

export default App;
