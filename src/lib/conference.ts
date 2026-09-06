/**
 * Single source of conference facts — transcribed from the official
 * IACS 2027 brochure (Institute of Pharmaceutical Research, GLA University).
 */

export const conference = {
  name: "International Conference 2027",
  society: "International Academy of Cardiovascular Sciences (IACS) – India Section",
  organiser: "Institute of Pharmaceutical Research, GLA University, Mathura",
  theme: {
    line1: "Transforming Cardiovascular Care",
    line2: "Through Science, Technology and Innovation",
  },
  dates: "11–13 February 2027",
  venue: "GLA University, Mathura, Uttar Pradesh, India",
  address: "Institute of Pharmaceutical Research, GLA University, Mathura – 281406, U.P., India",
  email: "iacs2027@gla.ac.in",
  phone: "+91 9756866042",
  registrationFormUrl:
    "https://docs.google.com/forms/d/11WC95Z6VY8R4Nln3Y9OIjMwFWVJVIdiw6x-3ONuJnXU/viewform",
  
  // Image Configuration for the About Page
  aboutAcademyImage: "/images/Bg images/About/About Sec1.png", // Leave empty to use SVG placeholder
  aboutInstituteImage: "/images/Bg images/About/About Sec2.png", // Leave empty to use SVG placeholder
  joinConferenceBackground: "/images/Bg images/About/GLA Drone Shot2.png", // Leave empty for dark green background
};

export const PLACEHOLDER = "To be announced in the official brochure";

export const keyDates = [
  { date: "25 August 2026", label: "Registration & Abstract submission open" },
  { date: "25 December 2026", label: "Abstract submission deadline" },
  { date: "05 January 2027", label: "Registration deadline" },
];

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Committee", to: "/committee" },
  { label: "Speakers", to: "/speakers" },
  { label: "Programme", to: "/programme" },
  { label: "Abstracts", to: "/abstracts" },
  { label: "Registration", to: "/registration" },
  { label: "Sponsorship", to: "/sponsorship" },
  { label: "Venue", to: "/venue" },
  { label: "Contact", to: "/contact" },
] as const;

export const secondaryLinks = [
  { label: "Speakers", to: "/speakers" },
  { label: "Sponsorship", to: "/sponsorship" },
  { label: "Programme", to: "/programme" },
  { label: "Abstracts", to: "/abstracts" },
] as const;

/* ---------------------------------------------------------------- people */

export type Person = { name: string; role?: string; org?: string; phone?: string; image?: string };

