import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import { contactInfo } from "../../data/contact";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="uppercase tracking-[5px] text-violet-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Let's Build Something Great Together
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Whether you have a project, a freelance opportunity,
            or just want to connect, I'd love to hear from you.
          </p>

        </motion.div>

        <div className="grid gap-14 lg:grid-cols-2">

          {/* Contact Cards */}

          <div className="grid gap-6 sm:grid-cols-2">

            {contactInfo.map((item, index) => (
              <ContactCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}

          </div>

          {/* Contact Form */}

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8">

            <h3 className="mb-8 text-2xl font-bold">
              Send Me a Message
            </h3>

            <ContactForm />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;