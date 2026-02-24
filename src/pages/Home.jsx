import CalltoAction from "../components/home/CalltoAction.jsx"
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
    </div>
  )
}

export default Home