import { motion } from "framer-motion";
import {
  Code2,
  Briefcase,
  BookOpen,
  Rocket,
} from "lucide-react";

import profile from "../../assets/images/profile.jpeg";

const stats = [
  {
    icon: <Briefcase size={28} />,
    value: "4+",
    title: "Years of Development",
  },
  {
    icon: <BookOpen size={28} />,
    value: "8+",
    title: "Years in Publishing",
  },
  {
    icon: <Code2 size={28} />,
    value: "15+",
    title: "Technologies Used",
  },
  {
    icon: <Rocket size={28} />,
    value: "100%",
    title: "Commitment to Quality",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Building Digital Experiences
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >
            <img
              src={profile}
              alt="About"
              className="rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-6">
              Frontend & MERN Stack Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I'm Abubakar Dubagari Abdullahi, a passionate
              software developer focused on building fast,
              scalable, and user-friendly web applications.
              My primary stack includes React.js, Node.js,
              Express.js, and MongoDB.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              Beyond software development, I bring over eight
              years of publishing experience, specializing in
              book formatting, proofreading, typesetting, and
              digital publishing. This unique background has
              strengthened my attention to detail and design
              thinking.
            </p>

            <p className="text-gray-400 leading-8">
              I enjoy solving challenging problems, learning
              new technologies, and building products that
              create meaningful experiences for users.
            </p>

          </motion.div>

        </div>

        {/* Stats */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {stats.map((item) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-white/10 hover:border-violet-500 transition"
            >

              <div className="text-violet-400 mb-4">
                {item.icon}
              </div>

              <h4 className="text-4xl font-bold">
                {item.value}
              </h4>

              <p className="mt-2 text-gray-400">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default About;