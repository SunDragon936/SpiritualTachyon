import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function TachyonInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>
      {/* Main Content */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel font-bold text-black mb-4">Tachyon Chamber Information</h1>
            <p className="text-xl text-gray-700 font-cinzel">
              Experience the Power of Quantum Healing
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Introduction to Tachyons */}
            <section className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-cinzel font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">✧</span>
                Introduction to Tachyons
              </h2>
              <p className="text-black leading-relaxed mb-4">
                Tachyons are subatomic particles that travel faster than the speed of light. They are particles that infuse physical matter with spiritual light, creating harmony at every level of being – the highest frequency particle that can be paired with matter. They are considered a direct connection to Source and the first particles created when the universe came into existence.
              </p>
            </section>

            {/* What Is a Tachyon Chamber */}
            <section className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-cinzel font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">✧</span>
                What Is a Tachyon Chamber?
              </h2>
              <p className="text-black leading-relaxed mb-4">
                A Tachyon Chamber is a precisely attuned organic technology designed to receive tachyon particles from higher dimensions. It uses no power or electricity. This quantum healing technology creates an environment for tachyon exposure as well as easier access to the zero-point field and elevated levels of consciousness. It can be used for healing on any and all levels as well as manifestation.
              </p>
              <p className="text-black leading-relaxed mb-4">
                The Tachyon belt that represents the border between the entropic and syntropic universe is now surrounding our planet. High energy cosmic rays enter this Solar system from interstellar space and carry tachyons with them. Some of these tachyons reach the surface of our planet through a hyperdimensional wormhole that we have created with a quartz oscillator crystal aboard Genesis II spacecraft and these tachyons can be utilized in our Tachyon chamber.
              </p>
              <p className="text-black leading-relaxed mb-4">
                Tachyons have an extraordinary calming and harmonizing effect. They can harmonize completely all energy fields that are the result of gravity, electromagnetism and weak nuclear force. This reflects practically in a multitude of ways. Tachyon energy harmonizes and enlivens the energy matrix which shapes all matter and thus also our mental, emotional, etheric and physical bodies. All this greatly affects our physical health and well-being.
              </p>
              <p className="text-black leading-relaxed">
                The chamber is a relaxing, energetically aligned space where individuals lie down to receive a direct transmission of tachyon energy into their physical and subtle energy bodies. It is private, spacious and comfortable.
              </p>
            </section>

            {/* How Tachyons Work */}
            <section className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-cinzel font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">✧</span>
                How Tachyons Work
              </h2>
              <p className="text-black leading-relaxed mb-4">
                Tachyons permanently change the quantum properties of atomic nuclei in matter. While the chemical composition remains the same, these particles decrease the entropy of physical matter—leading to:
              </p>
              <ul className="text-black space-y-2 ml-6 mb-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Strengthening of the immune system
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Reversal or slowing of the aging process
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Harmonization of chaotic electromagnetic fields
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Structural support for DNA and higher energy bodies
                </li>
              </ul>
              <p className="text-black leading-relaxed">
                Because tachyons cannot harm, they are safe, neutral, and always work toward the highest good of each individual.
              </p>
            </section>

            {/* Benefits of Tachyon Energy */}
            <section className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-cinzel font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">✧</span>
                Benefits of Tachyon Energy
              </h2>
              <p className="text-black leading-relaxed mb-4">
                Tachyons harmonize imbalanced energy, rejuvenate the body's energy matrix, and assist in balancing:
              </p>
              <ul className="text-black space-y-2 ml-6 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Physical health and vitality
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Emotional clarity and peace
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Mental focus and resilience
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Spiritual growth and alignment
                </li>
              </ul>
              <p className="text-black leading-relaxed mb-4">
                Some reported benefits include:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <ul className="text-black space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Faster healing after surgery or injury
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Relief from chronic pain, arthritis, and inflammation
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Reduction in allergies, sensitivities, and eczema
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Improved immune response
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    More restorative sleep
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Nervous system regulation and blood pressure balance
                  </li>
                </ul>
                <ul className="text-black space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Emotional healing: trauma, fear, depression, anxiety
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Increased energy, motivation, and mental clarity
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Deeper awareness and improved decision-making
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Release of outdated beliefs and emotional patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Enhanced connection to the higher self
                  </li>
                </ul>
              </div>
              <p className="text-black leading-relaxed mb-4">
                Many clients also describe feeling deep peace, inner balance, and spiritual clarity after a session—leading some to call tachyons the "happiness particles."
              </p>
              <p className="text-gray-700 font-medium italic">
                It is most important to try this technology with an open mind and let tachyons speak for themselves
              </p>
            </section>

            {/* What to Expect in a Session */}
            <section className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-cinzel font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">✧</span>
                What to Expect in a Session
              </h2>
              <ul className="text-black space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Sessions last 30 minutes.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  You will lie fully clothed in the chamber; light-colored clothing is recommended.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  You may meditate, rest, or even nap while receiving tachyon energy.
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  The experience is gentle, non-invasive, and accumulates over multiple sessions.
                </li>
              </ul>
              <p className="text-black leading-relaxed mb-6">
                The Tachyon Chamber interacts with your unique energy matrix, where you are at in the exact now moment of your session, what is priority for you, and what you are willing and able to receive. Your awareness level of what you are receiving will depend on the brain wave state that you are able to get yourself to during your session.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-cinzel font-bold text-gray-800 mb-4">Initial Recommendations:</h3>
                <ul className="text-black space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Begin with 3–6 sessions to experience cumulative results.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Weekly or monthly sessions are encouraged for continued balance.
                  </li>
                </ul>
              </div>
            </section>

            {/* Spiritual & Cosmic Context */}
            <section className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-cinzel font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">✧</span>
                Spiritual & Cosmic Context
              </h2>
              <p className="text-black leading-relaxed mb-4">
                Tachyon energy is used by the Pleiadians and other cosmic civilizations of Light as a source of healing, communication, and propulsion (e.g., hyperdrive energy). These beings are assisting humanity with its spiritual evolution, and a planetary network of Tachyon Chambers is now being constructed to support the shift.
              </p>
              <p className="text-black leading-relaxed">
                The tachyon belt now surrounding Earth marks a transition between an entropic universe and a syntropic (ordered, harmonic) one. Tachyon Chambers help integrate this shift by anchoring high-frequency cosmic light into the body and biosphere.
              </p>
            </section>

            {/* Why Tachyon Healing */}
            <section className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-cinzel font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-purple-600 mr-3">✧</span>
                Why Tachyon Healing?
              </h2>
              <p className="text-black leading-relaxed mb-4">
                Modern life is full of pressures and imbalances. The Tachyon Chamber offers a resonant recalibration—an opportunity to return to your natural state of well-being.
              </p>
              <p className="text-black leading-relaxed mb-4">
                Whether you're overwhelmed, unwell, or spiritually disconnected, this experience helps you:
              </p>
              <ul className="text-black space-y-2 ml-6 mb-8">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Clear energetic blockages
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Realign your entire system
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Reconnect with your inner peace and purpose
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  Unlock your natural self-healing intelligence
                </li>
              </ul>
              
              {/* Call to Action */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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