"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function FloatingDock() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="vision-dock rounded-full px-4 py-2.5 flex items-center gap-2 sm:gap-4 transition-all duration-300">
        {/* Brand Pill */}
        <a
          href="#"
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/25 text-xs font-semibold tracking-wide text-white hover:bg-purple-500/25 transition"
        >
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span>{siteConfig.name}</span>
        </a>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-300">
          <a
            href="#services"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-purple-500/15 transition"
          >
            {t.nav.services}
          </a>
          <a
            href="#portfolio"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-purple-500/15 transition"
          >
            {t.nav.portfolio}
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full hover:text-white hover:bg-purple-500/15 transition"
          >
            {t.nav.contact}
          </a>
        </div>

        <div className="w-px h-5 bg-purple-400/20" />

        {/* Language Switcher (Interactive Toggle) */}
        <div className="flex items-center bg-black/50 rounded-full p-0.5 border border-purple-400/20">
          <button
            type="button"
            onClick={() => setLanguage("id")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
              language === "id"
                ? "bg-purple-600/60 text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            🇮🇩 ID
          </button>
          <button
            type="button"
            onClick={() => setLanguage("en")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
              language === "en"
                ? "bg-purple-600/60 text-white shadow-sm"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            🇬🇧 EN
          </button>
        </div>

        {/* Quick Contact CTA in Dock */}
        <a
          href="#contact"
          className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 text-white hover:brightness-110 shadow-lg shadow-purple-500/30 transition"
        >
          <span>{t.nav.cta}</span>
        </a>
      </nav>
    </header>
  );
}
