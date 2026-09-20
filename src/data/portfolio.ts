import {
  Radio, Telescope, Cpu, Waves, Database,
  Code2, Orbit, Brain, CircuitBoard, FileText,
  Users, Star, Heart, Droplets, Pill,
  Mail, MapPin, Linkedin, Calendar,
  Zap, Satellite, Compass, Activity, Scan, Sun,
  Terminal, Languages, Rocket, Sparkles, ExternalLink,
  type LucideIcon,
} from 'lucide-react';

// ─── Type Definitions ──────────────────────────────────────────

export interface HomeIntro {
  tagline: string;
  statement: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  current: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
  details: string[];
  tags: string[];
  icon: LucideIcon;
  color: 'gold' | 'cosmic' | 'purple';
}

export interface Project {
  title: string;
  subtitle: string;
  description?: string;
  details: string[];
  icon: LucideIcon;
  tags: string[];
  color: 'gold' | 'cosmic' | 'purple';
  year?: string;
  links?: { label: string; href: string }[];
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: 'gold' | 'cosmic' | 'purple';
  skills: string[];
}

export interface Workshop {
  title: string;
  organization: string;
  location?: string;
  date: string;
  description: string;
  icon: LucideIcon;
  category?: string;
  details?: string[];
  linkText?: string;
  linkUrl?: string;
}

export interface CommunityItem {
  role?: string;
  organization: string;
  location?: string;
  period: string;
  note?: string;
  description: string;
  icon: LucideIcon;
  color: 'gold' | 'cosmic' | 'purple';
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: string;
  date: string;
  location: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  subtitle: string;
  coverImage: string;
  date: string;
  location: string;
  driveLink: string;
  photos: GalleryItem[];
}

export interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

// ─── Word Document Authoritative Content ───────────────────────

// 1. Home Page Content (under Hero)
export const homeIntro: HomeIntro = {
  tagline: 'On the way to becoming a researcher, engineer & truly curious observer.',
  statement: `About me:
I’m an Udyogi Baal ( a creative/innovative kid who hates sitting idle). I like getting involved in interesting + challenging projects. If I have no idea how something works, even better but I like it when my brain gets a good workout. I’m okay being dumb,but A day without learning, building, breaking, or fixing something = probably a bad day for me .

Working at the intersection of Physics, Electronics, Engineering + ML sometimes. I’m in a one-sided love with FRBs, GMRT is the gf, while SKA + DSA-2000 are definitely my crushes.
Currently pursuing Physics + Electronic Systems, I like moving between theory, hardware, simulations, data + ML. I believe the best science happens when theory × engineering × observation come together.
Every signal carries a story.
I just want to build the tools to hear it.`,
};

// 2. About Page Content
export const aboutIntro = 'Coming from a rural background, my journey has been about getting exposure to the most advanced labs, instruments, ideas  and great ppl , moving from learning science to actually building and experimenting with it.';

export const educationData: Education[] = [
  {
    degree: 'Bachelor of Science in Electronic Systems',
    institution: 'Indian Institute of Technology Madras',
    location: 'Chennai, Tamil Nadu',
    period: 'Dec. 2023 – May 2027',
    description: 'Currently learning electronics, embedded systems, instrumentation, signal processing, AI/ML, and computer systems.',
    current: true,
  },
  {
    degree: 'Bachelor of Science in Physics',
    institution: 'Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'July 2023 – May 2026',
    description: 'Completed theoretical + experimental physics, with focus on astrophysics, computational methods, and scientific data analysis.',
    current: false,
  },
  {
    degree: 'High School  12th, PCMB',
    institution: 'Vidyadham Jr. College of Science',
    location: 'Pune, Maharashtra',
    period: 'June 2021 – Feb. 2023',
    description: 'Studied Physics, Chemistry, Mathematics + Biology and developed my curiosity, problem-solving skills, and research temperament.',
    current: false,
  },
];