export const leadership: { group: string; people: Person[] }[] = [
  {
    group: "Chief Patron",
    people: [
      {
        name: "Shri Narayan Das Agrawal",
        role: "Chancellor",
        org: "GLA University, Mathura",
        image: "/People Images/Chief Patron/Narayan-Das-Agrawal.jpg",
      },
    ],
  },
  {
    group: "Co-Chief Patrons",
    people: [
      {
        name: "Shri Neeraj Agrawal",
        role: "CEO",
        org: "GLA University, Mathura",
        image: "/People Images/Co-Chief Patrons/Neeraj Aggrawal.png",
      },
      {
        name: "Dr. Vivek Agrawal",
        role: "CFO",
        org: "GLA University, Mathura",
        image: "/People Images/Co-Chief Patrons/Vivek-Aggrawal.png",
      },
    ],
  },
  {
    group: "Patrons",
    people: [
      {
        name: "Prof. (Dr.) Anup Kumar Gupta",
        role: "Vice-Chancellor",
        org: "GLA University, Mathura",
        image: "/People Images/Patrons/Anup Kumar Gupta.png",
      },
      {
        name: "Shri Ashok Kumar Singh",
        role: "Registrar",
        org: "GLA University, Mathura",
        image: "/People Images/Patrons/Shri Ashok Kumar Singh.png",
      },
    ],
  },
  {
    group: "IACS Patrons",
    people: [
      {
        name: "Prof. (Dr.) Naranjan S. Dhalla",
        role: "Founder and Honorary Life President, IACS",
        org: "University of Manitoba, Winnipeg, Canada",
        image: "/People Images/IACS Patrons/Prof. Naranjan S. Dhalla.png",
      },
      {
        name: "Prof. (Dr.) Ramesh Kumar Goyal",
        role: "President, IACS – India Section; Former Vice-Chancellor, DPSRU",
        org: "New Delhi, India",
        image: "/People Images/IACS Patrons/Prof. (Dr.) Ramesh Kumar Goyal.png",
      },
      {
        name: "Prof. (Dr.) Rajiv Narang",
        role: "Head, Department of Cardiology",
        org: "AIIMS, New Delhi, India",
        image: "/People Images/IACS Patrons/Prof. (Dr.) Rajiv Narang Head.png",
      },
    ],
  },
  {
    group: "Chairman",
    people: [
      {
        name: "Prof. (Dr.) Harlokesh Narayan Yadav",
        role: "Vice-President, IACS – India Section; Department of Pharmacology",
        org: "AIIMS, New Delhi, India",
        image: "/People Images/Chairman/Prof. (Dr.) Harlokesh Narayan Yadav .png",
      },
    ],
  },
  {
    group: "IACS – India Section Office Bearers",
    people: [
      {
        name: "Dr. Mukesh Nandave",
        role: "Secretary, IACS – India Section; Associate Dean, DPSRU",
        org: "New Delhi, India",
        image: "/People Images/Office Bearers/Dr. Mukesh Nandave.png",
      },
      {
        name: "Dr. Ruchi Tandon",
        role: "Finance Secretary, IACS – India Section; Senior Scientist",
        org: "BRIC-THSTI, Faridabad, India",
        image: "/People Images/Office Bearers/Dr. Ruchi Tandon.png",
      },
    ],
  },
  {
    group: "Organizing Secretary",
    people: [
      {
        name: "Prof. (Dr.) Kamal Shah",
        role: "Director, Institute of Pharmaceutical Research",
        org: "GLA University, Mathura, India",
        phone: "+91 9756866042",
        image: "/People Images/Organizing Secretary/Prof. (Dr.) Kamal Shah.png",
      },
    ],
  },
  {
    group: "Co-Organizing Secretaries",
    people: [
      { 
        name: "Prof. (Dr.) Prabhat K. Upadhyay", 
        phone: "+91 9690088979",
        image: "/People Images/Co-Organizing & Joint Secretaries/Prof. (Dr.) Prabhat K. Upadhyay.png"
      },
      { 
        name: "Dr. Yogesh Murti", 
        phone: "+91 8006240340",
        image: "/People Images/Co-Organizing & Joint Secretaries/Dr. Yogesh Murti.png"
      },
      { 
        name: "Dr. Jitendra Gupta", 
        phone: "+91 8979136611",
        image: "/People Images/Co-Organizing & Joint Secretaries/Dr. Jitendra Gupta.png"
      },
    ],
  },
  {
    group: "Joint Secretaries",
    people: [
      { name: "Dr. Ahsas Goyal", phone: "+91 9012204640" },
      { name: "Dr. Niraj Kumar Singh", phone: "+91 8475985031" },
      { name: "Dr. Vibhav Varshney", phone: "+91 7417540181" },
    ],
  },
];

export const scientificAdvisors: Person[] = [
  {
    name: "Dr. Dinesh Kumar",
    role: "Head of Pediatric Cardiology",
    org: "Dr. Ram Manohar Lohia Hospital, New Delhi, India",
  },
  { name: "Dr. Akhil Sharma", role: "Department of Cardiology", org: "KGMU, Lucknow, India" },
  { name: "Dr. Satyavir Yadav", role: "Department of Cardiology", org: "AIIMS, New Delhi, India" },
  { name: "Dr. Raj Kumar", role: "Department of Physiology", org: "AIIMS, New Delhi, India" },
  {
    name: "Dr. Mayank Yadav",
    role: "Cardio-Thoracic Sciences Centre (CTVS)",
    org: "AIIMS, New Delhi, India",
  },
  {
    name: "Dr. Rajeev Taliyan",
    role: "Head, Department of Pharmacy",
    org: "BITS Pilani, Rajasthan, India",
  },
];

