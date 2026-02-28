import CalltoAction from "../components/home/CalltoAction.jsx"
import Emblem from "../components/home/Emblem.jsx"
import HeroSection from "../components/home/HeroSection.jsx"
import PreviewSection from "../components/home/PreviewSection.jsx"
import ServicesSection from "../components/home/ServicesSection.jsx"
import WelcomeSection from "../components/home/WelcomeSection.jsx"

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <WelcomeSection/>
      <CalltoAction/>
      <PreviewSection/>
      <ServicesSection/>
      <Emblem/>
    </div>
  )
}

export default Home