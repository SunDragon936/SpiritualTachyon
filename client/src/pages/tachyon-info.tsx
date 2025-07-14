import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import merkabahAngelsPath from "@assets/Merkabah & Angels Large_1752461005341.jpg";
import tachyonDiagramPath from "@assets/tachyon+d_1752461010567.jpg";
import tachyonSwordPath from "@assets/Tachyon Sword_1752461017543.jpg";
import tachyonPersonPath from "@assets/Tachyon Person_1752461021701.jpg";

export default function TachyonInfo() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: `
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.15) 0%, transparent 50%),
        conic-gradient(from 0deg at 50% 50%, #0f0f23 0deg, #1a1a2e 60deg, #16213e 120deg, #0f0f23 180deg, #1a1a2e 240deg, #16213e 300deg, #0f0f23 360deg)
      `
    }}>
      {/* Crystalline overlay effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Geometric crystal patterns */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0">
          <defs>
            <pattern id="crystal-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="url(#crystal-gradient)" strokeWidth="1"/>
              <polygon points="30,30 70,30 70,70 30,70" fill="none" stroke="url(#crystal-gradient)" strokeWidth="0.5"/>
            </pattern>
            <linearGradient id="crystal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5"/>
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#crystal-pattern)"/>
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-950/80 backdrop-blur-sm border-b border-purple-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-gold-400 hover:text-gold-300 hover:bg-cosmic-800/20">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {/* Hero Image */}
            <div className="mb-8 relative">
              <img 
                src={merkabahAngelsPath} 
                alt="Merkabah Angels Sacred Geometry" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-lg"></div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel font-bold text-white mb-4 drop-shadow-lg">
              Tachyon Chamber
            </h1>
            <p className="text-xl text-gold-400 font-cinzel drop-shadow-md">
              Experience the Power of Quantum Healing
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Introduction to Tachyons */}
            <section className="bg-cosmic-900/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/20 shadow-2xl">
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
            <section className="bg-cosmic-900/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/20 shadow-2xl">
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
            <section className="bg-cosmic-900/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/20 shadow-2xl">
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
            <section className="bg-cosmic-900/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/20 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                Benefits of Tachyon Exposure
              </h2>
              <p className="text-white leading-relaxed mb-4">
                Tachyons harmonize imbalanced energy, rejuvenate the body's energy matrix, and assist in balancing:
              </p>
              <ul className="text-white space-y-2 ml-6 mb-6">
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
              <p className="text-white leading-relaxed mb-4">
                Some reported benefits include:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
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
              <p className="text-white leading-relaxed mb-4">
                Many clients also describe feeling deep peace, inner balance, and spiritual clarity after a session—leading some to call tachyons the "happiness particles."
              </p>
              <p className="text-gold-400 font-medium italic">
                It is most important to try this technology with an open mind and let tachyons speak for themselves
              </p>
            </section>

            {/* What to Expect in a Session */}
            <section className="bg-cosmic-900/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/20 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                What to Expect in a Session
              </h2>
              <ul className="text-white space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  Sessions last 30 minutes.
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  You will lie fully clothed in the chamber; light-colored clothing is recommended.
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  You may meditate, rest, or even nap while receiving tachyon energy.
                </li>
                <li className="flex items-start">
                  <span className="text-gold-400 mr-2">•</span>
                  The experience is gentle, non-invasive, and accumulates over multiple sessions.
                </li>
              </ul>
              <p className="text-white leading-relaxed mb-6">
                The Tachyon Chamber interacts with your unique energy matrix, where you are at in the exact now moment of your session, what is priority for you, and what you are willing and able to receive. Your awareness level of what you are receiving will depend on the brain wave state that you are able to get yourself to during your session.
              </p>
              <div className="bg-cosmic-800/20 rounded-lg p-6 border border-purple-400/20">
                <h3 className="text-lg font-cinzel font-bold text-gold-400 mb-4">Initial Recommendations:</h3>
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
            <section className="bg-cosmic-900/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/20 shadow-2xl">
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
            <section className="bg-cosmic-900/20 backdrop-blur-md rounded-lg p-8 border border-purple-500/20 shadow-2xl">
              <h2 className="text-2xl font-cinzel font-bold text-white mb-6 flex items-center">
                <span className="text-gold-400 mr-3">✧</span>
                Why Tachyon Healing?
              </h2>
              <p className="text-white leading-relaxed mb-4">
                Modern life is full of pressures and imbalances. The Tachyon Chamber offers a resonant recalibration—an opportunity to return to your natural state of well-being.
              </p>
              <p className="text-white leading-relaxed mb-4">
                Whether you're overwhelmed, unwell, or spiritually disconnected, this experience helps you:
              </p>
              <div className="flex flex-col lg:flex-row gap-6 items-center mb-8">
                <div className="lg:w-2/3">
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
                <div className="lg:w-1/3">
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