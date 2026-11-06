"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Cloud, 
  Network, 
  ShieldAlert, 
  Cpu, 
  Laptop, 
  Activity, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/data/company";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-5 h-5 text-vayu-600" />,
  networking: <Network className="w-5 h-5 text-vayu-600" />,
  security: <ShieldAlert className="w-5 h-5 text-vayu-600" />,
  automation: <Cpu className="w-5 h-5 text-vayu-600" />,
  "endpoint-management": <Laptop className="w-5 h-5 text-vayu-600" />,
  "managed-services": <Activity className="w-5 h-5 text-vayu-600" />,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Blog & Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Banner: Status & Bangalore Direct Hotline */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs py-1.5 px-4 sm:px-8 hidden md:block text-slate-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="font-mono">Bangalore NOC & SOC: <strong className="text-emerald-400 font-medium">99.99% Systems Active</strong></span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Est. 2020 • Bangalore, India</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center space-x-1.5 text-sky-400 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{COMPANY_INFO.businessHours}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md shadow-slate-900/5" 
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/vayu_logo.png" 
                alt="VAYU IT Solutions Logo" 
                width={48} 
                height={48} 
                priority
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 flex items-center">
                VAYU
                <span className="text-vayu-600 ml-1.5 font-light text-base sm:text-lg tracking-widest uppercase">
                  IT Solutions
                </span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase font-mono hidden sm:block">
                Cloud • Infrastructure • Security
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        isActive
                          ? "text-vayu-600 bg-sky-50"
                          : "text-slate-700 hover:text-vayu-600 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400" />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl bg-white p-6 border border-slate-200 shadow-2xl transition-all duration-300 ${
                        servicesDropdown ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-vayu-600" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-vayu-600">
                            Enterprise Infrastructure Practices
                          </span>
                        </div>
                        <Link 
                          href="/services" 
                          className="text-xs text-slate-500 hover:text-vayu-600 flex items-center space-x-1 transition-colors font-medium"
                        >
                          <span>Explore All Practices</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="group/item flex items-start space-x-3.5 p-3 rounded-xl hover:bg-sky-50/70 border border-transparent hover:border-sky-200 transition-all"
                          >
                            <div className="p-2.5 rounded-lg bg-sky-50 border border-sky-100 group-hover/item:border-vayu-500/50 group-hover/item:bg-white transition-colors">
                              {SERVICE_ICONS[service.id] || <Activity className="w-5 h-5 text-vayu-600" />}
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-800 group-hover/item:text-vayu-600 transition-colors flex items-center">
                                {service.title}
                              </div>
                              <p className="text-xs text-slate-500 line-clamp-2 mt-0.5 leading-relaxed">
                                {service.shortDesc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 px-6 rounded-b-2xl flex items-center justify-between">
                        <div className="text-xs text-slate-600">
                          Need an architectural evaluation or FinOps cloud cost review?
                        </div>
                        <Link 
                          href="/contact" 
                          className="text-xs font-bold text-vayu-600 hover:text-vayu-700 flex items-center space-x-1"
                        >
                          <span>Schedule Free Infrastructure Audit</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? "text-vayu-600 bg-sky-50"
                      : "text-slate-700 hover:text-vayu-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 transition-all duration-300 shadow-md shadow-vayu-500/20 hover:shadow-cyan-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/contact"
              className="text-xs px-3 py-1.5 rounded-lg bg-vayu-600 text-white font-bold"
            >
              Contact
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-3 space-y-4 shadow-xl animate-in slide-in-from-top-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                Home
              </Link>
              
              <div className="space-y-1">
                <Link
                  href="/services"
                  className="px-3 py-2 rounded-lg text-base font-bold text-vayu-600 flex items-center justify-between hover:bg-sky-50"
                >
                  <span>Services Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="pl-3 space-y-1 border-l-2 border-sky-300 ml-3">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={s.href}
                      className="block px-3 py-1.5 text-xs text-slate-600 hover:text-vayu-600 font-medium"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                Blog & Insights
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-2 text-sm text-vayu-600 font-mono font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <Link
                href="/contact"
                className="block text-center w-full py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 shadow-md"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
