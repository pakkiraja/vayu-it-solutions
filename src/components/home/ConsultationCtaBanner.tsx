"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Calendar, ArrowRight, MapPin, Mail, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ConsultationCtaBanner() {
  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          
          {/* Subtle Background VAYU Logo Watermark */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-10 pointer-events-none">
            <Image
              src="/vayu_logo.png"
              alt="VAYU Logo"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>START YOUR TRANSFORMATION TODAY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Ready to Modernize and Optimize Your{" "}
                <span className="text-sky-400">IT Infrastructure?</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Connect with our senior infrastructure architects for a zero-cost architecture review. We will identify cost inefficiencies, security vulnerabilities, and open-source modernization opportunities.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Bangalore HQ: Kurubarahalli</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1.5">
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1.5">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col space-y-3 justify-center">
              <Link
                href="/contact"
                className="w-full py-4 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-sky-400 to-vayu-400 hover:from-sky-300 hover:to-vayu-300 shadow-xl shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-4 px-6 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 border border-slate-700 hover:border-sky-400 hover:text-white transition-all flex items-center justify-center space-x-2 text-center"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call Direct: {COMPANY_INFO.phone}</span>
              </a>

              <div className="text-[11px] text-center text-slate-400 font-mono">
                Bangalore NOC & SOC: 24/7/365 On-Call
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
