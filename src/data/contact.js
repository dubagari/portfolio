import {
  Mail,
  MapPin,
  FileText,
  MessageCircle,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const contactInfo = [
  {
    title: "Email",
    value: "superango93@gmail.com",
    icon: Mail,
    link: "superango93@gmail.com",
  },
  {
    title: "GitHub",
    value: "github.com/dubagari",
    icon: FaGithub,
    link: "https://github.com/dubagari",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/abubakar-dubagari-018023189",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/abubakar-dubagari-018023189/",
  },
  {
    title: "Resume",
    value: "Download Resume",
    icon: FileText,
    link: "/resume.pdf",
  },
  {
    title: "WhatsApp",
    value: "+234 703 611 2003",
    icon: MessageCircle,
    link: "https://wa.me/2347036112003",
  },
  {
    title: "Location",
    value: "Bauchi, Nigeria",
    icon: MapPin,
    link: "https://www.google.com/maps/place/Bauchi,+Nigeria",
  },
];