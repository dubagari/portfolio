import {
  ExternalLink,
  // Github,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500 transition-all duration-300">

      {/* Image */}

      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover"
      />

      <div className="p-8">

        <p className="text-violet-400 mb-2">
          {project.subtitle}
        </p>

        <h3 className="text-3xl font-bold">
          {project.title}
        </h3>

        <div className="mt-8">

          <h4 className="font-semibold mb-2">
            Challenge
          </h4>

          <p className="text-gray-400">
            {project.challenge}
          </p>

        </div>

        <div className="mt-6">

          <h4 className="font-semibold mb-2">
            Solution
          </h4>

          <p className="text-gray-400">
            {project.solution}
          </p>

        </div>

        {/* Features */}

        <div className="mt-8">

          <h4 className="font-semibold mb-4">
            Key Features
          </h4>

          <div className="grid md:grid-cols-2 gap-3">

            {project.features.map((feature) => (

              <div
                key={feature}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  className="text-green-400"
                  size={18}
                />

                <span>{feature}</span>

              </div>

            ))}

          </div>

        </div>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mt-8">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-violet-600 px-6 py-3 rounded-xl hover:bg-violet-700"
          >
            Live Demo

            <ExternalLink size={18} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-xl hover:border-violet-500"
          >
            GitHub

            <FaGithub size={18} />
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;