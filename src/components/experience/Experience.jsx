import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import {
  Laptop2,
  Server,
  ShoppingCart,
  Rocket,
} from "lucide-react";

const icons = {
  "Frontend Development": <Laptop2 size={30} />,
  "Backend Development": <Server size={30} />,
  "Full Stack Projects": <ShoppingCart size={30} />,
  "Continuous Learning": <Rocket size={30} />,
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-violet-400">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Development Journey
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Every project has been an opportunity to grow as a
            developer, solve real-world problems, and improve
            my skills in building modern web applications.
          </p>

        </div>

        {/* Timeline */}

        <div className="hidden lg:flex items-center justify-between mb-16">

          {experiences.map((item, index) => (
            <div
              key={item.year}
              className="flex items-center flex-1"
            >
              <div className="w-5 h-5 rounded-full bg-violet-500 z-10"></div>

              {index !== experiences.length - 1 && (
                <div className="h-1 flex-1 bg-violet-500"></div>
              )}
            </div>
          ))}

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {experiences.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-white/10 rounded-3xl p-8 hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
            >

              {/* Year */}

              <span className="inline-block px-4 py-2 rounded-full bg-violet-600/20 text-violet-300 text-sm mb-6">
                {item.year}
              </span>

              {/* Icon */}

              <div className="text-violet-400 mb-5">
                {icons[item.title]}
              </div>

              {/* Title */}

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              {/* Description */}

              <p className="text-gray-400 leading-7">
                {item.description}
              </p>

              <div className="mt-6">
  <h4 className="text-sm uppercase tracking-wide text-violet-400 mb-3">
    Key Milestones
  </h4>

  <ul className="space-y-2">
    {item.milestones.map((milestone) => (
      <li
        key={milestone}
        className="flex items-center gap-2 text-gray-300"
      >
        <span className="text-green-400">✓</span>
        {milestone}
      </li>
    ))}
  </ul>
</div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;