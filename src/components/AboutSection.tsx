import React from "react";
import { Language } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { Leaf, GraduationCap, Coins, Milestone, ChevronDown, ChevronUp, Sparkles, CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AboutSectionProps {
  currentLanguage: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLanguage }) => {
  const [expandedPillar, setExpandedPillar] = React.useState<number | null>(0);

  const pillarsData = [
    {
      id: 1,
      icon: Leaf,
      titleHi: "१. पर्यावरण और प्रकृति-केंद्रित राष्ट्र निर्माण (Eco-Nationalism)",
      titleEn: "1. Eco-Nationalism & Ecological Foundation",
      shortHi: "नदियों वनों को संवैधानिक अधिकार तथा स्थानीय 'हरित प्रहरी बल' का गठन।",
      shortEn: "Constitutional rights for rivers & forests; localized youth-led Green Vigilance Forces.",
      visionHi: "हम मानते हैं कि प्रकृति केवल उपभोग की वस्तु नहीं बल्कि हमारी सभ्यता की जननी है। विकास की आधारशिला पर्यावरण की रक्षा होनी चाहिए।",
      visionEn: "We believe that nature is not merely a resource to exploit, but the mother of our civilization. Ecological protection must form the true baseline of any industrial development.",
      commitmentHi: "गंगा, यमुना सहित सभी प्रमुख नदियों, पर्वतों और प्राचीन वनों को कानूनन जीवित विधिक इकाई (Living Legal Entity) का दर्जा दिया जाएगा, जिससे उनकी रक्षा सुनिश्चित की जा सके।",
      commitmentEn: "Granting live legal status (Living Legal Entities) to major sacred rivers, wetlands, mountains, and pristine forests to empower active courts of defense.",
      actionPlanHi: [
        "प्रत्येक नगर और ग्रामीण पंचायत में 'हरित प्रहरी बल' (Green Vigilance Forces) का गठन किया जाएगा।",
        "औद्योगिक कचरे की १००% रीसाइक्लिंग व डंपिंग पर पूर्ण प्रतिबंध लागू करने हेतु कड़े आर्थिक ज़र्माने।",
        "स्थानीय वनस्पतियों का रोपण और भूजल स्तर को सुधारने हेतु तालाबों का जीर्णोद्धार।"
      ],
      actionPlanEn: [
        "Form volunteer-led civic safety divisions: 'Green Vigilance Forces' (हरित-बल) equipped with chemical testing kits in every village/block.",
        "Zero environmental dumping policy supported by instant criminal penalties for non-compliant industrial units.",
        "Compulsory groundwater recharge buffers in all real estate and public infrastructural projects."
      ]
    },
    {
      id: 2,
      icon: GraduationCap,
      titleHi: "२. संस्कार युक्त आधुनिक शिक्षा (Value-Based Modern Education)",
      titleEn: "2. Value-Based Modern Education",
      shortHi: "शुरुआती कक्षाओं से ही एआई, रोबोटिक्स और नैतिक चरित्र निर्माण पर ध्यान।",
      shortEn: "Primary classrooms integrating AI & design curriculum alongside character values.",
      visionHi: "आज की शिक्षा प्रणाली केवल क्लर्क और नौकरी तलाशने वाले तैयार करती है। हम नैतिक मूल्यों से ओत-प्रोत, आत्मनिर्भर और संवेदनशील भारतीय नागरिक बनाना चाहते हैं।",
      visionEn: "Our educational blueprint aims to dismantle obsolete rote-learning regimes and install design-thinking, ethical leadership, and technological fluency.",
      commitmentHi: "सभी प्राथमिक विद्यालयों का आधुनिकीकरण करके उन्हें नैतिक मूल्यों और नैतिक शिक्षा के साथ-साथ विज्ञान और गणित की उन्नत तकनीकों से जोड़ा जाएगा।",
      commitmentEn: "Complete physical and cognitive upgradation of municipal schools with state-funded robotic labs, AI tutors, and rich character coaching.",
      actionPlanHi: [
        "कक्षा ३ से ही प्राथमिक स्तर पर बच्चों को कृत्रिम बुद्धिमत्ता (AI), रोबोटिक्स और मौलिक कोडिंग का ज्ञान।",
        "दैनिक पाठ्यक्रम में पर्यावरण चेतना, नैतिक न्याय, सेवा भाव और योग-अध्यात्म को समान महत्ता।",
        "शिक्षकों का नियमित अत्याधुनिक प्रशिक्षण और जिला स्तरीय शिक्षक प्रोत्साहन पुरस्कार।"
      ],
      actionPlanEn: [
        "Incorporate introductory robotics, artificial intelligence, and physical design thinking right from Grade 3.",
        "Daily curriculum blocks dedicated to ethical responsibility, civil duties, environmental hygiene, and team synergy.",
        "Performance-indexed teacher support grants to bridge the gap between private and village schools."
      ]
    },
    {
      id: 3,
      icon: Coins,
      titleHi: "३. आत्मनिर्भर युवा और आर्थिक संप्रभुता (Youth & Self-Reliance)",
      titleEn: "3. Youth & Self-Reliance",
      shortHi: "शून्य-ब्याज निवेश पूंजी, एमएसएमई प्रोत्साहन तथा जिला उद्योग संवर्धन केंद्र।",
      shortEn: "Zero-interest seed capital, tax-exempt MSMEs, and district incubation hubs.",
      visionHi: "युवा देश की शक्ति हैं। हम उन्हें दूसरों के सामने नौकरी मांगने के बजाय आत्मनिर्भर उद्यमी और स्वाभिमानी नियोजक बनाना चाहते हैं।",
      visionEn: "Our goal is to recompile the Indian youth from frantic job-seekers into courageous job-creators holding digital MSME sovereignty.",
      commitmentHi: "प्रत्येक जिले में उद्यमिता संवर्धन हब खोले जाएंगे जिससे ग्रामीण प्रतिभाओं को प्रत्यक्ष वित्तीय सहायता, ऋण से मुक्ति और बाज़ार संपर्क मिल सके।",
      commitmentEn: "Direct capital access without bureaucratic gridlocks. Establishing local sandbox hubs with zero compliance stress during early launch phases.",
      actionPlanHi: [
        "युवाओं के नए उद्यमों के लिए शून्य प्रतिशत (0% Interest) पर ब्याज-मुक्त प्राथमिक बीज पूंजी कोष।",
        "लघु एवं कुटीर उद्योगों (MSMEs) को शुरूआती ३ वर्षों तक करों से पूर्ण मुक्ति और डिजिटल लाइसेंस व्यवस्था।",
        "ग्राम स्तर पर विशेष शिल्पकार, किसान उत्पाद संगठनों (FPOs) के लिए बाज़ार लिंकेज कनियंत्रक।"
      ],
      actionPlanEn: [
        "Zero-interest collateral-free early launch seed capital funds administered through dynamic state sandboxes.",
        "Complete local tax-exemptions for registered MSMEs for the first 3 years of trading to support regional stability.",
        "Direct export-grade branding assistance for regional agricultural co-ops and indigenous handloom artisans."
      ]
    },
    {
      id: 4,
      icon: Milestone,
      titleHi: "४. पारदर्शी और बिचौलिया-मुक्त शासन (Direct Governance)",
      titleEn: "4. Direct Governance & Middlemen Elimination",
      shortHi: "सार्वजनिक बहीखाता ट्रैकिंग, पूर्ण पारदर्शिता और २४ घंटे में शिकायत समाधान।",
      shortEn: "Decentralized ledger tracking on funds; grievance resolution within 24 hours.",
      visionHi: "करदाताओं का धन जनता का है। बिचौलियों और राजनीतिक भ्रष्ट नेटवर्क को हटाकर हर एक पैसा सीधे गाँव और समाज के हित में लगना चाहिए।",
      visionEn: "Middlemen siphon away public wealth with impunity. Direct digital decentralized ledger tracking returns financial veto power to the community.",
      commitmentHi: "राज्य और केंद्र स्तर के सभी स्थानीय विकास फंड सीधे पंचायतों और नगरपालिका वार्डों को पारदर्शी सार्वजनिक बहीखाते (Public Ledger) द्वारा हस्तांतरित किए जाएंगे।",
      commitmentEn: "Total visual transparency of municipal allocations. Every citizen can track state fund flows directly via the decentralized wallet directory.",
      actionPlanHi: [
        "नगरपालिका और पंचायत विकास कार्यों का पूरा बहीखाता वेबसाइट पर पारदर्शी तरीके से जनता के समक्ष २४/७ खुला रहेगा।",
        "जन शिकायतों को २४ घंटे के भीतर निपटाने के लिए बाध्यकारी नागरिक अधिकार डिजिटल चार्टर।",
        "स्थानीय मुद्दों पर निर्णय लेने के लिए डिजिटल 'जन चौपाल मतदान' को लागू करना।"
      ],
      actionPlanEn: [
        "Deploy a public, auditable live dashboard tracking raw transactions on all public construction and engineering projects.",
        "Legally binding 24-hour response SLA on all health, safety, and pollution-related grievance reports.",
        "Dynamic digital community polling panels for direct localized budget planning votes."
      ]
    }
  ];

  const togglePillar = (id: number) => {
    playSynthesizedClick();
    setExpandedPillar(expandedPillar === id ? null : id);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="about-pillars-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side text intro of Pillars */}
        <div className="lg:col-span-4 space-y-6">
          <div className="inline-flex items-center space-x-1 border border-[#FF9933]/30 bg-[#FF9933]/15 px-3 py-1 rounded-sm text-xs text-[#FF9933] font-mono tracking-widest">
            <Sparkles className="h-3 w-3" />
            <span>{currentLanguage === "hi" ? "हमारे आधारभूत सिद्धांत" : "OUR CONSTITUTIONAL VALUES"}</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-black text-white leading-tight uppercase tracking-tight">
            {currentLanguage === "hi" ? (
              <>
                <span className="text-[#FFCC33]">चार अभेद्य स्तंभ</span>
              </>
            ) : (
              <>
                <span className="text-[#FFCC33]">Four Invincible Pillars</span>
              </>
            )}
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed">
            {currentLanguage === "hi"
              ? "भारतीय नेशनल कॉमनर्स पार्टी (BNCP) पारंपरिक खोखले वादों को छोड़कर, इन चार सुदृढ़ स्तंभों पर देश का कायाकल्प करने के लिए समर्पित है।"
              : "BNCP departs from empty standard slogans. We anchor our campaign on programmatic milestones validated by direct citizen engagement."}
          </p>

          <div className="p-4 rounded-sm border border-[#FFCC33]/20 bg-[#001235] space-y-3 relative">
            <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#FFCC33]" />
            <div className="absolute top-0 left-0 h-2 w-[1px] bg-[#FFCC33]" />
            <h4 className="font-sans text-xs font-bold text-[#FFCC33] uppercase tracking-wider">
              {currentLanguage === "hi" ? "हमारा राजनीतिक संकल्प" : "POLITICAL RESOLVE"}
            </h4>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              {currentLanguage === "hi" 
                ? "हम धर्म या जाति के नाम पर समाज को नहीं बांटते। हमारा लक्ष्य हर भारतीय को गरिमा, स्वाभिमान, और समान आर्थिक विकास का अवसर प्रदान करना है।"
                : "No politics of division or hollow appeasement. Our metrics are clean water, robust green jobs, functional schools, and middleware auditable integrity."}
            </p>
          </div>
        </div>

        {/* Right Side Accordion */}
        <div className="lg:col-span-8 space-y-4" id="pillars-accordion-parent">
          {pillarsData.map((pillar) => {
            const IconComponent = pillar.icon;
            const isExpanded = expandedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                className={`rounded-sm border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-[#001540] border-[#FFCC33] shadow-lg shadow-[#FF9933]/5"
                    : "bg-[#001235] border-white/10 hover:border-[#FF9933]/40"
                }`}
                id={`accordion-pillar-${pillar.id}`}
              >
                {/* Accordion Header row */}
                <button
                  onClick={() => togglePillar(pillar.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2.5 rounded-sm border transition-colors ${
                      isExpanded 
                        ? "bg-[#FF9933] text-black border-transparent" 
                        : "bg-white/5 text-[#FFCC33] border-white/10"
                    }`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-white transition-colors hover:text-[#FFCC33] uppercase tracking-tight">
                        {currentLanguage === "hi" ? pillar.titleHi : pillar.titleEn}
                      </h3>
                      <p className="font-sans text-xs text-gray-400 mt-0.5 line-clamp-1">
                        {currentLanguage === "hi" ? pillar.shortHi : pillar.shortEn}
                      </p>
                    </div>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-[#FFCC33]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 space-y-5 bg-[#000d26]/60">
                        {/* Vision segment */}
                        <div className="space-y-1">
                          <span className="font-mono text-[10px] uppercase font-bold text-[#FF9933] tracking-widest">
                            {currentLanguage === "hi" ? "हमारा विज़न" : "THE VISION"}
                          </span>
                          <p className="font-serif text-sm text-gray-200 leading-relaxed italic">
                            {currentLanguage === "hi" ? pillar.visionHi : pillar.visionEn}
                          </p>
                        </div>

                        {/* Core commitment segment */}
                        <div className="space-y-1">
                          <span className="font-mono text-[10px] uppercase font-bold text-[#FFCC33] tracking-widest">
                            {currentLanguage === "hi" ? "मुख्य प्रतिबद्धता" : "OUR COMMITMENT"}
                          </span>
                          <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {currentLanguage === "hi" ? pillar.commitmentHi : pillar.commitmentEn}
                          </p>
                        </div>

                        {/* Concrete action points list */}
                        <div className="space-y-2">
                          <span className="font-mono text-[10px] uppercase font-bold text-[#FFCC33] tracking-widest block">
                            {currentLanguage === "hi" ? "त्वरित कार्य योजना" : "CONCRETE ACTION PLAN"}
                          </span>
                          <ul className="grid grid-cols-1 gap-2">
                            {(currentLanguage === "hi" ? pillar.actionPlanHi : pillar.actionPlanEn).map((point, index) => (
                              <li key={index} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300">
                                <CheckSquare className="h-4 w-4 mt-0.5 text-[#FF9933] flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
