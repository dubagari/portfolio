import { motion } from "framer-motion";

const ContactCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.link}
      target={item.link.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: .5,
        delay: index * .1,
      }}
      viewport={{ once: true }}
      className="group rounded-3xl border border-white/10 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
    >
      <div className="mb-5 inline-flex rounded-2xl bg-violet-600/15 p-4 text-violet-400 transition-transform group-hover:scale-110">
        <Icon size={28} />
      </div>

      <h3 className="font-semibold text-lg">
        {item.title}
      </h3>

      <p className="mt-2 text-slate-400 break-all">
        {item.value}
      </p>
    </motion.a>
  );
};

export default ContactCard;