import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import merkabahAngelsPath from "@assets/Merkabah & Angels Large_1752461005341.jpg";
import tachyonDiagramPath from "@assets/tachyon+d_1752461010567.jpg";
import tachyonSwordPath from "@assets/Tachyon Sword_1752461017543.jpg";
import tachyonPersonPath from "@assets/Tachyon Person_1752461021701.jpg";
import crystalsPath from "@assets/crystals_1752463023733.jpg";

export default function TachyonInfo() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Background with Crystals */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${crystalsPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.7) contrast(1.1)'
        }}
      />
      {/* Fixed Galactic Crystalline Overlay */}
      <div 
        className="fixed inset-0 z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
            linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)
          `
        }}
      />
      {/* Fixed Geometric crystal patterns */}
      <div className="fixed inset-0 z-20 opacity-15">
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0">
          <defs>
            <pattern id="crystal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="url(#crystal-gradient)" strokeWidth="1"/>
              <polygon points="30,30 70,30 70,70 30,70" fill="none" stroke="url(#crystal-gradient)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="crystal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#crystal-pattern)"/>
        </svg>
      </div>
      {/* Fixed Floating particles */}
      <div className="fixed inset-0 z-30 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.8
            }}
          />
        ))}
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-purple-500/30 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-[#ffffff] hover:text-gold-300 hover:bg-white/10 transition-all duration-300">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>
      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Title and Subtitle */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel font-bold text-white mb-4 drop-shadow-lg">Tachyon Chamber Information</h1>
            <p className="text-xl text-gold-400 font-cinzel drop-shadow-md mb-8">
              Experience the Power of Quantum Healing
            </p>
            
            {/* Hero Image */}
            <div className="mb-8 relative">
              <img 
                src={merkabahAngelsPath} 
                alt="Merkabah Angels Sacred Geometry" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Introduction to Tachyons */}
            <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-400/30 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                Introduction to Tachyons
              </h2>
              <div className="flex flex-col lg:flex-row gap-6 items-center mb-6">
                <div className="lg:w-2/3">
                  <p className="text-white leading-relaxed mb-4">
                    Tachyons are subatomic particles that travel faster than the speed of light. They are particles that infuse physical matter with spiritual light, creating harmony at every level of being – the highest frequency particle that can be paired with matter. They are considered a direct connection to Source and the first particles created when the universe came into existence.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src={tachyonDiagramPath} 
                    alt="Tachyon Energy Properties Diagram" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* What Is a Tachyon Chamber */}
            <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-400/30 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                What Is a Tachyon Chamber?
              </h2>
              <p className="text-white leading-relaxed mb-4">
                A Tachyon Chamber is a precisely attuned organic technology designed to receive tachyon particles from higher dimensions. It uses no power or electricity. This quantum healing technology creates an environment for tachyon exposure as well as easier access to the zero-point field and elevated levels of consciousness. It can be used for healing on any and all levels as well as manifestation.
              </p>
              <p className="text-white leading-relaxed mb-4">
                The Tachyon belt that represents the border between the entropic and syntropic universe is now surrounding our planet. High energy cosmic rays enter this Solar system from interstellar space and carry tachyons with them. Some of these tachyons reach the surface of our planet through a hyperdimensional wormhole that we have created with a quartz oscillator crystal aboard Genesis II spacecraft and these tachyons can be utilized in our Tachyon chamber.
              </p>
              <p className="text-white leading-relaxed mb-4">
                Tachyons have an extraordinary calming and harmonizing effect. They can harmonize completely all energy fields that are the result of gravity, electromagnetism and weak nuclear force. This reflects practically in a multitude of ways. Tachyon energy harmonizes and enlivens the energy matrix which shapes all matter and thus also our mental, emotional, etheric and physical bodies. All this greatly affects our physical health and well-being.
              </p>
              <p className="text-white leading-relaxed">
                The chamber is a relaxing, energetically aligned space where individuals lie down to receive a direct transmission of tachyon energy into their physical and subtle energy bodies. It is private, spacious and comfortable.
              </p>
            </section>

            {/* How Tachyons Work */}
            <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-400/30 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                How Tachyons Work
              </h2>
              <p className="text-white leading-relaxed mb-4">
                Tachyons permanently change the quantum properties of atomic nuclei in matter. While the chemical composition remains the same, these particles decrease the entropy of physical matter—leading to:
              </p>
              <ul className="text-white space-y-2 ml-6 mb-4">
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  Strengthening of the immune system
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  Reversal or slowing of the aging process
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  Harmonization of chaotic electromagnetic fields
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  Structural support for DNA and higher energy bodies
                </li>
              </ul>
              <p className="text-white leading-relaxed">
                Because tachyons cannot harm, they are safe, neutral, and always work toward the highest good of each individual.
              </p>
            </section>

            {/* Benefits of Tachyon Exposure */}
            <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-400/30 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                Benefits of Tachyon Exposure
              </h2>
              <p className="text-white leading-relaxed mb-6">
                Tachyons harmonize imbalanced energy, rejuvenate the body's energy matrix, and assist in balancing:
              </p>
              
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-400/20 mb-6">
                <h3 className="text-lg font-cinzel font-bold mb-4 text-[#ffffff]">Core Balance Areas:</h3>
                <ul className="text-white space-y-2">
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    Physical health and vitality
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    Emotional clarity and peace
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    Mental focus and resilience
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    Spiritual growth and alignment
                  </li>
                </ul>
              </div>

              <p className="text-white leading-relaxed mb-6">
                Some reported benefits include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-400/20">
                  <h3 className="text-lg font-cinzel font-bold mb-4 text-[#ffffff]">Physical Benefits:</h3>
                  <ul className="text-white space-y-2">
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Faster healing after surgery or injury
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Relief from chronic pain, arthritis, and inflammation
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Reduction in allergies, sensitivities, and eczema
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Improved immune response
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      More restorative sleep
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Nervous system regulation and blood pressure balance
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-400/20">
                  <h3 className="text-lg font-cinzel font-bold mb-4 text-[#ffffff]">Mental & Emotional Benefits:</h3>
                  <ul className="text-white space-y-2">
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Emotional healing: trauma, fear, depression, anxiety
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Increased energy, motivation, and mental clarity
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Deeper awareness and improved decision-making
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Release of outdated beliefs and emotional patterns
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Enhanced connection to the higher self
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-white leading-relaxed mb-4">
                Many clients also describe feeling deep peace, inner balance, and spiritual clarity after a session—leading some to call tachyons the "happiness particles."
              </p>
              <p className="font-medium italic text-[#fefeff]">
                It is most important to try this technology with an open mind and let tachyons speak for themselves
              </p>
            </section>

            {/* What to Expect in a Session */}
            <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-400/30 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                What to Expect in a Session
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-400/20">
                  <h3 className="text-lg font-cinzel font-bold mb-4 text-[#ffffff]">Session Details:</h3>
                  <ul className="text-white space-y-2">
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Sessions last 30 minutes.
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      You will lie fully clothed in the chamber; light-colored clothing is recommended.
                    </li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-400/20">
                  <h3 className="text-lg font-cinzel font-bold mb-4 text-[#ffffff]">Experience:</h3>
                  <ul className="text-white space-y-2">
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      You may meditate, rest, or even nap while receiving tachyon energy.
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      The experience is gentle, non-invasive, and accumulates over multiple sessions.
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-white leading-relaxed mb-6">
                The Tachyon Chamber interacts with your unique energy matrix, where you are at in the exact now moment of your session, what is priority for you, and what you are willing and able to receive. Your awareness level of what you are receiving will depend on the brain wave state that you are able to get yourself to during your session.
              </p>
              <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-400/20">
                <h3 className="text-lg font-cinzel font-bold mb-4 text-[#ffffff]">Initial Recommendations:</h3>
                <ul className="text-white space-y-2">
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    Begin with 3–6 sessions to experience cumulative results.
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2">•</span>
                    Weekly or monthly sessions are encouraged for continued balance.
                  </li>
                </ul>
              </div>
            </section>

            {/* Spiritual & Cosmic Context */}
            <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-400/30 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                Spiritual & Cosmic Context
              </h2>
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="lg:w-2/3">
                  <p className="text-white leading-relaxed mb-4">
                    Tachyon energy is used by the Pleiadians and other cosmic civilizations of Light as a source of healing, communication, and propulsion (e.g., hyperdrive energy). These beings are assisting humanity with its spiritual evolution, and a planetary network of Tachyon Chambers is now being constructed to support the shift.
                  </p>
                  <p className="text-white leading-relaxed">
                    The tachyon belt now surrounding Earth marks a transition between an entropic universe and a syntropic (ordered, harmonic) one. Tachyon Chambers help integrate this shift by anchoring high-frequency cosmic light into the body and biosphere.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <img 
                    src={tachyonPersonPath} 
                    alt="Tachyon Energy Human Aura" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Why Tachyon Healing */}
            <section className="bg-black/30 backdrop-blur-md rounded-lg p-8 border border-purple-400/30 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                Why Tachyon Healing?
              </h2>
              <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
                <div className="md:w-2/3 order-2 md:order-1">
                  <p className="text-white leading-relaxed mb-4">
                    Modern life is full of pressures and imbalances. The Tachyon Chamber offers a resonant recalibration—an opportunity to return to your natural state of well-being.
                  </p>
                  <p className="text-white leading-relaxed mb-4">
                    Whether you're overwhelmed, unwell, or spiritually disconnected, this experience helps you:
                  </p>
                  <ul className="text-white space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Clear energetic blockages
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Realign your entire system
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Reconnect with your inner peace and purpose
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">•</span>
                      Unlock your natural self-healing intelligence
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/3 order-1 md:order-2">
                  <img 
                    src={tachyonSwordPath} 
                    alt="Tachyon Sword Sacred Geometry" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  asChild
                >
                  <a href="https://calendly.com/stargatehealing" target="_blank" rel="noopener noreferrer">
                    Book Your Tachyon Session
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}