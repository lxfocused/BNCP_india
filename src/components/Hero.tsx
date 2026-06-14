import React from "react";
import { Language, Section } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { Award, ArrowRight, CheckCircle2, ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  currentLanguage: Language;
  setActiveSection: (sec: Section) => void;
  partyLogoUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ currentLanguage, setActiveSection, partyLogoUrl }) => {
  const handleCTA = () => {
    playSynthesizedClick();
    setActiveSection("join");
  };

  const handleLearnMore = () => {
    playSynthesizedClick();
    setActiveSection("about");
  };

  // Spark configuration
  const sparks = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${6 + Math.random() * 8}s`,
    size: Math.random() * 4 + 2,
    opacity: 0.3 + Math.random() * 0.5
  }));

  return (
    <section className="relative overflow-hidden bg-[#000d26] py-16 md:py-24 border-b border-[#FF9933]/15">
      {/* Dynamic Keyframes injected style for floating amber sparks */}
      <style>{`
        @keyframes floatGoldSpark {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.6);
            opacity: 0;
          }
          10.1% {
            opacity: var(--spark-opacity, 0.6);
          }
          90% {
            opacity: var(--spark-opacity, 0.6);
          }
          100% {
            transform: translateY(-10vh) translateX(calc(var(--spark-drift, 40px) * 1.5)) scale(1.1);
            opacity: 0;
          }
        }
        .golden-spark {
          animation: floatGoldSpark var(--duration, 8s) linear infinite;
        }
      `}</style>

      {/* Floating Sparkles Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {sparks.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-gradient-to-t from-[#FF9933] to-[#FFCC33] golden-spark"
            style={{
              left: s.left,
              bottom: "-20px",
              width: `${s.size}px`,
              height: `${s.size}px`,
              "--duration": s.animationDuration,
              "--spark-opacity": s.opacity,
              "--spark-drift": `${Math.round(Math.random() * 80 - 40)}px`,
              animationDelay: s.animationDelay,
            } as React.CSSProperties}
          />
        ))}
        {/* Continuous diagonal saffron-gold sweep divider line across major transition zones */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FF9933] to-[#FFCC33] transform rotate-[-0.5deg] scale-105 shadow-md shadow-[#FF9933]/40 z-10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute top-[-30%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-[#FF9933]/40 to-transparent rotate-12 pointer-events-none" />
        
        {/* Subtle geometric glowing background markers representing constellations of citizen focus */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25">
          <div className="absolute top-10 left-1/4 w-1.5 h-1.5 bg-[#FFCC33] rounded-full blur-[1px]"></div>
          <div className="absolute top-40 left-3/4 w-2 h-2 bg-[#FF9933] rounded-full blur-[2px]"></div>
          <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-[#FFCC33] rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#FF9933] rounded-full blur-[4px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Main Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start" id="hero-core-copy">
            
            {/* Tagline Announcement */}
            <div className="inline-flex self-center lg:self-start items-center space-x-2 bg-[#FF9933]/15 border border-[#FFCC33]/30 px-3 py-1.5 rounded-sm text-[11px] font-bold tracking-widest uppercase text-[#FFCC33] transition-all hover:bg-[#FFCC33]/20" id="hero-tagline-bar">
              <Star className="h-3.5 w-3.5 text-[#FFCC33] fill-[#FFCC33]" />
              <span>
                {currentLanguage === "hi" 
                  ? "एक नया राजनीतिक स्वराज विकल्प" 
                  : "A Clean Citizens' Alternative"}
              </span>
            </div>

            {/* Display Typography Title: Redesigned 10-15% smaller with increased line height to completely prevent overlaps */}
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black leading-[1.15] md:leading-[1.2] tracking-tight text-white animate-fade-in uppercase">
              {currentLanguage === "hi" ? (
                <>
                  <span className="text-[#FF9933]">न तुष्टिकरण,</span><br />
                  <span className="text-white">न जातिवाद का जटिल जाल।</span>
                </>
              ) : (
                <>
                  <span className="text-[#FF9933]">No Appeasement,</span><br />
                  <span className="text-white">No Caste Politics.</span>
                </>
              )}
            </h2>

            {/* Slogan styled with high elegance font-serif italic as per the design HTML */}
            <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#FAF6EE] leading-relaxed opacity-90 max-w-2xl">
              {currentLanguage === "hi" 
                ? "“ न तुष्टिकरण, न जातिवाद का जाल; सुरक्षित पर्यावरण, आधुनिक शिक्षा और स्वाभिमान से बदलेगा भारत का हाल। ”"
                : "“ Secured Environment, Modern Education, Zero Middlemen and Self-Respect will Change India. ”"}
            </p>

            <p className="font-sans text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl">
              {currentLanguage === "hi" 
                ? "भारतीय नेशनल कॉमनर्स पार्टी (BNCP) देश में पूर्ण शुचिता, सुदृढ़ पर्यावरणवादी नीतियों, एआई प्रौद्योगिक शिक्षा, और अंतिम व्यक्ति के स्वावलंबन हेतु सदैव संकल्पित है।"
                : "BNCP centralizes state budget transparency, restoring local municipal authority and citizen dignity through state-of-the-art decentralized accounting and nature conservation."}
            </p>

            {/* Flat high contrast geometric columns representing key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 w-full text-left">
              <div className="border-l-2 border-[#FFCC33] pl-4 py-2 bg-gradient-to-r from-[#FFCC33]/5 to-transparent">
                <h4 className="text-[#FFCC33] text-[11px] font-bold uppercase tracking-widest">
                  {currentLanguage === "hi" ? "पर्यावरण-राष्ट्रवाद" : "Eco-Nationalism"}
                </h4>
                <p className="text-[11px] text-white/75 leading-tight mt-1">
                  {currentLanguage === "hi" ? "नदियों व वन संपदा को संवैधानिक दर्जा और ग्रीन फोर्स प्रहरी।" : "Constitutional rights for rivers, ancient woods & active green guards."}
                </p>
              </div>
              <div className="border-l-2 border-[#FFCC33] pl-4 py-2 bg-gradient-to-r from-[#FFCC33]/5 to-transparent">
                <h4 className="text-[#FFCC33] text-[11px] font-bold uppercase tracking-widest">
                  {currentLanguage === "hi" ? "प्रत्यक्ष लोकतंत्र" : "Direct Democracy"}
                </h4>
                <p className="text-[11px] text-white/75 leading-tight mt-1">
                  {currentLanguage === "hi" ? "सहभागी बहीखाता ट्रैकिंग एवं २४ घंटे में त्वरित शिकायत निवारण।" : "Municipal ledgers, public fund oversight and swift helpdesk dispatch."}
                </p>
              </div>
            </div>

            {/* Rectangular flat corporate design buttons with glowing join CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start w-full">
              <button
                onClick={handleCTA}
                className="group flex items-center justify-center gap-4 bg-[#FF9933] text-[#000d26] px-6 py-4 rounded-sm font-black text-xs uppercase tracking-tighter hover:bg-[#FFCC33] transition-all relative shadow-lg shadow-[#FF9933]/15 hover:shadow-[#FF9933]/30 active:scale-95"
                id="hero-cta-button"
              >
                <span>
                  {currentLanguage === "hi" 
                    ? "सदस्यता बहीखाता संख्या बनाएं" 
                    : "Generate Digital Membership Card"}
                </span>
                <span className="bg-[#000d26] text-white w-6 h-6 flex items-center justify-center rounded-full transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={handleLearnMore}
                className="inline-flex items-center justify-center border border-white/20 hover:border-[#FFCC33]/80 bg-[#001540] hover:bg-white/5 text-[#FFCC33] font-sans font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-sm transition-all active:scale-95"
                id="hero-secondary-button"
              >
                <span>{currentLanguage === "hi" ? "४ मुख्य स्तंभों का विवरण" : "Read The 4 Pillars"}</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>

          </div>

          {/* Hero Visual Block */}
          <div className="lg:col-span-5 flex justify-center items-center" id="hero-graphic-block">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-sm border border-white/10 p-4 bg-[#001540] shadow-2xl relative">
              {/* Corner accent decorations for strict geometric theme */}
              <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#FFCC33]" />
              <div className="absolute top-0 left-0 h-3 w-[1px] bg-[#FFCC33]" />
              <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#FFCC33]" />
              <div className="absolute bottom-0 right-0 h-3 w-[1px] bg-[#FFCC33]" />

              <div className="w-full h-full rounded-sm overflow-hidden border border-[#FFCC33]/20 relative bg-[#000d26] flex flex-col justify-between p-6">
                
                {/* Vintage watermarked background text */}
                <div className="absolute inset-0 opacity-5 flex items-center justify-center select-none pointer-events-none">
                  <span className="font-sans text-9xl font-bold tracking-tighter text-[#FFCC33]">BNCP</span>
                </div>

                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF9933] bg-[#FF9933]/15 px-2.5 py-1 rounded border border-[#FF9933]/30">
                    {currentLanguage === "hi" ? "प्रकृति • शिक्षा • स्वावलंबन" : "Ecology • Growth"}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono">ESTD. 2026</span>
                </div>

                {/* Main Logo Container */}
                <div className="my-auto flex flex-col items-center justify-center space-y-4 relative z-10 py-4">
                  <div className="relative h-40 w-40 rounded-sm border-2 border-dashed border-[#FFCC33] p-1.5 shadow-2xl shadow-[#FFCC33]/10 bg-[#000d26]">
                    <img 
                      src={partyLogoUrl} 
                      alt="BNCP Official Crest" 
                      className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-sans text-xl font-bold text-white tracking-tight">
                      {currentLanguage === "hi" ? "सच्ची राष्ट्र सेवा" : "True Citizen Empowerment"}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                      {currentLanguage === "hi" 
                        ? "राष्ट्र के लिए नई विचारधारा, बिचौलियों का अंत और सतत पर्यावरण क्रांति।"
                        : "Grassroots mobilization representing the common people's struggle for dignity."}
                    </p>
                  </div>
                </div>

                {/* Bottom Card indicators */}
                <div className="flex justify-between items-center pt-4 border-t border-white/5 relative z-10 text-[10px] text-gray-400 font-mono">
                  <span>CENTRAL BOARD ADMIN</span>
                  <span className="text-[#FFCC33] tracking-widest">SEC_VERIFIED</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
