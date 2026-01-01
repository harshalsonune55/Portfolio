import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
  
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
    // 🔍 HARD CHECK (this will reveal the real issue)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("❌ EmailJS ENV missing:", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY,
      });
      setStatus("Configuration error. Check EmailJS keys.");
      setLoading(false);
      return;
    }
  
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
  
      console.log("✅ SUCCESS:", result.text);
      setStatus("Message sent successfully 🚀");
      setForm({ name: "", email: "", message: "" });
  
    } catch (error) {
      console.error("❌ EMAILJS ERROR:", error);
      setStatus("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center">

      {/* Animated dots */}
      <div className="absolute inset-0 animate-dots" />
      <div className="absolute inset-0 animate-dots opacity-40 scale-110 [animation-duration:14s]" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-xl p-8 rounded-2xl bg-neutral-900/80 backdrop-blur-md shadow-xl">

        <h1 className="text-3xl font-mono mb-6 text-center">
          Contact Me
        </h1>

        {/* Contact Form */}
        <form onSubmit={sendEmail} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-black border border-neutral-700 focus:border-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-black border border-neutral-700 focus:border-white outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            required
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-black border border-neutral-700 focus:border-white outline-none resize-none"
          />

<button
  type="submit"
  disabled={loading}
  className="relative w-full py-3 uppercase tracking-widest
             bg-neutral-900 border border-neutral-700
             hover:border-white transition disabled:opacity-50"
>
  {loading ? "Sending..." : "Send Message"}
</button>
        </form>

        {/* Status */}
        {status && (
          <p className="mt-4 text-center text-sm opacity-80">
            {status}
          </p>
        )}

        {/* Back */}
        <div
          onClick={() => navigate("/")}
          className="mt-8 text-center text-sm opacity-70 hover:opacity-100 cursor-pointer"
        >
          ← Back to Home
        </div>
      </div>

      {/* Dot animation */}
      <style>{`
        .animate-dots {
          background-image: radial-gradient(
            rgba(255, 253, 253, 0.96) 2.5px,
            transparent 2.6px
          );
          background-size: 26px 26px;
          animation:
            dotsWave 10s ease-in-out infinite,
            dotsFade 6s ease-in-out infinite,
            dotsFloat 8s ease-in-out infinite;
        }

        @keyframes dotsWave {
          0% { background-position: 0 0; }
          50% { background-position: 30px 20px; }
          100% { background-position: 0 0; }
        }

        @keyframes dotsFade {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        @keyframes dotsFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>

    </section>
  );
};

export default Contact;
