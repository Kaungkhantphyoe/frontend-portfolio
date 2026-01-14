"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <span className="px-4 py-1 text-xs font-bold tracking-widest text-indigo-400 uppercase bg-slate-900 border border-indigo-500/30 rounded-full">
          Get In Touch
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
        Let's Work <span className="text-indigo-500">Together.</span>
      </h2>

      <p className="text-gray-400 text-lg mb-12 hover:text-white transition">
        Whether you’re interested in working together or just want to ask for
        advice, you can contact me through the platforms below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {/*Email */}
        <a
          href="mailto:yarsu1673@gmail.com"
          className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-indigo-500 transition-all group"
        >
          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
            📧
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
            <p className="text-white text-sm">yarsu1673@gmail.com</p>
          </div>
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/@carbon142"
          target="_blank"
          className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-400 transition-all group"
        >
          <div className="w-12 h-12 bg-blue-400/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition-all">
            ✈️
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 uppercase font-bold">
              Telegram
            </p>
            <p className="text-white text-sm">@carbon142</p>
          </div>
        </a>

        {/* Viber */}
        <a
          href="viber://chat?number=%2B959768015722"
          className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-purple-500 transition-all group"
        >
          <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
            📞
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 uppercase font-bold">Viber</p>
            <p className="text-white text-sm">+95 9768015722</p>
          </div>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/nay.s.thee"
          target="_blank"
          className="flex items-center gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-600 transition-all group"
        >
          <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
            👥
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500 uppercase font-bold">
              Facebook
            </p>
            <p className="text-white text-sm">Kaung Khant Phyoe</p>
          </div>
        </a>
      </div>

      {/* Footer */}
      <p className="text-gray-600 text-sm border-t border-slate-800 pt-8">
        © {new Date().getFullYear()} Kaung Khant Phyoe. All rights reserved.
      </p>
    </section>
  );
}
