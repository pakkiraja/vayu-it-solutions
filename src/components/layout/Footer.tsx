import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  Cpu, 
  Server, 
  Cloud 
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/data/company";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent pointer-events-none blur-3xl"></div>
      
      {/* Decorative VAYU Watermark loop in corner */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-5 pointer-events-none">
        <Image 
          src="/vayu_logo.png" 
          alt="Watermark" 
          width={400} 
          height={400} 
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1 & 2: Brand & Company Overview */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative w-14 h-14 flex-shrink-0 bg-white/10 rounded-2xl p-1.5 backdrop-blur-sm border border-white/10">
                <Image 
                  src="/vayu_logo.png" 
                  alt="VAYU IT Solutions Logo" 
                  width={56} 
                  height={56} 
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-white flex items-center">
                  VAYU
                  <span className="text-sky-400 ml-2 font-light text-lg tracking-widest uppercase">
                    IT Solutions
                  </span>
                </span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                  Enterprise Infrastructure Services
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Established in 2020 in Bangalore, India, VAYU IT Solutions delivers enterprise-grade infrastructure managed services, cloud transformation, cybersecurity, and automation designed to slash operational costs through disruptive open-source technologies.
            </p>

            {/* Company Motto */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-[10px] uppercase tracking-widest font-mono text-sky-400 block mb-1">
                Our Corporate Motto
              </span>
              <p className="text-xs text-slate-200 italic font-medium leading-relaxed">
                "{COMPANY_INFO.motto}"
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-950/30 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-950/30 transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-950/30 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-950/30 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Core Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-sky-400">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link 
                    href={s.href} 
                    className="text-slate-400 hover:text-sky-400 transition-colors flex items-center group text-xs font-medium"
                  >
                    <ArrowRight className="w-3 h-3 mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Governance */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-sky-400">
              Company & Links
            </h3>
            <ul className="space-y-2.5 text-slate-400 text-xs font-medium">
              <li>
                <Link href="/about" className="hover:text-sky-400 transition-colors">
                  About VAYU IT Solutions
                </Link>
              </li>
              <li>
                <Link href="/about#journey" className="hover:text-sky-400 transition-colors">
                  Company Milestones (2020 - 2026)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-400 transition-colors">
                  Enterprise Services Hub
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-sky-400 transition-colors">
                  Industries We Specialize In
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sky-400 transition-colors">
                  Technical Blog & FinOps Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sky-400 transition-colors">
                  Request Architecture Consultation
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="hover:text-sky-400 transition-colors">
                  Core Values & Open-Source Ethos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Bangalore Office & Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-sky-400">
              Bangalore HQ
            </h3>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-mono hover:text-sky-300 transition-colors text-white font-bold"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-sky-300 transition-colors text-slate-300"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-start space-x-2.5 pt-2 border-t border-slate-800">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Business Operations:</div>
                  <div className="text-[11px] text-slate-400">{COMPANY_INFO.businessHours}</div>
                  <div className="text-[11px] text-emerald-400 font-medium mt-0.5">
                    NOC / SOC: 24/7/365 Global Operations
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span>© {COMPANY_INFO.established} - {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">ISO 27001 Security Baselines</Link>
            <span>•</span>
            <span className="text-sky-400 font-mono">Enterprise Scale Infrastructure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
