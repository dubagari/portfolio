import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Replace with your image
import profile from "../../assets/images/profile.jpeg";


const Hero = () => {
  return (
   <section
  id="home"
  className="relative overflow-hidden min-h-screen flex items-center bg-slate-950 text-white pt-24 lg:pt-28"
>
      <div className="absolute top-32 left-10 w-72 h-72 bg-violet-600/20 blur-3xl rounded-full"></div>

<div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-6">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Remote Opportunities
          </div>  
          <p className="text-violet-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Abubakar
            <br />
            Dubagari
          </h1>

          <div className="text-2xl lg:text-3xl mt-6 text-gray-300 font-semibold">

            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1500,
                "React Developer",
                1500,
                "MERN Stack Developer",
                1500,
                "JavaScript Developer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-gray-400 leading-8 max-w-xl">
            I build fast, scalable, and responsive web applications
            using React, Node.js, Express.js, and MongoDB. I enjoy
            solving complex problems and transforming ideas into
            exceptional digital experiences.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="group relative bg-violet-600 hover:bg-violet-700 transition px-7 py-4 rounded-xl flex items-center gap-2"
            >
              View Projects
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1"/>
            </a>

            <a
              href="/Abubakar_Dubagari_Abdullahi_Resume.pdf"
              download="Abubakar_Dubagari_Abdullahi_Resume.pdf"
              aria-label="Download Resume"
              className="border border-violet-600 hover:bg-violet-600 transition px-7 py-4 rounded-xl flex items-center gap-2"
            >
              Resume
              <Download size={18} className="transition-transform duration-300 group-hover:translate-y-0.5"/>
            </a>

          </div>

          {/* Social Icons */}

          <div className="flex gap-5 mt-10">

            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-violet-400 transition">
              <FaGithub size={22} />
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-violet-400 transition">
              <FaLinkedin size={22} />
            </a>

            <a href="#" className="text-gray-300 hover:text-violet-400 transition">
              <Mail className="hover:text-violet-400 transition" />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-violet-600 blur-3xl opacity-30"></div>

            <img
              src={profile}
              alt="Abubakar"
              className="relative w-80 lg:w-96 rounded-full border-4 border-violet-500 shadow-2xl"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;