// 3. Research Experience Content
export const experiences: Experience[] = [
  {
    id: 'spotlight',
    role: 'Fast Radio Burst (FRB) Detection Using SPOTLIGHT System',
    organization: 'NCRA-TIFR',
    location: 'Pune, Maharashtra',
    period: 'Dec. 2024 – Present',
    details: [
      ' Working on the SPOTLIGHT project under Dr. Jayanta Roy, focusing on real-time detection of FRBs and pulsars using GMRT',
      'Developed machine learning based clustering techniques to group similar candidates and reduce false positives in the detection pipeline using processed interferometric data on GPU',
    ],
    tags: ['Radio Astronomy', 'FRB', 'GMRT', 'ML', 'HPC', 'CUDA'],
    icon: Telescope,
    color: 'gold',
  },
  {
    id: 'ftsky',
    role: 'Fast Radio Transient Sky (FTSky) Training School & Conference',
    organization: 'ICTS-TIFR',
    location: 'Bengaluru, Karnataka',
    period: 'Oct. 2025',
    details: [
      'Participated in hands-on workshops on fast transient searches, VLBI imaging, real observational data analysis, and ML-based detection.',
      ' Engaged with international researchers across radio, optical, theory, and data-science domains, building global interdisciplinary connections.',
    ],
    tags: ['Fast Transients', 'VLBI Imaging', 'Observational Data', 'ML Detection'],
    icon: Telescope,
    color: 'cosmic',
  },
  {
    id: 'ias-srfp',
    role: 'IAS Summer Research Fellowship Programme (IAS-SRFP)',
    organization: 'Indian Institute of Technology Indore',
    location: 'Indore, Madhya Pradesh',
    period: 'Jul. 2025 – Present',
    details: [
      'Worked on plasma diagnostics simulations using LTspice and Python, including Langmuir probe I-V analysis and OES-based plasma characterization.',
      'Designed and developed a tunable-sweep Langmuir probe backend prototype for laboratory plasma experiments with configurable sweep speed and resolution.',
    ],
    tags: ['Plasma Physics', 'LTspice', 'Python', 'Langmuir Probe', 'Instrumentation'],
    icon: Zap,
    color: 'purple',
  },
  {
    id: 'skao',
    role: 'Square Kilometre Array Observatory (SKAO)-India Summer Training Program',
    organization: 'Indian Institute of Technology Indore',
    location: 'Indore, Madhya Pradesh',
    period: 'Jul. 2025',
    details: [
      'Gained hands-on exposure to SKA-relevant signal processing, HPC, big-data pipelines, and AI/ML applications in radio astronomy',
      ' Built a strong foundation in radio astronomy aligned with the Square Kilometre Array (SKA), covering instrumentation, radiation mechanisms, and key science cases.'],
    tags: ['SKAO', 'Signal Processing', 'HPC', 'Big Data', 'AI/ML'],
    icon: Satellite,
    color: 'cosmic',
  },
  {
    id: 'nius',
    role: 'National Initiative on Undergraduate Science (NIUS) Astronomy Camp',
    organization: 'HBCSE-TIFR',
    location: 'Mumbai, Maharashtra',
    period: 'Jul. 2024',
    details: [
      'Attended lectures on pulsar behavior, AGN jets, solar physics, stellar seismology, and star formation.',
      'Gained hands-on training in telescope handling, spectral data analysis, and transient object detection.',
      'Processed GMRT data to identify Fast Radio Bursts (FRBs) and explored the GMRT facility',
    ],
    tags: ['Astronomy', 'Pulsars', 'Telescope Handling', 'GMRT Data Analysis'],
    icon: Compass,
    color: 'gold',
  },
  {
    id: 'swan-filter',
    role: 'Designing & Prototyping Differential Notch Filter for SWAN Antenna',
    organization: 'Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'Oct. 2024',
    details: [
      'Collaborating on a differential notch filter for FM interference mitigation.',
      'Simulating filter designs and analyzing S-parameters, insertion/return loss, and impedance.',
      'Developing PCB designs and Gerber files for prototype fabrication.',
    ],
    tags: ['RF Engineering', 'PCB Design', 'S-Parameters', 'FM Interference'],
    icon: CircuitBoard,
    color: 'purple',
  },
];

// Document instruction line 51: small popping section
export const solidRocketNote = {
  text: 'currently experimenting with life working on solid rockets controls',
  icon: Rocket,
};

