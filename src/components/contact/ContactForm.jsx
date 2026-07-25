import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,

      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

      {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },

      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert("Message sent successfully!");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.log(error);

    alert("Something went wrong.");
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="rounded-xl bg-slate-900 border border-white/10 p-4 outline-none focus:border-violet-500"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="rounded-xl bg-slate-900 border border-white/10 p-4 outline-none focus:border-violet-500"
          required
        />

      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900 border border-white/10 p-4 outline-none focus:border-violet-500"
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900 border border-white/10 p-4 outline-none focus:border-violet-500"
      />

      <textarea
        rows="6"
        name="message"
        placeholder="Tell me about your project..."
        value={form.message}
        onChange={handleChange}
        className="w-full rounded-xl bg-slate-900 border border-white/10 p-4 outline-none resize-none focus:border-violet-500"
        required
      />

      <button
        type="submit"
        className="rounded-xl bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;