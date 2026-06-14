import React from "react";
import { Language, FounderSettings } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { Sparkles, Quote, Star, Award, Shield, Heart, Landmark, CheckCircle } from "lucide-react";

interface FounderSectionProps {
  currentLanguage: Language;
  founderSettings: FounderSettings;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ currentLanguage, founderSettings }) => {
  const handleCardClick = () => {
    playSynthesizedClick();
  };

  const amitJiSettings = {
    nameHi: "अमित जी",
    nameEn: "Amit Ji",
    roleHi: "राष्ट्रीय अध्यक्ष एवं संयोजक • बीएनसीपी",
    roleEn: "National Convener & President • BNCP",
    messageHi: "“हमारा उद्देश्य स्वाभिमान और पारदर्शिता पर आधारित एक ऐसा नागरिक-शासित स्वराज स्थापित करना है, जहां कोई भी बिचौलिया जनता के अधिकार को न छीन सके।”",
    messageEn: "“Our objective is to erect a citizen-led Swa-raj anchored on self-respect and total transparency, where zero middlemen can intercept public welfare.”",
    bioHi: "अमित जी के नेतृत्व में पार्टी देश भर में डिजिटल पारदर्शिता बहीखाता मॉडल और हरित सेना प्रहरियों का गठन कर रही है। उनका दृढ़ विश्वास है कि स्थानीय स्वशासन ही वास्तविक लोकतंत्र का मूल मंत्र है।",
    bioEn: "Under Amit Ji's active supervision, BNCP is building a state-of-the-art municipal ledger network and mobilizing Green Vigilance units to protect civic rights and regional forests."
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" id="founder-biography-section">
      {/* Premium Upgrade Header with elegant accent line and uppercase display typography */}
      <div className="text-center mb-16 space-y-4 animate-fade-in">
        <div className="inline-flex items-center space-x-1.5 border border-[#FFCC33]/30 bg-[#FFCC33]/10 px-3 py-1 rounded-sm text-xs text-[#FFCC33] font-mono tracking-widest uppercase">
          <Sparkles className="h-3 w-3 text-[#FF9933]" />
          <span>{currentLanguage === "hi" ? "प्रेरणा और नेतृत्व" : "Leadership & Inspiration"}</span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
          {currentLanguage === "hi" ? "परिवर्तन की नई दिशा" : "New Direction of Change"}
        </h2>
        <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#FF9933] to-transparent mx-auto mt-4" />
        <p className="font-sans text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          {currentLanguage === "hi"
            ? "हमारे मार्गदर्शक संस्थापक और कर्मठ नेतृत्व के विचारों के समन्वय से बढ़ते स्वराज संकल्प के स्तंभ।"
            : "The dual pillars of our social reform movement: honoring our pioneering founder's ethics alongside dynamic executive leadership."}
        </p>
      </div>

      {/* Two Premium Profile Cards side by side on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Profile Card 1: Shraddhey Ramdas Rastogi Ji (Founder) */}
        <div 
          onClick={handleCardClick}
          className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-[#001540] via-[#000d26]/95 to-[#001c54]/70 hover:border-[#FFCC33]/55 transition-all duration-300 shadow-2xl hover:shadow-2xl hover:shadow-[#FFCC33]/5 transform hover:scale-[1.01]"
          id="profile-card-rastogi"
        >
          {/* Geometric Corner Borders for clean layout */}
          <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#FFCC33]/30 group-hover:bg-[#FFCC33]" />
          <div className="absolute top-0 left-0 h-4 w-[1px] bg-[#FFCC33]/30 group-hover:bg-[#FFCC33]" />
          <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#FFCC33]/30 group-hover:bg-[#FFCC33]" />
          <div className="absolute bottom-0 right-0 h-4 w-[1px] bg-[#FFCC33]/30 group-hover:bg-[#FFCC33]" />

          {/* Golden glow backsplashes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF9933]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF9933]/10 transition-all" />

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
            {/* Soft Portrait Frame */}
            <div className="relative w-full max-w-[160px] sm:max-w-[180px] aspect-[3/4] flex-shrink-0">
              <div className="absolute -inset-1.5 rounded-sm border border-dashed border-[#FFCC33]/20 pointer-events-none" />
              <div className="relative h-full w-full rounded-sm overflow-hidden border border-[#FFCC33]/40 bg-[#000d26]">
                <img
                  src={founderSettings.portraitUrl || "/src/assets/images/RAMDAS.jpg"}
                  alt={currentLanguage === "hi" ? founderSettings.nameHi : founderSettings.nameEn}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Saffron banner overlay on portrait bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/85 to-transparent pt-8 pb-2 px-3 text-center">
                  <span className="font-mono text-[8px] text-[#FFCC33] uppercase tracking-widest font-bold">
                    {currentLanguage === "hi" ? "परम संस्थापक" : "BNCP FOUNDER"}
                  </span>
                  <p className="font-sans text-[9px] text-gray-300">1938 – 2024</p>
                </div>
              </div>
            </div>

            {/* Profile Information & Narrative Message */}
            <div className="flex-grow space-y-4 text-center sm:text-left">
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1 border border-[#FF9933]/20 bg-[#FF9933]/10 px-2 py-0.5 rounded-sm text-[10px] text-[#FF9933] font-mono tracking-widest uppercase">
                  <Star className="h-2.5 w-2.5" />
                  <span>{currentLanguage === "hi" ? "अमर मार्गदर्शक" : "Inspirational Pioneer"}</span>
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight uppercase">
                  {currentLanguage === "hi" ? founderSettings.nameHi : founderSettings.nameEn}
                </h3>
                <p className="font-sans text-[11px] font-bold text-[#FF9933] tracking-widest uppercase">
                  {currentLanguage === "hi" ? founderSettings.roleHi : founderSettings.roleEn}
                </p>
              </div>

              {/* Glassmorphic Inspirational Quote */}
              <div className="relative border-l-2 border-[#FFCC33] bg-[#000d26]/80 p-4 rounded-sm italic">
                <Quote className="absolute -top-3 left-3 h-5 w-5 text-[#FFCC33]/20" />
                <p className="font-serif text-[12px] sm:text-sm text-gray-200 leading-relaxed font-normal relative z-10">
                  {currentLanguage === "hi" ? founderSettings.messageHi : founderSettings.messageEn}
                </p>
              </div>

              <p className="font-sans text-[11px] sm:text-xs text-gray-400 leading-relaxed text-justify sm:text-left">
                {currentLanguage === "hi" 
                  ? "श्रद्धेय रामदास रस्तोगी जी का संपूर्ण जीवन निस्वार्थ देश सेवा, गरीबों की आवाज को बुलंद करने और पर्यावरण सरंक्षण के लिए समर्पित रहा। राजनीतिक शुचिता ही समृद्ध और सुखी समाज की एकमात्र गारंटी है।"
                  : "Dedicated his entire lifespan to direct civic sovereignty, organic eco-preservation and values-first primary school learning uninhibited by corporate lobbying."}
              </p>
            </div>
          </div>
        </div>

        {/* Profile Card 2: Amit Ji (President & Convener) */}
        <div 
          onClick={handleCardClick}
          className="group relative cursor-pointer overflow-hidden rounded-sm border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-[#001540] via-[#000d26]/95 to-[#001c54]/70 hover:border-[#FF9933]/55 transition-all duration-300 shadow-2xl hover:shadow-2xl hover:shadow-[#FF9933]/5 transform hover:scale-[1.01]"
          id="profile-card-amit"
        >
          {/* Geometric Corner Borders for clean layout */}
          <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#FF9933]/30 group-hover:bg-[#FF9933]" />
          <div className="absolute top-0 left-0 h-4 w-[1px] bg-[#FF9933]/30 group-hover:bg-[#FF9933]" />
          <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#FF9933]/30 group-hover:bg-[#FF9933]" />
          <div className="absolute bottom-0 right-0 h-4 w-[1px] bg-[#FF9933]/30 group-hover:bg-[#FF9933]" />

          {/* Amber glow backsplashes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFcc33]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FFcc33]/10 transition-all" />

          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
            {/* Soft Portrait Frame */}
            <div className="relative w-full max-w-[160px] sm:max-w-[180px] aspect-[3/4] flex-shrink-0">
              <div className="absolute -inset-1.5 rounded-sm border border-dashed border-[#FF9933]/20 pointer-events-none" />
              <div className="relative h-full w-full rounded-sm overflow-hidden border border-[#FF9933]/40 bg-[#000d26]">
                <img
                  src="/src/assets/images/AMIT.jpg"
                  alt={currentLanguage === "hi" ? amitJiSettings.nameHi : amitJiSettings.nameEn}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Saffron banner overlay on portrait bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/85 to-transparent pt-8 pb-2 px-3 text-center">
                  <span className="font-mono text-[8px] text-[#FF9933] uppercase tracking-widest font-bold">
                    {currentLanguage === "hi" ? "राष्ट्रीय अध्यक्ष" : "NATIONAL CONVENER"}
                  </span>
                  <p className="font-sans text-[9px] text-gray-300">ESTD. 2026</p>
                </div>
              </div>
            </div>

            {/* Profile Information & Narrative Message */}
            <div className="flex-grow space-y-4 text-center sm:text-left">
              <div className="space-y-1">
                <span className="inline-flex items-center space-x-1 border border-[#FFCC33]/20 bg-[#FFCC33]/10 px-2 py-0.5 rounded-sm text-[10px] text-[#FFCC33] font-mono tracking-widest uppercase">
                  <Heart className="h-2.5 w-2.5" />
                  <span>{currentLanguage === "hi" ? "सक्रिय राष्ट्रीय नेतृत्व" : "Executive Convener"}</span>
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-black">
                  {currentLanguage === "hi" ? amitJiSettings.nameHi : amitJiSettings.nameEn}
                </h3>
                <p className="font-sans text-[11px] font-bold text-[#FFCC33] tracking-widest uppercase">
                  {currentLanguage === "hi" ? amitJiSettings.roleHi : amitJiSettings.roleEn}
                </p>
              </div>

              {/* Glassmorphic Inspirational Quote */}
              <div className="relative border-l-2 border-[#FF9933] bg-[#000d26]/80 p-4 rounded-sm italic">
                <Quote className="absolute -top-3 left-3 h-5 w-5 text-[#FF9933]/20" />
                <p className="font-serif text-[12px] sm:text-sm text-gray-200 leading-relaxed font-normal relative z-10">
                  {currentLanguage === "hi" ? amitJiSettings.messageHi : amitJiSettings.messageEn}
                </p>
              </div>

              <p className="font-sans text-[11px] sm:text-xs text-gray-400 leading-relaxed text-justify sm:text-left">
                {currentLanguage === "hi" ? amitJiSettings.bioHi : amitJiSettings.bioEn}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Trust Seal Footer bar */}
      <div className="max-w-4xl mx-auto mt-16 p-4 rounded-sm border border-white/5 bg-[#001235]/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-500 text-center sm:text-left uppercase">
        <span className="inline-flex items-center text-[#FFCC33]">
          <CheckCircle className="h-3.5 w-3.5 mr-1.5 text-[#FF9933]" />
          {currentLanguage === "hi" ? "अमर सिद्धांतों और नैतिक नेतृत्व का संकल्प" : "Sworn under values of political purity"}
        </span>
        <span className="tracking-[0.15em]">{currentLanguage === "hi" ? "बीएनसीपी केंद्रीय कमान प्रमाणित" : "VERIFIED BY CENTRAL AUDIT COMMITTEES"}</span>
      </div>
    </section>
  );
};
