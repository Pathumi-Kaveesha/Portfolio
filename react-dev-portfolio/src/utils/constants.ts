// Types for better TS safety
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  tagline: string;
  resume: string;
  bio: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface NavLink {
  id: string;
  label: string;
}

// PERSONAL_INFO
export const PERSONAL_INFO: PersonalInfo = {
  name: "Pathumi Kaveesha",
  title: "Full Stack Developer",
  email: "pathumikavee@gmail.com",
  location: "Colombo, Sri Lanka",
  tagline: "Turning ideas into real-world full-stack and AI-driven applications",
  resume: "/images/resume.pdf",
  bio: [
    "I'm a passionate Full Stack Developer with hands-on experience building modern, scalable web applications using React, Next.js, Node.js, and MongoDB.",
    "I enjoy transforming complex problems into clean, intuitive solutions and love working with both frontend and backend technologies.",
    "My interests include AI-powered applications, real-time systems, and creating meaningful digital products that make an impact.",
  ],
};

// SOCIAL_LINKS
export const SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/Pathumi-Kaveesha",
  linkedin: "https://www.linkedin.com/in/pathumi-kaveesha-75437533a/",
};

// NAV_LINKS
export const NAV_LINKS: NavLink[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];


// STATS
export const STATS = [
  {label: 'Years Experience', value: '2+'},
  {label: 'Projects Completed', value: '6+'},
  {label: 'Technologies', value: '12+'}
]