import React from "react";
import { AppState, Language, Section, Member, Grievance } from "./types";
import { INITIAL_APP_STATE } from "./utils/defaults";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MissionGrid } from "./components/MissionGrid";
import { AboutSection } from "./components/AboutSection";
import { VisionSection } from "./components/VisionSection";
import { FounderSection } from "./components/FounderSection";
import { MediaSection } from "./components/MediaSection";
import { JoinSection } from "./components/JoinSection";
import { GrievanceSection } from "./components/GrievanceSection";
import { playSynthesizedClick, initGlobalSoundSystem } from "./utils/audio";
import { Landmark, ArrowUp, Send, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Image Assets paths computed from workspace generator
const PARTY_LOGO_PATH = "./assets/logo.png";
const FOUNDER_PORTRAIT_PATH = "./assets/ramdas.jpg";

export default function App() {
  const [language, setLanguage] = React.useState<Language>("hi"); // Default to Hindi as per specification guidelines

  // Update browser tab title and SEO metadata dynamically
  React.useEffect(() => {
    document.title = "BNCP India";
    initGlobalSoundSystem();
  }, []);
  const [activeSection, setActiveSection] = React.useState<Section>("home");
  const [appState, setAppState] = React.useState<AppState>(INITIAL_APP_STATE);

  // Load and initialize persistent LocalStorage state
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem("bncp_portal_state_2026");
      if (stored) {
        const parsed = JSON.parse(stored) as AppState;
        
        // Ensure generated paths are bound for localized consistency
        if (parsed.founder) {
          parsed.founder.portraitUrl = FOUNDER_PORTRAIT_PATH;
        }

        // Live analytics increment visitor sessions on reload
        parsed.analytics.sessionsCount = (parsed.analytics.sessionsCount || 0) + 1;
        setAppState(parsed);
        localStorage.setItem("bncp_portal_state_2026", JSON.stringify(parsed));
      } else {
        // First load defaults with generated asset triggers
        const customState = { ...INITIAL_APP_STATE };
        customState.founder.portraitUrl = FOUNDER_PORTRAIT_PATH;
        customState.analytics.sessionsCount += 1;
        
        setAppState(customState);
        localStorage.setItem("bncp_portal_state_2026", JSON.stringify(customState));
      }
    } catch (e) {
      console.warn("localStorage persistence failed:", e);
    }
  }, []);

  // Sync state mutations to LocalStorage
  const handleUpdateAppState = (newState: AppState) => {
    setAppState(newState);
    try {
      localStorage.setItem("bncp_portal_state_2026", JSON.stringify(newState));
    } catch (e) {
      console.warn("Failed to sync localStorage state:", e);
    }
  };

  // Registry addition handlers triggered from client forms
  const handleAddNewMember = (newMember: Member) => {
    const updatedMembers = [newMember, ...appState.members];
    handleUpdateAppState({
      ...appState,
      members: updatedMembers,
      analytics: {
        ...appState.analytics,
        ledgersGenerated: appState.analytics.ledgersGenerated + 1,
        actionsTriggered: appState.analytics.actionsTriggered + 1
      }
    });
  };

  const handleAddNewGrievance = (newGrievance: Grievance) => {
    const updatedGrievances = [newGrievance, ...appState.grievances];
    handleUpdateAppState({
      ...appState,
      grievances: updatedGrievances,
      analytics: {
        ...appState.analytics,
        actionsTriggered: appState.analytics.actionsTriggered + 1
      }
    });
  };

  const scrollToTop = () => {
    playSynthesizedClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToJoin = () => {
    playSynthesizedClick();
    setActiveSection("join");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div lang={language} className="min-h-screen bg-[#000d26] text-white flex flex-col justify-between selection:bg-[#FF9933] selection:text-black">
      
      {/* Prime Header & Navigation Panel */}
      <Navbar
        currentLanguage={language}
        setLanguage={setLanguage}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        partyLogoUrl={PARTY_LOGO_PATH}
      />

      {/* Main Dynamic Viewport Frame */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {activeSection === "home" && (
              <div id="home-view-port">
                {/* Hero Slider banner */}
                <Hero 
                  currentLanguage={language} 
                  setActiveSection={setActiveSection}
                  partyLogoUrl={PARTY_LOGO_PATH}
                />
                
                {/* 6-option Bento Mission grid */}
                <MissionGrid 
                  currentLanguage={language} 
                  setActiveSection={setActiveSection}
                />

                {/* Slogan strip */}
                <div className="w-full bg-gradient-to-r from-[#01143a] via-[#09204c] to-[#01143a] border-y border-[#FFCC33]/10 py-10 px-4 text-center mt-6">
                  <p className="font-sans text-lg sm:text-2xl font-bold tracking-tight text-[#FFCC33] max-w-4xl mx-auto">
                    {language === "hi"
                      ? "“ न तुष्टिकरण, न जातिवाद का जाल; सुरक्षित पर्यावरण, आधुनिक शिक्षा और स्वाभिमान से बदलेगा भारत का हाल। ”"
                      : "“ No Appeasement, No Caste Politics; Secured Environment, Modern Education and Self-Respect will Change India. ”"}
                  </p>
                  <p className="font-mono text-xs text-gray-400 mt-2 tracking-widest uppercase">
                    {language === "hi" ? "भारतीय स्वराज मूल मंत्र" : "BNCP CORE DIRECTIVE"}
                  </p>
                </div>
              </div>
            )}

            {activeSection === "about" && (
              <div id="about-view-port">
                <AboutSection currentLanguage={language} />
              </div>
            )}

            {activeSection === "vision" && (
              <div id="vision-view-port">
                <VisionSection currentLanguage={language} />
              </div>
            )}

            {activeSection === "founder" && (
              <div id="founder-view-port">
                <FounderSection 
                  currentLanguage={language} 
                  founderSettings={appState.founder}
                />
              </div>
            )}

            {activeSection === "media" && (
              <div id="media-view-port">
                <MediaSection 
                  currentLanguage={language} 
                  news={appState.news} 
                  gallery={appState.gallery}
                />
              </div>
            )}

            {activeSection === "join" && (
              <div id="join-view-port">
                <JoinSection 
                  currentLanguage={language} 
                  onRegisterMember={handleAddNewMember}
                  partyLogoUrl={PARTY_LOGO_PATH}
                />
              </div>
            )}

            {activeSection === "contact" && (
              <div id="contact-view-port">
                <GrievanceSection 
                  currentLanguage={language} 
                  grievances={appState.grievances}
                  onAddGrievance={handleAddNewGrievance}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer view Layout */}
      <footer className="bg-[#01091a] border-t border-[#FFCC33]/15 py-12 px-4 sm:px-6 lg:px-8 no-print" id="citizen-portal-footer">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#FFCC33]">
                <img 
                  src={PARTY_LOGO_PATH} 
                  alt="BNCP" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=BNCP&background=001540&color=FFCC33&size=128&bold=true";
                  }}
                />
              </div>
              <div>
                <h3 className="font-sans text-base font-black text-white leading-tight">
                  {language === "hi" ? "भारतीय नेशनल कॉमनर्स पार्टी" : "Bharati National Commoners Party"}
                </h3>
                <span className="font-mono text-[10px] text-[#FF9933] font-bold tracking-widest block uppercase">
                  BNCP CENTRAL BOARD
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
              {language === "hi"
                ? "भारतीय नेशनल कॉमनर्स पार्टी एक जन-उन्मुख विचारधारा है जो पूर्ण शुचिता, सुदृढ़ पर्यावरणवादी नीतियों, एआई प्रौद्योगिक शिक्षा, और अंतिम व्यक्ति के स्वावलंबन हेतु कार्य करती है।"
                : "BNCP is a values-first grassroots campaign returning budget vetoes and policy priorities back to local municipal boundaries and block committees."}
            </p>

            <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded font-mono uppercase">
              Secure SSL verified Ledger
            </span>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFCC33] font-bold">
              {language === "hi" ? "त्वरित लिंक" : "DIRECTORY"}
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400 font-sans">
              {[
                { id: "home", label: language === "hi" ? "होम / परिचय" : "Home Portal" },
                { id: "about", label: language === "hi" ? "हमारे ४ मुख्य स्तंभ" : "The 4 Pillars" },
                { id: "vision", label: language === "hi" ? "स्वराज विज़न बहीखाता" : "Swa-Raj Vision" },
                { id: "founder", label: language === "hi" ? "श्रद्धेय रामदास रस्तोगी जी" : "Sacred Founder History" },
                { id: "media", label: language === "hi" ? "प्रेस विज्ञप्ति और दीर्घा" : "Press & Archives" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      playSynthesizedClick();
                      setActiveSection(link.id as Section);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="hover:text-[#FFCC33] hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social connections WhatsApp trigger */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#FFCC33] font-bold">
              {language === "hi" ? "सचेत नागरिक संपर्क" : "SOVEREIGN DISPATCH"}
            </h4>
            <div className="space-y-2">
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                {language === "hi"
                  ? "पार्टी सदस्यों से सीधे संपर्क करने और दैनिक गतिविधियों से अवगत रहने हेतु हमें व्हाट्सएप पर संदेश भेजें।"
                  : "Sync to our live community dispatch network via encrypted peer channels."}
              </p>
              <a
                href={appState.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSynthesizedClick()}
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs font-bold px-4 py-2.5 rounded-lg transition-transform"
                id="footer-whatsapp-connect"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{language === "hi" ? "व्हाट्सएप पर जुड़ें" : "Connect via WhatsApp"}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Base Rights */}
        <div className="mx-auto max-w-7xl mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-gray-500">
          <div className="flex items-center space-x-1.5">
            <span>© 2026 BHARATI NATIONAL COMMONERS PARTY.</span>
            <span className="hidden sm:inline">•</span>
            <span>JAI HIND 🇮🇳</span>
          </div>

          <div className="flex space-x-4 mt-4 sm:mt-0 items-center">
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors inline-flex items-center"
            >
              Back to Top
              <ArrowUp className="h-3 w-3 ml-1" />
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}
