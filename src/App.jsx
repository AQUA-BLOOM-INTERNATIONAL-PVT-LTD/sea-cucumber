import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "flowbite-react";

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-900 text-white gap-6 text-center">
      
      <h1 className="text-5xl" data-aos="fade-up">
        Sustainable Sea Cucumber Farming 
      </h1>

      <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
        High export value and eco-friendly aquaculture solution.
      </p>

      <Button color="dark" pill data-aos="fade-up" data-aos-delay="400">
        Learn More
      </Button>

    </div>
  );
};

export default App;
