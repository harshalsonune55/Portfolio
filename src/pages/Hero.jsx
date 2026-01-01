import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaCopyright,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const name = "HARSHAL SONUNE";



const Hero = () => {
    const navigate = useNavigate();
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">

      {/* 🔵 Animated dots background */}
      <div className="absolute inset-0 animate-dots" />
<div className="absolute inset-0 animate-dots opacity-40 scale-110 [animation-duration:14s]" />




      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Top bar */}
      <div className="relative z-10 flex justify-between items-center px-10 py-6 text-2xl">
        <FaCopyright />

        <div className="flex gap-10 text-3xl">
          <a href="https://github.com/harshalsonune55" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/harshalsonune/" target="_blank"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/harshal_sonune_01/" target="_blank"><FaInstagram /></a>
        </div>

        <span className="font-bold text-xl">@IIT-R</span>
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] text-center">

        {/* 🌊 Wavy animated title */}
        <h1 className="flex flex-wrap justify-center text-[10vw] font-extrabold leading-none">
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block animate-wave"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Button */}
        <button 
        onClick={() => navigate("/projects")}
        className="relative mt-10 px-10 py-3 text-sm tracking-widest uppercase
  bg-neutral-900 text-white
  overflow-hidden
  border border-transparent
  group">

  <span className="relative z-10">Projects</span>

  {/* RGB Border */}
  <span className="absolute inset-0 rounded
    opacity-0 group-hover:opacity-100 transition-opacity duration-300
    before:absolute before:inset-[-2px] before:rounded
    before:bg-[linear-gradient(90deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,#ff0000)]
    before:bg-[length:400%_400%]
    before:animate-rgbBlur
    before:blur-sm">
  </span>
</button>
<button
  onClick={() => navigate("/contact")}
  className="mt-4 px-10 py-3 text-sm tracking-widest uppercase
             bg-transparent border border-neutral-700
             hover:border-white transition"
>
  Contact
</button>

      </div>

      {/* Bottom left credits */}
      <div className="absolute bottom-10 left-10 text-sm leading-6 opacity-80 z-10">
        <p><b>STARRING:</b> Harshal Amrut Sonune</p>
        <p><b>WRITTEN & DIRECTED BY:</b> Curiosity</p>
        <p><b>PRODUCED BY:</b> Sleepless Nights & Endless Code</p>
        <p><b>LOCATION:</b> IIT Roorkee, Planet Earth</p>
        <p><b>SOUNDTRACK:</b> Lo-fi beats and startup sounds</p>
        <p><b>POWERED BY:</b> Chai, Passion & Ctrl+Z</p>
      </div>

      {/* Signature */}
      {/* Signature with text-complete animation */}
<div className="absolute bottom-10 right-10 z-10 text-3xl italic opacity-90 flex">
  {"harshal".split("").map((char, i) => (
    <span
      key={i}
      className="inline-block animate-signature"
      style={{ animationDelay: `${i * 0.25}s` }}
    >
      {char}
    </span>
  ))}
</div>


      {/* 🔧 Animations (inline, Tailwind-safe) */}
      <style>{`
/* Dotted background animation */
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

/* Horizontal drift */
@keyframes dotsWave {
  0% { background-position: 0 0; }
  50% { background-position: 30px 20px; }
  100% { background-position: 0 0; }
}

/* Opacity breathing */
@keyframes dotsFade {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* 🌊 Vertical wave motion */
@keyframes dotsFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}
  /* 🌊 TEXT wave animation */
@keyframes textWave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

.animate-wave {
  animation: textWave 2.4s ease-in-out infinite;
}

/* 🌈 RGB border animation */
@keyframes rgbGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-rgbBlur {
  animation: rgbGlow 6s linear infinite;
}

/* ✍️ Signature text-complete animation */
@keyframes signatureWrite {
  0% {
    opacity: 0;
    transform: translateY(6px);
  }
  40% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
  }
}

.animate-signature {
  animation: signatureWrite 3s ease forwards;
}

/* Optional: loop the signature */
.animate-signature {
  animation-iteration-count: infinite;
  animation-delay: var(--delay);
}


      `}</style>

    </section>
  );
};

export default Hero;
