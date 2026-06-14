import { AppState } from "../types";

export const INITIAL_APP_STATE: AppState = {
  news: [
    {
      id: "news-1",
      titleEn: "BNCP Announces Green Vigilance Force for River Action Plans",
      titleHi: "बीएनसीपी ने नदी कार्य योजनाओं के लिए 'हरित प्रहरी बल' की घोषणा की",
      date: "2026-06-10",
      categoryEn: "Ecology",
      categoryHi: "पर्यावरण",
      contentEn: "Under our Eco-Nationalism policy, BNCP is setting up youth-led Green Vigilance Forces across municipal zones to monitor industrial waste and enforce a zero-dumping policy.",
      contentHi: "हमारी पर्यावरण-राष्ट्रवाद नीति के तहत, बीएनसीपी औद्योगिक कचरे की निगरानी करने और शून्य-डंपिंग नीति लागू करने के लिए नगर निगम क्षेत्रों में युवाओं के नेतृत्व में हरित विकास प्रहरी बल स्थापित कर रही है।"
    },
    {
      id: "news-2",
      titleEn: "Decentralized MSME Incubation Hubs Launched in 10 Districts",
      titleHi: "10 जिलों में विकेंद्रीकृत लघु उद्योग (MSME) इनक्यूबेशन हब शुरू किए गए",
      date: "2026-06-08",
      categoryEn: "Self-Reliance",
      categoryHi: "आत्मनिर्भरता",
      contentEn: "Empowering youth to become employment creators, BNCP has inaugurated collaborative district hubs offering tax exemptions, design facilities, and zero-interest seed capital.",
      contentHi: "युवाओं को रोजगार निर्माता बनने के लिए सशक्त बनाते हुए, बीएनसीपी ने कर छूट, डिजाइन सुविधाएं और शून्य-ब्याज बीज पूंजी की पेशकश करने वाले जिला केंद्रों का उद्घाटन किया है।"
    },
    {
      id: "news-3",
      titleEn: "Robotics and Moral Values: Re-imagining Primary Education",
      titleHi: "रोबोटिक्स और नैतिक मूल्य: प्राथमिक शिक्षा की नई अवधारणा",
      date: "2026-06-05",
      categoryEn: "Education",
      categoryHi: "शिक्षा",
      contentEn: "Our Value-Based Education initiative integrates AI and robotics curriculum alongside character building values from early grades to prepare future-ready ethical citizens.",
      contentHi: "हमारी संस्कार युक्त आधुनिक शिक्षा नीति भविष्य के जागरूक और नैतिक नागरिक तैयार करने के लिए शुरुआती कक्षाओं से ही चरित्र निर्माण मूल्यों के साथ-साथ एआई और रोबोटिक्स पाठ्यक्रम को जोड़ती है।"
    }
  ],
  gallery: [
    {
      id: "g-1",
      url: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=600",
      titleEn: "Citizens Assemblies in Prayagraj",
      titleHi: "प्रयागराज में जन चौपाल सभा",
      categoryEn: "Direct Governance",
      categoryHi: "स्वायत्त शासन"
    },
    {
      id: "g-2",
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
      titleEn: "Grassroots Education Workshop in Lucknow",
      titleHi: "लखनऊ में जमीनी स्तर की शिक्षा कार्यशाला",
      categoryEn: "Education",
      categoryHi: "शिक्षा"
    },
    {
      id: "g-3",
      url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=600",
      titleEn: "Green Planting Drive by Green Vigilance Force",
      titleHi: "हरित प्रहरी बल द्वारा सघन वृक्षारोपण अभियान",
      categoryEn: "Ecology",
      categoryHi: "पर्यावरण"
    }
  ],
  founder: {
    nameEn: "Shraddhey Ramdas Rastogi Ji",
    nameHi: "श्रद्धेय रामदास रस्तोगी जी",
    roleEn: "Founder - Bharatiya Navyuvak Chetna Party",
    roleHi: "संस्थापक - भारतीय नवयुवक चेतना पार्टी",
    messageEn: "Their elevated thoughts, absolute honesty, and blessings laid the foundation of this national consciousness movement. His life is our guiding light.",
    messageHi: "उनके उच्च विचार, पूर्ण ईमानदारी और आशीर्वाद ने इस राष्ट्रीय चेतना आंदोलन की आधारशिला रखी। उनका जीवन ही हमारा मार्गदर्शक आलोक है।",
    portraitUrl: ""
  },
  socials: {
    whatsapp: "https://wa.me/919999999999?text=Jai%20Hind%21%20I%20want%20to%20connect%20with%20BNCP",
    twitter: "https://twitter.com/bncp_india",
    youtube: "https://youtube.com/bncp_official",
    facebook: "https://facebook.com/bncp.india"
  },
  members: [
    {
      id: "BNCP-2026-681402",
      fullName: "Anand Vardhan Sharma",
      mobile: "9876543210",
      age: 29,
      state: "Uttar Pradesh",
      district: "Lucknow",
      constituency: "Lucknow East",
      joinedAt: "2026-06-12T14:22:10.550Z"
    },
    {
      id: "BNCP-2026-904212",
      fullName: "Meera Devi Yadav",
      mobile: "8765432109",
      age: 34,
      state: "Bihar",
      district: "Patna",
      constituency: "Patna Sahib",
      joinedAt: "2026-06-13T09:12:00.000Z"
    },
    {
      id: "BNCP-2026-105439",
      fullName: "Rajesh K. Tukaram",
      mobile: "7654321098",
      age: 42,
      state: "Maharashtra",
      district: "Pune",
      constituency: "Kothrud",
      joinedAt: "2026-06-14T05:40:00.000Z"
    }
  ],
  grievances: [
    {
      id: "BNCP-HELP-1084",
      citizenName: "Satish Kumar Patel",
      mobile: "9450321245",
      email: "satish.patel@gmail.com",
      categoryEn: "Ecology",
      categoryHi: "पर्यावरण",
      subject: "Illegal Industrial Effluent Dumping in River Bed",
      description: "A small tannery is active near our village border and dumping non-treated dark water in the Ganga basin during night hours. Request Green Vigilance Force intervention.",
      status: "INVESTIGATING",
      createdAt: "2026-06-12T16:05:22.000Z",
      notes: "Assigned Lucknow Green Force team for water sample collection on June 13."
    },
    {
      id: "BNCP-HELP-1121",
      citizenName: "Kumari Vineeta Singh",
      mobile: "9935104231",
      email: "vineeta.singh@outlook.com",
      categoryEn: "Education",
      categoryHi: "शिक्षा",
      subject: "Basic Robotics kit shortage in Municipal High School",
      description: "We have designated modern secondary rooms but AI kits and sensor packs are yet to arrive from the division head. Students are extremely eager.",
      status: "PENDING",
      createdAt: "2026-06-14T08:15:00.000Z"
    }
  ],
  analytics: {
    sessionsCount: 1420,
    actionsTriggered: 6540,
    ledgersGenerated: 35
  }
};
