import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gerrili1996.github.io"),
  title: "Jiajin Li — Mathematical Optimization & Algorithm Design",
  description:
    "Jiajin Li is an Assistant Professor at UBC working on mathematical optimization, algorithm design, LLM training, and AI for mathematics.",
  openGraph: {
    title: "Jiajin Li — Mathematical Optimization & Algorithms",
    description:
      "Research in mathematical optimization, algorithm design, LLM training, and AI for mathematics.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiajin Li — Mathematical Optimization & Algorithms",
    description:
      "Research in mathematical optimization, algorithm design, LLM training, and AI for mathematics.",
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
