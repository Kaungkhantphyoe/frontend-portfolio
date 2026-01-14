"use client";

const projects = [
  {
    title: "CINEFLIX Movie App",
    image: "/flix.png",
    desc: "A modern movie discovery platform with dynamic grid and professional dark UI.",
    tags: ["React", "TypeScript", "MUI"],
    link: "https://kaungkhantphyoe.github.io/my-cinema/",
    github: "https://github.com/Kaungkhantphyoe/my-cinema.git",
  },
  {
    title: "SaaS Pricing Tool",
    image: "/saas.png",
    desc: "Interactive pricing component with real-time calculations and custom slider.",
    tags: ["JavaScript", "CSS", "DOM"],
    link: "https://kaungkhantphyoe.github.io/saas-pricing-js/",
    github: "https://github.com/Kaungkhantphyoe/saas-pricing-js.git",
  },
  {
    title: "Aura Modern Agency",
    image: "/aura.png",
    desc: "Responsive landing page for a creative agency built with modern styling.",
    tags: ["Tailwind CSS", "HTML", "Responsive"],
    link: "https://kaungkhantphyoe.github.io/tailwind-test1/",
    github: "https://github.com/Kaungkhantphyoe/tailwind-test1.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-indigo-500">Projects</span>
        </h2>
        <p className="text-gray-400">
          A collection of my recent works and technical experiments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="...">
            <div className="h-48 bg-slate-800 ...">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex items-center gap-4">
                <a
                  href={p.link}
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-widest text-white hover:text-indigo-400 transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
