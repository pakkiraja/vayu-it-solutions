import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TechCursor from "@/components/layout/TechCursor";
import FloatingContact from "@/components/layout/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://vayuitsolutions.com"),
  title: {
    default: "VAYU IT Solutions | Enterprise IT Infrastructure Managed Services",
    template: "%s | VAYU IT Solutions",
  },
  description:
    "Bangalore-based Infrastructure Managed Services provider delivering enterprise IT operations, cloud transformation, cybersecurity, automation, and 24/7 NOC/SOC support.",
  keywords: [
    "VAYU IT Solutions",
    "IT Infrastructure Managed Services",
    "Cloud Services Bangalore",
    "Enterprise Cybersecurity",
    "Network Operations Center NOC",
    "Infrastructure as Code",
    "FinOps Cloud Cost Optimization",
    "Open Source Enterprise IT",
    "SD-WAN Cisco Fortinet",
    "Kurubarahalli Bengaluru IT Company"
  ],
  authors: [{ name: "VAYU IT Solutions" }],
  creator: "VAYU IT Solutions",
  publisher: "VAYU IT Solutions",
  icons: {
    icon: "/vayu_logo.png",
    shortcut: "/vayu_logo.png",
    apple: "/vayu_logo.png",
  },
  openGraph: {
    title: "VAYU IT Solutions | Enterprise Infrastructure Managed Services",
    description:
      "Powering Business Through Intelligent IT Infrastructure. Cloud, Security, Networking, Automation, and 24/7 Managed Services.",
    url: "https://vayuitsolutions.com",
    siteName: "VAYU IT Solutions",
    images: [
      {
        url: "/vayu_logo.png",
        width: 800,
        height: 800,
        alt: "VAYU IT Solutions Corporate Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VAYU IT Solutions | Enterprise IT Infrastructure",
    description: "Enterprise IT operations, cloud transformation, and 24/7 NOC/SOC support in Bangalore.",
    images: ["/vayu_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50 text-slate-800 antialiased selection:bg-vayu-500 selection:text-white font-sans min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Subtle Ambient Light Grid & Gradient */}
        <div className="fixed inset-0 bg-light-grid pointer-events-none opacity-60 z-0"></div>
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-sky-100/40 via-sky-50/20 to-transparent pointer-events-none blur-3xl z-0"></div>

        {/* Global Components */}
        <TechCursor />
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
