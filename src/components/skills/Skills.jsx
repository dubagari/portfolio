import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-violet-400 uppercase tracking-widest">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My preferred technologies for building modern,
            scalable, and high-performance web applications.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category) => (

            <motion.div
              key={category.title}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ duration:.6 }}
              viewport={{ once:true }}
              className="bg-slate-900 rounded-3xl border border-white/10 p-8"
            >

              <h3 className="text-2xl font-bold mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">

                {category.skills.map((skill) => {

                  const Icon = skill.icon;

                  return (

                    <div
                      key={skill.name}
                      className="flex items-center gap-4 rounded-xl bg-slate-800 p-4 hover:bg-violet-600 transition-all duration-300"
                    >

                      <Icon size={28} />

                      <span>{skill.name}</span>

                    </div>

                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;