export const eminentPanel: Person[] = [
  {
    name: "Dr. Kewal Kishan Talwar",
    role: "Padma Bhushan Awardee & Chairman",
    org: "PSRI Hospital, New Delhi, India",
  },
  {
    name: "Prof. N.K. Ganguly",
    role: "Padma Bhushan Awardee & Honorary Senior Research Professor",
    org: "Institute of Liver & Biliary Sciences, New Delhi",
  },
  { name: "Dr. Padam Singh", role: "Ex-Additional DG, ICMR", org: "India" },
  { name: "Dr. Y.K. Gupta", role: "President, AIIMS Kalyani", org: "India" },
  { name: "Dr. Prakash V. Diwan", role: "Founder Director, NIPER", org: "Hyderabad, India" },
  { name: "Dr. CC Kartha", role: "Past President, IACS – India Section" },
  { name: "Dr. Neeraj Parakh", role: "Department of Cardiology", org: "AIIMS, New Delhi, India" },
  {
    name: "Dr. Samir Malhotra",
    role: "Department of Pharmacology",
    org: "PGIMER, Chandigarh, India",
  },
  { name: "Dr. Nirmal Singh", org: "Punjabi University Patiala, Punjab, India" },
];

export const internationalSpeakers: Person[] = [
      {
    name: "Prof. Naranjan S. Dhalla",
    role: "Distinguished Professor, Max Rady College of Medicine",
    org: "University of Manitoba, Canada",
    image: "/People Images/IACS Patrons/Prof. Naranjan S. Dhalla.png",
  },
  {
    name: "Dr. Suresh Tyagi",
    role: "School of Medicine",
    org: "University of Louisville, USA",
    image: "/People Images/International Speakers/Dr Suresh Tyagi.png",
  },
  {
    name: "Prof. Devendra K. Agrawal",
    role: "Professor and Director",
    org: "Western University of Health Sciences, Pomona, USA",
    image: "/People Images/International Speakers/Devendra K. Agrawal.png",
  },
  {
    name: "Dr. Andras Varro",
    role: "Department of Pharmacology and Pharmacotherapy",
    org: "University of Szeged, Hungary",
    image: "/People Images/International Speakers/Dr. Andras Varro.png",
  },
  {
    name: "Dr. Milos Stojiljkovic",
    org: "University of Banja Luka, Bosnia and Herzegovina",
    image: "/People Images/International Speakers/Dr. Milos Stojiljkovic.png",
  },
  {
    name: "Dr. Vladimir Jakovljevic",
    role: "Department of Physiology, Faculty of Medical Sciences",
    org: "University of Kragujevac, Serbia",
    image: "/People Images/International Speakers/Dr. Vladimir Jakovljevic.png",
  },
  {
    name: "Prof. Dragan M. Djuric",
    role: "Medical Physiology Chair / Founder, PhD Program in Physiological Sciences",
    org: "Institute of Medical Physiology “Richard Burian”, University of Belgrade, Serbia",
    image: "/People Images/International Speakers/Prof. Dragan M. Djuric.png",
  },
  {
    name: "Dr. Melchior Luiz Lima",
    role: "Cardiovascular Surgeon",
    org: "Centrocor-Heart Clinic Ltd., Vitória, ES, Brazil",
    image: "/People Images/International Speakers/Dr. Melchior Luiz Lima.png",
  },
  { 
    name: "Dr. Antoinette Oliveira Blackman", 
    org: "Brazil",
    image: "/People Images/International Speakers/Dr. Antoinette Oliveira Blackman.png",
  },
  {
    name: "Dr. Marija Stojanovic",
    role: "Institute of Medical Physiology “Richard Burian”",
    org: "University of Belgrade, Serbia",
    image: "/People Images/International Speakers/Dr. Marija Stojanovic.png",
  },
  {
    name: "Dr. Jagat Narula",
    role: "Executive Vice President & Chief Academic Officer, Heart & Vascular Institute",
    org: "McGovern Medical School, UTHealth Houston, TX, USA",
    image: "/People Images/International Speakers/Dr. Jagat Narula.png",
  },
  {
    name: "Dr. Danina Muntean",
    role: "Professor of Pathophysiology",
    org: "Victor Babeș University of Medicine and Pharmacy, Timișoara, Romania",
    image: "/People Images/International Speakers/Dr. Danina Muntean.png",
  },
  {
    name: "Prof. Raj Kishore",
    role: "Chair and Professor, Aging and Cardiovascular Discovery Center",
    org: "Lewis Katz School of Medicine, Temple University, Philadelphia, PA, USA",
    image: "/People Images/International Speakers/Prof. Raj Kishore.png",
  },
  {
    name: "Prof. Srinivas Tipparaju",
    role: "Professor and Chair, William Saunders Endowed Chair in Geriatric Pharmacotherapy",
    org: "USF Health Taneja College of Pharmacy, Tampa, FL, USA",
    image: "/People Images/International Speakers/Prof. Srinivas Tipparaju.png",
  },
  {
    name: "Prof. Yi-Gang Wang",
    role: "Director, Regenerative Medicine Division",
    org: "University of Cincinnati College of Medicine, Cincinnati, OH, USA",
    image: "/People Images/International Speakers/Prof. Yi-Gang Wang.png",
  },
  {
    name: "Prof. Petr Ostadal",
    role: "President, Czech Society of Cardiology; Professor of Cardiology",
    org: "Second Faculty of Medicine, Charles University, Prague, Czech Republic",
    image: "/People Images/International Speakers/Prof. Petr Ostadal.png",
  },
  {
    name: "Prof. Roberto Bolli",
    role: "Professor of Medicine and Physiology; Director, Institute of Molecular Cardiology",
    org: "Louisville, KY, USA",
    image: "/People Images/International Speakers/Prof. Roberto Bolli.png",
  },
  {
    name: "Prof. Goran Krstacic",
    role: "Professor of Cardiology; Director, Institute for Cardiovascular Prevention and Rehabilitation",
    org: "University of Osijek, Zagreb, Croatia",
    image: "/People Images/International Speakers/Prof. Goran Krstacic.png",
  },
  {
    name: "Prof. Henrique Furtado",
    role: "Professor of Medicine; Vice President, Latin America Section",
    org: "Federal University of Tocantins, Palmas, Brazil",
    image: "/People Images/International Speakers/Prof. Henrique Furtado.png",
  },
];

