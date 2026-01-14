"use client";

const skills = [
  { name: "HTML", color: "hover:text-orange-500" },
  { name: "CSS", color: "hover:text-blue-500" },
  { name: "JavaScript", color: "hover:text-yellow-400" },
  { name: "React.js", color: "hover:text-cyan-400" },
  { name: "Next.js", color: "hover:text-white" },
  { name: "Tailwind CSS", color: "hover:text-sky-400" }, // မင်းသုံးနေတဲ့အတွက် ထည့်ပေးထားတယ်
  { name: "API Integration", color: "hover:text-green-400" },
  { name: "Responsive Design", color: "hover:text-purple-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-15 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical <span className="text-indigo-500">Skills</span>
        </h2>
        <p className="text-gray-400">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800 hover:border-indigo-500/50 shadow-xl shadow-black/5`}
          >
            {/* Hover လုပ်ရင် အရောင်တောက်မယ့် အလင်းစက်လေး */}
            <div className="absolute inset-0 bg-indigo-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <span
              className={`text-lg font-semibold text-gray-300 transition-colors duration-300 ${skill.color}`}
            >
              {skill.name}
            </span>

            {/* Decoration Bar - အောက်ခြေက မျဉ်းတိုလေး */}
            <div className="w-0 h-0.5 bg-indigo-500 mt-2 group-hover:w-12 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
