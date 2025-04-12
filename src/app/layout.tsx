import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-Powered Product Search",
  description: "Your assistant for finding the best products for your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <section className="flex-1 flex flex-col gap-8 w-full max-w-2xl mx-auto">
          {children}
        </section>

        <footer className="text-sm text-center border-t border-border py-4">
          <p>
            Made with ❤️ by <a href="https://github.com/CarLeonDev" target="_blank" rel="noopener noreferrer">CarLeonDev</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
