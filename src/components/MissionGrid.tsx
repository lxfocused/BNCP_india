import React from "react";
import { Language, Section } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { Shield, Target, Award, Image, UserPlus, HelpCircle, ArrowUpRight } from "lucide-react";

interface MissionGridProps {
  currentLanguage: Language;
  setActiveSection: (sec: Section) => void;
}

export const MissionGrid: React.FC<MissionGridProps> = ({ currentLanguage, setActiveSection }) => {
  const handleCardClick = (target: Section) => {
    playSynthesizedClick();
    setActiveSection(target);
    // Smooth scroll to top of viewport
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bentoItems = [
    {
      id: "pillars",
      target: "about" as Section,
      icon: Shield,
      titleEn: "About BNCP & Our 4 Pillars",
      titleHi: "पार्टी परिचय एवं हमारे ४ मुख्य स्तंभ",
      descEn: "Explore our constitutional foundation: Eco-Nationalism, Character classroom, Zero-Interest MSME seed capital, and mid-ledger audit governance.",
      descHi: "हमारे चार मजबूत सिद्धांतों को समझें: पर्यावरण-राष्ट्रवाद, मूल्य-आधारित आधुनिक शिक्षा, आत्मनिर्भर युवा, और बिचौलिया-मुक्त स्वराज शासन।",
      gridSpan: "lg:col-span-8",
      accent: "border-[#FF9933]/30 hover:border-[#FF9933] hover:shadow-[#FF9933]/10"
    },
    {
      id: "vision",
      target: "vision" as Section,
      icon: Target,
      titleEn: "Our Vision & Swa-Raj Map",
      titleHi: "हमारा विज़न और स्वराज संकल्प",
      descEn: "A visionary blueprint for direct decentralization, transparent municipal wallets, and grievance resolution.",
      descHi: "नगरपालिकाओं के विकेंद्रीकृत बहीखाते, पारदर्शिता और जनता के हाथ में सीधे बजटीय निर्णय लेने के अधिकार का हमारा पूरा खाका।",
      gridSpan: "lg:col-span-4",
      accent: "border-[#FFCC33]/30 hover:border-[#FFCC33] hover:shadow-[#FFCC33]/10"
    },
    {
      id: "founder",
      target: "founder" as Section,
      icon: Award,
      titleEn: "Founder & Sacred History",
      titleHi: "संस्थापक एवं पावन इतिहास",
      descEn: "Deep dive into the honest lineage and wisdom of Shraddhey Ramdas Rastogi Ji with his guidelines for social purity.",
      descHi: "श्रद्धेय रामदास रस्तोगी जी के जीवन दर्शन, उच्च आदर्शों और भारतीय नवयुवक चेतना पार्टी की स्थापना की प्रेरक ऐतिहासिक यात्रा।",
      gridSpan: "lg:col-span-4",
      accent: "border-blue-500/20 hover:border-blue-500 hover:shadow-blue-500/10"
    },
    {
      id: "media",
      target: "media" as Section,
      icon: Image,
      titleEn: "Archives & Media Gallery",
      titleHi: "दस्तावेज़ एवं मीडिया दीर्घा",
      descEn: "A complete responsive masonry of high-contrast public pictures, press briefings, and real-time localized news.",
      descHi: "पार्टी की प्रमुख रैलियों, जनसंपर्क अभियानों, प्रेस विज्ञप्तियों और जन चौपालों की सजीव तस्वीरें और ताजा समाचार संकलन।",
      gridSpan: "lg:col-span-4",
      accent: "border-purple-500/20 hover:border-purple-500 hover:shadow-purple-500/10"
    },
    {
      id: "join",
      target: "join" as Section,
      icon: UserPlus,
      titleEn: "Register Online Membership",
      titleHi: "ऑनलाइन सदस्यता पंजीकरण",
      descEn: "Apply for free membership, validate with geography chains and generate your print-ready dual-language ID card instantly.",
      descHi: "भारतीय नागरिकता का सम्मान करते हुए निशुल्क सदस्य बनें। फार्म भरकर तुरंत अपना प्रिंट-योग्य स्वर्ण मय आईडी कार्ड प्राप्त करें।",
      gridSpan: "lg:col-span-4",
      accent: "border-[#FFCC33]/40 hover:border-[#FFCC33] hover:shadow-[#FFCC33]/20 bg-gradient-to-br from-[#0c234a] to-[#01143a]"
    },
    {
      id: "contact",
      target: "contact" as Section,
      icon: HelpCircle,
      titleEn: "Central Helpdesk & Citizens Forum",
      titleHi: "केंद्रीय हेल्पडेस्क व जन शिकायत पोर्टल",
      descEn: "Report environmental dumpings, school kit shortages, and track ticket status under our swift dispatch policies.",
      descHi: "नदी प्रदूषण, स्कूल सुविधाओं की कमी या भ्रष्टाचार की सीधी शिकायत दर्ज करें और २४ घंटे में की गई त्वरित कार्रवाई की ट्रैकिंग देखें।",
      gridSpan: "lg:col-span-12",
      accent: "border-emerald-500/20 hover:border-emerald-500 hover:shadow-emerald-500/10"
    }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="bento-directory-hub">
      <div className="text-center mb-12">
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
          {currentLanguage === "hi" ? "हमारा राष्ट्रीय संकल्प" : "Our National Resolve"}
        </h2>
        <div className="h-[2px] w-16 bg-[#FF9933] mx-auto mt-3 mb-4" />
        <p className="font-sans text-gray-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {currentLanguage === "hi" 
            ? "हमारे अभियान के सभी छह अंगों की जानकारी प्राप्त करें और भारतीय स्वराज के संकल्प को साकार करें।"
            : "Direct access to the six core divisions of our national movement. Navigate and get involved immediately."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {bentoItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.target)}
              className={`cursor-pointer group relative overflow-hidden rounded-sm border bg-[#001540] border-white/10 p-6 md:p-8 hover:bg-[#001c54] transition-all duration-300 transform hover:scale-[1.01] hover:shadow-xl flex flex-col justify-between ${item.gridSpan}`}
              id={`bento-card-${item.id}`}
              style={{
                borderColor: item.id === "join" ? "rgba(255, 153, 51, 0.4)" : "rgba(255, 204, 51, 0.15)"
              }}
            >
              {/* Geometric corner decorative accents for balanced framing */}
              <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#FFCC33]/40 group-hover:bg-[#FFCC33]" />
              <div className="absolute top-0 left-0 h-2 w-[1px] bg-[#FFCC33]/40 group-hover:bg-[#FFCC33]" />

              <div className="space-y-4">
                <div className="inline-flex p-2.5 rounded-sm bg-white/5 border border-white/10 text-[#FFCC33] group-hover:text-[#FF9933] transition-colors">
                  <IconComponent className="h-5 w-5" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white flex items-center group-hover:text-[#FFCC33] transition-colors uppercase tracking-tight">
                    {currentLanguage === "hi" ? item.titleHi : item.titleEn}
                    <ArrowUpRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF9933]" />
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed">
                    {currentLanguage === "hi" ? item.descHi : item.descEn}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-500 group-hover:text-[#FFCC33] transition-colors">
                <span className="uppercase tracking-widest">{currentLanguage === "hi" ? "दस्तावेज़ प्रवेश" : "VIEW DETAILS"}</span>
                <span className="tracking-[0.2em] uppercase font-semibold">BNCP-{item.id.toUpperCase()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
