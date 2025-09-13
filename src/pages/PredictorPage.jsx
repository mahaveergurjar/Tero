import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

// Data for Indian States and Districts
const locationData = {
  "Andaman and Nicobar Islands": [
    "Nicobar",
    "North and Middle Andaman",
    "South Andaman",
  ],
  "Andhra Pradesh": [
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "Krishna",
    "Kurnool",
    "Prakasam",
    "SPSR Nellore",
    "Srikakulam",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa",
  ],
  "Arunachal Pradesh": [
    "Tawang",
    "West Kameng",
    "East Kameng",
    "Papum Pare",
    "Kurung Kumey",
    "Kra Daadi",
    "Lower Subansiri",
    "Upper Subansiri",
    "West Siang",
    "East Siang",
    "Siang",
    "Upper Siang",
    "Lower Siang",
    "Lower Dibang Valley",
    "Dibang Valley",
    "Anjaw",
    "Lohit",
    "Namsai",
    "Changlang",
    "Tirap",
    "Longding",
  ],
  Assam: [
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Dima Hasao",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup",
    "Kamrup Metropolitan",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong",
  ],
  Bihar: [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran",
  ],
  Chandigarh: ["Chandigarh"],
  Chhattisgarh: [
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada",
    "Dhamtari",
    "Durg",
    "Gariaband",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham",
    "Kanker",
    "Kondagaon",
    "Korba",
    "Koriya",
    "Mahasamund",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sukma",
    "Surajpur",
    "Surguja",
  ],
  "Dadra and Nagar Haveli and Daman and Diu": [
    "Dadra and Nagar Haveli",
    "Daman",
    "Diu",
  ],
  Delhi: [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East Delhi",
    "North West Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West Delhi",
    "West Delhi",
  ],
  Goa: ["North Goa", "South Goa"],
  Gujarat: [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ],
  Haryana: [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurugram",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Nuh",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar",
  ],
  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul and Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur",
    "Solan",
    "Una",
  ],
  "Jammu and Kashmir": [
    "Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur",
  ],
  Jharkhand: [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribagh",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahebganj",
    "Seraikela Kharsawan",
    "Simdega",
    "West Singhbhum",
  ],
  Karnataka: [
    "Bagalkot",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura",
    "Yadgir",
  ],
  Kerala: [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad",
  ],
  Ladakh: ["Kargil", "Leh"],
  Lakshadweep: ["Lakshadweep"],
  "Madhya Pradesh": [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha",
  ],
  Maharashtra: [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal",
  ],
  Manipur: [
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul",
  ],
  Meghalaya: [
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "North Garo Hills",
    "Ri Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills",
  ],
  Mizoram: [
    "Aizawl",
    "Champhai",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Serchhip",
  ],
  Nagaland: [
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Peren",
    "Phek",
    "Tuensang",
    "Wokha",
    "Zunheboto",
  ],
  Odisha: [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Deogarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghpur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur",
    "Sundargarh",
  ],
  Puducherry: ["Karaikal", "Mahe", "Puducherry", "Yanam"],
  Punjab: [
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Ferozepur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Mansa",
    "Moga",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "SAS Nagar",
    "Sangrur",
    "SBS Nagar",
    "Sri Muktsar Sahib",
    "Tarn Taran",
  ],
  Rajasthan: [
    "Ajmer",
    "Alwar",
    "Banswara",
    "Baran",
    "Barmer",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Dholpur",
    "Dungarpur",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Karauli",
    "Kota",
    "Nagaur",
    "Pali",
    "Pratapgarh",
    "Rajsamand",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur",
  ],
  Sikkim: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
  "Tamil Nadu": [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ],
  Telangana: [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
    "Jogulamba Gadwal",
    "Kamareddy",
    "Karimnagar",
    "Khammam",
    "Komaram Bheem",
    "Mahabubabad",
    "Mahabubnagar",
    "Mancherial",
    "Medak",
    "Medchal-Malkajgiri",
    "Nagarkurnool",
    "Nalgonda",
    "Nirmal",
    "Nizamabad",
    "Peddapalli",
    "Rajanna Sircilla",
    "Rangareddy",
    "Sangareddy",
    "Siddipet",
    "Suryapet",
    "Vikarabad",
    "Wanaparthy",
    "Warangal Rural",
    "Warangal Urban",
    "Yadadri Bhuvanagiri",
  ],
  Tripura: [
    "Dhalai",
    "Gomati",
    "Khowai",
    "North Tripura",
    "Sepahijala",
    "South Tripura",
    "Unakoti",
    "West Tripura",
  ],
  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Ayodhya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Etawah",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kheri",
    "Kushinagar",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Prayagraj",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi",
  ],
  Uttarakhand: [
    "Almora",
    "Bageshwar",
    "Chamoli",
    "Champawat",
    "Dehradun",
    "Haridwar",
    "Nainital",
    "Pauri Garhwal",
    "Pithoragarh",
    "Rudraprayag",
    "Tehri Garhwal",
    "Udham Singh Nagar",
    "Uttarkashi",
  ],
  "West Bengal": [
    "Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kalimpong",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur",
  ],
};

