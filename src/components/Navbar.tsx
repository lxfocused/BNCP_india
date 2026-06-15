import React from "react";
import { Language, Section } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { Menu, X, Landmark, Globe, Volume2 } from "lucide-react";

interface NavbarProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  activeSection: Section;
  setActiveSection: (sec: Section) => void;
  partyLogoUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLanguage,
  setLanguage,
  activeSection,
  setActiveSection,
  partyLogoUrl
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: "home", labelEn: "Home", labelHi: "होम" },
    { id: "about", labelEn: "Pillars", labelHi: "मुख्य स्तंभ" },
    { id: "vision", labelEn: "Swa-Raj Vision", labelHi: "स्वराज विज़न" },
    { id: "founder", labelEn: "Inspiration", labelHi: "प्रेरणा स्रोत" },
    { id: "media", labelEn: "Media & News", labelHi: "मीडिया व समाचार" },
    { id: "join", labelEn: "Membership", labelHi: "सदस्यता आवेदन" },
    { id: "contact", labelEn: "Citizen Helpdesk", labelHi: "नागरिक हेल्पडेस्क" }
  ];

  const handleNavClick = (sectionId: string) => {
    playSynthesizedClick();
    setActiveSection(sectionId as Section);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    playSynthesizedClick();
    setLanguage(currentLanguage === "en" ? "hi" : "en");
  };

  const handleLogoClick = () => {
    playSynthesizedClick();
    setActiveSection("home");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#FFCC33]/20 bg-[#000d26]/80 backdrop-blur-sm no-print">
      {/* Top Banner with Core Slogan */}
      <div className="w-full bg-gradient-to-r from-[#FFCC33]/5 via-[#FF9933]/12 to-[#FFCC33]/5 border-b border-[#FF9933]/15 py-1.5 px-4 text-center">
        <p className="font-sans text-[11px] md:text-sm font-medium tracking-wide text-[#FFCC33]">
          {currentLanguage === "hi"
            ? "“ न तुष्टिकरण, न जातिवाद का जाल; सुरक्षित पर्यावरण, आधुनिक शिक्षा और स्वाभिमान से बदलेगा भारत का हाल। ”"
            : "“ No Appeasement, No Caste Politics; Secured Environment, Modern Education and Self-Respect will Change India. ”"}
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <div 
          onClick={handleLogoClick}
          className="flex cursor-pointer items-center space-x-3.5 group animate-fade-in"
          id="brand-logo-container"
        >
          <div className="relative h-12 w-12 border-2 border-[#FFCC33] bg-[#000d26] flex items-center justify-center rounded-lg transition-transform group-hover:scale-105">
            {partyLogoUrl ? (
              <img 
                src={partyLogoUrl} 
                alt="BNCP Logo" 
                className="h-full w-full object-cover rounded-md"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=BNCP&background=001540&color=FFCC33&size=128&bold=true";
                }}
              />
            ) : (
              <span className="text-[#FFCC33] font-bold text-lg">BNCP</span>
            )}
          </div>
          <div className="flex flex-col">
            <h1 className="font-sans text-xs min-[360px]:text-sm sm:text-base md:text-lg font-bold tracking-tighter leading-none text-white group-hover:text-[#FFCC33] transition-colors">
              {currentLanguage === "hi" ? "भारतीय नेशनल COMMONERS पार्टी" : "BHARATI NATIONAL COMMONERS PARTY"}
            </h1>
            <p className="font-mono text-[8px] min-[360px]:text-[9px] md:text-[10px] text-[#FF9933] tracking-[0.1em] sm:tracking-[0.2em] uppercase font-semibold mt-1">
              {currentLanguage === "hi" ? "भारत प्रथम • सामान्य जन शासित" : "India First • Commoner Led"}
            </p>
          </div>
        </div>

        {/* Desktop Interface controls */}
        <nav className="hidden lg:flex items-center space-x-1.5" id="desktop-navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 rounded-sm font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-[#FF9933] text-[#000d26]"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {currentLanguage === "hi" ? item.labelHi : item.labelEn}
            </button>
          ))}
        </nav>

        {/* Floating Utility Controls (Language & Secret Admin Indicator) */}
        <div className="flex items-center space-x-3">
          {/* Bilingual Toggle: Geometric balance design layout */}
          <div className="flex bg-[#001540] p-1 rounded border border-white/10 text-[11px] font-bold">
            <button 
              onClick={() => { if (currentLanguage !== "en") toggleLanguage(); }}
              className={`px-2.5 py-1 rounded-sm uppercase transition-all ${
                currentLanguage === "en" ? "bg-[#FF9933] text-[#000d26]" : "opacity-50 text-white hover:opacity-100"
              }`}
            >
              EN
            </button>
            <button 
              onClick={() => { if (currentLanguage !== "hi") toggleLanguage(); }}
              className={`px-2.5 py-1 rounded-sm uppercase transition-all ${
                currentLanguage === "hi" ? "bg-[#FF9933] text-[#000d26]" : "opacity-50 text-white hover:opacity-100"
              }`}
            >
              HI
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => {
              playSynthesizedClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000d26] border-b border-[#FFCC33]/15 py-4 px-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {/* BNCP Mobile Menu Logo section */}
          <div className="flex items-center space-x-3 pb-3 mb-2 border-b border-white/10">
            <div className="h-10 w-10 overflow-hidden rounded-md border-2 border-[#FFCC33] bg-[#000d26] flex items-center justify-center flex-shrink-0">
              <img 
                src={partyLogoUrl} 
                alt="BNCP Logo" 
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=BNCP&background=001540&color=FFCC33&size=128&bold=true";
                }}
              />
            </div>
            <div>
              <span className="font-sans text-xs font-bold text-white block uppercase leading-tight">
                {currentLanguage === "hi" ? "भारतीय नेशनल COMMONERS पार्टी" : "BHARATI NATIONAL COMMONERS PARTY"}
              </span>
              <span className="font-mono text-[9px] text-[#FF9933] block mt-0.5 leading-none">
                {currentLanguage === "hi" ? "भारत प्रथम • सामान्य जन शासित" : "India First • Commoner Led"}
              </span>
            </div>
          </div>

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-sm font-sans text-sm font-bold uppercase tracking-wider transition-all ${
                activeSection === item.id
                  ? "bg-[#FF9933] text-[#000d26]"
                  : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5"
              }`}
            >
              {currentLanguage === "hi" ? item.labelHi : item.labelEn}
            </button>
          ))}
          <div className="pt-3 border-t border-white/10 flex justify-between items-center text-xs text-gray-400 font-mono">
            <span>BNCP DIGITAL OFFICE</span>
          </div>
        </div>
      )}
    </header>
  );
};
