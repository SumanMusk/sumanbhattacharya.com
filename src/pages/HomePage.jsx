import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import DividerLine from '../components/DividerLine'
import ExperienceSection from '../components/ExperienceSection'
import CertificattionSection from '../components/CertificattionSection'
import ContactMeSection from '../components/ContactMeSection'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <DividerLine />
            <SkillsSection />
            <DividerLine />
            <ProjectsSection />
            <DividerLine />
            <ExperienceSection />
            <DividerLine />
            <CertificattionSection />
            <DividerLine />
            <ContactMeSection />
        </>
    )
}

export default HomePage