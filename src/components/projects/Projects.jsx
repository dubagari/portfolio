import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="text-violet-400 uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A selection of projects that demonstrate my
            experience building full-stack applications,
            solving real-world problems, and delivering
            high-quality user experiences.
          </p>

        </div>

        <div className="space-y-20">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              initial={{ opacity:0,y:50 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ duration:.7 }}
              viewport={{ once:true }}
            >

              <ProjectCard project={project} />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;