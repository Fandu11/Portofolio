import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import AboutSection from './components/sections/AboutSection';
import PassionsSection from './components/sections/PassionsSection';
import ContactSection from './components/sections/ContactSection';
import Background from './components/Background';

function App() {
  const showSpeedInsights =
    import.meta.env.PROD && import.meta.env.VITE_ENABLE_SPEED_INSIGHTS === 'true';

  const handleScroll = () => {
    // Gestion du défilement si nécessaire
    // console.log(window.scrollY);
  };

  return (
    <Background>
      <div className="App" onScroll={handleScroll}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />  
        <ExperienceSection />
        <PassionsSection />
        <ProjectsSection />
        <ContactSection />
        {showSpeedInsights ? <SpeedInsights /> : null}
      </div>
    </Background>
  );
}

export default App;
