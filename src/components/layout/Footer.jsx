import { motion } from "framer-motion";
import {

  Mail,
  FileText,
  ArrowUp,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:your-email@example.com",
    label: "Email",
  },
  {
    icon: FileText,
    href: "/resume.pdf",
    label: "Resume",
  },
];

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-violet-600 to-purple-700 p-10 text-center"
        >
          <h2 className="text-4xl font-bold">
            Ready to Build Something Amazing?
          </h2>

          <p className="mt-4 text-violet-100 max-w-2xl mx-auto leading-8">
            Let's collaborate to create fast, modern,
            and scalable web applications.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Main Footer */}

        <div className="mt-20 grid gap-12 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-bold">
              Abubakar Dubagari
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              MERN Stack Developer passionate about
              building scalable web applications,
              solving real-world problems,
              and creating exceptional user experiences.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-6 text-xl font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition hover:text-violet-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Social */}

          <div>

            <h4 className="mb-6 text-xl font-semibold">
              Connect
            </h4>

            <div className="flex gap-4">

              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : "_self"
                    }
                    rel="noreferrer"
                    className="rounded-full border border-white/10 p-4 transition hover:border-violet-500 hover:bg-violet-600"
                    aria-label={item.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Abubakar Dubagari Abdullahi.
            Crafted with React, Tailwind CSS & Framer Motion.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full border border-white/10 p-3 transition hover:border-violet-500 hover:bg-violet-600"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;