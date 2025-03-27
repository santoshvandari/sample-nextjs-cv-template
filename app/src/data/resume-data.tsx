import {
  Logo
} from "../images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Santosh Bhandari",
  initials: "SB",
  location: "Nepal",
  locationLink: "https://www.google.com/maps/place/Nepal",
  about:
    "Web and app developer with experience in FastAPI, Flutter, and cloud technologies.",
  summary: (
    <>
      Passionate web and app developer specializing in FastAPI, Flutter, and cloud computing. 
      Experienced in building scalable backend systems, NoSQL databases, and AI-powered applications.
      Active community leader at Mechi Mavericks and intern at Darse Technology working on ship tracking projects.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/63558580?v=4", // Update with your actual avatar URL
  personalWebsiteUrl: "https://bhandari-santosh.com.np/", // Update if you have a personal website
  contact: {
    email: "info@bhandari-santosh.com.np", // Update with your actual email
    tel: "+977XXXXXXXXX", // Update with your actual phone number
    social: [
      {
        name: "GitHub",
        url: "https://github.com/santoshvandari",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santoshvandari/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/santoshvandari",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Tribhuvan University - Mechi Multiple Campus",
      degree: "Bachelor's Degree in Computer Applications (BCA)",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Darse Technology",
      link: "https://darse.com/",
      badges: ["Intern", "FastAPI", "MongoDB", "Ship Tracking"],
      title: "Software Developer Intern",
      logo: Logo,
      start: "2025",
      end: null,
      description: (
        <>
          Developing a ship tracking system using FastAPI and MongoDB. 
          <ul className="list-inside list-disc">
            <li>Building scalable APIs for ship tracking and monitoring.</li>
            <li>Optimizing NoSQL queries for real-time data processing.</li>
            <li>Integrating cloud-based services for enhanced performance.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Mechi Mavericks",
      link: "https://github.com/MechiMavericks",
      badges: ["Community Leader", "Tech Events", "Open Source"],
      title: "Community Lead",
      logo: Logo,
      start: "2024",
      end: null,
      description: (
        <>
          Leading Mechi Mavericks, a tech community for students at Mechi Multiple Campus.
          <ul className="list-inside list-disc">
            <li>Organizing coding competitions like CodeWar 1.0.</li>
            <li>Hosting workshops and mentorship programs.</li>
            <li>Managing open-source contributions and projects.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "FastAPI",
    "Flutter",
    "MongoDB",
    "Node.js",
    "React",
    "Cloud Computing",
    "NoSQL Databases",
    "AI-powered Development",
  ],
  projects: [
    {
      title: "AI-powered Code Judging System",
      techStack: ["FastAPI", "MongoDB", "Python"],
      description:
        "An AI-based system for automated code evaluation, used in coding competitions.",
      logo: Logo,
      link: {
        label: "GitHub",
        href: "https://github.com/MechiMavericks/AI-Code-Judge",
      },
    },
    {
      title: "Image to Text Converter App",
      techStack: ["Flutter", "FastAPI", "Gemini API"],
      description:
        "A mobile app that extracts text from images using AI-powered OCR.",
      logo: Logo,
      link: {
        label: "GitHub",
        href: "https://github.com/santoshbhandari/ImageToTextApp",
      },
    },
    {
      title: "Mechi Mavericks Website",
      techStack: ["AI Model", "Frontend Development"],
      description:
        "A website developed using AI technology to showcase Mechi Mavericks projects and events.",
      logo: Logo,
      link: {
        label: "GitHub",
        href: "https://github.com/MechiMavericks/Website",
      },
    },
  ],
} as const;
