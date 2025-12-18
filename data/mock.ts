export const personalInfo = {
  name: "Deepak Sharma",
  title: "Full Stack Developer",
  location: "New Delhi, India",
  email: "dev2sharma2k@gmail.com",
  linkedin: "https://linkedin.com/in/dsdsharma",
  github: "https://github.com/dsdsharma",
  bio: "Full Stack Developer with 3+ years of experience building scalable web and mobile applications. Specializing in React, NestJS, Flutter, and Next.js. Passionate about creating elegant solutions to complex problems and leading teams to deliver high-quality products.",
  resumeUrl: "https://bit.ly/deepak-sharma-resume",
};

export const skills = {
  "Languages & Databases": [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Dart",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
    },
    {
      name: "HTML/CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ],
  "Frameworks & Technologies": [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "NestJS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    },
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Redux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  "Tools & Libraries": [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    // {
    //   name: "Docker",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    // },
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "VS Code",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    // {
    //   name: "Npm",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    // },
    // {
    //   name: "Yarn",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
    // },
  ],
};

export const experience = [
  {
    id: 1,
    company: "CrystalCode Systems Pvt. Ltd. (Wain Labs)",
    position: "Software Development Engineer",
    duration: "Sep 2022 - Dec 2025",
    location: "New Delhi, India",
    logo: "/logo/crystalcode.jpeg",
    responsibilities: [
      "Designed and developed full-stack systems for InsurTech and logistics clients using NestJS, React, and Flutter",
      "Led a 3-member team in project planning, development, and client communication",
      "Integrated REST APIs with insurers like Max Life, Bharti AXA, and Reliance for real-time policy data synchronization",
      "Built and deployed lambda functions for dynamic PDF generation and shipment tracking workflows",
      "Implemented robust RBAC and user action logging for operations transparency",
      "Managed cloud infrastructure and CI/CD pipelines using AWS, reducing deployment time by 40%",
    ],
  },
  {
    id: 2,
    company: "GoalWit Technologies Pvt. Ltd. (Nikah Forever)",
    position: "Flutter Developer",
    duration: "May 2022 - Sep 2022",
    location: "Delhi, India",
    logo: "/logo/goalwit.jpeg",
    responsibilities: [
      "Successfully migrated production app from Kotlin to Flutter, preserving login sessions for 7K+ monthly active users",
      "Refactored Flutter codebase into MVC architecture with Provider for state management",
      "Built dynamic UI for profile filters and plan pages with server-driven design",
      "Developed custom widgets following SOLID principles",
    ],
  },
  {
    id: 3,
    company: "FRSHR Technologies Pvt. Ltd.",
    position: "Flutter Developer",
    duration: "Jul 2021 - Sep 2021",
    location: "Remote",
    logo: "/logo/frshr.jpeg",
    responsibilities: [
      "Contributed to an NFT-based social media app using Flutter",
      "Implemented REST API integrations and enhanced UI/UX flow",
      "Collaborated on wireframe design using Miro",
    ],
  },
  {
    id: 4,
    company: "Housy, Lank Hospitality Pvt. Ltd.",
    position: "Software Developer Intern",
    duration: "Jun 2021 - Jul 2021",
    location: "Remote",
    logo: "/logo/housy.jpeg",
    responsibilities: [
      "Integrated Google Maps API with geo-coordinate logic for user-service provider matching",
      "Built responsive UI components using MVC architecture",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "The Policy Exchange Platform",
    description:
      "Customer, Partner, and Investor Platform with role-based dashboards, policy tracking, and communication tools.",
    technologies: ["React.js", "NestJS", "PostgreSQL", "AWS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "https://platform.thepolicyexchange.com/",
    featured: false,
  },
  {
    id: 2,
    title: "The Policy Exchange Website",
    description:
      "SEO-optimized marketing website integrated with Prismic CMS for dynamic content management.",
    technologies: ["Next.js", "Prismic CMS", "Tailwind CSS"],
    image:
      "/tpe.png",
    liveUrl: "https://www.thepolicyexchange.com/",
    featured: false,
  },
  {
    id: 3,
    title: "Treemo",
    description:
      "Mobile App for an InsurTech Startup focused on customer onboarding and lead management. Internal MVP for The Policy Exchange.",
    technologies: ["Flutter", "Firebase", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Nikah Forever",
    description:
      "Muslim Matrimony App migrated from Kotlin to Flutter while preserving user sessions for 7K+ MAU.",
    technologies: ["Flutter", "Provider", "MVC Architecture"],
    image:
      "/nikah-forever-app.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.nikahforever",
    featured: false,
  },
  {
    id: 5,
    title: "Housy",
    description:
      "Hyper Local Service Provider Mobile App similar to Urban Company for connecting users with service providers.",
    technologies: ["Flutter", "Google Maps API", "Firebase"],
    image:
      "/housy.png",
    liveUrl: "https://housyind.wixsite.com/website",
    featured: false,
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Dr. Akhilesh Das Gupta Institute of Professional Studies (GGSIPU)",
    duration: "2019 - 2022",
    location: "New Delhi, Delhi",
    cgpa: 8.47
  },
  {
    id: 2,
    degree: "Diploma (Polytechnic) in Computer Science Engineering",
    institution: "Guru Nanak Dev Institute Of Technology, BTE",
    duration: "2016 - 2019",
    location: "Rohini, Delhi",
    cgpa: 7.4
  },
];

export const achievements = [
  "Hosted a seminar on Google Assistant Actions for 200+ students during diploma",
  "Collaborated with Galgotias University's technical clubs to organize and host seminars",
  "Led 3-member development team with consistent on-time delivery",
  "Reduced deployment time by 40% through AWS infrastructure optimization",
];
