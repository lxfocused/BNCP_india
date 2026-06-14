import React from "react";
import { Language, Grievance } from "../types";
import { playSynthesizedClick } from "../utils/audio";
import { MessageSquarePlus, Search, HelpCircle, FileText, CheckCircle, ShieldAlert, Sparkles } from "lucide-react";

interface GrievanceProps {
  currentLanguage: Language;
  grievances: Grievance[];
  onAddGrievance: (g: Grievance) => void;
}

export const GrievanceSection: React.FC<GrievanceProps> = ({
  currentLanguage,
  grievances,
  onAddGrievance
}) => {
  // Submit state
  const [citizenName, setCitizenName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [category, setCategory] = React.useState("Ecology");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState<Grievance | null>(null);

  // Search/Tracker state
  const [searchQuery, setSearchQuery] = React.useState("");
  const [trackedIssues, setTrackedIssues] = React.useState<Grievance[] | null>(null);

  const categories = [
    { code: "Ecology", labelEn: "Eco-Nationalism / River dumping", labelHi: "पर्यावरण / नदी प्रदूषण और हरित सुरक्षा" },
    { code: "Education", labelEn: "Value-based Classrooms / Schools", labelHi: "संस्कार युक्त विद्यालय / रोबोटिक्स सामग्री" },
    { code: "Self-Reliance", labelEn: "Youth Incubation / MSME funds", labelHi: "आत्मनिर्भर युवा / लघु उद्योग संसाधन" },
    { code: "Direct Governance", labelEn: "Middleware Ledgers / Complaints", labelHi: "विकेंद्रीकृत बहीखाता / बिचौलिया शिकायतें" }
  ];

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    playSynthesizedClick();

    // Compile new helper ticket
    const ticketNo = Math.floor(1000 + Math.random() * 9000);
    const newId = `BNCP-HELP-${ticketNo}`;

    const newTicket: Grievance = {
      id: newId,
      citizenName: citizenName.trim(),
      mobile: mobile.trim(),
      email: email.trim(),
      categoryEn: category,
      categoryHi: categories.find(c => c.code === category)?.labelHi.split("/")[0].trim() || "सामान्य",
      subject: subject.trim(),
      description: description.trim(),
      status: "PENDING",
      createdAt: new Date().toISOString()
    };

    onAddGrievance(newTicket);
    setSubmitSuccess(newTicket);

    // Reset Form fields
    setCitizenName("");
    setMobile("");
    setEmail("");
    setCategory("Ecology");
    setSubject("");
    setDescription("");
  };

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    playSynthesizedClick();

    if (!searchQuery.trim()) {
      setTrackedIssues(null);
      return;
    }

    const query = searchQuery.trim().toUpperCase();
    // Search grievances by Ticket ID, Phone Number or Name
    const found = grievances.filter(
      (g) =>
        g.id.toUpperCase().includes(query) ||
        g.mobile.includes(query) ||
        g.citizenName.toUpperCase().includes(query)
    );

    setTrackedIssues(found);
  };

  const clearTrackSearch = () => {
    playSynthesizedClick();
    setSearchQuery("");
    setTrackedIssues(null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "RESOLVED":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "INVESTIGATING":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      default:
        return "bg-red-500/10 text-red-400 border-red-500/30";
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="grievance-panel-section">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: File/Submit a Grievance */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#05152e]/80 border-2 border-[#FF9933]/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center space-x-3 mb-6 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-[#FF9933]/10 text-[#FF9933]">
                <MessageSquarePlus className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-sans text-xl font-extrabold text-white">
                  {currentLanguage === "hi" ? "नई शिकायत दर्ज करें" : "File a Citizen Grievance"}
                </h3>
                <p className="font-sans text-xs text-gray-400 mt-1">
                  {currentLanguage === "hi" ? "आपकी आवाज़ सीधे पार्टी के केंद्रीय निगरानी प्रभारियों तक पहुंचेगी" : "Your concerns are routed to regional Green Forces and direct auditors."}
                </p>
              </div>
            </div>

            {submitSuccess ? (
              /* Success Prompt */
              <div className="bg-[#000d26]/80 border border-emerald-500/30 rounded-2xl p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-base font-bold text-white">
                      {currentLanguage === "hi" ? "शिकायत सफलतापूर्वक दर्ज!" : "Grievance Logged Successfully!"}
                    </h4>
                    <p className="font-sans text-xs text-emerald-400 font-mono mt-1 font-bold">
                      {currentLanguage === "hi" ? `टिकट संख्या: ${submitSuccess.id}` : `TICKET REF: ${submitSuccess.id}`}
                    </p>
                  </div>
                </div>

                <p className="font-sans text-sm text-gray-300">
                  {currentLanguage === "hi"
                    ? "आपकी शिकायत हमारे सुरक्षित नागरिक डेटाबेस में दर्ज कर ली गई है। आप इसे दाईं ओर दिए गए ट्रैकर बॉक्स में टिकट संख्या दर्ज कर ट्रैक कर सकते हैं।"
                    : "Your ticket has been written into our auditable citizens directory. Regional dispatchers have been briefed."}
                </p>

                <button
                  onClick={() => {
                    playSynthesizedClick();
                    setSubmitSuccess(null);
                  }}
                  className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-black font-sans font-bold transition-all text-sm"
                >
                  {currentLanguage === "hi" ? "दूसरी शिकायत दर्ज करें" : "File Another Report"}
                </button>
              </div>
            ) : (
              /* Active Form */
              <form onSubmit={handleCreateTicket} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                      {currentLanguage === "hi" ? "नागरिक नाम *" : "Your Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={citizenName}
                      onChange={(e) => setCitizenName(e.target.value)}
                      placeholder={currentLanguage === "hi" ? "जैसे: हरीश कुमार" : "e.g. Harish Kumar"}
                      className="w-full px-4 py-3 bg-[#000d26]/80 text-white border border-white/10 rounded-xl focus:border-[#FFCC33] focus:outline-none placeholder-gray-600 text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                      {currentLanguage === "hi" ? "मोबाइल नंबर *" : "Mobile Number *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 bg-[#000d26]/80 text-white border border-white/10 rounded-xl focus:border-[#FFCC33] focus:outline-none placeholder-gray-600 text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                      {currentLanguage === "hi" ? "ईमेल आईडी (वैकल्पिक)" : "Email ID (Optional)"}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. harish@gmail.com"
                      className="w-full px-4 py-3 bg-[#000d26]/80 text-white border border-white/10 rounded-xl focus:border-[#FFCC33] focus:outline-none placeholder-gray-600 text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                      {currentLanguage === "hi" ? "शिकायत श्रेणी *" : "Category *"}
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-[#000d26] text-white border border-white/10 rounded-xl focus:border-[#FFCC33] focus:outline-none text-sm font-sans"
                    >
                      {categories.map((c) => (
                        <option key={c.code} value={c.code}>
                          {currentLanguage === "hi" ? c.labelHi : c.labelEn}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                    {currentLanguage === "hi" ? "शिकायत विषय *" : "Grievance/Report Subject *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={currentLanguage === "hi" ? "जैसे: तालाब में गैरकानूनी कचरा फेंकना" : "e.g. Toxic waste dumping in local stream"}
                    className="w-full px-4 py-3 bg-[#000d26]/80 text-white border border-white/10 rounded-xl focus:border-[#FFCC33] focus:outline-none placeholder-gray-600 text-sm font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 font-bold">
                    {currentLanguage === "hi" ? "शिकायत का विस्तृत विवरण *" : "Detailed Description *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={currentLanguage === "hi" ? "घटना का स्थान, समय, और आवश्यक साक्ष्यों का विवरण लिखें" : "Acknowledge date, landmark location, and incident details to speed audits."}
                    className="w-full px-4 py-3 bg-[#000d26]/80 text-white border border-white/10 rounded-xl focus:border-[#FFCC33] focus:outline-none placeholder-gray-600 text-sm font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF9933] hover:bg-[#FFCC33] text-black font-sans font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>{currentLanguage === "hi" ? "शिकायत सीधे प्रेषित करें" : "Dispatch Sovereign Ticket"}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Side: Grievance Tracker Engine */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Tracker Search Box */}
          <div className="bg-[#05152e]/80 border-2 border-[#FFCC33]/20 rounded-3xl p-6 shadow-2xl relative">
            <div className="flex items-center space-x-2.5 mb-4">
              <Search className="h-5 w-5 text-[#FFCC33]" />
              <h3 className="font-sans text-lg font-bold text-white">
                {currentLanguage === "hi" ? "शिकायत स्थिति ट्रैकर" : "Live Grievance Tracker"}
              </h3>
            </div>
            
            <p className="font-sans text-xs text-gray-400 mb-4">
              {currentLanguage === "hi" 
                ? "अपनी शिकायत के समाधान की ताज़ा स्थिति देखने के लिए यहाँ अपना 'टिकट संख्या' (उदा: BNCP-HELP-1084) या पंजीकृत मोबाइल संख्या दर्ज करें।"
                : "Type your ticket serial or mobile parameter to trace real-time middleware response."}
            </p>

            <form onSubmit={handleTrackSearch} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="BNCP-HELP-XXXX or Mobile"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-grow px-3 py-2 bg-[#000d26]/90 text-white border border-white/10 rounded-lg focus:border-[#FFCC33] focus:outline-none text-sm placeholder-gray-500 font-mono"
                />
                <button
                  type="submit"
                  className="bg-[#0c2044] hover:bg-[#102752] text-[#FFCC33] p-2.5 rounded-lg border border-[#FFCC33]/30 transition-all cursor-pointer"
                >
                  <Search className="h-4.5 w-4.5" />
                </button>
              </div>

              {(trackedIssues !== null || searchQuery !== "") && (
                <button
                  type="button"
                  onClick={clearTrackSearch}
                  className="text-xs text-gray-500 hover:text-white underline font-mono flex items-center justify-end w-full"
                >
                  Clear Results
                </button>
              )}
            </form>
          </div>

          {/* Tracker Results Console */}
          <div className="bg-[#030e20]/80 border border-white/5 rounded-2xl p-5 min-h-[180px] flex flex-col justify-between">
            {trackedIssues === null ? (
              /* Empty Tracker view */
              <div className="my-auto text-center space-y-2">
                <HelpCircle className="h-10 w-10 text-gray-600 mx-auto" />
                <p className="font-sans text-xs text-gray-500">
                  {currentLanguage === "hi"
                    ? "कोई ट्रैकिंग अनुरोध लंबित नहीं। परिणाम यहाँ प्रदर्शित होंगे।"
                    : "Enter query parameters to trace the civic dispatch."}
                </p>
              </div>
            ) : trackedIssues.length === 0 ? (
              /* No matching ticket found view */
              <div className="my-auto text-center space-y-2">
                <ShieldAlert className="h-10 w-10 text-red-500/60 mx-auto" />
                <p className="font-sans text-xs text-red-400">
                  {currentLanguage === "hi"
                    ? "क्षमा करें, इस नाम या टिकट संख्या की कोई शिकायत डेटाबेस में नहीं मिली।"
                    : "No such registered record exists in central ledger."}
                </p>
              </div>
            ) : (
              /* Matching grievances found list view */
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-1">
                <div className="text-[10px] font-mono text-gray-500 border-b border-white/5 pb-2 uppercase tracking-widest font-bold">
                  {trackedIssues.length} MATCHING COMPLAINT(S) FOUND
                </div>
                
                {trackedIssues.map((issue) => (
                  <div key={issue.id} className="p-3.5 rounded-lg bg-white/5 border border-white/5 space-y-2 text-xs">
                    <div className="flex justify-between items-start">
                      <span className="font-mono text-[#FFCC33] font-bold">{issue.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono border ${getStatusColor(issue.status)}`}>
                        {issue.status}
                      </span>
                    </div>

                    <div className="font-sans text-white font-bold leading-tight line-clamp-1">{issue.subject}</div>
                    <div className="font-sans text-gray-400 leading-relaxed max-h-[60px] overflow-y-auto">{issue.description}</div>
                    
                    {issue.notes && (
                      <div className="p-2 rounded bg-amber-500/5 border border-amber-500/20 text-amber-300 font-sans text-[11px] leading-relaxed mt-1">
                        <strong className="block font-bold">Auditor updates:</strong>
                        {issue.notes}
                      </div>
                    )}

                    <div className="font-mono text-[9px] text-gray-500 pt-1 flex justify-between border-t border-white/5">
                      <span>BY: {issue.citizenName}</span>
                      <span>{new Date(issue.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[10px] font-mono text-gray-500">
              <span>LEDGER SYNC STATUS</span>
              <span className="text-emerald-400 animate-pulse font-bold">● ONLINE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
