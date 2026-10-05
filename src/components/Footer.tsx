"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-center pt-12 pb-8 border-t border-purple-500/20 text-xs text-purple-300/60">
      {/* Brand Logo in Footer */}
      <div className="flex justify-center mb-6">
        <a href="#" className="inline-block group">
          <img
            src="/logo-white.png"
            alt="samid.id Logo"
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 opacity-85 group-hover:opacity-100 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          />
        </a>
      </div>

      <div className="flex items-center justify-center gap-6 mb-4">
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-300 transition"
        >
          GitHub
        </a>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-300 transition"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="hover:text-purple-300 transition"
        >
          Email
        </a>
      </div>
      <p>{t.footer.copyright}</p>
    </footer>
  );
}
