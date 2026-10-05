"use client";

import { useLanguage } from "@/context/LanguageContext";

interface TechItem {
  name: string;
  category: string;
  detail: string;
  iconBg: string;
  iconColor: string;
  svgPath: React.ReactNode;
}

const ROW_1: TechItem[] = [
  {
    name: "Next.js 15",
    category: "Fullstack",
    detail: "App Router & SSR",
    iconBg: "bg-white/10 border-white/20",
    iconColor: "text-white",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 180 180">
        <path d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zm45.92 133.565L72.26 53.6H54.4v72.8h13.6V71.24l55.8 70.84a89.774 89.774 0 0012.12-8.515zM112 53.6h13.6v45.24L112 81.6V53.6z" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    category: "CMS & Headless",
    detail: "Custom Themes & Gutenberg",
    iconBg: "bg-sky-500/15 border-sky-400/30",
    iconColor: "text-sky-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18.06A8.06 8.06 0 015.69 7.43l4.63 12.69a8.14 8.14 0 01-1.63-.06zm5.82-7.58c0-1.28-.46-2.17-.86-2.86-.52-.86-1-1.6-1-2.46 0-.97.74-1.88 1.77-1.88a7.82 7.82 0 012.39.46 8.06 8.06 0 01-2.3 6.74zm-7.39-7.31a6.34 6.34 0 011.83-.23c.86 0 2.23.29 2.23 2.11 0 .97-.46 2.4-1.09 3.94l-2.97 8.63zm-3.66 4.4c.57 0 1.2-.06 1.77-.06l2.86 8.51L8.8 17.51l-2.4-6.94a4.88 4.88 0 01-1.63-.11 8.08 8.08 0 011-1.89z" />
      </svg>
    ),
  },
  {
    name: "React 19",
    category: "Frontend",
    detail: "Hooks & Server Actions",
    iconBg: "bg-cyan-500/15 border-cyan-400/30",
    iconColor: "text-cyan-400",
    svgPath: (
      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" className="fill-current" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    detail: "Type-Safe Architecture",
    iconBg: "bg-blue-500/15 border-blue-400/30",
    iconColor: "text-blue-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm10.7 13.6c.7.4 1.6.7 2.6.7 1.8 0 2.8-.9 2.8-2.2 0-1.3-.8-2-2.3-2.6-1.5-.7-2.3-1.6-2.3-2.8 0-1.8 1.4-3.1 3.6-3.1 1 0 1.8.2 2.3.5l-.6 1.7c-.5-.3-1.1-.5-1.8-.5-1.1 0-1.8.7-1.8 1.5 0 1 .8 1.5 2.4 2.2 1.8.8 2.5 1.8 2.5 3.2 0 1.9-1.4 3.3-4.1 3.3-1.1 0-2.2-.3-2.9-.7l.6-1.7zm-4.9-7.4H5.3V7.5h7.2v1.7H9.2v9h-2v-9h1.6z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    detail: "Ultra-Fast Modern UI",
    iconBg: "bg-teal-500/15 border-teal-400/30",
    iconColor: "text-teal-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "WooCommerce",
    category: "E-Commerce",
    detail: "Payment & Catalog Engine",
    iconBg: "bg-purple-500/15 border-purple-400/30",
    iconColor: "text-purple-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M2.5 6h19c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5h-19C1.7 18 1 17.3 1 16.5v-9C1 6.7 1.7 6 2.5 6zm2.8 3.5c-.8 0-1.3.6-1.3 1.3 0 .8.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.8-.6-1.3-1.3-1.3zm6 0c-.8 0-1.3.6-1.3 1.3 0 .8.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.8-.6-1.3-1.3-1.3zm6 0c-.8 0-1.3.6-1.3 1.3 0 .8.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.8-.6-1.3-1.3-1.3z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    category: "Runtime",
    detail: "High-Performance APIs",
    iconBg: "bg-emerald-500/15 border-emerald-400/30",
    iconColor: "text-emerald-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
      </svg>
    ),
  },
  {
    name: "PHP 8.3",
    category: "Backend",
    detail: "WordPress Core & APIs",
    iconBg: "bg-indigo-500/15 border-indigo-400/30",
    iconColor: "text-indigo-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 4C5.5 4 2 7.5 2 12s3.5 8 10 8 10-3.5 10-8-3.5-8-10-8zm-4.5 11.5l1.2-5h2.2c1.2 0 1.8.5 1.6 1.5-.2 1.1-.9 1.7-2 1.7H9.2l-.5 1.8H7.5zm7 0l1.2-5h2.2c1.2 0 1.8.5 1.6 1.5-.2 1.1-.9 1.7-2 1.7h-1.3l-.5 1.8h-1.2z" />
      </svg>
    ),
  },
];

