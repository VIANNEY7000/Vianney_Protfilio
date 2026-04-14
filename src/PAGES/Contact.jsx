import { motion } from "framer-motion";
import { useState } from "react";
import '../STYLES/contact.css'

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <div className="contact">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        CONTACT
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Let’s work together — send a message and I’ll respond as soon as possible.
      </motion.p>

      <motion.form
        className="contact-box"
        action="https://formspree.io/f/maqbqddn"
        method="POST"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <input type="text" name="name" placeholder="Your Name" required />

        <input type="email" name="email" placeholder="Your Email" required />

        <textarea
          name="message"
          placeholder="Your Message..."
          required
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;