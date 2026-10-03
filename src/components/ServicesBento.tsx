"use client";

import { useLanguage } from "@/context/LanguageContext";
import { TrendingUp, Building2, Code2, MonitorPlay, ArrowRight } from "lucide-react";

export default function ServicesBento() {
  const { t } = useLanguage();

  return (
    <section id="services" className="space-y-10">
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.services.title}
        </h2>
        <p className="text-sm text-purple-200/80 mt-2 max-w-xl mx-auto">
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Landing Page (2 Cols) */}
        <div className="md:col-span-2 card-border-beam p-6 sm:p-8 flex flex-col justify-between group">
          <div className="border-beam-runner" />
          <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-purple-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/35 transition duration-500" />

          <div className="relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-purple-500/20 border border-purple-400/35 flex items-center justify-center text-purple-300 mb-5">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
              {t.services.card1.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
              {t.services.card1.title}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
              {t.services.card1.desc}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-purple-500/20 flex flex-wrap items-center gap-3 relative z-10">
            {t.services.card1.chips.map((chip, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Company Profile (1 Col) */}
        <div className="card-border-beam p-6 sm:p-8 flex flex-col justify-between group">
          <div className="border-beam-runner" />
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-fuchsia-600/20 rounded-full blur-2xl pointer-events-none group-hover:bg-fuchsia-600/35 transition" />

          <div className="relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-400/35 flex items-center justify-center text-fuchsia-300 mb-5">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
              {t.services.card2.tag}
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              {t.services.card2.title}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {t.services.card2.desc}
            </p>
          </div>
        </div>

        {/* Card 3: WordPress Solutions (1 Col) */}
        <div className="card-border-beam p-6 sm:p-8 flex flex-col justify-between group">
          <div className="border-beam-runner" />
          <div className="absolute -left-12 -bottom-12 w-44 h-44 bg-violet-600/20 rounded-full blur-2xl pointer-events-none group-hover:bg-violet-600/35 transition" />

          <div className="relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-violet-500/20 border border-violet-400/35 flex items-center justify-center text-violet-300 mb-5">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-300">
              {t.services.card3.tag}
            </span>
            <h3 className="text-xl font-bold text-white mt-1 mb-2">
              {t.services.card3.title}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              {t.services.card3.desc}
            </p>
          </div>
        </div>

        {/* Card 4: Custom Web App (2 Cols) */}
        <div className="md:col-span-2 card-border-beam p-6 sm:p-8 flex flex-col justify-between group">
          <div className="border-beam-runner" />
          <div className="absolute -right-16 -top-16 w-56 h-56 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/35 transition duration-500" />

          <div className="relative z-10">
            <div className="w-11 h-11 rounded-2xl bg-indigo-500/20 border border-indigo-400/35 flex items-center justify-center text-indigo-300 mb-5">
              <MonitorPlay className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              {t.services.card4.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
              {t.services.card4.title}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-xl">
              {t.services.card4.desc}
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-purple-500/20 flex items-center justify-between relative z-10">
            <span className="text-xs text-purple-200/70">
              {t.services.card4.tech}
            </span>
            <a
              href="#contact"
              className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1 transition"
            >
              <span>{t.services.card4.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
