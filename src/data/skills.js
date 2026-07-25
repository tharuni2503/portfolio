import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiPython,
  SiMysql,
  SiFirebase,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Firebase", icon: SiFirebase },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
    ],
  },
];