"use client";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500] h-[500] bg-indigo-500/10 blur-[120px] rounded-full z-0 cursor-pointer" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-indigo-400 border border-indigo-500/30 rounded-full bg-indigo-500/5">
          Available for Work
        </span>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Frontend Developer
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Hello, I'm{" "}
          <span className="text-white font-medium">Kaung Khant Phyoe</span>. I
          build high-performance, visually stunning, and user-centric web
          interfaces using
          <span className="text-indigo-400"> React & Next.js</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-indigo-600 rounded-xl font-bold text-white transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/25"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl font-bold text-gray-300 transition-all border border-slate-700 hover:text-white"
          >
            Let's Talk
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
