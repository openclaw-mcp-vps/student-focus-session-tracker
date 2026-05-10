import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FocusTrack — Gamified Study Sessions for Students",
  description: "Pomodoro timer with distraction blocking, progress tracking, and achievement rewards. Stay focused, earn rewards, and crush your study goals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2e20db7c-2f94-4dc0-8896-38b35382d072"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  );
}