export const advisoryInternational = [
  "Dr. Naranjan S Dhalla (Canada)",
  "Dr. Devendra K. Agrawal (Pomona, CA, USA)",
  "Dr. Suresh Tyagi (USA)",
  "Dr. Vinay Parikh (USA)",
  "Dr. Amit Tiwari (USA)",
  "Dr. Claucio Ronco (Italy)",
  "Dr. Sanjeev Dhingra (Canada)",
  "Dr. Grant N. Pierce (Winnipeg, Canada)",
  "Dr. Andras Varro (Szeged, Hungary)",
  "Dr. Roberto Bolli (Louisville, USA)",
  "Dr. Michael Czubryt (Winnipeg, MB, Canada)",
  "Dr. Buddhadeb Dawn (Las Vegas, NV, USA)",
  "Dr. Morris Karmazyn (London, ON, Canada)",
  "Dr. Naoki Makino (Beppu, Japan)",
  "Dr. Guilherme Oliveira (Tampa, USA)",
  "Dr. Bohuslav Ostadal (Prague, Czech Republic)",
  "Dr. Jan Slezak (Bratislava, Slovak Republic)",
  "Dr. Paramjit S. Tappia (Winnipeg, Canada)",
];

export const advisoryNational = [
  "Dr. Ramesh K Goyal (Ex-VC, DPSRU, New Delhi)",
  "Dr. Chandrasekaran Kartha (Past-President, IACS)",
  "Dr. Harlokesh Narayan Yadav (Vice President, IACS)",
  "Dr. Tejal Gandhi (Vice President, IACS)",
  "Dr. Hari Krishnan S (Vice President, IACS)",
  "Dr. Trupti Swain (Vice President, IACS)",
  "Dr. Praveen Varma (Vice President, IACS)",
  "Dr. Mukesh Nandave (Secretary General, IACS)",
  "Dr. Abdul Jaleel (Joint Secretary, IACS)",
  "Dr. Ramu Adela (Member, IACS)",
  "Dr. Kalyani Barve (Member, IACS)",
  "Dr. Md. Iqbal Alam (HIMSR, New Delhi)",
  "Dr. Shyam S Sharma (NIPER, Mohali)",
  "Dr. RJ Yadav (ICMR, New Delhi)",
  "Dr. RR Kasliwal (Medanta, Gurugram)",
  "Dr. Sandeep Seth (AIIMS, New Delhi)",
  "Dr. Rakesh Yadav (AIIMS, New Delhi)",
  "Dr. Ambuj Roy (AIIMS, New Delhi)",
  "Dr. S. Ramakrishnan (AIIMS, New Delhi)",
  "Dr. Saurabh Gupta (AIIMS, New Delhi)",
  "Dr. Ratan Prakash Dhir (ESIC, Faridabad, Haryana)",
  "Dr. Raj Kanwar Yadav (AIIMS, New Delhi)",
  "Dr. Arvind Kumar (AIIMS, New Delhi)",
  "Dr. Sudhir Arwa (AIIMS, New Delhi)",
  "Dr. Asit Ranjan Mridha (AIIMS, New Delhi)",
  "Dr. Upendra Baitha (AIIMS, New Delhi)",
  "Dr. Ashish Kakkar (PGIMER, Chandigarh)",
  "Dr. Anupam Mittal (PGIMER, Chandigarh)",
  "Dr. OM Shankar Yadav (BHU, Varanasi)",
  "Dr. RD Yadav (Batra Hospital, New Delhi)",
  "Dr. Shahid (AIIMS, New Delhi)",
  "Dr. Pawan Krishan (Punjabi University, Patiala)",
  "Dr. Anil Kumar (Panjab University, Chandigarh)",
  "Dr. Nusrat Shafiq (PGIMER, Chandigarh)",
  "Dr. B K Roy (Ranchi University, Ranchi)",
  "Dr. Neeraj Agrawal (Sir Ganga Ram Hospital, New Delhi)",
  "Dr. Ashutosh Marwah (Fortis, New Delhi)",
  "Dr. Arunabha Ray (Ex-Director, VPCI, New Delhi)",
  "Dr. Kavita Gulati (Member, IACS)",
  "Dr. Abhinav Kanwal (Member, IACS)",
  "Dr. Jagavelu Kumaravelu (Member, IACS)",
  "Dr. Nitish Mahapatra (Member, IACS)",
  "Dr. Ipseeta Ray Mohanty (Member, IACS)",
  "Dr. Jeemon P (Member, IACS)",
  "Dr. Bhoomika Patel (Member, IACS)",
  "Dr. Dhandapany P (Member, IACS)",
  "Prof. Syed Ziaur Rahman (JNMC, AMU Aligarh)",
];

