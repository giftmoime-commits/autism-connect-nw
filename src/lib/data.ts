export type School = {
  id: string;
  name: string;
  town: string;
  municipality: string;
  address: string;
  phone: string;
  email: string;
  principal: string;
  ageMin: number;
  ageMax: number;
  gender: "Boys" | "Girls" | "Mixed";
  boarding: boolean;
  transport: boolean;
  spaces: number;
  fees: string;
  type: "Government" | "Private" | "LSEN";
  vision: string;
  description: string;
  facilities: string[];
  image: string;
};

const img = (seed: string) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=1200&q=70`;

export const schools: School[] = [
  {
    id: "little-seeds-potchefstroom",
    name: "Little Seeds Sensory Academy",
    town: "Potchefstroom",
    municipality: "JB Marks",
    address: "12 Vista Avenue, Potchefstroom, 2531",
    phone: "+27 18 297 1010",
    email: "info@littleseeds.org.za",
    principal: "Mrs. Lerato Mokoena",
    ageMin: 3,
    ageMax: 8,
    gender: "Mixed",
    boarding: false,
    transport: true,
    spaces: 4,
    fees: "R 2 800 / month",
    type: "Private",
    vision:
      "Every child finds their voice — through play, patience, and predictable routines that honour how their brain learns best.",
    description:
      "A small, low-stimulus early-intervention school focusing on sensory integration, AAC communication and one-to-one learning plans.",
    facilities: [
      "Speech Therapy",
      "Occupational Therapy",
      "Sensory Room",
      "Outdoor Playground",
      "Therapy Pool",
      "Hot Meals",
    ],
    image: img("1503676260728-1c00da094a0b"),
  },
  {
    id: "platinum-valley-rustenburg",
    name: "Platinum Valley Inclusive School",
    town: "Rustenburg",
    municipality: "Rustenburg Local",
    address: "45 Boekenhout St, Rustenburg, 0299",
    phone: "+27 14 592 4400",
    email: "admin@platinumvalley.co.za",
    principal: "Mr. Sipho Dlamini",
    ageMin: 6,
    ageMax: 13,
    gender: "Mixed",
    boarding: false,
    transport: true,
    spaces: 0,
    fees: "R 1 950 / month",
    type: "Government",
    vision:
      "Inclusion that goes both ways — neurodivergent and neurotypical learners growing up alongside each other.",
    description:
      "Mainstream primary with a dedicated autism support unit, shadow teachers and a structured TEACCH curriculum.",
    facilities: [
      "Shadow Teachers",
      "Speech Therapy",
      "Occupational Therapy",
      "Sports Field",
      "Library",
      "Transport",
    ],
    image: img("1580582932707-520aed937b7b"),
  },
  {
    id: "st-francis-klerksdorp",
    name: "St. Francis Support Centre",
    town: "Klerksdorp",
    municipality: "City of Matlosana",
    address: "8 Buffeldoorn Road, Klerksdorp, 2571",
    phone: "+27 18 462 3300",
    email: "hello@stfrancis.org.za",
    principal: "Dr. Anneke van Wyk",
    ageMin: 5,
    ageMax: 18,
    gender: "Mixed",
    boarding: true,
    transport: true,
    spaces: 6,
    fees: "R 3 400 / month",
    type: "Private",
    vision:
      "A lifelong skills journey — from first words to first jobs.",
    description:
      "Full-spectrum LSEN school with vocational training, life skills programmes and weekly boarding for rural families.",
    facilities: [
      "Boarding",
      "Vocational Workshop",
      "Speech Therapy",
      "Occupational Therapy",
      "Music Therapy",
      "Horse Riding",
    ],
    image: img("1509062522246-3755977927d7"),
  },
  {
    id: "hope-academy-mahikeng",
    name: "Hope Academy for Autism",
    town: "Mahikeng",
    municipality: "Mahikeng Local",
    address: "21 Hatch Street, Mahikeng, 2745",
    phone: "+27 18 381 6500",
    email: "office@hopeautism.org.za",
    principal: "Mrs. Refilwe Sebego",
    ageMin: 4,
    ageMax: 14,
    gender: "Mixed",
    boarding: false,
    transport: true,
    spaces: 3,
    fees: "Free (Government funded)",
    type: "Government",
    vision: "No child left behind because their family can't afford private care.",
    description:
      "Government-funded LSEN school serving Mahikeng and surrounding villages with free placement and subsidised transport.",
    facilities: [
      "Free Transport",
      "Free Meals",
      "Speech Therapy",
      "Sensory Room",
      "Computer Lab",
    ],
    image: img("1497486751825-1233686f5d54"),
  },
  {
    id: "sunrise-brits",
    name: "Sunrise Special School",
    town: "Brits",
    municipality: "Madibeng",
    address: "3 Van Velden St, Brits, 0250",
    phone: "+27 12 252 1200",
    email: "info@sunrisebrits.co.za",
    principal: "Mr. Themba Nkosi",
    ageMin: 7,
    ageMax: 18,
    gender: "Mixed",
    boarding: false,
    transport: false,
    spaces: 2,
    fees: "R 1 200 / month",
    type: "LSEN",
    vision: "Practical skills, dignified futures.",
    description:
      "Skills-focused school for older learners, with strong vocational pathways into the agricultural and mining sectors.",
    facilities: ["Vocational Workshop", "Garden", "Sports", "Speech Therapy"],
    image: img("1588072432836-e10032774350"),
  },
  {
    id: "rainbow-bridge-vryburg",
    name: "Rainbow Bridge Academy",
    town: "Vryburg",
    municipality: "Naledi",
    address: "55 Market Street, Vryburg, 8601",
    phone: "+27 53 927 0900",
    email: "info@rainbowbridge.co.za",
    principal: "Mrs. Karin du Plessis",
    ageMin: 3,
    ageMax: 12,
    gender: "Mixed",
    boarding: false,
    transport: true,
    spaces: 5,
    fees: "R 2 200 / month",
    type: "Private",
    vision: "Bridges, not gaps.",
    description:
      "Small group classes (max 6 learners) with a strong focus on early literacy and emotional regulation.",
    facilities: ["Sensory Room", "Speech Therapy", "OT", "Playground"],
    image: img("1564429097439-e1a07e3acb3a"),
  },
  {
    id: "ubuntu-learners-lichtenburg",
    name: "Ubuntu Learners' Centre",
    town: "Lichtenburg",
    municipality: "Ditsobotla",
    address: "12 Scholtz St, Lichtenburg, 2740",
    phone: "+27 18 632 4800",
    email: "hello@ubuntulearners.org.za",
    principal: "Mr. Kabelo Phiri",
    ageMin: 6,
    ageMax: 16,
    gender: "Mixed",
    boarding: false,
    transport: true,
    spaces: 7,
    fees: "R 950 / month",
    type: "Government",
    vision: "I am because we are.",
    description:
      "Community-rooted school with strong family integration programmes and a Setswana-medium support stream.",
    facilities: ["Speech Therapy", "Music Therapy", "Sports", "Library"],
    image: img("1546410531-bb4caa6b424d"),
  },
  {
    id: "willowbrook-potchefstroom",
    name: "Willowbrook Therapeutic School",
    town: "Potchefstroom",
    municipality: "JB Marks",
    address: "88 Tom Street, Potchefstroom, 2531",
    phone: "+27 18 297 5400",
    email: "office@willowbrook.co.za",
    principal: "Dr. Marius Botha",
    ageMin: 5,
    ageMax: 14,
    gender: "Mixed",
    boarding: false,
    transport: true,
    spaces: 1,
    fees: "R 3 100 / month",
    type: "Private",
    vision: "Therapy and learning, woven into the same day.",
    description:
      "Integrated therapy school — every learner gets weekly OT, SLT and psychology built into their timetable.",
    facilities: [
      "Multidisciplinary Therapy",
      "Sensory Room",
      "Hydrotherapy Pool",
      "Playground",
    ],
    image: img("1503454537195-1dcabb73ffb9"),
  },
];

export type Psychologist = {
  id: string;
  name: string;
  qualifications: string;
  practice: string;
  town: string;
  phone: string;
  email: string;
  years: number;
  medicalAid: boolean;
  languages: string[];
  image: string;
};

export const psychologists: Psychologist[] = [
  {
    id: "p1",
    name: "Dr. Nomvula Khumalo",
    qualifications: "PhD Clinical Psychology (Wits)",
    practice: "Khumalo Psychology Rooms",
    town: "Mahikeng",
    phone: "+27 18 381 2200",
    email: "rooms@drkhumalo.co.za",
    years: 14,
    medicalAid: true,
    languages: ["English", "Setswana", "Zulu"],
    image: img("1559839734-2b71ea197ec2"),
  },
  {
    id: "p2",
    name: "Dr. Pieter van Rooyen",
    qualifications: "MA Educational Psychology (NWU)",
    practice: "Potch Child Psychology",
    town: "Potchefstroom",
    phone: "+27 18 293 1144",
    email: "info@potchchild.co.za",
    years: 9,
    medicalAid: true,
    languages: ["Afrikaans", "English"],
    image: img("1612349317150-e413f6a5b16d"),
  },
  {
    id: "p3",
    name: "Ms. Tshegofatso Molefe",
    qualifications: "MA Counselling Psychology",
    practice: "Rustenburg Family Wellness",
    town: "Rustenburg",
    phone: "+27 14 592 0088",
    email: "tshego@familywellness.co.za",
    years: 6,
    medicalAid: false,
    languages: ["English", "Setswana"],
    image: img("1573496359142-b8d87734a5a2"),
  },
  {
    id: "p4",
    name: "Dr. Anika Pretorius",
    qualifications: "DPsych Clinical (UFS)",
    practice: "Klerksdorp Psychology Centre",
    town: "Klerksdorp",
    phone: "+27 18 462 7711",
    email: "anika@kpc.co.za",
    years: 18,
    medicalAid: true,
    languages: ["Afrikaans", "English"],
    image: img("1594824476967-48c8b964273f"),
  },
  {
    id: "p5",
    name: "Mr. Tebogo Mahlangu",
    qualifications: "MA Educational Psychology",
    practice: "Brits School Psychology Service",
    town: "Brits",
    phone: "+27 12 252 8800",
    email: "tebogo@britspsych.co.za",
    years: 4,
    medicalAid: false,
    languages: ["English", "Setswana", "Zulu"],
    image: img("1607746882042-944635dfe10e"),
  },
  {
    id: "p6",
    name: "Dr. Suzanne Meyer",
    qualifications: "PhD Neuropsychology",
    practice: "Meyer Neurodevelopmental",
    town: "Potchefstroom",
    phone: "+27 18 297 9000",
    email: "suzanne@meyerneuro.co.za",
    years: 22,
    medicalAid: true,
    languages: ["English", "Afrikaans"],
    image: img("1551836022-d5d88e9218df"),
  },
];

export type Clinic = {
  id: string;
  name: string;
  type: "Government" | "Private" | "Emergency" | "Mental Health";
  town: string;
  address: string;
  phone: string;
  hours: string;
};

export const clinics: Clinic[] = [
  {
    id: "c1",
    name: "Mahikeng Provincial Hospital",
    type: "Emergency",
    town: "Mahikeng",
    address: "Cnr First & Hospital Rd, Mahikeng",
    phone: "+27 18 383 2000",
    hours: "24 hours",
  },
  {
    id: "c2",
    name: "Klerksdorp/Tshepong Hospital Complex",
    type: "Government",
    town: "Klerksdorp",
    address: "Roosevelt Park, Klerksdorp",
    phone: "+27 18 406 4600",
    hours: "24 hours",
  },
  {
    id: "c3",
    name: "Mediclinic Potchefstroom",
    type: "Private",
    town: "Potchefstroom",
    address: "100 Peter Mokaba St, Potchefstroom",
    phone: "+27 18 293 7800",
    hours: "24 hours",
  },
  {
    id: "c4",
    name: "Job Shimankana Tabane Hospital",
    type: "Government",
    town: "Rustenburg",
    address: "Heystek St, Rustenburg",
    phone: "+27 14 590 5100",
    hours: "24 hours",
  },
  {
    id: "c5",
    name: "SADAG Mental Health Helpline",
    type: "Mental Health",
    town: "Province-wide",
    address: "Toll-free national helpline",
    phone: "0800 567 567",
    hours: "24 hours",
  },
  {
    id: "c6",
    name: "Brits Hospital",
    type: "Government",
    town: "Brits",
    address: "Hendrik Verwoerd St, Brits",
    phone: "+27 12 381 4400",
    hours: "24 hours",
  },
];

export type Activity = {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  town: string;
  schedule: string;
  image: string;
};

export const activities: Activity[] = [
  { id: "a1", title: "Music Therapy", description: "Weekly rhythm and instrument sessions led by a registered music therapist.", ageRange: "4-16", town: "Potchefstroom", schedule: "Saturdays 09:00", image: img("1511671782779-c97d3d27a1d4") },
  { id: "a2", title: "Therapeutic Swimming", description: "Heated pool sessions focusing on body awareness and calming.", ageRange: "3-14", town: "Klerksdorp", schedule: "Wednesdays 15:30", image: img("1530549387789-4c1017266635") },
  { id: "a3", title: "Art Therapy", description: "Open studio time with structured prompts and sensory-friendly materials.", ageRange: "5-18", town: "Rustenburg", schedule: "Fridays 16:00", image: img("1499892477393-f675706cbe6e") },
  { id: "a4", title: "Sensory Play", description: "Indoor sensory gym with safe climbing, swings and tactile stations.", ageRange: "2-8", town: "Mahikeng", schedule: "Daily drop-in", image: img("1503454537195-1dcabb73ffb9") },
  { id: "a5", title: "Horse Riding", description: "Equine-assisted therapy at a local farm; helmets and side-walkers provided.", ageRange: "6-18", town: "Brits", schedule: "Sundays 10:00", image: img("1534773728080-33d31da27ae5") },
  { id: "a6", title: "Cooking Club", description: "Life-skills cooking with picture-based recipes.", ageRange: "8-18", town: "Potchefstroom", schedule: "Tuesdays 17:00", image: img("1505935428862-770b6f24f629") },
  { id: "a7", title: "Adapted Sports", description: "Soccer and athletics with neuro-friendly coaching.", ageRange: "6-16", town: "Klerksdorp", schedule: "Thursdays 16:00", image: img("1517649763962-0c623066013b") },
  { id: "a8", title: "Computer Classes", description: "Typing, safe browsing, and intro to coding.", ageRange: "9-18", town: "Mahikeng", schedule: "Mondays 14:00", image: img("1517694712202-14dd9538aa97") },
  { id: "a9", title: "Reading Club", description: "Visual-supported storytelling and read-along.", ageRange: "5-12", town: "Rustenburg", schedule: "Saturdays 11:00", image: img("1512820790803-83ca734da794") },
  { id: "a10", title: "Dance & Movement", description: "Free movement to music in a low-stimulus studio.", ageRange: "4-14", town: "Potchefstroom", schedule: "Wednesdays 17:00", image: img("1535525153412-5a092d46af2f") },
  { id: "a11", title: "Social Skills Group", description: "Small-group play with a facilitator modelling turn-taking.", ageRange: "6-12", town: "Brits", schedule: "Saturdays 10:00", image: img("1543269865-cbf427effbad") },
  { id: "a12", title: "Life Skills Workshop", description: "Money, transport and self-care skills for teens.", ageRange: "13-18", town: "Klerksdorp", schedule: "Fridays 15:00", image: img("1531058020387-3be344556be6") },
];

export const news = [
  { id: "n1", title: "New autism unit opens in Vryburg", date: "2026-06-12", excerpt: "Naledi Local Municipality launches the province's 25th specialist unit." },
  { id: "n2", title: "Free parent workshop: managing meltdowns", date: "2026-07-05", excerpt: "Saturday morning workshop in Potchefstroom — register your seat." },
  { id: "n3", title: "Volunteer drive: 100 readers needed", date: "2026-07-19", excerpt: "Help us launch reading clubs at five schools across the province." },
  { id: "n4", title: "Awareness walk through Mahikeng", date: "2026-08-02", excerpt: "Annual community walk — join families, schools and clinicians." },
];

export const stats = {
  schools: schools.length,
  volunteers: 152,
  psychologists: psychologists.length,
  clinics: clinics.length,
  programs: activities.length,
};

export const towns = Array.from(new Set(schools.map((s) => s.town))).sort();
export const municipalities = Array.from(new Set(schools.map((s) => s.municipality))).sort();