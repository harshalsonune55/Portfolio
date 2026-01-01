import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const GITHUB_USERNAME = "harshalsonune55";

const Projects = () => {
  const navigate = useNavigate();

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">

      {/* 🎥 Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/background_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 px-16 py-12">

        {/* Title */}
        <h1 className="text-4xl mb-10 font-mono">Projects:</h1>

        {/* Grid */}
        {loading ? (
          <p className="opacity-70">Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {repos.map(repo => (
              <ProjectCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}

        {/* Back */}
        <div
  onClick={() => navigate("/")}
  className="mt-24 text-center opacity-70 hover:opacity-100 transition cursor-pointer select-none"
>
  ← BACK TO HOME
</div>
      </div>

      {/* Inline styles */}
      <style>{`
        /* Card white reveal from top-right */
        .card-fill::before {
          content: "";
          position: absolute;
          inset: 0;
          background: white;
          transform: translate(100%, -100%);
          transition: transform 0.5s ease;
          z-index: 0;
        }

        .group:hover .card-fill::before {
          transform: translate(0, 0);
        }
      `}</style>

    </section>
  );
};

export default Projects;

/* ---------------- CARD ---------------- */

const ProjectCard = ({ repo }) => {
  const date = new Date(repo.created_at).toLocaleDateString("en-GB");
  const description =
    repo.description || "No description provided for this project.";

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group rounded-2xl p-6 shadow-lg overflow-hidden
                 bg-neutral-900 hover:scale-[1.03]
                 transition-transform duration-300"
    >
      {/* White fill animation */}
      <div className="card-fill absolute inset-0" />

      {/* Cut corner */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-white rounded-bl-full z-10" />

      {/* Content */}
      <div
        className="relative z-20 transition-colors duration-300
                   text-white group-hover:text-black"
      >
        {/* Title */}
        <h2 className="text-2xl font-mono leading-tight mb-3">
          {repo.name.replace(/-/g, " ")}
        </h2>

        {/* Description */}
        <p className="text-sm mb-5 opacity-80 group-hover:opacity-100">
          {description}
        </p>

        {/* Date */}
        <p className="text-xs">
          Start:{" "}
          <span className="font-mono text-blue-400 group-hover:text-black">
            {date}
          </span>
        </p>
      </div>
    </a>
  );
};
