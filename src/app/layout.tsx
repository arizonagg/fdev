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
  title: "Alex Pratama | Web Developer & WordPress Specialist",
  description:
    "Freelance Web Developer & WordPress Specialist. Jasa pembuatan Landing Page berkonversi tinggi, Company Profile modern, dan solusi kustom WordPress super cepat.",
  keywords: [
    "Web Developer Indonesia",
    "WordPress Specialist",
    "Jasa Landing Page",
    "Jasa Company Profile",
    "Freelance Next.js Developer",
    "WordPress Speed Optimization",
  ],
  openGraph: {
    title: "Alex Pratama | Web Developer & WordPress Specialist",
    description:
      "Crafting high-converting web experiences, corporate profiles, and custom WordPress solutions.",
    type: "website",
    locale: "id_ID",
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