const PredictorPage = ({ onShowHome }) => {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  // State for location dropdowns
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setDistricts(locationData[state] || []);
    setSelectedDistrict(""); // Reset district selection when state changes
  };

  const handlePrediction = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPredictionResult(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockResult = {
      yield: (5.2 + Math.random() * 3).toFixed(1),
      confidence: (85 + Math.random() * 10).toFixed(1),
      unit: t("predictor.result.unit"),
    };

    setPredictionResult(mockResult);
    setIsLoading(false);
  };

  return (
    <section className="min-h-screen py-20 flex items-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 w-full">
        <button
          onClick={onShowHome}
          className="border border-stone-300/30 px-6 py-3 text-sm mb-10
                     hover:bg-stone-100/10 hover:border-stone-300/60 transition-all tracking-wide"
        >
          ← {t("predictor.back")}
        </button>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            {t("predictor.title")}
          </h1>
          <p className="text-lg opacity-70 tracking-wide">
            {t("predictor.subtitle")}
          </p>
        </div>

        {!predictionResult && !isLoading && (
          <form
            onSubmit={handlePrediction}
            className="bg-stone-50/3 border border-stone-300/10 p-8 sm:p-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Left column */}
              <div className="space-y-6">
                {/* Crop type */}
                <div>
                  <label className="block text-sm uppercase tracking-widest opacity-80 mb-3">
                    {t("predictor.form.crop")}
                  </label>
                  <select
                    required
                    className="w-full bg-transparent border-b border-stone-300/30 py-4 text-stone-100 focus:border-stone-300/80 focus:outline-none transition-colors appearance-none hover:border-stone-300/60 disabled:opacity-50 disabled:cursor-not-allowed custom-select"
                  >
                    <option className="bg-stone-500" value="">
                      Select Crop Type
                    </option>
                    <option className="bg-stone-500" value="wheat">
                      Wheat
                    </option>
                    <option className="bg-stone-500" value="rice">
                      Rice
                    </option>
                    <option className="bg-stone-500" value="corn">
                      Corn
                    </option>
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm uppercase tracking-widest opacity-80 mb-3">
                    State
                  </label>
                  <select
                    required
                    value={selectedState}
                    onChange={handleStateChange}
                    className="w-full bg-transparent border-b border-stone-300/30 py-4 text-stone-100 focus:border-stone-300/80 focus:outline-none transition-colors"
                  >
                    <option className="bg-stone-500" value="">
                      Select State
                    </option>
                    {Object.keys(locationData).map((state) => (
                      <option
                        key={state}
                        value={state}
                        className="bg-stone-500"
                      >
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                {/* District */}
                <div>
                  <label className="block text-sm uppercase tracking-widest opacity-80 mb-3">
                    District
                  </label>
                  <select
                    required
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedState}
                    className="w-full bg-transparent border-b border-stone-300/30 py-4 text-stone-100 focus:border-stone-300/80 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option className="bg-stone-500" value="">
                      Select District
                    </option>
                    {districts.map((district) => (
                      <option
                        key={district}
                        value={district}
                        className="bg-stone-500"
                      >
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                {/* Area */}
                <div>
                  <label className="block text-sm uppercase tracking-widest opacity-80 mb-3">
                    {t("predictor.form.area")}
                  </label>
                  <input
                    type="number"
                    required
                    min="0.1"
                    step="0.1"
                    placeholder="Area in hectares"
                    className="w-full bg-transparent border-b border-stone-300/30 py-4 text-stone-100 placeholder-stone-400 focus:border-stone-300/80 focus:outline-none transition-colors"
                  />
                </div>

                {/* Soil type */}
                <div>
                  <label className="block text-sm uppercase tracking-widest opacity-80 mb-3">
                    {t("predictor.form.soil")}
                  </label>
                  <select
                    required
                    className="w-full bg-transparent border-b border-stone-300/30 py-4 text-stone-100 focus:border-stone-300/80 focus:outline-none transition-colors"
                  >
                    <option className="bg-stone-500" value="">
                      Select Soil Type
                    </option>
                    <option className="bg-stone-500" value="clay">
                      Clay
                    </option>
                    <option className="bg-stone-500" value="sandy">
                      Sandy
                    </option>
                    <option className="bg-stone-500" value="loam">
                      Loam
                    </option>
                  </select>
                </div>

                {/* Planting date */}
                <div>
                  <label className="block text-sm uppercase tracking-widest opacity-80 mb-3">
                    {t("predictor.form.planting")}
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-transparent border-b border-stone-300/30 py-4 text-stone-100 focus:border-stone-300/80 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="border border-stone-300/40 px-16 py-4 text-base hover:bg-stone-100/10 hover:border-stone-300/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 tracking-wide"
              >
                {t("predictor.form.submit")}
              </button>
            </div>
          </form>
        )}

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-10 opacity-70">
            <div className="w-10 h-10 border-2 border-stone-300/20 border-t-stone-100 rounded-full animate-spin mx-auto mb-4"></div>
            <p>{t("predictor.loading")}</p>
          </div>
        )}

        {/* Result */}
        {predictionResult && (
          <div className="bg-stone-100/5 border border-stone-300/20 p-10 text-center">
            <h3 className="text-xl font-medium mb-4 uppercase tracking-wide">
              {t("predictor.result.title")}
            </h3>
            <div className="text-5xl font-light mb-2 text-stone-100">
              {predictionResult.yield}
            </div>
            <div className="text-stone-300 mb-6">{predictionResult.unit}</div>
            <div className="pt-6 border-t border-stone-300/10 opacity-80">
              <p>
                {t("predictor.result.confidence")} {predictionResult.confidence}
                %
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PredictorPage;
