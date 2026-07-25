import {
  Monitor,
  Server,
  ShoppingCart,
  Cloud,
  BookOpen,
  Wrench,
} from "lucide-react";

export const services = [
  {
    title: "Frontend Development",

    icon: Monitor,

    description:
      "Responsive and modern user interfaces built with React and Tailwind CSS.",

    features: [
      "React Applications",
      "Responsive Design",
      "Redux Toolkit",
      "Performance Optimization",
    ],
  },

  {
    title: "Backend Development",

    icon: Server,

    description:
      "Secure APIs and scalable backend systems using Node.js and Express.",

    features: [
      "REST APIs",
      "JWT Authentication",
      "MongoDB",
      "Express.js",
    ],
  },

  {
    title: "E-Commerce Development",

    icon: ShoppingCart,

    description:
      "Complete online shopping platforms with secure payments and dashboards.",

    features: [
      "Shopping Cart",
      "Admin Dashboard",
      "Paystack",
      "Order Management",
    ],
  },

  {
    title: "Cloud Deployment",

    icon: Cloud,

    description:
      "Deploying production-ready applications with modern cloud platforms.",

    features: [
      "Vercel",
      "Render",
      "Environment Variables",
      "Production Deployment",
    ],
  },

  {
    title: "Publishing Services",

    icon: BookOpen,

    description:
      "Professional formatting, typesetting, proofreading, and Kindle publishing.",

    features: [
      "Book Formatting",
      "Kindle",
      "Cover Design",
      "Proofreading",
    ],
  },

  {
    title: "Maintenance & Support",

    icon: Wrench,

    description:
      "Improving, maintaining, and troubleshooting web applications after launch.",

    features: [
      "Bug Fixes",
      "Performance",
      "Updates",
      "Optimization",
    ],
  },
];