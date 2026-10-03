"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioProjects } from "@/config/site";
import { ExternalLink } from "lucide-react";

export default function PortfolioShowcase() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const categories = [
    { key: "all", label: t.portfolio.filters.all },
    { key: "landing", label: t.portfolio.filters.landing },
    { key: "company", label: t.portfolio.filters.company },
    { key: "wordpress", label: t.portfolio.filters.wordpress },
    { key: "custom", label: t.portfolio.filters.custom },
  ];

  return (
    <section id="portfolio" className="space-y-10">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-xs font-semibold text-purple-300 mb-3 uppercase tracking-wider">
          {t.portfolio.badge}
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.portfolio.title}
        </h2>
        <p className="text-sm text-purple-200/80 mt-2 max-w-xl mx-auto">
          {t.portfolio.subtitle}
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-purple-600/70 text-white border border-purple-400/40 shadow-sm"
                  : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="card-border-beam p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div className="border-beam-runner" />

            <div className="relative z-10">
              {/* Mockup Window */}
              <div
                className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.themeGradient} p-4 mb-5 relative overflow-hidden flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white border border-white/20">
                    {project.tag}
                  </span>
                </div>
                <div className="text-center my-auto">
                  <div className="text-lg font-bold text-white tracking-wide">
                    {project.title}
                  </div>
                  <div className="text-xs text-purple-200/80 mt-1">
                    {project.subTitle}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-400 border-t border-white/10 pt-2">
                  {project.metrics.map((m, idx) => (
                    <span
                      key={idx}
                      className={
                        m.highlight
                          ? "text-emerald-400 font-medium"
                          : "text-neutral-300"
                      }
                    >
                      {m.label}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                {project.desc[language]}
              </p>
            </div>

            <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2 flex-wrap">
                {project.tech.map((tItem, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300"
                  >
                    {tItem}
                  </span>
                ))}
              </div>
              <a
                href={project.demoUrl}
                className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1 transition"
              >
                <span>{t.portfolio.demoLink}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
