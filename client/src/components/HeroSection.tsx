import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import homeBgPath from "@assets/Home Page Background_1752448820533.jpg";

const HeroSection = () => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${homeBgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950/20 via-mystical-900/40 to-cosmic-950/60"></div>
      {/* Stars overlay */}
      <div className="absolute inset-0 opacity-30">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-cosmic-100 rounded-full animate-pulse-slow"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-gold-400 text-sm sm:text-base font-medium tracking-widest uppercase mb-4 font-cinzel">
            ORGANIC QUANTUM HEALING SESSIONS
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-6 leading-tight text-[#feffff]">
            Experience the Power of<br />
            <span className="text-gold-400 drop-shadow-lg">the Tachyon Chamber</span>
          </h1>
          
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-mystical-600 to-mystical-700 hover:from-mystical-500 hover:to-mystical-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Session
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-cosmic-950 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gold-400" />
      </div>
    </section>
  );
};

export default HeroSection;
