import { Zap, CheckCircle, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import earthBgPath from "@assets/Earth Perspective Image Background_1752448832103.jpg";

const BenefitsSection = () => {
  const benefits = [
    "Physical Pain",
    "Emotional Trauma",
    "Spiritual Growth",
    "Energetic Balance",
    "Mind-Body Connection",
    "Chakra Alignment",
    "Aura Cleansing",
    "Quantum Healing"
  ];

  const sessions = [
    {
      title: "Single Session",
      description: "Experience the power of quantum healing in a focused 30-minute session.",
      price: "$111",
      icon: Zap
    },
    {
      title: "Package of 3",
      description: "Deepen your transformation with a series of three healing sessions.",
      price: "$222",
      icon: CheckCircle
    },
    {
      title: "Package of 6",
      description: "Deep transformation journey with comprehensive healing sessions. Includes a free cintamani stone.",
      price: "$444",
      icon: Sparkles
    }
  ];

  return (
    <section
      id="benefits"
      className="py-24 relative"
      style={{
        backgroundImage: `url(${earthBgPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950/60 via-mystical-900/50 to-cosmic-950/70"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-[#ffffff]">
        <div className="text-center mb-16">
          <p className="text-gold-400 text-sm font-medium tracking-widest uppercase mb-4 font-cinzel">
            BENEFITS OF THE TACHYON CHAMBER
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-cosmic-50 mb-6">
            Transform Your Being
          </h2>
        </div>
        
        {/* Benefits Grid */}
        <div className="text-center mb-24">
          <div className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-cosmic-50 leading-relaxed space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="text-mystical-300">Physical Pain</span>
              <span className="text-gold-400">/</span>
              <span className="text-mystical-300">Emotional Trauma</span>
              <span className="text-gold-400">/</span>
              <span className="text-mystical-300">Spiritual</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="text-mystical-300">Growth</span>
              <span className="text-gold-400">/</span>
              <span className="text-mystical-300">Energetic Balance</span>
              <span className="text-mystical-300">Mind-Body</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="text-mystical-300">Connection</span>
              <span className="text-gold-400">/</span>
              <span className="text-mystical-300">Chakra Alignment</span>
              <span className="text-gold-400">/</span>
              <span className="text-mystical-300">Aura</span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <span className="text-mystical-300">Cleansing</span>
              <span className="text-gold-400">/</span>
              <span className="text-gold-400">Quantum Healing</span>
            </div>
          </div>
        </div>
        
        {/* Sessions Section */}
        <div className="text-center">
          <p className="font-medium tracking-widest uppercase mb-8 font-cinzel text-[#ffffff] text-[28px]">
            SESSIONS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sessions.map((session, index) => {
              const Icon = session.icon;
              const calendlyLinks = [
                "https://calendly.com/stargatehealing/1-hour-appointment?back=1&month=2025-07",
                "https://calendly.com/stargatehealing/30-min-tachyon-session-1-hour-total-appointme-clone-2?back=1&month=2025-07",
                "https://calendly.com/stargatehealing/package-of-3-30-minute-sessions-74-each-clone-1?back=1&month=2025-07"
              ];
              return (
                <a
                  key={index}
                  href={calendlyLinks[index]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card
                    className="bg-cosmic-900/40 backdrop-blur-sm border border-mystical-800/30 hover:border-gold-400/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-mystical-500 to-mystical-700 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-cinzel font-semibold text-cosmic-50 mb-2">
                          {session.title}
                        </h3>
                        <p className="text-cosmic-200 text-sm mb-4">
                          {session.description}
                        </p>
                      </div>
                      <div className="text-gold-400 font-bold text-lg">
                        {session.price}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
