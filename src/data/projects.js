import restaurant from "../assets/images/restaurant.png";
import fashion from "../assets/images/fashion.png";
import smilecare from "../assets/images/smilecare.png";

export const projects = [
  {
    id: "01",
    title: "Restaurant Website",
    category: "Restaurant",
    image: restaurant,
    description:
      "A modern restaurant website with menu, gallery and contact section.",
    tech: ["React", "Tailwind CSS", "Vite"],
    live: "#",
    github: "#",
  },
  {
    id: "02",
    title: "Smile Care Clinic",
    category: "Healthcare",
    image: smilecare,
    description:
      "A responsive clinic website with appointment and services sections.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "#",
  },
  {
    id: "03",
    title: "Fashion Store",
    category: "Fashion",
    image: fashion,
    description:
      "A stylish landing page for a fashion boutique with product highlights.",
    tech: ["React", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
];