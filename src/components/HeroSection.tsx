"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full max-w-6xl mx-auto pt-4 sm:pt-8">
      <section className="text-center max-w-3xl mx-auto relative">


        {/* Spatial Availability Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full vision-glass text-xs font-medium text-purple-200 mb-6 shadow-lg shadow-purple-950/40 animate-float">
          <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-ping" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Headline in Purple/Fuchsia Glow */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          <span>{t.hero.titleLine1}</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300">
            {t.hero.titleGradient}
          </span>{" "}
          <span>{t.hero.titleLine3}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* WhatsApp Primary Button */}
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Halo%20${encodeURIComponent(
              siteConfig.developerName
            )},%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-bold text-sm flex items-center gap-2.5 shadow-xl shadow-purple-600/35 hover:scale-[1.03] active:scale-[0.98] transition"
          >
            <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span>{t.hero.btnWhatsApp}</span>
          </a>

          {/* View Portfolio Glass Button */}
          <a
            href="#portfolio"
            className="px-6 py-3.5 rounded-2xl vision-glass hover:bg-white/10 text-white font-semibold text-sm flex items-center gap-2 transition hover:scale-[1.02]"
          >
            <span>{t.hero.btnPortfolio}</span>
            <ArrowRight className="w-4 h-4 text-purple-300" />
          </a>
        </div>

        {/* Responsive Trust Badges for Mobile / Tablet (< xl) to guarantee no overlapping */}
        <div className="flex xl:hidden flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 pt-2">
          <div className="vision-glass rounded-xl px-4 py-2.5 flex items-center gap-3 text-left shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-purple-500/25 border border-purple-400/40 flex items-center justify-center text-purple-300 font-bold text-xs shrink-0">
              WP
            </div>
            <div>
              <div className="text-xs font-semibold text-white">
                {t.hero.badgeLeftTitle}
              </div>
              <div className="text-[10px] text-purple-300">
                {t.hero.badgeLeftSub}
              </div>
            </div>
          </div>

          <div className="vision-glass rounded-xl px-4 py-2.5 flex items-center gap-3 text-left shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-fuchsia-500/25 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-300 font-bold text-sm shrink-0">
              99
            </div>
            <div>
              <div className="text-xs font-semibold text-white">
                {t.hero.badgeRightTitle}
              </div>
              <div className="text-[10px] text-fuchsia-300">
                {t.hero.badgeRightSub}
              </div>
            </div>
          </div>

          <div className="vision-glass rounded-xl px-4 py-2.5 flex items-center gap-3 text-left shadow-lg">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/25 border border-indigo-400/40 flex items-center justify-center text-indigo-300 font-bold text-xs shrink-0">
              3+
            </div>
            <div>
              <div className="text-xs font-semibold text-white">
                {t.hero.badgeExpTitle}
              </div>
              <div className="text-[10px] text-indigo-300">
                {t.hero.badgeExpSub}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Spatial Badges (Desktop xl+ only, placed in wide gutters to never overlap text) */}
      {/* Top Left: WordPress Expert */}
      <div className="hidden xl:block absolute left-0 2xl:-left-6 top-8 vision-glass rounded-2xl p-3 sm:px-4 sm:py-3 text-left animate-float shadow-2xl z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-purple-500/25 border border-purple-400/40 flex items-center justify-center text-purple-300 font-bold text-xs">
            WP
          </div>
          <div>
            <div className="text-xs font-semibold text-white">
              {t.hero.badgeLeftTitle}
            </div>
            <div className="text-[10px] text-purple-300">
              {t.hero.badgeLeftSub}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Left: 3+ Years Experience */}
      <div className="hidden xl:block absolute left-0 2xl:-left-6 bottom-4 sm:bottom-8 vision-glass rounded-2xl p-3 sm:px-4 sm:py-3 text-left animate-float-slow shadow-2xl z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/25 border border-indigo-400/40 flex items-center justify-center text-indigo-300 font-bold text-sm">
            3+
          </div>
          <div>
            <div className="text-xs font-semibold text-white">
              {t.hero.badgeExpTitle}
            </div>
            <div className="text-[10px] text-indigo-300">
              {t.hero.badgeExpSub}
            </div>
          </div>
        </div>
      </div>

      {/* Middle/Right: Google PageSpeed */}
      <div className="hidden xl:block absolute right-0 2xl:-right-6 top-44 vision-glass rounded-2xl p-3 sm:px-4 sm:py-3 text-left animate-float shadow-2xl z-20 pointer-events-auto">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-fuchsia-500/25 border border-fuchsia-400/40 flex items-center justify-center text-fuchsia-300 font-bold text-sm">
            99
          </div>
          <div>
            <div className="text-xs font-semibold text-white">
              {t.hero.badgeRightTitle}
            </div>
            <div className="text-[10px] text-fuchsia-300">
              {t.hero.badgeRightSub}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
