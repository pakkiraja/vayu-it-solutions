"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import HeroDomainVisual from "./HeroDomainVisual";
import { COMPANY_INFO } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-50">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-sky-100/50 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Sub-headline, Pitch & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-vayu-500 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-vayu-500"></span>
              <span>ENTERPRISE INFRASTRUCTURE MANAGED SERVICES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Powering Business Through{" "}
              <span className="text-gradient-cyan block sm:inline">
                Intelligent IT Infrastructure
              </span>
            </h1>

            {/* Sub-Headline */}
            <div className="text-base sm:text-lg font-mono font-semibold text-slate-700 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-vayu-600 font-bold">Cloud.</span>
              <span className="text-slate-400">•</span>
              <span className="text-vayu-600 font-bold">Security.</span>
              <span className="text-slate-400">•</span>
              <span className="text-vayu-600 font-bold">Networking.</span>
              <span className="text-slate-400">•</span>
              <span className="text-vayu-600 font-bold">Automation.</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-900 font-bold">Managed Services.</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-700 max-w-xl mx-auto lg:mx-0 font-medium">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-vayu-500 flex-shrink-0" />
                <span>Up to 50% IT Cost Reduction</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-vayu-500 flex-shrink-0" />
                <span>24/7/365 Bangalore NOC & SOC</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-vayu-500 flex-shrink-0" />
                <span>99.99% Availability SLA Guarantees</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-vayu-500 flex-shrink-0" />
                <span>Zero Vendor Lock-in (Open Source)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md shadow-vayu-500/25 hover:shadow-cyan-md hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-slate-700 font-semibold text-sm bg-white border border-slate-300 hover:border-vayu-500 hover:text-vayu-600 shadow-sm transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Trust Footnote */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-center lg:justify-start space-x-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ISO 27001 Aligned</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Terminal className="w-4 h-4 text-vayu-600" />
                <span>GitOps & IaC Certified</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>FinOps Certified</span>
              </span>
            </div>
          </div>

          {/* Right Column: Domain Specific Interactive Visual Graphic */}
          <div className="lg:col-span-6 relative">
            <HeroDomainVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
