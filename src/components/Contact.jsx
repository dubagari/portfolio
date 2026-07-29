import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const form = useRef();

  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_estate123",
        "template_xxxxx",
        form.current,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
        },
        (error) => {
          console.log(error);
          setMessage("Failed to send message");
        }
      );
  };


  return (
    <form ref={form} onSubmit={sendEmail}>

      <input
        name="user_name"
        placeholder="Name"
      />

      <input
        name="user_email"
        placeholder="Email"
      />

      <input
        name="user_phone"
        placeholder="Phone"
      />

      <textarea
        name="message"
        placeholder="Message"
      />

      <input
        name="property_name"
        value="Estate Property"
        readOnly
      />

      <button>
        Send Message
      </button>

      <p>{message}</p>

    </form>
  );
}