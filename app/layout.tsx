import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Release Notes Generator — Auto-generate changelogs from GitHub commits",
  description: "Connect to GitHub, analyze commits and PRs, and generate professional categorized release notes with AI. Built for engineering teams and open source maintainers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="40a04e68-3ee7-420e-bd89-3d3c062d9658"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