// 4. Projects Content
export const projects: Project[] = [
  {
    title: 'Low-Cost 300 MHz Pulsar Telescope',
    subtitle: 'Self-guided · Active Project',
    details: [
      'Developing a low-cost pulsar telescope based on a cylindrical parabolic reflector with a linear dipole array along the focal line.',
      'Working on CST/FEKO simulations, sensitivity calculations, and system design for experimental observation of bright pulsars.',
    ],
    icon: Radio,
    tags: ['Pulsar Telescope', 'CST/FEKO', 'Dipole Array', 'RF Design'],
    color: 'gold',
  },
  {
    title: 'Low-Cost Two-Element Interferometer for Solar Radio Astronomy',
    subtitle: 'Self-guided · Active Project',
    details: [
      'Developing a two-element receiver using STM32, DIY Tayloe mixer, and Si5351-family external LO.',
      'Designing the system for interference-fringe detection, with a Raspberry Pi for data storage and processing.',
    ],
    icon: Activity,
    tags: ['Interferometer', 'STM32', 'Tayloe Mixer', 'Raspberry Pi'],
    color: 'cosmic',
  },
  {
    title: 'Crack Detection System for Railway Wheels',
    subtitle: 'Under Ministry of Railways, India · Mar. 2024 · Gatishakti Vishwavidyalay, Vadodara',
    details: [
      'Designing a multi-camera sensor module and developing AI models for real-time crack detection using OpenCV.',
      'Exploring laser shearography and adapting ISRO\'s IMPRESS technology for improved defect identification.',
    ],
    icon: Scan,
    tags: ['OpenCV', 'AI Detection', 'Sensors', 'Laser Shearography'],
    color: 'purple',
  },
  {
    title: 'ASRT Affordable Solar Radio Telescope',
    subtitle: 'Fergusson College',
    details: [
      'Assembled and handled a radio telescope setup with Arduino-based data recording.',
      'Analyzed solar flux during eclipse observations.',
    ],
    icon: Sun,
    tags: ['Solar Radio Astronomy', 'Arduino', 'Eclipse Observation'],
    color: 'gold',
  },
  {
    title: 'Automated Powder Filling System for Pharmaceutical Applications',
    subtitle: 'IIT Madras · Dec. 2023',
    details: [
      'Designed a machine to accurately measure and dispense small quantities of pharmaceutical powders, down to 0.01 g.',
      'Developed a system for controlled dose filling during drug formulation.',
    ],
    icon: Pill,
    tags: ['Instrumentation', 'Automation', 'Precision Dispensing'],
    color: 'cosmic',
  },
  {
    title: 'The Expeditious Telescope',
    subtitle: 'IIT Kanpur Tech Innovation Challenge · Vidyadham Jr. College of Science',
    details: [
      'Pitched a concept for a movable, large-sized radio telescope with a mechanical positioning system.',
    ],
    icon: Compass,
    tags: ['Radio Astronomy', 'Mechanical Positioning', 'Innovation Challenge'],
    color: 'purple',
  },
  {
    title: 'IoT & Arduino Projects',
    subtitle: 'Self-directed · Mar. 2023',
    details: [
      'Worked on various IoT, Arduino, sensors, and embedded-system projects, continuously improving programming and algorithmic skills.',
    ],
    icon: Cpu,
    tags: ['IoT', 'Arduino', 'Embedded Systems', 'Sensors'],
    color: 'gold',
  },
];

// 5. Skills Content
export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Terminal,
    color: 'gold',
    skills: ['C', 'C++', 'Python', 'Bash'],
  },
  {
    title: 'Astronomy & Data Analysis',
    icon: Telescope,
    color: 'cosmic',
    skills: ['CASA', 'SAOImage DS9', 'Siril', 'PRESTO', 'Heimdall'],
  },
  {
    title: 'Simulation & Engineering',
    icon: CircuitBoard,
    color: 'purple',
    skills: ['CST Studio Suite', 'FEKO', 'LTspice', 'CAD', 'KICAD'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'gold',
    skills: ['Machine Learning', 'Clustering', 'DBSCAN', 'HDBBSCAN', 'Random Forest etc'],
  },
  {
    title: 'Systems & Environment',
    icon: Cpu,
    color: 'cosmic',
    skills: ['Linux', 'Windows', 'Docker', 'Conda', 'Git'],
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    color: 'purple',
    skills: ['Ollama', 'OpenClaw', 'LLMs', 'RAG'],
  },
  {
    title: 'Document Creation',
    icon: FileText,
    color: 'gold',
    skills: ['Microsoft Office', 'LaTeX'],
  },
  {
    title: 'Languages',
    icon: Languages,
    color: 'cosmic',
    skills: ['English', 'Marwadi (Native)', 'Marathi', 'Hindi'],
  },
];