export const advisoryUniversity = [
  "Prof. Diwakar Bharadwaj, Pro Vice-Chancellor, Greater Noida Campus",
  "Prof. Ashok Bhansali, Dean, Institute of Engineering & Technology",
  "Prof. Ashish Sharma, Dean Academics",
  "Prof. Kamal Sharma, Dean R & D",
  "Prof. Vishal Goyal, Director IQAC",
  "Prof. Somesh Dhamija, Dean, Institute of Legal Studies & Research",
  "Prof. Dilip Kumar Sharma, Dean, International Relations & Academic Collaborations",
  "Prof. Himanshu Sharma, Dean Student Welfare",
  "Prof. Shailesh Kumar Singh, Dean, Faculty of Agricultural Sciences",
  "Prof. Atul Bansal, Controller of Examinations",
  "Prof. Anurag Singh, Director, Institute of Business Management",
  "Prof. Anirudh Pradhan, Distinguished Professor, Department of Mathematics",
  "Prof. Aasheesh Shukla, Associate Dean of Academics",
  "Prof. Kushagra Kulshreshtha, Associate Dean Research",
  "Prof. Piyush Singhal, Head, Department of Mechanical Engineering",
  "Prof. Vinay Deolia, Head, Department of Electrical, Electronics & Communication Engineering",
  "Prof. Atul Kant Piyoosh, Head, Department of Civil Engineering",
  "Prof. Utkal Khandelwal, Head, Institute of Business Management",
  "Dr. Ramanjaney Kumar Upadhyay, Head, Department of English",
  "Prof. Anuj Vijay, Head, Department of Physics",
  "Prof. Deepak Kumar Das, Head, Department of Chemistry",
  "Prof. Manish Goyal, Head, Department of Mathematics",
  "Prof. Anjana Goel, Head, Department of Biotechnology",
  "Prof. Vikas Kumar Sharma, Principal, University Polytechnic",
  "Prof. Rajnee Gaur, Principal, Faculty of Education",
  "Prof. Rohit Agrawal, Head, Institute of Engineering & Technology",
  "Dr. Sandeep Rathore, Associate Head, Institute of Engineering & Technology",
  "Dr. Hitendra Garg, Associate Head, Institute of Engineering & Technology",
  "Dr. Neeraj Gupta, Associate Head, Institute of Engineering & Technology",
  "Prof. Sankar Majumder, Department of Economics",
  "Mr. Saurabh Goyal, Director – Corporate Relations",
  "Mr. Suresh Pratap Singh, Director, Training & Development",
  "Prof. Amit Agrawal, Director, Online Courses",
  "Mr. Pushkar Sharma, Associate Director, Center for Skill & Entrepreneurship Development",
];

