import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-600/0 to-violet-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6 inline-flex rounded-2xl bg-violet-600/15 p-4 text-violet-400">
          <Icon size={32} />
        </div>

        <h3 className="mb-4 text-2xl font-bold">
          {service.title}
        </h3>

        <p className="mb-6 leading-7 text-slate-400">
          {service.description}
        </p>

        <ul className="mb-8 space-y-3">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-sm text-slate-300"
            >
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              {feature}
            </li>
          ))}
        </ul>

        <button className="flex items-center gap-2 text-violet-400 transition group-hover:gap-3">
          Learn More
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
