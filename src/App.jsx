import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

import Footer from "./components/main/Footer.jsx";
import NavBar from "./components/main/NavBar.jsx";
import SideBar from "./components/main/SideBar.jsx";
import IntroPage from "./components/about/seaCucumber/IntroPage.jsx";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0A2365",
            color: "#fff",
          },
        }}
      />
      <NavBar onMenuClick={() => setIsOpen(true)} />
      <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/intro-seaCucumber" element={<IntroPage />} />
        </Routes>
      </main>

      <ScrollToTopButton />
      <Footer />

    </div>
  );
};

export default App;