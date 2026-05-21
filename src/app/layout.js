import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Idea vault - share your ideas",
  description: "Idea vault",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body  className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <Navbar />
          <main>
            {children}
            <Toaster position="top-right" />
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
