import React from "react";
import { Language, Member } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { INDIAN_STATES_GEOGRAPHY } from "../utils/geo";
import { User, Phone, CalendarCheck, MapPin, Award, Printer, Download, Sparkles, CheckCircle2 } from "lucide-react";

interface JoinSectionProps {
  currentLanguage: Language;
  onRegisterMember: (newMember: Member) => void;
  partyLogoUrl: string;
}

export const JoinSection: React.FC<JoinSectionProps> = ({
  currentLanguage,
  onRegisterMember,
  partyLogoUrl
}) => {
  // Form fields state
  const [fullName, setFullName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [age, setAge] = React.useState("");
  const [stateIndex, setStateIndex] = React.useState<number | "">("");
  const [districtIndex, setDistrictIndex] = React.useState<number | "">("");
  const [constituency, setConstituency] = React.useState("");

  // Error validations state
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  
  // Successful registration state
  const [issuedCard, setIssuedCard] = React.useState<Member | null>(null);

  const selectedStateObj = stateIndex !== "" ? INDIAN_STATES_GEOGRAPHY[stateIndex] : null;
  const selectedDistrictObj = (selectedStateObj && districtIndex !== "") ? selectedStateObj.districts[districtIndex] : null;

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    playSynthesizedClick();
    const val = e.target.value;
    setStateIndex(val === "" ? "" : Number(val));
    setDistrictIndex("");
    setConstituency("");
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    playSynthesizedClick();
    const val = e.target.value;
    setDistrictIndex(val === "" ? "" : Number(val));
    setConstituency("");
  };

  const handleConstituencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    playSynthesizedClick();
    setConstituency(e.target.value);
  };

  // Run validators
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSynthesizedClick();

    const newErrors: { [key: string]: string } = {};

    // Validate name (min 3 characters)
    if (fullName.trim().length < 3) {
      newErrors.fullName = currentLanguage === "hi" 
        ? "नाम कम से कम ३ अक्षरों का होना चाहिए।" 
        : "Full name must be at least 3 characters.";
    }

    // Validate Indian mobile number (^[6-9]\d{9}$)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(mobile)) {
      newErrors.mobile = currentLanguage === "hi"
        ? "कृपया वैध १०-अंकों का भारतीय मोबाइल नंबर दर्ज करें (शुरुआत ६-९ से)।"
        : "Please enter a valid 10-digit Indian mobile number (starting with 6-9).";
    }

    // Validate strict age threshold minimum of 18 years
    const ageNum = Number(age);
    if (!age || isNaN(ageNum) || ageNum < 18) {
      newErrors.age = currentLanguage === "hi"
        ? "सदस्यता के लिए आयु कम से कम १८ वर्ष होनी चाहिए।"
        : "Age threshold: Strict eligibility minimum of 18 years.";
    }

    // Validate geography chains
    if (stateIndex === "") {
      newErrors.state = currentLanguage === "hi" ? "राज्य का चयन करें।" : "Please select your state.";
    }
    if (districtIndex === "") {
      newErrors.district = currentLanguage === "hi" ? "जिले का चयन करें।" : "Please select your district.";
    }
    if (!constituency) {
      newErrors.constituency = currentLanguage === "hi" ? "विधानसभा क्षेत्र का चयन करें।" : "Please select your constituency.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear previous errors
    setErrors({});

    // Generate unique serial number (Format: BNCP-2026-XXXXXX)
    const randomSerial = Math.floor(100000 + Math.random() * 900000);
    const newMemberId = `BNCP-2026-${randomSerial}`;

    const newMemberObj: Member = {
      id: newMemberId,
      fullName: fullName.trim(),
      mobile: mobile,
      age: Number(age),
      state: selectedStateObj ? selectedStateObj.stateNameEn : "",
      district: selectedDistrictObj ? selectedDistrictObj.name : "",
      constituency: constituency,
      joinedAt: new Date().toISOString()
    };

    // Save and add to state
    onRegisterMember(newMemberObj);
    setIssuedCard(newMemberObj);
  };

  const handleResetForm = () => {
    playSynthesizedClick();
    setFullName("");
    setMobile("");
    setAge("");
    setStateIndex("");
    setDistrictIndex("");
    setConstituency("");
    setIssuedCard(null);
    setErrors({});
  };

  const handlePrint = () => {
    playSynthesizedClick();
    window.print();
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="join-membership-section">
      
      {/* Dynamic Print CSS injected block to hide everything except the card itself */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* Hide normal headers, nav, footers, forms and side columns */
          body * {
            visibility: hidden;
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          #printable-card-wrapper, #printable-card-wrapper * {
            visibility: visible;
          }
          #printable-card-wrapper {
            position: absolute;
            left: 0;
            top: 0;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            align-items: center;
            justify-content: center;
            display: flex !important;
            height: 100vh;
            background: #ffffff !important;
          }
          /* Print optimizations for the badge card */
          .card-badge-container {
            border: 4px double #000000 !important;
            background: #ffffff !important;
            color: #000000 !important;
            box-shadow: none !important;
            border-radius: 8px !important;
            width: 3.5in !important;
            height: 5.5in !important;
            padding: 20px !important;
            margin: auto !important;
            page-break-inside: avoid;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
          }
          .no-print {
            display: none !important;
            height: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="membership-panels-grid">
        
        {/* Left Side: Dynamic Instruction Context */}
        <div className="lg:col-span-5 space-y-6 no-print">
          <div className="inline-flex items-center space-x-1.5 border border-[#FFCC33]/30 bg-[#FFCC33]/15 px-3 py-1 rounded-full text-xs text-[#FFCC33]">
            <Sparkles className="h-3.5 w-3.5 text-[#FF9933] fill-[#FF9933]" />
            <span className="font-semibold uppercase tracking-wider font-mono">
              {currentLanguage === "hi" ? "मुफ़्त अधिकार सदस्यता" : "SECURE NATIONAL CREDENTIAL"}
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            {currentLanguage === "hi" ? (
              <>
                भारतीय स्वराज सेना <br />
                <span className="text-[#FFCC33]">डिजिटल सदस्यता प्राप्त करें</span>
              </>
            ) : (
              <>
                Join the Swaraj Force <br />
                <span className="text-[#FFCC33]">Claim Digital ID Card</span>
              </>
            )}
          </h2>

          <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed">
            {currentLanguage === "hi"
              ? "बिना किसी भेदभाव के भारत के प्रत्येक १८ वर्ष या अधिक आयु के नागरिक हेतु बीएनसीपी की ऑनलाइन सदस्यता उपलब्ध है। जैसे ही आप पंजीकरण फॉर्म पूरा करेंगे, हमारा केंद्रीय सर्वर आपके लिए एक अद्वितीय सदस्यता पत्र संख्या जारी कर स्वर्ण-मय वाटरमार्क डिजिटल क्रेडेंशियल कार्ड तैयार करेगा।"
              : "Validate your parameters against regional geographic boundaries and access your dual-language sovereign digital membership token. Instantly print or download for your records."}
          </p>

          {/* Golden Badge List indicators */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex items-start space-x-3 text-sm text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-[#FF9933] flex-shrink-0 mt-0.5" />
              <span>
                {currentLanguage === "hi"
                  ? "स्वर्ण-मय मापदंडों के साथ अद्वितीय आईडी क्रेडेंशियल"
                  : "Double Monospaced Golden parameter frames with Award Stamp."}
              </span>
            </div>
            <div className="flex items-start space-x-3 text-sm text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-[#FF9933] flex-shrink-0 mt-0.5" />
              <span>
                {currentLanguage === "hi"
                  ? "मुद्रण अनुकूलित (प्रिंट-रेडी) सीएसएस लेआउट सक्षम"
                  : "Optimized Print Media layout to bypass ink-waste gradients."}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form or Generated Card */}
        <div className="lg:col-span-7" id="membership-interactive-stage">
          
          {!issuedCard ? (
            /* Registration Form */
            <div className="bg-[#041530]/75 border-2 border-[#FF9933]/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden no-print">
              
              <div className="mb-6">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-white">
                  {currentLanguage === "hi" ? "केंद्रीय सदस्यता पंजीकरण" : "Central Registry Form"}
                </h3>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  {currentLanguage === "hi" ? "कृपया सभी क्षेत्रों को सही जानकारी से भरें" : "Provide real parameters to compile ID card."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full name input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                    {currentLanguage === "hi" ? "पूरा नाम (Full Name) *" : "Full Name (as per ID) *"}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 AUTO w-4 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={currentLanguage === "hi" ? "जैसे: आनंद शर्मा" : "e.g. Anand Sharma"}
                      className="w-full pl-10 pr-4 py-3 bg-[#000d26]/80 text-white rounded-xl border border-white/10 focus:border-[#FFCC33] focus:outline-none placeholder-gray-500 font-sans text-sm transition-colors"
                    />
                  </div>
                  {errors.fullName && <p className="text-red-400 text-xs font-mono">{errors.fullName}</p>}
                </div>

                {/* Mobile & Age Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Indian Phone input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                      {currentLanguage === "hi" ? "भारतीय मोबाइल नंबर *" : "Indian Mobile Number *"}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="e.g. 9876543210"
                        className="w-full pl-10 pr-4 py-3 bg-[#000d26]/80 text-white rounded-xl border border-white/10 focus:border-[#FFCC33] focus:outline-none placeholder-gray-500 font-sans text-sm transition-colors"
                      />
                    </div>
                    {errors.mobile && <p className="text-red-400 text-xs font-mono">{errors.mobile}</p>}
                  </div>

                  {/* Age input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                      {currentLanguage === "hi" ? "आयु (वर्ष में) *" : "Age (Strict Min 18) *"}
                    </label>
                    <div className="relative">
                      <CalendarCheck className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <input
                        type="number"
                        required
                        min="18"
                        max="120"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="e.g. 25"
                        className="w-full pl-10 pr-4 py-3 bg-[#000d26]/80 text-white rounded-xl border border-white/10 focus:border-[#FFCC33] focus:outline-none placeholder-gray-500 font-sans text-sm transition-colors"
                      />
                    </div>
                    {errors.age && <p className="text-red-400 text-xs font-mono">{errors.age}</p>}
                  </div>

                </div>

                {/* Chain Dropdowns states and districts */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* State Select dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                      {currentLanguage === "hi" ? "राज्य का चयन करें *" : "State / Union Territory *"}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
                      <select
                        required
                        value={stateIndex}
                        onChange={handleStateChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#000d26] text-white rounded-xl border border-white/10 focus:border-[#FFCC33] focus:outline-none font-sans text-sm transition-colors appearance-none"
                      >
                        <option value="">{currentLanguage === "hi" ? "राज्य चुनें" : "Select State"}</option>
                        {INDIAN_STATES_GEOGRAPHY.map((st, idx) => (
                          <option key={idx} value={idx}>
                            {currentLanguage === "hi" ? st.stateNameHi : st.stateNameEn}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.state && <p className="text-red-400 text-xs font-mono">{errors.state}</p>}
                  </div>

                  {/* District Select dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                      {currentLanguage === "hi" ? "जिला का चयन करें *" : "District *"}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
                      <select
                        required
                        disabled={stateIndex === ""}
                        value={districtIndex}
                        onChange={handleDistrictChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#000d26] disabled:opacity-40 text-white rounded-xl border border-white/10 focus:border-[#FFCC33] focus:outline-none font-sans text-sm transition-colors appearance-none"
                      >
                        <option value="">{currentLanguage === "hi" ? "जिला चुनें" : "Select District"}</option>
                        {selectedStateObj?.districts.map((dst, idx) => (
                          <option key={idx} value={idx}>{dst.name}</option>
                        ))}
                      </select>
                    </div>
                    {errors.district && <p className="text-red-400 text-xs font-mono">{errors.district}</p>}
                  </div>

                </div>

                {/* Constituency Select dropdown based on chosen district */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                    {currentLanguage === "hi" ? "विधानसभा क्षेत्र *" : "Assembly Constituency *"}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400 pointer-events-none" />
                    <select
                      required
                      disabled={districtIndex === ""}
                      value={constituency}
                      onChange={handleConstituencyChange}
                      className="w-full pl-10 pr-4 py-3 bg-[#000d26] disabled:opacity-40 text-white rounded-xl border border-white/10 focus:border-[#FFCC33] focus:outline-none font-sans text-sm transition-colors appearance-none"
                    >
                      <option value="">{currentLanguage === "hi" ? "विधानसभा क्षेत्र चुनें" : "Select Assembly Constituency"}</option>
                      {selectedDistrictObj?.constituencies.map((cnst, idx) => (
                        <option key={idx} value={cnst}>{cnst}</option>
                      ))}
                    </select>
                  </div>
                  {errors.constituency && <p className="text-red-400 text-xs font-mono">{errors.constituency}</p>}
                </div>

                {/* Submit trigger button with premium saffron-gold glow and scaling animation */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF9933] to-[#FFCC33] hover:from-[#FFCC33] hover:to-[#FF9933] text-black font-sans font-black py-4 rounded-sm shadow-xl shadow-[#FF9933]/15 hover:shadow-[#FF9933]/35 transition-all duration-300 transform hover:scale-[1.01] active:scale-95 flex items-center justify-center space-x-2.5 text-base cursor-pointer border border-[#FFCC33]/40 focus:outline-none focus:ring-2 focus:ring-[#FFCC33]/80"
                >
                  <Award className="h-5 w-5" />
                  <span>
                    {currentLanguage === "hi" 
                      ? "पंजीकृत सदस्य क्रेडेंशियल संकलित करें" 
                      : "Compile & Issue Membership ID Card"}
                  </span>
                </button>

              </form>
            </div>
          ) : (
            /* Digital Membership Card Generator Window */
            <div className="space-y-6">
              
              <div 
                className="w-full bg-[#000d26]/40 p-4 border border-[#FFCC33]/30 rounded-2xl flex flex-col items-center shadow-2xl relative"
                id="printable-card-wrapper"
              >
                
                {/* Print optimizing container styling */}
                <div 
                  className="card-badge-container w-full max-w-sm aspect-[5.5/3.5] border-4 border-double border-[#FFCC33] rounded-2xl bg-gradient-to-br from-[#0c1a32] to-[#01091a] p-6 relative flex flex-col justify-between overflow-hidden shadow-2xl shadow-black text-white"
                  style={{ minHeight: "440px" }}
                >
                  
                  {/* Watermarked Golden Award background */}
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none">
                    <Award className="h-60 w-60 text-[#FFCC33] animate-pulse" />
                  </div>

                  {/* ID Header section */}
                  <div className="flex justify-between items-start border-b border-[#FFCC33]/30 pb-3 relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full border border-[#FFCC33] bg-[#000d26]">
                        {partyLogoUrl ? (
                          <img 
                            src={partyLogoUrl} 
                            alt="Logo" 
                            className="h-full w-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <Award className="h-5 w-5 text-[#FFCC33]" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-sans text-xs font-bold uppercase text-white tracking-tight leading-none">
                          {currentLanguage === "hi" ? "भारतीय नेशनल कॉमनर्स पार्टी" : "Bharati National Commoners Party"}
                        </h4>
                        <span className="font-mono text-[9px] text-[#FF9933] font-bold uppercase tracking-wider">
                          BNCP CENTRAL RECORD
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[8px] uppercase tracking-wider font-semibold">
                        {currentLanguage === "hi" ? "सत्यापित सदस्य" : "ACTIVE MEMBER"}
                      </span>
                    </div>
                  </div>

                  {/* ID Serial Monospace Badge */}
                  <div className="my-3 text-center py-1 border-y border-dashed border-[#FFCC33]/20 relative z-10 bg-white/5">
                    <span className="font-mono text-sm font-black text-[#FFCC33] tracking-widest leading-none">
                      {issuedCard.id}
                    </span>
                  </div>

                  {/* Main card details with golden monospaced layout parameter formatting */}
                  <div className="space-y-3 font-mono text-xs text-gray-200 py-1 relative z-10 flex-grow flex flex-col justify-center">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-gray-400 uppercase">{currentLanguage === "hi" ? "सदस्य नाम:" : "MEMBER NAME:"}</span>
                      <span className="font-sans font-bold text-[#FFCC33]">{issuedCard.fullName}</span>
                    </div>

                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-gray-400 uppercase">{currentLanguage === "hi" ? "मोबाइल संख्या:" : "MOBILE NO:"}</span>
                      <span className="font-bold text-white pr-1">{'*'.repeat(6) + issuedCard.mobile.slice(-4)}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 border-b border-white/5 pb-1">
                      <div className="flex justify-between pr-2 border-r border-white/10">
                        <span className="text-gray-400 uppercase">{currentLanguage === "hi" ? "आयु:" : "AGE:"}</span>
                        <span className="font-bold text-white">{issuedCard.age}</span>
                      </div>
                      <div className="flex justify-between pl-1">
                        <span className="text-gray-400 uppercase">{currentLanguage === "hi" ? "राज्य:" : "STATE:"}</span>
                        <span className="font-bold text-white font-sans max-w-[80px] truncate leading-none pt-0.5">{issuedCard.state}</span>
                      </div>
                    </div>

                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-gray-400 uppercase">{currentLanguage === "hi" ? "विधानसभा क्षेत्र:" : "ASSEMBLY CONSTITUENCY:"}</span>
                      <span className="font-sans font-semibold text-gray-300 truncate max-w-[200px]">{issuedCard.constituency}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-400 uppercase">{currentLanguage === "hi" ? "पंजीकरण समय:" : "REGISTERED TIME:"}</span>
                      <span className="text-[10px] text-gray-400">{new Date(issuedCard.joinedAt).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Stamp & Verification parameters foot */}
                  <div className="flex justify-between items-end border-t border-white/10 pt-3 mt-1 relative z-10 text-[9px] font-mono text-gray-500">
                    <div>
                      <span>ISSUER: CO-BOARD INDIA</span>
                      <div className="text-[#FF9933]">GEN-LEDGER STATUS: OK</div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <span className="bg-emerald-500/10 text-emerald-400 px-1 py-0.2 rounded font-bold">BNCP-SECURE</span>
                      <span>REF: 2026/AUTH</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Actions (Print & Download, Reset) */}
              <div className="flex flex-wrap gap-4 no-print justify-center">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center bg-[#FF9933] hover:bg-[#FFCC33] text-black font-sans font-bold px-6 py-3.5 rounded-xl cursor-pointer transition-all"
                  id="print-certificate-trigger"
                >
                  <Printer className="h-5 w-5 mr-2" />
                  <span>{currentLanguage === "hi" ? "कार्ड प्रिंट करें / PDF सहेजें" : "Print ID Card / Save PDF"}</span>
                </button>

                <button
                  onClick={handleResetForm}
                  className="inline-flex items-center border border-white/20 bg-white/5 hover:bg-white/10 text-white font-sans font-semibold px-6 py-3.5 rounded-xl transition-all"
                  id="reset-form-trigger"
                >
                  <span>{currentLanguage === "hi" ? "नया आवेदन भरें" : "Submit New Application"}</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
