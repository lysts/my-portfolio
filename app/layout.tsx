import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import React from "react"
import Navbar from "@/components/nav"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lyla | Personal Portfolio",
  description: "Lyla is a neuroscience-graduate full-stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-8 sm:pt-8 dark:bg-gray-900 dark:text-white dark:text-opacity-90`}
      >
        <div className="bg-[#dbd7fb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#676394]"></div>
        <div className="bg-[#ffb394] absolute top-[-1rem] -z-10 left-[-50rem] h-[20rem] w-[30rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]dark:bg-[#946f62]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Navbar />
            {children}
            <Footer />

            <Toaster position="bottom-left" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}