export const organizingCommittees: { title: string; members: string[] }[] = [
  {
    title: "Scientific Committee",
    members: [
      "Dr. Sonia Singh",
      "Dr. Siva Prasad Panda",
      "Dr. Anuj Garg",
      "Dr. Ahsas Goyal",
      "Dr. Ashima Ahuja",
      "Dr. Nupur",
      "Ms. Anshika",
      "Mr. Surendra Kumar",
    ],
  },
  {
    title: "Registration Committee",
    members: [
      "Dr. Shiv Bhadur",
      "Dr. Keshav Bansal",
      "Dr. Mrinal Rohilla",
      "Dr. Deepa Lashkari",
      "Ms. Radha Shree",
      "Dr. Poornima Agrawal",
      "Ms. Divya Singh",
      "Ms. Sunaina",
      "Mr. Ramu",
    ],
  },
  {
    title: "Accommodation Committee",
    members: [
      "Dr. Bhupesh Semwal",
      "Dr. Vibhav Varshney",
      "Dr. Krishan Kumar",
      "Mr. Yogesh Tiwari",
      "Mr. Amit Gola",
      "Mr. Ashok Kumar",
    ],
  },
  {
    title: "Transport Committee",
    members: [
      "Dr. Gopal P. Agrawal",
      "Dr. Ashima Ahuja",
      "Mr. Bharat Bhushan",
      "Mr. Swayam Prasad",
      "Mr. Pankaj Kumar",
      "Mr. Satyapal Singh",
    ],
  },
  {
    title: "Food and Hospitality Committee",
    members: [
      "Dr. Shashank Chaturvedi",
      "Dr. Kantrol Kumar Sahu",
      "Dr. Gaurav Krishna",
      "Dr. Vinay Kumar",
      "Dr. Rukaiah Begum",
      "Mr. Ayush Shrivastava",
      "Mr. Mukesh Kumar Pali",
      "Mr. Pankaj Kumar Sharma",
      "Mr. Manoj Singh",
    ],
  },
  {
    title: "Finance & Purchase Committee",
    members: [
      "Dr. Prabhat K. Upadhyay",
      "Dr. Niraj Kumar Singh",
      "Dr. Rupali Bharti",
      "Ms. Sudha Sharma",
      "Ms. Sumita Das",
      "Mr. Jitendra Agrawal",
    ],
  },
  {
    title: "IT Support Committee (Online Mode)",
    members: [
      "Dr. Reena Gupta",
      "Dr. Jeetendra K. Gupta",
      "Dr. Suman Sinha",
      "Dr. Yati Sharma",
      "Ms. Mahima Borkar",
      "Mr. Dao Dayal",
    ],
  },
  {
    title: "Sponsorship Committee",
    members: ["Dr. Jitendra Gupta", "Dr. Siva Prasad Panda", "Dr. Murugesan Vanangamudi"],
  },
  {
    title: "Branding, Press, Website and Stage Management Committee",
    members: [
      "Dr. Yogesh Murti",
      "Dr. Sonia Singh",
      "Dr. Neetu Agrawal",
      "Dr. Shilpi Pathak",
      "Ms. Akansha Thakur",
      "Ms. Arti Singh",
    ],
  },
];

/* ----------------------------------------------------------- registration */

