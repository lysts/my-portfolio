import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 pt-20 px-4 text-center text-gray-600 dark:text-white dark:text-opacity-60">
      <small className="mb-2 block text-xs">
        &copy; 2030 Lyla. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">This website</span> was built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}