// 6. Continuous Learning (Workshops & Courses)
export const workshops: Workshop[] = [
  {
    title: 'Defence & Aerospace  Skill Development Programme',
    organization: 'OTTC-DRDO',
    date: 'July 2026',
    description: 'Explored emerging technologies, challenges, startups, and entrepreneurship in defence & aerospace.',
    icon: Rocket,
  },
  {
    title: 'Advanced Optical Communication',
    organization: 'IIT Madras',
    location: 'Chennai',
    date: 'Jan. 2025',
    description: 'Hands-on exposure to optical communication, photonics, and communication systems through the AOC Testbed Project.',
    icon: Activity,
  },
  {
    title: 'GMRT Data Analysis Session I & II',
    organization: 'NCRA-TIFR',
    location: 'Pune',
    date: 'July 2024',
    description: 'Hands-on continuum, pulsar, and FRB data analysis using GMRT pipelines.',
    icon: Radio,
  },
  {
    title: 'Identifying Outflows Using Spectral Data Cubes',
    organization: 'HBCSE-TIFR',
    location: 'Mumbai',
    date: 'July 2024',
    description: 'Hands-on spectral data cube analysis for astrophysical outflow studies.',
    icon: Database,
  },
  {
    title: 'Python Workshop',
    organization: 'HBCSE-TIFR',
    location: 'Mumbai',
    date: 'July 2024',
    description: 'Scientific Python and computational techniques for astronomy and research.',
    icon: Code2,
  },
  {
    title: 'Telescope Handling Workshop',
    organization: 'HBCSE-TIFR',
    location: 'Mumbai',
    date: 'July 2024',
    description: 'Hands-on training in optical telescope handling and observations.',
    icon: Telescope,
  },
  {
    title: 'Cosmology from Home',
    organization: 'Online',
    date: 'June 2024',
    description: 'Lectures and discussions on cosmology and modern astrophysics.',
    icon: Orbit,
  },
  {
    title: 'Gravitational Wave Open Data Workshop',
    organization: 'LIGO-Virgo-KAGRA',
    location: 'Online',
    date: 'May 2024',
    description: 'Introduction to gravitational-wave data analysis using open datasets.',
    icon: Waves,
  },
  {
    title: 'Introduction to Computational Astrophysics',
    organization: 'AstroClub, Fergusson College',
    location: 'Pune',
    date: 'Mar. 2024',
    description: 'Explored computational methods and numerical techniques in astrophysics.',
    icon: Brain,
  },
  {
    title: 'National Science Day  SKA Exhibit',
    organization: 'IUCAA',
    location: 'Pune',
    date: 'Feb. 2024',
    description: 'Built a scaled-down SKA-Mid dish model and explained radio astronomy and SKA science to visitors.',
    icon: Satellite,
  },
  {
    title: 'FIP Lecture Series  Organised & Managed',
    organization: 'Fergusson College',
    location: 'Pune',
    date: 'Oct. 2024',
    description: 'Organised lectures across attosecond physics, radio astronomy, and plasma physics, along with event logistics.',
    icon: Users,
  },
  {
    title: 'Poster Presentation  Advent of Radio Astronomy',
    organization: 'Fergusson College',
    location: 'Pune',
    date: 'Jan. 2024',
    description: 'Presented the development of radio astronomy and interacted with researchers and science audiences.',
    icon: FileText,
  },
  {
    title: 'Online Astronomy Learning : IUCAA Astronomy & Astrophysics',
    organization: 'IUCAA ACE',
    location: 'Online',
    date: 'Self-learning',
    description: 'Self-learning through recorded lectures and schools covering: Introductory Astronomy & Astrophysics, Astronomical Data Analysis using Python, Fourier Transforms, Radio Astronomy Winter School — Sessions 13 & 14',
    details: [
      'Introductory Astronomy & Astrophysics',
      'Astronomical Data Analysis using Python',
      'Fourier Transforms',
      'Radio Astronomy Winter School  Sessions 13 & 14',
    ],
    linkText: 'IUCAA ACE — Playlists',
    icon: Telescope,
  },
  {
    title: 'Online Astronomy Learning : RRI Astronomy Summer School (RASS)',
    organization: 'Raman Research Institute',
    location: 'Online',
    date: 'Self-learning',
    description: 'Followed recorded lectures from RASS, covering astronomy, astrophysics, radio astronomy, and related research topics.',
    linkText: 'Raman Research Institute — YouTube',
    icon: Telescope,
  },
];

