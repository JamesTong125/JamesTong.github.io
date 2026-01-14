import { Navbar } from "./sections/Navbar";
import Hero from "./sections/Hero";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { TechStack } from "./sections/TechStack";
import { Footer } from "./sections/Footer";



const App = () => (
  <>
    <Navbar/>
    <Hero />
    <ShowcaseSection/>  
    <ExperienceSection/>
    <TechStack/>
    <Footer/>

    
  </>
);

export default App;