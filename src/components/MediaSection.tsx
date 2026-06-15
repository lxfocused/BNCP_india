import React from "react";
import { Language, NewsItem, GalleryImage } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { Calendar, Tag, Image as ImageIcon, Newspaper, Grid, ThumbsUp, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MediaSectionProps {
  currentLanguage: Language;
  news: NewsItem[];
  gallery: GalleryImage[];
}

export const MediaSection: React.FC<MediaSectionProps> = ({ currentLanguage, news, gallery }) => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = React.useState<string>("ALL");
  const [selectedNewsCategory, setSelectedNewsCategory] = React.useState<string>("ALL");

  const galleryCategories = [
    { code: "ALL", labelEn: "All Media", labelHi: "सभी मीडिया" },
    { code: "Ecology", labelEn: "Ecology", labelHi: "पर्यावरण" },
    { code: "Education", labelEn: "Education", labelHi: "शिक्षा" },
    { code: "Direct Governance", labelEn: "Governance", labelHi: "प्रशासन" }
  ];

  const newsCategories = [
    { code: "ALL", labelEn: "All Press", labelHi: "सभी घोषणाएं" },
    { code: "Ecology", labelEn: "Ecology", labelHi: "पर्यावरण" },
    { code: "Education", labelEn: "Education", labelHi: "शिक्षा" },
    { code: "Self-Reliance", labelEn: "Self-Reliance", labelHi: "आत्मनिर्भरता" }
  ];

  const filteredGallery = gallery.filter((img) => {
    if (selectedGalleryCategory === "ALL") return true;
    return img.categoryEn === selectedGalleryCategory;
  });

  const filteredNews = news.filter((item) => {
    if (selectedNewsCategory === "ALL") return true;
    return item.categoryEn === selectedNewsCategory;
  });

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="media-archive-section">
      <div className="space-y-16">
        
        {/* News Feed / Press Releases Area */}
        <div className="space-y-8" id="press-releases-feed">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#FF9933] uppercase tracking-widest font-bold flex items-center">
                <Newspaper className="h-4 w-4 mr-1.5" />
                {currentLanguage === "hi" ? "आधिकारिक प्रेस वक्तव्य" : "OFFICIAL CAMPAIGN PRESS RELEASE"}
              </span>
              <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {currentLanguage === "hi" ? "नवीनतम समाचार एवं बुलेटिन" : "Latest News & Bulletin"}
              </h2>
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((cat) => (
                <button
                  key={cat.code}
                  onClick={() => {
                    playSynthesizedClick();
                    setSelectedNewsCategory(cat.code);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all border ${
                    selectedNewsCategory === cat.code
                      ? "bg-[#FFCC33] text-black border-transparent shadow shadow-[#FFCC33]/30"
                      : "bg-[#06142c] border-white/10 text-gray-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {currentLanguage === "hi" ? cat.labelHi : cat.labelEn}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredNews.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#06142c]/75 border-2 border-[#FF9933]/15 rounded-2xl p-6 hover:border-[#FF9933] transition-all flex flex-col justify-between"
                  id={`news-card-${item.id}`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-[#FF9933] font-semibold uppercase flex items-center">
                        <Tag className="h-3 w-3 mr-1" />
                        {currentLanguage === "hi" ? item.categoryHi : item.categoryEn}
                      </span>
                      <span className="text-gray-500 flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="font-sans text-lg font-bold text-white hover:text-[#FFCC33] transition-colors line-clamp-2 leading-tight">
                      {currentLanguage === "hi" ? item.titleHi : item.titleEn}
                    </h3>

                    <p className="font-sans text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {currentLanguage === "hi" ? item.contentHi : item.contentEn}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>BNCP OFFICIAL DISPATCH</span>
                    <span className="text-gray-400 font-bold uppercase">VERIFIED ✔</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredNews.length === 0 && (
              <div className="col-span-full py-12 text-center border-2 border-dashed border-white/10 rounded-2xl">
                <p className="font-sans text-gray-400">
                  {currentLanguage === "hi"
                    ? "इस श्रेणी में कोई समाचार नहीं मिला।"
                    : "No press releases found in this category."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Spectacular Slogans & National Proclamations block: fully responsive on Mobile, Tablet & Desktop */}
        <div className="py-8 border-y border-white/5 bg-[#001235]/30 rounded-sm p-6 md:p-10 space-y-8" id="national-slogans-billboard">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="font-mono text-[10px] text-[#FF9933] uppercase tracking-widest font-bold bg-[#FF9933]/10 border border-[#FF9933]/20 px-2.5 py-1 rounded-sm">
              {currentLanguage === "hi" ? "चेतना उद्घोष" : "MOVEMENT SLOGANS"}
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {currentLanguage === "hi" ? "राष्ट्र उत्थान हेतु हमारे संकल्प मंत्र" : "Our Ideological Proclamations"}
            </h3>
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#FF9933] to-transparent mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-6 rounded-sm border border-white/5 bg-[#000d26]/85 text-center space-y-4 hover:border-[#FF9933]/40 transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#FF9933]/40" />
              <div className="absolute top-0 left-0 h-2 w-[1px] bg-[#FF9933]/40" />
              <div className="mx-auto h-9 w-9 rounded-full bg-[#FF9933]/15 flex items-center justify-center text-[#FFCC33] font-serif font-black text-xs">१</div>
              <p className="font-serif italic text-[#FAF6EE] text-sm md:text-base leading-relaxed">
                {currentLanguage === "hi" 
                  ? "“ नदी, वन और मातृभूमि की रक्षा ही सच्चा राष्ट्र-धर्म है। ”" 
                  : "“ Protecting our ancestral rivers and lush native woods is our highest national creed. ”"}
              </p>
              <span className="block font-mono text-[9px] text-[#FF9933] uppercase tracking-wider">— {currentLanguage === "hi" ? "पर्यावरण राष्ट्रवाद" : "ECO-NATIONALISM"}</span>
            </div>

            <div className="relative p-6 rounded-sm border border-white/5 bg-[#000d26]/85 text-center space-y-4 hover:border-[#FFCC33]/40 transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#FFCC33]/40" />
              <div className="absolute top-0 left-0 h-2 w-[1px] bg-[#FFCC33]/40" />
              <div className="mx-auto h-9 w-9 rounded-full bg-[#FFCC33]/15 flex items-center justify-center text-[#FFCC33] font-serif font-black text-xs">२</div>
              <p className="font-serif italic text-[#FAF6EE] text-sm md:text-base leading-relaxed">
                {currentLanguage === "hi" 
                  ? "“ बिचौलियों का अंत, वार्ड सभाओं को संपूर्ण बजटीय निधि अधिकार। ”" 
                  : "“ Complete eradication of middlemen siphoning public money; full budget oversight back to city assemblies. ”"}
              </p>
              <span className="block font-mono text-[9px] text-[#FFCC33] uppercase tracking-wider">— {currentLanguage === "hi" ? "प्रत्यक्ष लोक-शासन" : "DIRECT CITIZENS DEMOCRACY"}</span>
            </div>

            <div className="relative p-6 rounded-sm border border-white/5 bg-[#000d26]/85 text-center space-y-4 hover:border-[#FF9933]/40 transition-all duration-300">
              <div className="absolute top-0 left-0 w-2 h-[1px] bg-[#FF9933]/40" />
              <div className="absolute top-0 left-0 h-2 w-[1px] bg-[#FF9933]/40" />
              <div className="mx-auto h-9 w-9 rounded-full bg-[#FF9933]/15 flex items-center justify-center text-[#FFCC33] font-serif font-black text-xs">३</div>
              <p className="font-serif italic text-[#FAF6EE] text-sm md:text-base leading-relaxed">
                {currentLanguage === "hi" 
                  ? "“ शिक्षित युवा, संस्कारित समाज, समृद्ध और स्वाभिमानी भारत का नया आगाज़। ”" 
                  : "“ Advanced tech education, rich cultural values, paving a new route for a self-reliant India. ”"}
              </p>
              <span className="block font-mono text-[9px] text-[#FF9933] uppercase tracking-wider">— {currentLanguage === "hi" ? "संस्कार और समृद्धि" : "VALUES & SELF-RELIANCE"}</span>
            </div>
          </div>
        </div>

        {/* Core Party Leadership & Inspirations Showcase */}
        <div className="space-y-8" id="leadership-spotlight-section">
          <div className="border-b border-white/10 pb-4">
            <span className="font-mono text-xs text-[#FFCC33] uppercase tracking-widest font-bold flex items-center">
              <Award className="h-4 w-4 mr-1.5 text-[#FF9933]" />
              {currentLanguage === "hi" ? "मार्गदर्शक नेतृत्व एवं प्रेरणा पुंज" : "GUIDING LIGHTS & FOUNDING SOULS"}
            </span>
            <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-1">
              {currentLanguage === "hi" ? "स्वराज आंदोलन के प्रणेता" : "Architects of the Swaraj Movement"}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Leader 1 Card: Shraddhey Ramdas Rastogi Ji */}
            <div 
              onClick={() => playSynthesizedClick()}
              className="group relative overflow-hidden rounded-sm border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-[#001540] via-[#000d26]/95 to-[#001c54]/70 hover:border-[#FFCC33]/50 transition-all duration-300"
              id="media-leader-rastogi"
            >
              <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#FFCC33]/40 group-hover:bg-[#FFCC33]" />
              <div className="absolute top-0 left-0 h-3 w-[1px] bg-[#FFCC33]/40 group-hover:bg-[#FFCC33]" />
              <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#FFCC33]/40 group-hover:bg-[#FFCC33]" />
              <div className="absolute bottom-0 right-0 h-3 w-[1px] bg-[#FFCC33]/40 group-hover:bg-[#FFCC33]" />

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
                {/* Image Portrait */}
                <div className="relative w-36 sm:w-40 aspect-[3/4] flex-shrink-0">
                  <div className="absolute -inset-1 rounded-sm border border-dashed border-[#FFCC33]/20" />
                  <div className="h-full w-full rounded-sm overflow-hidden border border-[#FFCC33]/30 bg-[#001235]">
                    <img
                      src="./assets/ramdas.jpg"
                      alt={currentLanguage === "hi" ? "श्रद्धेय रामदास रस्तोगी जी" : "Shraddhey Ramdas Rastogi Ji"}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Ramdas+Rastogi&background=001540&color=FFCC33&size=256&bold=true";
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4 text-center sm:text-left">
                  <div>
                    <span className="font-mono text-[9px] text-[#FF9933] uppercase tracking-widest font-bold border border-[#FF9933]/20 bg-[#FF9933]/15 px-2 py-0.5 rounded-sm">
                      {currentLanguage === "hi" ? "अमर संस्थापक" : "SACRED FOUNDER"}
                    </span>
                    <h3 className="font-sans text-xl font-bold text-white tracking-tight mt-2 uppercase text-left group-hover:text-[#FFCC33] transition-colors">
                      {currentLanguage === "hi" ? "श्रद्धेय रामदास रस्तोगी जी" : "Shraddhey Ramdas Rastogi Ji"}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 font-bold tracking-wider uppercase text-left">
                      {currentLanguage === "hi" ? "संस्थापक प्रणेता • बीएनसीपी" : "FOUNDER & SOCIAL VISIONARY • BNCP"}
                    </p>
                  </div>

                  <div className="relative border-l-2 border-[#FFCC33] bg-[#000d26]/80 p-4 rounded-sm italic text-left">
                    <p className="font-serif text-xs sm:text-sm text-[#FAF6EE] leading-relaxed">
                      {currentLanguage === "hi" 
                        ? "“ राजनीतिक शुचिता, सुदृढ़ पर्यावरण और संस्कारयुक्त शिक्षा ही खुशहाल राष्ट्र निर्माण की एकमात्र गारंटी है। ”" 
                        : "“ Political purity, green eco-nationalism and value-centric education is the only reliable guarantee for a sovereign state. ”"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 2 Card: Amit Ji */}
            <div 
              onClick={() => playSynthesizedClick()}
              className="group relative overflow-hidden rounded-sm border border-white/10 p-6 sm:p-8 bg-gradient-to-br from-[#001540] via-[#000d26]/95 to-[#001c54]/70 hover:border-[#FF9933]/50 transition-all duration-300"
              id="media-leader-amit"
            >
              <div className="absolute top-0 left-0 w-3 h-[1px] bg-[#FF9933]/40 group-hover:bg-[#FF9933]" />
              <div className="absolute top-0 left-0 h-3 w-[1px] bg-[#FF9933]/40 group-hover:bg-[#FF9933]" />
              <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-[#FF9933]/40 group-hover:bg-[#FF9933]" />
              <div className="absolute bottom-0 right-0 h-3 w-[1px] bg-[#FF9933]/40 group-hover:bg-[#FF9933]" />

              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start relative z-10">
                {/* Image Portrait */}
                <div className="relative w-36 sm:w-40 aspect-[3/4] flex-shrink-0">
                  <div className="absolute -inset-1 rounded-sm border border-dashed border-[#FF9933]/20" />
                  <div className="h-full w-full rounded-sm overflow-hidden border border-[#FF9933]/30 bg-[#001235]">
                    <img
                      src="./assets/amit.jpg"
                      alt={currentLanguage === "hi" ? "अमित जी" : "Amit Ji"}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://ui-avatars.com/api/?name=Amit+Ji&background=001540&color=FF9933&size=256&bold=true";
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow space-y-4 text-center sm:text-left">
                  <div>
                    <span className="font-mono text-[9px] text-[#FFCC33] uppercase tracking-widest font-bold border border-[#FFCC33]/20 bg-[#FFCC33]/15 px-2 py-0.5 rounded-sm">
                      {currentLanguage === "hi" ? "राष्ट्रीय अध्यक्ष एवं संयोजक" : "NATIONAL CONVENER & PRESIDENT"}
                    </span>
                    <h3 className="font-sans text-xl font-bold text-white tracking-tight mt-2 uppercase text-left group-hover:text-[#FFCC33] transition-colors">
                      {currentLanguage === "hi" ? "अमित जी" : "Amit Ji"}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 font-bold tracking-wider uppercase text-left">
                      {currentLanguage === "hi" ? "राष्ट्रीय अध्यक्ष • बीएनसीपी" : "NATIONAL CONVENER & EXECUTIVE PRESIDENT • BNCP"}
                    </p>
                  </div>

                  <div className="relative border-l-2 border-[#FF9933] bg-[#000d26]/80 p-4 rounded-sm italic text-left">
                    <p className="font-serif text-xs sm:text-sm text-[#FAF6EE] leading-relaxed">
                      {currentLanguage === "hi" 
                        ? "“ हमारा स्वप्न स्वच्छ और पर्यावरण-मित्र भारत का है, जहाँ विकास और प्रकृति एक संग चल सकें और भ्रष्टाचार का पूर्ण संहार हो। ”" 
                        : "“ We envision a pristine and eco-integrated India, where developmental success co-exists with nature and complete eradication of corruption. ”"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
