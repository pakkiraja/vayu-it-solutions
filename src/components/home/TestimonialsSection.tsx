"use client";

import React, { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Sparkles, Building2, TrendingUp } from "lucide-react";
import { TESTIMONIALS } from "@/data/company";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState<number>(0);

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));

  return (
    <section className="relative py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-vayu-600" />
              <span>PROVEN CLIENT OUTCOMES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Trusted by IT Leaders Across{" "}
              <span className="text-gradient-cyan">Global Enterprises</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Real results from organizations that modernized their infrastructure, slashed cloud waste, and reinforced their cybersecurity posture with VAYU.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={prev}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-vayu-500 text-slate-700 hover:text-vayu-600 transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-vayu-500 text-slate-700 hover:text-vayu-600 transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                idx === current
                  ? "border-vayu-500 bg-white shadow-cyan-md -translate-y-1"
                  : "border-slate-200 bg-slate-50/70 hover:border-sky-300 hover:bg-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Impact Metric Callout */}
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold flex items-center space-x-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t.metrics}</span>
                  </span>
                </div>

                <Quote className="w-8 h-8 text-sky-200 mb-3" />

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-xs text-vayu-600 font-mono font-medium">{t.role}</div>
                  <div className="text-[11px] text-slate-500">{t.company} • {t.industry}</div>
                </div>

                <div className="p-2 rounded-xl bg-sky-50 border border-sky-100 text-vayu-600">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