// 7. Community & Outreach Content
export const communityItems: CommunityItem[] = [
  {
    organization: 'Yantra robotics club @IIT Madras',
    role: 'Co-founder',
    location: 'Chennai, Tamil Nadu',
    period: 'Aug. 2024 – Aug. 2026',
    note: 'Retired from active role, but still a Yantra member at heart.',
    description: 'Conducted robotics workshops, IoT sessions, and hands-on electronics projects.',
    icon: Users,
    color: 'gold',
  },
  {
    organization: 'AstroClub @Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'Jul. 2023 – May 2026',
    note: 'Retired from active role, but still an AstroClub member at heart.',
    description: 'Organised astronomy lectures, group discussions, and stargazing activities.',
    icon: Star,
    color: 'cosmic',
  },
  {
    organization: 'India Science Festival (ISF)',
    location: 'India',
    period: '2025',
    description: 'Represented GMRT–NCRA and explained radio telescope working, GMRT science, and radio astronomy to students and the general public.',
    icon: Sparkles,
    color: 'purple',
  },
  {
    organization: 'GMRT Outreach & Science Exhibits',
    location: 'GMRT, Khodad',
    period: '2025 – 2026',
    description: 'Explained GMRT exhibits, radio astronomy, current research, stellar evolution, and RFI to visitors and students.',
    icon: Radio,
    color: 'gold',
  },
  {
    organization: 'National Science Day  SKA Exhibit',
    location: 'IUCAA, Pune',
    period: 'Feb. 2024',
    description: 'Helped present the SKA exhibit and explained radio astronomy and the SKA to visitors.',
    icon: Satellite,
    color: 'cosmic',
  },
  {
    organization: 'Optical Astronomy & Stargazing Outreach',
    location: '@ Ncc Group Headquarters,pune',
    period: 'Dec. 2025',
    description: 'Conducted optical telescope handling and stargazing sessions for students, including outreach at NCC training camps.',
    icon: Telescope,
    color: 'purple',
  },
  {
    organization: 'Stargazing Camp @ Rajgad',
    location: 'Rajgad, Maharashtra',
    period: 'Dec. 2025',
    description: 'Organised a night-sky observation camp with telescope observations and meteor-shower watching, including the Geminids.',
    icon: Star,
    color: 'gold',
  },
  {
    organization: 'NSS  Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'Sep. 2023 – Aug. 2024',
    description: 'Tutored local students in science and mathematics.',
    icon: Heart,
    color: 'purple',
  },
  {
    organization: 'River Club Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'Oct. 2023 – Sep. 2024',
    description: 'Participated in river-cleaning activities, awareness initiatives, and educational poster campaigns.',
    icon: Droplets,
    color: 'cosmic',
  },
];

