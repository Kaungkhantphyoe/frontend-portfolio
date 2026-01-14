"use client";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative aspect-square rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center overflow-hidden">
            <img
              src="/mypho.jpg"
              alt="Kaung Khant Phyo"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            About <span className="text-indigo-500">Me</span>
          </h2>

          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>
              I am currently learning to become a{" "}
              <span className="text-white font-medium">
                Full-Stack Developer
              </span>{" "}
              with a strong focus on{" "}
              <span className="text-white font-medium">Next.js.</span> I have a
              solid understanding of UI/UX principles and hands-on experience
              building responsive interfaces using{" "}
              <span className="text-white font-medium">Vanilla CSS </span>
              {""} and{" "}
              <span className="text-white font-medium">Tailwind CSS.</span>
            </p>
            <p>
              I am actively learning and working with React and Next.js to build
              modern web applications. With a strong focus on{" "}
              <span className="text-white font-medium">Clean Code</span> and
              <span className="text-white font-medium">
                {" "}
                Responsive Design,
              </span>{" "}
              I enjoy translating design ideas into functional, user-friendly
              interfaces while paying close attention to color, spacing, and
              layout. With a strong focus on , I enjoy solving problems through
              modern frontend technologies like{" "}
              <span className="text-white font-medium">Vanilla CSS </span>
              {""} and{" "}
              <span className="text-white font-medium">Tailwind CSS.</span>
            </p>
            <p>
              I enjoy working on project-based tasks, continuously improving my
              skills, and delivering clean, maintainable{" "}
              <span className="text-white font-medium">
                Frontend Solutions.
              </span>
            </p>

            {/* Personal Info Grid - အကျဉ်းချုပ်လေးတွေ */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-800">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Based in
                </p>
                <p className="text-white font-semibold">Myanmar</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  Focus
                </p>
                <p className="text-white font-semibold">React & Web UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
