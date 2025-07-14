import quantumNodesBgPath from "@assets/Quantum Nodes_1752458083605.jpg";

const Footer = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Appointments", href: "#appointments" },
    { name: "Tachyon Info", href: "#tachyon-info" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About Mariel", href: "#about-mariel" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer 
      className="relative border-t border-mystical-800/30 py-12"
      style={{
        backgroundImage: `url(${quantumNodesBgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 0%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-cosmic-950/80"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-cinzel font-bold text-yellow-400 mb-4">
            STARGATE HEALING
          </h3>
          <p className="text-yellow-400 mb-8">
            Experience the transformative power of quantum healing technology
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="border-t border-mystical-800/30 pt-8">
            <p className="text-yellow-400 text-sm">
              © 2024 Stargate Healing. All rights reserved. | Tachyon Chamber quantum healing technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
