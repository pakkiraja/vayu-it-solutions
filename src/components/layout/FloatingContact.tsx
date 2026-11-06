"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowUp, X, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Expanded Quick Contact Card */}
      {expanded && (
        <div className="w-80 p-5 rounded-2xl bg-white border border-slate-200 shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-900 font-mono">
                Bangalore Ops Active
              </span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-md hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Need urgent infrastructure support or want to discuss enterprise cloud cost optimization?
          </p>

          <div className="space-y-2">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-sky-50 border border-sky-200 text-vayu-700 hover:bg-sky-100 text-xs font-mono font-bold transition-all"
            >
              <Phone className="w-4 h-4 text-vayu-600" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setExpanded(false)}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-vayu-600 to-vayu-500 text-white text-xs font-bold hover:shadow-md transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Schedule Free Tech Audit</span>
            </Link>
          </div>

          <div className="mt-3 text-[10px] text-center text-slate-400 font-mono">
            Average response time: &lt; 15 minutes
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center space-x-2">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-vayu-600 hover:border-vayu-500 flex items-center justify-center shadow-md transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-vayu-600 to-vayu-500 text-white font-bold text-xs shadow-lg shadow-vayu-600/30 hover:scale-105 active:scale-95 transition-all group"
        >
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 block"></span>
          </div>
          <span className="font-mono tracking-wide">24/7 Consultation</span>
        </button>
      </div>
    </div>
  );
}
