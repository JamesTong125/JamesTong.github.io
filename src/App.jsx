import { Navbar } from "./components/Navbar";
import Hero from "./sections/Hero";
import { ShowcaseSection } from "./sections/ShowcaseSection";
import { FeatureCards } from "./sections/FeatureCards";
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
    <FeatureCards/>
    <Footer/>

    
  </>
);

export default App;