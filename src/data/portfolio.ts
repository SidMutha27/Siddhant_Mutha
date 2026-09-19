import {
  Radio, Microscope, ExternalLink, Telescope, Cpu, Waves, Database,
  Code2, Orbit, Monitor, Brain, CircuitBoard, FileText,
  Users, Star, Heart, Droplets, Train, Pill,
  Mail, MapPin, Phone, Linkedin, Calendar,
  type LucideIcon,
} from 'lucide-react';

// ─── Type Definitions ──────────────────────────────────────────

export interface Highlight {
  icon: LucideIcon;
  label: string;
  description: string;
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
  description: string;
  details: string[];
  tags: string[];
  icon: LucideIcon;
  color: 'gold' | 'cosmic' | 'purple';
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
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
  skills: { name: string; level: 'advanced' | 'intermediate' | 'beginner' }[];
}

export interface Workshop {
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  icon: LucideIcon;
  category: string;
}

export interface CommunityItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  icon: LucideIcon;
  color: 'gold' | 'cosmic' | 'purple';
}

export interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string | null;
}

// ─── Data ───────────────────────────────────────────────────────

export const highlights: Highlight[] = [
  { icon: Telescope, label: 'Radio Astronomy', description: 'FRB detection with GMRT' },
  { icon: Cpu, label: 'Instrumentation', description: 'Embedded systems & hardware' },
  { icon: Waves, label: 'Signal Processing', description: 'Interferometric data analysis' },
  { icon: Database, label: 'Scientific Computing', description: 'ML pipelines & simulations' },
];

export const educationData: Education[] = [
  {
    degree: 'Bachelor of Science in Electronic Systems',
    institution: 'Indian Institute of Technology Madras',
    location: 'Chennai, Tamil Nadu',
    period: 'Dec 2023 – May 2027',
    description: 'Specialized study in electronic systems engineering with focus on instrumentation and signal processing.',
    current: true,
  },
  {
    degree: 'Bachelor of Science in Physics',
    institution: 'Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'July 2023 – May 2026',
    description: 'Comprehensive physics program covering theoretical and experimental physics, astrophysics, and computational methods.',
    current: true,
  },
  {
    degree: 'High School (12th)',
    institution: 'Vidyadham Jr. College of Science',
    location: 'Pune, Maharashtra',
    period: 'June 2021 – Feb 2023',
    description: 'Science stream with focus on Physics, Mathematics, and Electronics.',
    current: false,
  },
];

export const experiences: Experience[] = [
  {
    id: 'ncra',
    role: 'FRB Detection — SPOTLIGHT System',
    organization: 'NCRA-TIFR',
    location: 'Pune, Maharashtra',
    period: 'Dec 2024 – Present',
    description: 'Working on the SPOTLIGHT project under Dr. Jayanta Roy, focusing on real-time detection of FRBs and pulsars using GMRT.',
    details: [
      'Developed machine learning based clustering techniques to group similar candidates and reduce false positives',
      'Processed interferometric data on GPU for real-time transient detection',
      'Built detection pipelines for automated candidate identification',
    ],
    tags: ['Radio Astronomy', 'ML', 'GPU Computing', 'GMRT'],
    icon: Radio,
    color: 'gold',
  },
  {
    id: 'iit-indore-ias',
    role: 'IAS Summer Research Fellowship',
    organization: 'IIT Indore',
    location: 'Indore, Madhya Pradesh',
    period: 'Jul 2025 – Present',
    description: 'Plasma diagnostics and instrumentation research with hands-on circuit design and simulation work.',
    details: [
      'Performed plasma diagnostics simulations using LTspice and Python',
      'Langmuir probe I-V analysis and OES-based plasma characterization',
      'Designed a tunable-sweep Langmuir probe backend prototype with configurable sweep speed and resolution',
    ],
    tags: ['Plasma Physics', 'LTspice', 'Instrumentation', 'Python'],
    icon: Microscope,
    color: 'cosmic',
  },
  {
    id: 'iit-indore-ska',
    role: 'SKAO-India Summer Training Program',
    organization: 'IIT Indore',
    location: 'Indore, Madhya Pradesh',
    period: 'Jul 2025',
    description: 'Intensive training program on SKA-relevant signal processing and radio astronomy foundations.',
    details: [
      'Gained hands-on exposure to SKA-relevant signal processing and HPC',
      'Big-data pipelines and AI/ML applications in radio astronomy',
      'Strong foundation in radio astronomy aligned with the Square Kilometre Array',
    ],
    tags: ['SKA', 'Signal Processing', 'HPC', 'AI/ML'],
    icon: Radio,
    color: 'purple',
  },
  {
    id: 'ftsky',
    role: 'FTSky Training School & Conference',
    organization: 'ICTS-TIFR',
    location: 'Bengaluru, Karnataka',
    period: 'Oct 2025',
    description: 'International conference on fast transients with hands-on workshops and global researcher engagement.',
    details: [
      'Hands-on workshops on fast transient searches, VLBI imaging, real observational data analysis',
      'ML-based detection methodologies',
      'Engaged with international researchers across radio, optical, theory, and data-science domains',
    ],
    tags: ['VLBI', 'Fast Transients', 'Data Analysis', 'Networking'],
    icon: ExternalLink,
    color: 'gold',
  },
  {
    id: 'nius',
    role: 'NIUS Astronomy Camp',
    organization: 'HBCSE-TIFR',
    location: 'Mumbai, Maharashtra',
    period: 'July 2024',
    description: 'National Initiative on Undergraduate Science — intensive astronomy camp with theoretical and practical training.',
    details: [
      'Lectures on pulsar behavior, AGN jets, solar physics, stellar seismology, and star formation',
      'Hands-on training in telescope handling, spectral data analysis, and transient object detection',
      'Processed GMRT data to identify Fast Radio Bursts (FRBs)',
    ],
    tags: ['GMRT', 'Pulsars', 'Spectroscopy', 'Telescope'],
    icon: Microscope,
    color: 'cosmic',
  },
  {
    id: 'swan',
    role: 'Differential Notch Filter for SWAN Antenna',
    organization: 'Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'Oct 2024',
    description: 'RF filter design project for FM interference mitigation in radio astronomy applications.',
    details: [
      'Designed a differential notch filter for FM interference mitigation',
      'Simulated filter design, analyzing S-parameters, insertion/return loss, and impedance',
      'Developing PCB design (Gerber files) for prototype fabrication',
    ],
    tags: ['RF Design', 'Filters', 'PCB', 'Simulation'],
    icon: Radio,
    color: 'purple',
  },
];