export const registrationFees = [
  {
    category: "Students (UG / PG / Ph.D.)",
    inEarly: "₹3,000/-",
    inLate: "₹3,500/-",
    inSpot: "₹4,000/-",
    fgEarly: "US $50",
    fgLate: "US $75",
  },
  {
    category: "Faculty Members",
    inEarly: "₹3,500/-",
    inLate: "₹4,000/-",
    inSpot: "₹4,500/-",
    fgEarly: "US $100",
    fgLate: "US $150",
  },
  {
    category: "Industry Persons",
    inEarly: "₹4,000/-",
    inLate: "₹4,500/-",
    inSpot: "₹5,000/-",
    fgEarly: "US $125",
    fgLate: "US $175",
  },
  {
    category: "Online Participants",
    inEarly: "₹1,500/-",
    inLate: "₹2,000/-",
    inSpot: "₹2,500/-",
    fgEarly: "US $25",
    fgLate: "US $50",
  },
];

export const bankDetails = [
  { label: "Bank Name", value: "Indian Overseas Bank" },
  { label: "Branch Address", value: "GLA Engg. College, Ajhai, Mathura" },
  { label: "Account Holder Name", value: "GLAU Conference & Workshop" },
  { label: "Account No.", value: "199901000018885" },
  { label: "IFSC Code", value: "IOBA0001999" },
];

/* -------------------------------------------------------------- science */

export const researchAreas = [
  "Novel Drug Discovery and Development for Cardiovascular Diseases",
  "Clinical Pharmacy and Pharmaceutical Care in Cardiovascular Diseases",
  "Pharmacogenomics and Personalized Cardiovascular Medicine",
  "Herbal Medicines and Nutraceuticals in Cardiovascular Health",
  "Translational Research in Cardiovascular Pharmacology",
  "Emerging Trends in Cardiovascular Therapeutics",
  "Public Health Pharmacy and Cardiovascular Disease Prevention",
  "Cardiometabolic Disorders",
  "Innovations in Cardiovascular Diagnostics",
  "Lifestyle Medicine for Cardiovascular Wellness",
  "Pharmacovigilance and Medication Safety",
  "Regulatory Affairs and Quality Assurance",
  "Innovations in Pharmacological Sciences",
  "Pharmaceutical Biotechnology",
  "Computational Drug Design and Molecular Modeling",
  "Biotechnology and Bioinformatics",
  "Immunology & Vaccine Development",
  "Pharmacoepidemiology & Pharmacoeconomics",
  "Quantitative Systems Pharmacology",
  "Synthetic & Medicinal Chemistry",
  "Nanomedicine",
];

export const orations = [
  "Ramesh K. Goyal Oration",
  "Devendra K. Agrawal Oration",
  "Suresh K. Gupta Oration",
  "Rakesh Kukreja Oration",
  "Suresh Tyagi Oration",
  "Harpal Buttar Oration",
  "K. K. Nair Oration",
  "K. K. Talwar Oration",
];

export const symposia = [
  "Riya and Paul Ganguly Symposium",
  "N. Radhkrishnan Symposium",
  "C. R. Soman Symposium",
];

export const youngInvestigatorAwards = [
  "N. K. Ganguly Award",
  "Naranjan Dhalla Award",
  "C. C. Kartha Travel Grant",
];

/* ------------------------------------------------------------ sponsorship */

export const sponsorTiers = [
  {
    tier: "Main Event Sponsor",
    amount: "INR 5 Lakh",
    benefits: [
      "2 complimentary registrations",
      "Branding with Conference logo on leaflets, inserts in kit bag, full-page advertisement in the souvenir",
      "Branding at venue",
      "Display at Auditorium",
      "5 × 5 metre stall for exhibition",
      "Logo on all banners, standees and promotional material",
      "Felicitation on stage",
    ],
  },
  {
    tier: "Platinum Sponsor",
    amount: "INR 3 Lakh",
    benefits: [
      "2 complimentary registrations",
      "Branding with Conference logo on leaflets and full-page colour advertisement in the souvenir",
      "Branding at venue",
      "Display at Auditorium",
      "3 × 3 sq. metre stall for exhibition",
      "Felicitation on stage",
    ],
  },
  {
    tier: "Gold Sponsor",
    amount: "INR 2 Lakh",
    benefits: [
      "1 complimentary registration",
      "Branding with Conference logo on leaflets and full-page colour advertisement in the souvenir",
      "Display at Auditorium",
      "Branding at venue",
      "3 × 3 sq. metre stall for exhibition",
      "Felicitation on stage",
    ],
  },
  {
    tier: "Silver Sponsor",
    amount: "INR 1 Lakh",
    benefits: [
      "1 complimentary registration",
      "Branding with Conference logo on leaflets and half-page colour advertisement in the souvenir",
      "Branding at venue",
      "Display at Auditorium",
      "Felicitation on stage",
    ],
  },
];

