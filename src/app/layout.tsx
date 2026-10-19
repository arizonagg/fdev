import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "samid.id | Web Developer & WordPress Specialist",
  description:
    "samid.id, Web Developer & WordPress Specialist. Jasa pembuatan Landing Page cepat, Company Profile modern, dan solusi kustom website.",
  keywords: [
    "samid.id",
    "Samid Web Developer",
    "Web Developer Indonesia",
    "WordPress Specialist",
    "Jasa Landing Page",
    "Jasa Company Profile",
    "Freelance Next.js Developer",
  ],
  icons: {
    icon: [
      { url: "/SAMID-FAVICO.webp", type: "image/webp" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/SAMID-FAVICO.webp",
    apple: "/SAMID-FAVICO.webp",
  },
  openGraph: {
    title: "samid.id | Web Developer & WordPress Specialist",
    description:
      "Web developer yang fokus pada pembuatan website cepat, responsif, dan mudah dikelola.",
    type: "website",
    locale: "id_ID",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} dark scroll-smooth`}>
      <body className="font-sans antialiased bg-[#07050e] text-neutral-100 min-h-screen relative overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