export const projects: Project[] = [
  {
    title: 'ASRT — Affordable Solar Radio Telescope',
    subtitle: 'Fergusson College',
    description: 'Built and operated a solar radio telescope for flux analysis and eclipse observation studies.',
    details: [
      'Assembled complete radio telescope setup with Arduino-based data recording system',
      'Analyzed solar flux data for eclipse study and solar activity monitoring',
      'Developed affordable design for educational radio astronomy',
    ],
    icon: Radio,
    tags: ['Arduino', 'Radio Astronomy', 'Data Analysis', 'Solar Physics'],
    color: 'gold',
    year: '2024',
  },
  {
    title: 'Railway Wheel Crack Detection System',
    subtitle: 'Ministry of Railways India',
    description: 'AI-powered multi-sensor crack detection system for railway safety under Ministry of Railways.',
    details: [
      'Designed a multi-camera sensor module with AI models for real-time crack detection',
      'Used OpenCV for computer vision-based defect identification',
      'Enhanced detection with laser shearography and adapted ISRO IMPRESS technology',
    ],
    icon: Train,
    tags: ['Computer Vision', 'OpenCV', 'AI', 'IoT'],
    color: 'cosmic',
    year: '2024',
  },
  {
    title: 'Automated Powder Filling System',
    subtitle: 'IIT Madras',
    description: 'Precision pharmaceutical powder dispensing system for medical drug formulation.',
    details: [
      'Designed a machine to accurately measure and dispense small quantities (0.01g) of drugs',
      'Customized doses by filling beakers for drug formulation',
      'Integrated precision weighing and automated dispensing mechanisms',
    ],
    icon: Pill,
    tags: ['Automation', 'Precision Engineering', 'IoT'],
    color: 'purple',
    year: '2024',
  },
  {
    title: 'The Expeditious Telescope',
    subtitle: 'IIT Kanpur Tech Innovation Challenge',
    description: 'Innovative concept for a movable, large-sized radio telescope with mechanical positioning system.',
    details: [
      'Pitched an innovative concept for a movable radio telescope design',
      'Designed mechanical system for large aperture positioning',
      'Participated in IIT Kanpur Tech Innovation Challenge',
    ],
    icon: Telescope,
    tags: ['Mechanical Design', 'Innovation', 'Radio Telescope'],
    color: 'gold',
    year: '2023',
  },
  {
    title: 'IoT Arduino Projects',
    subtitle: 'Self-directed',
    description: 'Various hands-on IoT and embedded systems projects for skill development.',
    details: [
      'Engaged in diverse IoT Arduino projects for practical learning',
      'Developed and refined algorithmic skills for efficient project development',
      'Built automated systems with sensor integration',
    ],
    icon: Cpu,
    tags: ['Arduino', 'IoT', 'Embedded Systems', 'Sensors'],
    color: 'cosmic',
    year: '2023–Present',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    icon: Code2,
    color: 'gold',
    skills: [
      { name: 'C', level: 'advanced' },
      { name: 'C++', level: 'advanced' },
      { name: 'Python', level: 'advanced' },
      { name: 'Bash', level: 'intermediate' },
    ],
  },
  {
    title: 'Astronomy Tools',
    icon: Orbit,
    color: 'cosmic',
    skills: [
      { name: 'SAOImage DS9', level: 'advanced' },
      { name: 'Siril', level: 'intermediate' },
      { name: 'GMRT Data Analysis', level: 'advanced' },
      { name: 'Radio Astronomy', level: 'advanced' },
    ],
  },
  {
    title: 'Systems & OS',
    icon: Monitor,
    color: 'purple',
    skills: [
      { name: 'Linux', level: 'advanced' },
      { name: 'Windows', level: 'intermediate' },
    ],
  },
  {
    title: 'Engineering',
    icon: CircuitBoard,
    color: 'gold',
    skills: [
      { name: 'Arduino', level: 'advanced' },
      { name: 'IoT Development', level: 'advanced' },
      { name: 'PCB Design', level: 'intermediate' },
      { name: 'LTspice', level: 'intermediate' },
    ],
  },
  {
    title: 'Data & ML',
    icon: Brain,
    color: 'cosmic',
    skills: [
      { name: 'Machine Learning', level: 'intermediate' },
      { name: 'GPU Computing', level: 'intermediate' },
      { name: 'Signal Processing', level: 'advanced' },
      { name: 'Scientific Computing', level: 'intermediate' },
    ],
  },
  {
    title: 'Documentation',
    icon: FileText,
    color: 'purple',
    skills: [
      { name: 'LaTeX', level: 'advanced' },
      { name: 'Technical Writing', level: 'advanced' },
    ],
  },
];