export const sightseeing = [
  { place: "Taj Mahal", city: "Agra", image: "/images/Bg images/Locations/Taj Mahal.png", mapQuery: "Taj+Mahal,Agra", mapUrl: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal%2C+Agra%2C+Uttar+Pradesh%2C+India" },
  { place: "Fatehpur Sikri", city: "Agra", image: "/images/Bg images/Locations/Fatehpur Sikri.png", mapQuery: "Fatehpur+Sikri,Agra", mapUrl: "https://www.google.com/maps/search/?api=1&query=Fatehpur+Sikri%2C+Agra%2C+Uttar+Pradesh%2C+India" },
  { place: "Bankey Bihari", city: "Vrindavan", image: "/images/Bg images/Locations/Bankey Bihari.png", mapQuery: "Shri+Bankey+Bihari+Temple,Vrindavan", mapUrl: "https://www.google.com/maps/search/?api=1&query=Bankey+Bihari+Temple%2C+Vrindavan%2C+Uttar+Pradesh%2C+India" },
  { place: "Shri Krishna Janmabhoomi", city: "Mathura", image: "/images/Bg images/Locations/Shri Krishna Janmabhoomi.png", mapQuery: "Shri+Krishna+Janmasthan+Temple,Mathura", mapUrl: "https://www.google.com/maps/search/?api=1&query=Shri+Krishna+Janmabhoomi+Temple%2C+Mathura%2C+Uttar+Pradesh%2C+India" },
  { place: "Prem Mandir", city: "Vrindavan", image: "/images/Bg images/Locations/Prem Mandir.png", mapQuery: "Prem+Mandir,Vrindavan", mapUrl: "https://www.google.com/maps/search/?api=1&query=Prem+Mandir%2C+Vrindavan%2C+Uttar+Pradesh%2C+India" },
  { place: "Radha Rani", city: "Barsana", image: "/images/Bg images/Locations/Radha Rani Barsana.png", mapQuery: "Shri+Radha+Rani+Temple,Barsana", mapUrl: "https://www.google.com/maps/search/?api=1&query=Radha+Rani+Temple%2C+Barsana%2C+Uttar+Pradesh%2C+India" },
  { place: "Dhanghati", city: "Goverdhan", image: "/images/Bg images/Locations/Dhanghati Goverdhan.png", mapQuery: "Daan+Ghati+Mandir,Govardhan", mapUrl: "https://www.google.com/maps/search/?api=1&query=Daan+Ghati+Mandir%2C+Govardhan%2C+Uttar+Pradesh%2C+India" },
  { place: "Nand Mahal", city: "Gokul", image: "/images/Bg images/Locations/Nand Mahal.png", mapQuery: "Nand+Bhawan,Gokul", mapUrl: "https://www.google.com/maps/search/?api=1&query=Nand+Bhawan%2C+Gokul%2C+Uttar+Pradesh%2C+India" },
  { place: "Nandgaon Temple", city: "Nandgaon", image: "/images/Bg images/Locations/Nandgaon Temple Nandgaon.png", mapQuery: "Nandagram+Temple,Nandgaon", mapUrl: "https://www.google.com/maps/search/?api=1&query=Nandagram+Temple%2C+Nandgaon%2C+Uttar+Pradesh%2C+India" },
];

export const contacts: Person[] = [
  { name: "Prof. (Dr.) Kamal Shah", role: "Organizing Secretary", phone: "+91 9756866042" },
  {
    name: "Prof. (Dr.) Prabhat K. Upadhyay",
    role: "Co-Organizing Secretary",
    phone: "+91 9690088979",
  },
  { name: "Dr. Yogesh Murti", role: "Co-Organizing Secretary", phone: "+91 8006240340" },
  { name: "Dr. Jitendra Gupta", role: "Co-Organizing Secretary", phone: "+91 8979136611" },
  { name: "Dr. Ahsas Goyal", role: "Joint Secretary", phone: "+91 9012204640" },
  { name: "Dr. Niraj Kumar Singh", role: "Joint Secretary", phone: "+91 8475985031" },
  { name: "Dr. Vibhav Varshney", role: "Joint Secretary", phone: "+91 7417540181" },
];
