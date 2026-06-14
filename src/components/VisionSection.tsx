import React from "react";
import { Language } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { Network, Database, Scale, Coins, Clock } from "lucide-react";

interface VisionSectionProps {
  currentLanguage: Language;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ currentLanguage }) => {
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const stepsData = [
    {
      id: 0,
      icon: Coins,
      titleHi: "१. पारदर्शी संचय और निधि आवंटन",
      titleEn: "1. Transparent Treasury & Sourcing",
      descHi: "प्रत्येक करदाता का रुपया एक एकीकृत जन-कोष में दर्ज़ होता है। कोई गुप्त आवंटन नहीं, हर राशि का पूर्ण विवरण सार्वजनिक रहता है।",
      descEn: "Tax revenue gets logged into an open public treasury. No black boxes or confidential routing—all allocations are on the community map.",
      metricHi: "१००% वित्तीय लेखा परीक्षा",
      metricEn: "100% Accountable audit"
    },
    {
      id: 1,
      icon: Database,
      titleHi: "२. सार्वजनिक बहीखाता",
      titleEn: "2. Decentralized Ledger Tracking",
      descHi: "स्थानीय विकास कोष सीधे पंचायतों और नगर पालिकाओं में जाता है। हर एक पैसा कहाँ ख़र्च हुआ, इसे कोई भी नागरिक ऑनलाइन ट्रैक कर सकता है।",
      descEn: "Allocations flow directly to regional municipal wallets and village blocks, mapped onto a public decentralized Ledger to end cash-leakages.",
      metricHi: "शून्य नगद भ्रष्टाचार",
      metricEn: "Zero cash leakages"
    },
    {
      id: 2,
      icon: Network,
      titleHi: "३. जन-चौपाल मतदान",
      titleEn: "3. Direct Community Polling",
      descHi: "स्थानीय विकास या निर्माण कार्यों का निर्णय नौकरशाह नहीं, बल्कि स्थानीय जनता मतदान द्वारा खुद करती है।",
      descEn: "Citizens vote directly via secure community polls to prioritize municipal builds, such as classrooms, water recharge basins, or clinical units.",
      metricHi: "जनता का बजट अधिकार",
      metricEn: "Direct Budget Control"
    },
    {
      id: 3,
      icon: Scale,
      titleHi: "४. त्वरित न्याय व जवाबदेही",
      titleEn: "4. Rapid Dispute Resolution SLA",
      descHi: "शिकायतों को २४ घंटे के भीतर हल करने के लिए प्रतिबद्ध। भ्रष्ट अधिकारियों और ठेकेदारों पर तत्काल कानूनी कार्रवाई का चार्टर लागू।",
      descEn: "Enforcing a binding SLA on civic grievances. Delinquent administrators face swift public audits and contractual blacklisting.",
      metricHi: "२४ घंटे आपातकालीन प्रतिक्रिया",
      metricEn: "24-Hour grievance response"
    }
  ];

  const handleStepClick = (idx: number) => {
    playSynthesizedClick();
    setActiveStep(idx);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="vision-swaraj-section">
      <div className="bg-[#001540] border border-white/10 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Ambient subtle light accents */}
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#FFCC33]" />
        <div className="absolute top-0 left-0 h-4 w-[1px] bg-[#FFCC33]" />
        <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#FFCC33]" />
        <div className="absolute bottom-0 right-0 h-4 w-[1px] bg-[#FFCC33]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Vision Left Narrative */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <span className="font-mono text-xs text-[#FF9933] uppercase tracking-widest font-bold">
              {currentLanguage === "hi" ? "स्वराज प्रशासनिक ढांचा" : "OUR FOUNDING CONSTITUTION"}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight animate-fade-in">
              {currentLanguage === "hi" ? (
                <>
                  <span className="text-[#FFCC33]">राष्ट्र निर्माण का संकल्प</span>
                </>
              ) : (
                <>
                  <span className="text-[#FFCC33]">Resolve for Nation Building</span>
                </>
              )}
            </h2>
            <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed">
              {currentLanguage === "hi"
                ? "हमारा विज़न भारत के अंतिम नागरिक को सत्ता का सीधा भागीदार बनाना है। 'ग्राम स्वराज' और 'पारदर्शी बहीखाता' तकनीकों के अनूठे मिश्रण द्वारा, सरकारी फंड का एक-एक पैसा सीधे समाज के विकास में समर्पित होगा।"
                : "Real empowerment occurs when budgetary control is wrested from remote bureaucracy and transferred back to village forums and municipal cells using open, verifiable ledger systems."}
            </p>

            {/* Quick Vision highlights */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center space-x-3 text-[#FFCC33] text-xs">
                <Clock className="h-5 w-5" />
                <span className="font-bold tracking-tight uppercase">
                  {currentLanguage === "hi" ? "त्वरित समाधान: २४ घंटे में निस्तारण" : "24-Hour Mandatory Action"}
                </span>
              </div>
              <p className="font-sans text-xs text-gray-400 font-medium">
                {currentLanguage === "hi"
                  ? "हर नागरिक शिकायत को प्राथमिकता क्रम में डालकर सीधे जिला प्रभारियों को २४ घंटे में समाधान हेतु भेजा जाएगा।"
                  : "All citizen tickets are dynamically routed to our specific Green Forces or District Admin for audit."}
              </p>
            </div>
          </div>

          {/* Interactive Steps Mapping Right */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8" id="interactive-swaraj-steps">
            
            {/* Visual Steps Line indicators */}
            <div className="grid grid-cols-4 gap-2 border-b border-white/10 pb-4">
              {stepsData.map((step) => {
                const isSelected = activeStep === step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepClick(step.id)}
                    className={`pb-2 text-center text-[10px] font-mono uppercase tracking-widest transition-all border-b ${
                      isSelected 
                        ? "text-[#FFCC33] border-[#FFCC33] font-bold" 
                        : "text-gray-500 border-transparent hover:text-white"
                    }`}
                  >
                    STAGE {step.id + 1}
                  </button>
                );
              })}
            </div>

            {/* Animated details card inside step */}
            <div className="bg-[#000d26] border border-white/10 rounded-sm p-6 min-h-[220px] flex flex-col justify-between transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-sm bg-[#FFCC33]/15 text-[#FFCC33] border border-[#FFCC33]/30">
                    {(() => {
                      const StepIcon = stepsData[activeStep].icon;
                      return <StepIcon className="h-6 w-6" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="font-sans text-base sm:text-lg font-bold text-white uppercase tracking-tight">
                      {currentLanguage === "hi" ? stepsData[activeStep].titleHi : stepsData[activeStep].titleEn}
                    </h3>
                    <span className="inline-block mt-1 font-mono text-[9px] text-[#FF9933] bg-[#FF9933]/10 px-2.5 py-0.5 rounded-sm border border-[#FF9933]/20 uppercase tracking-wider">
                      {currentLanguage === "hi" ? stepsData[activeStep].metricHi : stepsData[activeStep].metricEn}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {currentLanguage === "hi" ? stepsData[activeStep].descHi : stepsData[activeStep].descEn}
                </p>
              </div>

              {/* Navigation help */}
              <div className="flex justify-between items-center text-[9px] text-gray-500 font-mono pt-4 border-t border-white/5">
                <span>{currentLanguage === "hi" ? "स्वराज प्रणाली बहीखाता विवरण" : "SWA-RAJ LEDGER VERIFICATION"}</span>
                <span className="text-[#FFCC33] uppercase tracking-wider font-bold">STAGE {activeStep + 1} APPROVED</span>
              </div>
            </div>

            {/* Explanatory Navigation with sharper aesthetic */}
            <div className="flex justify-between items-center bg-[#000d26] border border-white/10 rounded-sm p-4 text-xs font-mono">
              <span className="text-gray-400">
                {currentLanguage === "hi" ? "क्लिक करके चरणों को समझें:" : "Explore phases in order:"}
              </span>
              <div className="flex space-x-2">
                {[0, 1, 2, 3].map((stepId) => (
                  <button
                    key={stepId}
                    onClick={() => handleStepClick(stepId)}
                    className={`h-7 w-7 rounded-sm flex items-center justify-center border font-bold transition-all text-xs ${
                      activeStep === stepId
                        ? "bg-[#FF9933] text-black border-transparent"
                        : "bg-transparent text-gray-400 border-white/10 hover:border-white"
                    }`}
                  >
                    {stepId + 1}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
