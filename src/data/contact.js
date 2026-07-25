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
    value: "your-email@example.com",
    icon: Mail,
    link: "mailto:your-email@example.com",
  },
  {
    title: "GitHub",
    value: "github.com/yourusername",
    icon: FaGithub,
    link: "https://github.com/yourusername",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    title: "Resume",
    value: "Download Resume",
    icon: FileText,
    link: "/resume.pdf",
  },
  {
    title: "WhatsApp",
    value: "+234 XXX XXX XXXX",
    icon: MessageCircle,
    link: "https://wa.me/234XXXXXXXXXX",
  },
  {
    title: "Location",
    value: "Nigeria",
    icon: MapPin,
    link: "#",
  },
];