import {motion} from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar/> <br />
      <Hero/> <br />
      <About/> <br />
      <Skills/> <br />
      <Projects/> <br />
      <Services/> <br/>
      <Contact/> <br />
      <Footer/> <br />

    </div>
  )
}
