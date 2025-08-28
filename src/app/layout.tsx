import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aaditya Malani - Developer Portfolio",
  description: "Modern developer portfolio showcasing creative projects built with Next.js, Three.js, and cutting-edge web technologies.",
  keywords: ["developer", "portfolio", "web development", "Next.js", "Three.js", "TypeScript"],
  authors: [{ name: "Aaditya Malani" }],
  creator: "Aaditya Malani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
  title: "Aaditya Malani - Developer Portfolio",
    description: "Modern developer portfolio showcasing creative projects built with Next.js, Three.js, and cutting-edge web technologies.",
  siteName: "Aaditya Malani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
  title: "Aaditya Malani - Developer Portfolio",
    description: "Modern developer portfolio showcasing creative projects built with Next.js, Three.js, and cutting-edge web technologies.",
  creator: "@aadityamalani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