// 8. Gallery Albums (Album-driven, data-powered)
export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'gmrt',
    title: 'GMRT Khodad',
    subtitle: 'Giant Metrewave Radio Telescope — interferometric array observations',
    coverImage: './assets/deep-space.jpg',
    date: 'Dec. 2024',
    location: 'Khodad, Maharashtra',
    driveLink: 'https://drive.google.com/drive/folders/dummy-gmrt-observations-folder-id',
    photos: [
      {
        id: 'gmrt-1',
        image: './assets/deep-space.jpg',
        caption: 'GMRT dish array as seen from the central square — 30 fully steerable dishes spanning 25 km.',
        date: 'Dec. 2024',
        location: 'Khodad, Maharashtra',
      },
      {
        id: 'gmrt-2',
        image: './assets/galaxy-bg.jpg',
        caption: 'Control room during live FRB observation session with real-time signal monitoring.',
        date: 'Dec. 2024',
        location: 'GMRT, Khodad',
      },
      {
        id: 'gmrt-3',
        image: './assets/deep-space.jpg',
        caption: 'Receiver cabin and RF backend electronics inspection.',
        date: 'Dec. 2024',
        location: 'GMRT, Khodad',
      },
    ],
  },
  {
    id: 'ska',
    title: 'SKA Exhibit — IUCAA',
    subtitle: 'Square Kilometre Array scaled exhibit & receiver demonstration',
    coverImage: './assets/ska.jpg',
    date: 'Feb. 2024',
    location: 'IUCAA, Pune',
    driveLink: 'https://drive.google.com/drive/folders/dummy-ska-exhibit-folder-id',
    photos: [
      {
        id: 'ska-1',
        image: './assets/ska.jpg',
        caption: 'SKA-Mid scaled exhibit model with full receiver chain explanation.',
        date: 'Feb. 2024',
        location: 'IUCAA, Pune',
      },
      {
        id: 'ska-2',
        image: './assets/deep-space.jpg',
        caption: 'Wideband receiver front-end hardware demonstration at the IUCAA open day.',
        date: 'Feb. 2024',
        location: 'IUCAA, Pune',
      },
    ],
  },
  {
    id: 'nius',
    title: 'NIUS Science Camp',
    subtitle: 'National Initiative for Undergraduate Science — HBCSE, Mumbai',
    coverImage: './assets/galaxy-bg.jpg',
    date: 'Jan. 2025',
    location: 'HBCSE, Mumbai',
    driveLink: 'https://drive.google.com/drive/folders/dummy-nius-camp-folder-id',
    photos: [
      {
        id: 'nius-1',
        image: './assets/galaxy-bg.jpg',
        caption: 'NIUS cohort at HBCSE during the 10-day intensive science residential camp.',
        date: 'Jan. 2025',
        location: 'HBCSE, Mumbai',
      },
      {
        id: 'nius-2',
        image: './assets/deep-space.jpg',
        caption: 'Lab sessions — experimental physics and instrumentation at HBCSE.',
        date: 'Jan. 2025',
        location: 'HBCSE, Mumbai',
      },
    ],
  },
  {
    id: 'stargazing',
    title: 'Stargazing Camp — Rajgad',
    subtitle: 'Night-sky observation, telescope sessions & Geminids meteor shower',
    coverImage: './assets/galaxy-bg.jpg',
    date: 'Dec. 2025',
    location: 'Rajgad, Maharashtra',
    driveLink: 'https://drive.google.com/drive/folders/dummy-rajgad-astronomy-folder-id',
    photos: [
      {
        id: 'sg-1',
        image: './assets/galaxy-bg.jpg',
        caption: 'Deep-sky astrophotography and transient observation session during night camp.',
        date: 'Dec. 2025',
        location: 'Rajgad, Maharashtra',
      },
      {
        id: 'sg-2',
        image: './assets/deep-space.jpg',
        caption: 'Geminids meteor shower watching session — over 40 meteors observed in 2 hours.',
        date: 'Dec. 2025',
        location: 'Rajgad Fort, Maharashtra',
      },
      {
        id: 'sg-3',
        image: './assets/galaxy-bg.jpg',
        caption: 'Dobsonian telescope setup for deep-sky object hunting — Orion Nebula, Pleiades.',
        date: 'Dec. 2025',
        location: 'Rajgad, Maharashtra',
      },
    ],
  },
  {
    id: 'receiver-lab',
    title: 'RF & Receiver Lab',
    subtitle: 'Radio telescope receiver backend and RF filter prototyping testbed',
    coverImage: './assets/deep-space.jpg',
    date: 'Oct. 2024',
    location: 'Fergusson College, Pune',
    driveLink: 'https://drive.google.com/drive/folders/dummy-rf-prototyping-folder-id',
    photos: [
      {
        id: 'rf-1',
        image: './assets/deep-space.jpg',
        caption: 'RF filter prototype on breadboard — testing bandpass characteristics at 1.4 GHz.',
        date: 'Oct. 2024',
        location: 'Fergusson College, Pune',
      },
      {
        id: 'rf-2',
        image: './assets/galaxy-bg.jpg',
        caption: 'Spectrum analyser output showing signal integrity and noise floor measurements.',
        date: 'Oct. 2024',
        location: 'Fergusson College, Pune',
      },
    ],
  },
];

// 9. Contact Info (MOBILE NUMBER COMPLETELY REMOVED)
export const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: 'Personal Email',
    value: 'siddhantmutha2005@gmail.com',
    href: 'mailto:siddhantmutha2005@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/siddhant-mutha',
    href: 'https://www.linkedin.com/in/siddhant-mutha-4224b12aa/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: null,
  },
];

// 10. Navigation Items (including Gallery)
export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Community', path: '/community' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

// Suppress unused re-exports if needed
void Calendar;
void ExternalLink;
