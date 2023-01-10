import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from './components/qualification/Qualification';

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
      </main>
    </div>
  );
}

export default App;
