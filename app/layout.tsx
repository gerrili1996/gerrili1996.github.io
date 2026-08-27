import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jiajin-li-home-preview.gerrili1996.chatgpt.site"),
  title: "Jiajin Li — Optimization & Data-Driven Decision Making",
  description:
    "Jiajin Li is an Assistant Professor at UBC working on mathematical optimization, distributional robustness, and optimal transport.",
  openGraph: {
    title: "Jiajin Li — Optimization for reliable decisions",
    description:
      "Research in mathematical optimization, distributional robustness, and optimal transport.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiajin Li — Optimization for reliable decisions",
    description:
      "Research in mathematical optimization, distributional robustness, and optimal transport.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