export const languages = ['English', 'Marwadi (Native)', 'Marathi', 'Hindi'];

export const workshops: Workshop[] = [
  {
    title: 'GMRT Data Analysis Session I & II',
    organization: 'NCRA, Pune',
    location: 'Pune',
    date: 'July 2024',
    description: 'Continuum, Pulsar, and FRB data analysis using GMRT pipelines.',
    icon: Radio,
    category: 'Data Analysis',
  },
  {
    title: 'Identifying Outflows Using Spectral Data Cubes',
    organization: 'HBCSE, Mumbai',
    location: 'Mumbai',
    date: 'July 2024',
    description: 'Workshop on spectral data cube analysis for astrophysical outflow detection.',
    icon: Waves,
    category: 'Spectroscopy',
  },
  {
    title: 'Python Workshop',
    organization: 'HBCSE, Mumbai — Akshat Singhal',
    location: 'Mumbai',
    date: 'July 2024',
    description: 'Advanced Python programming for scientific applications.',
    icon: Brain,
    category: 'Programming',
  },
  {
    title: 'Cosmology from Home',
    organization: 'Online',
    location: 'Remote',
    date: 'June 2024',
    description: 'Online cosmology lectures and interactive sessions.',
    icon: Orbit,
    category: 'Cosmology',
  },
  {
    title: 'Gravitational Wave Open Data Workshop',
    organization: 'LIGO-VIRGO-KAGRA',
    location: 'Online',
    date: 'May 2024',
    description: 'GW data analysis techniques using open data from LIGO, Virgo, and KAGRA.',
    icon: Waves,
    category: 'Gravitational Waves',
  },
  {
    title: 'Introduction to Computational Astrophysics',
    organization: 'AstroClub: Fergusson College',
    location: 'Pune',
    date: 'March 2024',
    description: 'Computational methods and numerical techniques in astrophysics research.',
    icon: Brain,
    category: 'Computation',
  },
  {
    title: 'Telescope Handling Workshop',
    organization: 'HBCSE, Mumbai',
    location: 'Mumbai',
    date: 'July 2024',
    description: 'Hands-on training in optical telescope operation and observation techniques.',
    icon: Radio,
    category: 'Observation',
  },
];

export const communityItems: CommunityItem[] = [
  {
    role: 'Co-founder',
    organization: 'Yantra: IITM',
    location: 'Chennai, Tamil Nadu',
    period: 'Aug 2024 – Present',
    description: 'Conducted robotics workshops, IoT sessions, and hands-on electronics projects for students.',
    icon: Users,
    color: 'gold',
  },
  {
    role: 'Core Member',
    organization: 'AstroClub: Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'Jul 2023 – Present',
    description: 'Organized lecture series, group discussions, and stargazing workshops for astronomy enthusiasts.',
    icon: Star,
    color: 'cosmic',
  },
  {
    role: 'Volunteer Tutor',
    organization: 'NSS: Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'Sep 2023 – Aug 2024',
    description: 'Free tutoring for local students in science and mathematics subjects.',
    icon: Heart,
    color: 'purple',
  },
  {
    role: 'Environmental Volunteer',
    organization: 'River Club: Fergusson College',
    location: 'Pune, Maharashtra',
    period: 'Oct 2023 – Sep 2024',
    description: 'Joined River Club to clean rivers, educate others, and create impactful environmental awareness posters.',
    icon: Droplets,
    color: 'cosmic',
  },
];

export const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: 'Email',
    value: '23f3000278@es.study.iitm.ac.in',
    href: 'mailto:23f3000278@es.study.iitm.ac.in',
  },
  {
    icon: Mail,
    label: 'Personal Email',
    value: 'siddhantmutha2005@gmail.com',
    href: 'mailto:siddhantmutha2005@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 89568 92706',
    href: 'tel:+918956892706',
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

// Navigation items for routing
export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Research', path: '/research' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Community', path: '/community' },
  { label: 'Contact', path: '/contact' },
];

// Suppress unused import warnings — these are re-exported for section components
void Calendar;
