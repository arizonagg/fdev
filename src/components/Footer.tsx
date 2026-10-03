"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-center pt-12 pb-6 border-t border-purple-500/20 text-xs text-purple-300/60">
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