const ROW_2: TechItem[] = [
  {
    name: "Supabase",
    category: "BaaS & Auth",
    detail: "Realtime PostgreSQL",
    iconBg: "bg-emerald-500/15 border-emerald-400/30",
    iconColor: "text-emerald-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.19.261a.885.885 0 0 0 .717 1.408H12v8.958a.396.396 0 0 0 .716.233l9.081-12.261.19-.261a.885.885 0 0 0-.625-1.408z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    category: "Database",
    detail: "Relational Data Integrity",
    iconBg: "bg-blue-600/15 border-blue-400/30",
    iconColor: "text-blue-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z" />
      </svg>
    ),
  },
  {
    name: "Core Web Vitals",
    category: "Performance",
    detail: "Score 95+ PageSpeed",
    iconBg: "bg-amber-500/15 border-amber-400/30",
    iconColor: "text-amber-400",
    svgPath: (
      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" className="fill-current" />
      </svg>
    ),
  },
  {
    name: "REST & GraphQL",
    category: "API Integration",
    detail: "Seamless Data Fetching",
    iconBg: "bg-fuchsia-500/15 border-fuchsia-400/30",
    iconColor: "text-fuchsia-400",
    svgPath: (
      <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <line x1="8.5" y1="7.5" x2="15.5" y2="16.5" />
      </svg>
    ),
  },
  {
    name: "Figma to Code",
    category: "Design System",
    detail: "Pixel-Perfect Conversion",
    iconBg: "bg-rose-500/15 border-rose-400/30",
    iconColor: "text-rose-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M8 2h4v4H8V2zm0 4h4v4H8V6zm0 8a4 4 0 1 1 0-8h4v8H8zm8-12a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4V2h4zm0 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4v-8h4z" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    category: "Workflow",
    detail: "CI/CD & Version Control",
    iconBg: "bg-purple-600/15 border-purple-400/30",
    iconColor: "text-purple-300",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Vercel & Edge",
    category: "Deployment",
    detail: "Global CDN & Zero Downtime",
    iconBg: "bg-white/10 border-white/20",
    iconColor: "text-white",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
  {
    name: "Redis Cache",
    category: "Optimization",
    detail: "Sub-Second In-Memory Speed",
    iconBg: "bg-red-500/15 border-red-400/30",
    iconColor: "text-red-400",
    svgPath: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M21 7.5L12 2.25 3 7.5v9l9 5.25 9-5.25v-9zm-9 1.5l6-3.5v7l-6 3.5-6-3.5v-7l6 3.5z" />
      </svg>
    ),
  },
];

export default function TechStackMarquee() {
  const { t } = useLanguage();

  return (
    <section id="tech-stack" className="relative w-full max-w-6xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-xs font-semibold text-purple-300 mb-3 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span>{t.techStack.badge}</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.techStack.title}
        </h2>
        <p className="text-sm text-purple-200/80 mt-2">
          {t.techStack.subtitle}
        </p>
      </div>

      {/* Marquee Wrapper with Smooth Horizontal Fade Out Gradients */}
      <div className="marquee-container relative w-full space-y-4 py-2">
        {/* Left Fade Mask */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-r from-[#07050e] via-[#07050e]/80 to-transparent z-20 pointer-events-none" />
        
        {/* Right Fade Mask */}
        <div className="absolute right-0 inset-y-0 w-16 sm:w-32 bg-gradient-to-l from-[#07050e] via-[#07050e]/80 to-transparent z-20 pointer-events-none" />

        {/* ROW 1: Scrolling Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee flex items-center gap-4">
            {ROW_1.concat(ROW_1).map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="group vision-glass rounded-2xl p-3.5 sm:px-5 sm:py-4 flex items-center gap-3.5 min-w-[210px] sm:min-w-[240px] hover:border-purple-400/50 hover:bg-purple-950/30 transition-all duration-300 hover:scale-[1.02] shadow-lg cursor-default select-none"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm`}
                >
                  {item.svgPath}
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-purple-200 transition truncate">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-[11px] text-purple-300/80 font-medium truncate">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right (Reverse) */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-reverse flex items-center gap-4">
            {ROW_2.concat(ROW_2).map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="group vision-glass rounded-2xl p-3.5 sm:px-5 sm:py-4 flex items-center gap-3.5 min-w-[210px] sm:min-w-[240px] hover:border-purple-400/50 hover:bg-purple-950/30 transition-all duration-300 hover:scale-[1.02] shadow-lg cursor-default select-none"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.iconBg} ${item.iconColor} border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm`}
                >
                  {item.svgPath}
                </div>
                <div className="text-left min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-fuchsia-200 transition truncate">
                      {item.name}
                    </span>
                  </div>
                  <div className="text-[11px] text-purple-300/80 font-medium truncate">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
