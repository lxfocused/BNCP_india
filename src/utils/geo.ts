export interface DistrictData {
  name: string;
  constituencies: string[];
}

export interface StateData {
  stateNameHi: string;
  stateNameEn: string;
  districts: DistrictData[];
}

export const INDIAN_STATES_GEOGRAPHY: StateData[] = [
  {
    stateNameHi: "उत्तर प्रदेश",
    stateNameEn: "Uttar Pradesh",
    districts: [
      { name: "Lucknow", constituencies: ["Lucknow East", "Lucknow West", "Lucknow Cantt", "Sarojini Nagar"] },
      { name: "Kanpur Nagar", constituencies: ["Kanpur Cantt", "Arya Nagar", "Kalyanpur", "Govind Nagar"] },
      { name: "Varanasi", constituencies: ["Varanasi Cantt", "Varanasi North", "Varanasi South", "Sevapuri"] },
      { name: "Prayagraj", constituencies: ["Allahabad North", "Allahabad South", "Allahabad West", "Phulpur"] },
      { name: "Noida (Gautam Buddha Nagar)", constituencies: ["Noida", "Dadri", "Jewar"] }
    ]
  },
  {
    stateNameHi: "बिहार",
    stateNameEn: "Bihar",
    districts: [
      { name: "Patna", constituencies: ["Patna Sahib", "Kumhrar", "Bankipur", "Digha"] },
      { name: "Gaya", constituencies: ["Gaya Town", "Bodh Gaya", "Belaganj"] },
      { name: "Muzaffarpur", constituencies: ["Muzaffarpur Urban", "Kanti", "Minapur"] },
      { name: "Bhagalpur", constituencies: ["Bhagalpur City", "Nathnagar", "Kahalgaon"] }
    ]
  },
  {
    stateNameHi: "मध्य प्रदेश",
    stateNameEn: "Madhya Pradesh",
    districts: [
      { name: "Bhopal", constituencies: ["Bhopal Madhya", "Bhopal North", "Narela", "Huzur"] },
      { name: "Indore", constituencies: ["Indore-1", "Indore-2", "Indore-3", "Indore-4", "Indore-5"] },
      { name: "Gwalior", constituencies: ["Gwalior East", "Gwalior West", "Gwalior Rural"] },
      { name: "Jabalpur", constituencies: ["Jabalpur Cantt", "Jabalpur East", "Jabalpur West"] }
    ]
  },
  {
    stateNameHi: "दिल्ली",
    stateNameEn: "Delhi",
    districts: [
      { name: "New Delhi", constituencies: ["New Delhi Assembly", "Delhi Cantt", "Rajinder Nagar"] },
      { name: "South Delhi", constituencies: ["Greater Kailash", "Malviya Nagar", "Saket", "Kalkaji"] },
      { name: "North Delhi", constituencies: ["Model Town", "Chandni Chowk", "Sadar Bazar"] },
      { name: "East Delhi", constituencies: ["Laxmi Nagar", "Preet Vihar", "Shahdara", "Gandhi Nagar"] }
    ]
  },
  {
    stateNameHi: "महाराष्ट्र",
    stateNameEn: "Maharashtra",
    districts: [
      { name: "Mumbai City", constituencies: ["Colaba", "Malabar Hill", "Byculla", "Mumbadevi"] },
      { name: "Mumbai Suburban", constituencies: ["Bandra West", "Andheri East", "Andheri West", "Borivali"] },
      { name: "Pune", constituencies: ["Shivajinagar", "Kothrud", "Parvati", "Pune Cantt"] },
      { name: "Nagpur", constituencies: ["Nagpur West", "Nagpur South", "Nagpur East"] }
    ]
  },
  {
    stateNameHi: "राजस्थान",
    stateNameEn: "Rajasthan",
    districts: [
      { name: "Jaipur", constituencies: ["Hawa Mahal", "Malviya Nagar", "Civil Lines", "Adarsh Nagar"] },
      { name: "Jodhpur", constituencies: ["Sardarpura", "Jodhpur Town", "Soorsagar"] },
      { name: "Udaipur", constituencies: ["Udaipur Rural", "Udaipur Town"] },
      { name: "Kota", constituencies: ["Kota North", "Kota South", "Ladpura"] }
    ]
  },
  {
    stateNameHi: "गुजरात",
    stateNameEn: "Gujarat",
    districts: [
      { name: "Ahmedabad", constituencies: ["Vatva", "Nikol", "Maninagar", "Ellisbridge"] },
      { name: "Surat", constituencies: ["Surat East", "Surat West", "Surat North", "Chorasi"] },
      { name: "Vadodara", constituencies: ["Vadodara City", "Sayajigunj", "Akota"] }
    ]
  }
];
