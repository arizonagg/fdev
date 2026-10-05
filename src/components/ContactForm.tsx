"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { Mail, ChevronDown, Check } from "lucide-react";

export default function ContactForm() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(t.contact.servicesOptions[0]);
  const [budget, setBudget] = useState(t.contact.budgetOptions[0]);
  const [message, setMessage] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Synchronize default service when language changes
  useEffect(() => {
    if (!t.contact.servicesOptions.includes(service)) {
      setService(t.contact.servicesOptions[0]);
    }
  }, [t, service]);

  // Click outside and Escape key handler for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = `Halo! Saya ${name} (${contact}).%0A%0ASaya tertarik untuk mendiskusikan pembuatan website:%0A• *Layanan:* ${service}%0A• *Estimasi Budget:* ${budget}%0A• *Kebutuhan:* ${
      message || "-"
    }%0A%0ABisa jadwalkan waktu diskusi? Terima kasih!`;

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${formattedText}`,
      "_blank"
    );
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Inquiry Website: ${name} - ${service}`);
    const body = encodeURIComponent(
      `Halo ${siteConfig.developerName},\n\nNama: ${name}\nKontak: ${contact}\nLayanan: ${service}\nEstimasi Budget: ${budget}\n\nKebutuhan:\n${message}\n\nTerima kasih.`
    );
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-xs font-semibold text-purple-300 mb-3 uppercase tracking-wider">
          {t.contact.badge}
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.contact.title}
        </h2>
        <p className="text-sm text-purple-200/80 mt-2 max-w-xl mx-auto">
          {t.contact.subtitle}
        </p>
      </div>

      {/* Form Card with Precision Border Beam */}
      <div className="card-border-beam p-6 sm:p-10">
        <div className="border-beam-runner" />

        <form
          onSubmit={handleWhatsAppSubmit}
          className="space-y-5 relative z-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
                {t.contact.labels.name}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.placeholders.name}
                className="w-full px-4 py-3 rounded-xl vision-input text-sm"
              />
            </div>

            {/* Contact Input */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
                {t.contact.labels.contact}
              </label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={t.contact.placeholders.contact}
                className="w-full px-4 py-3 rounded-xl vision-input text-sm"
              />
            </div>
          </div>

          {/* Service Selector (Custom VisionOS Dropdown with High-Contrast Legible Text) */}
          <div className="relative" ref={dropdownRef}>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              {t.contact.labels.service}
            </label>

            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              className="w-full px-4 py-3 rounded-xl vision-input text-sm text-left flex items-center justify-between gap-3 cursor-pointer bg-[#140b26]/90 border border-purple-400/30 text-white shadow-inner focus:outline-none focus:border-purple-300 focus:ring-2 focus:ring-purple-400/30 transition hover:border-purple-400/50"
            >
              <span className="text-white font-medium truncate">{service}</span>
              <ChevronDown
                className={`w-4 h-4 text-purple-300 transition-transform duration-200 shrink-0 ${
                  isDropdownOpen ? "rotate-180 text-fuchsia-300" : ""
                }`}
              />
            </button>

            {/* Dropdown Options Menu */}
            {isDropdownOpen && (
              <div
                role="listbox"
                className="absolute top-full left-0 right-0 mt-2 z-50 rounded-xl vision-glass border border-purple-400/40 p-1.5 shadow-2xl backdrop-blur-3xl bg-[#140b28]/98 overflow-hidden space-y-1"
              >
                {t.contact.servicesOptions.map((opt, idx) => {
                  const isSelected = service === opt;
                  return (
                    <button
                      key={idx}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => {
                        setService(opt);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-3.5 py-3 rounded-lg text-left text-xs sm:text-sm font-medium transition flex items-center justify-between gap-2 cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-r from-purple-600/70 via-fuchsia-600/70 to-indigo-600/70 text-white font-semibold shadow-md shadow-purple-900/40 border border-purple-400/40"
                          : "text-neutral-200 hover:text-white hover:bg-purple-500/20"
                      }`}
                    >
                      <span className="leading-snug">{opt}</span>
                      {isSelected && (
                        <Check className="w-4 h-4 text-fuchsia-300 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Budget Range Radio */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              {t.contact.labels.budget}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {t.contact.budgetOptions.map((bOpt, idx) => (
                <label key={idx} className="cursor-pointer">
                  <input
                    type="radio"
                    name="budget_option"
                    value={bOpt}
                    checked={budget === bOpt}
                    onChange={() => setBudget(bOpt)}
                    className="peer sr-only"
                  />
                  <div className="px-3 py-2 rounded-xl text-center text-xs font-medium bg-white/5 border border-white/10 peer-checked:bg-purple-600/60 peer-checked:border-purple-400 peer-checked:text-white text-neutral-300 transition">
                    {bOpt}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Message Brief */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-purple-200 mb-2">
              {t.contact.labels.msg}
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contact.placeholders.msg}
              className="w-full px-4 py-3 rounded-xl vision-input text-sm"
            />
          </div>

          {/* Submit Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/35 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>{t.contact.btnWhatsApp}</span>
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 border border-white/15 text-xs font-semibold text-neutral-300 hover:text-white hover:bg-white/10 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-purple-300" />
              <span>{t.contact.btnEmail}</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-purple-300/60 pt-2">
            {t.contact.privacy}
          </p>
        </form>
      </div>
    </section>
  );
}
