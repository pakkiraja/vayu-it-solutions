"use client";

import React, { useState } from "react";
import { 
  Factory, 
  HeartPulse, 
  Landmark, 
  ShoppingBag, 
  GraduationCap, 
  Truck, 
  Code2, 
  Flame, 
  Sparkles 
} from "lucide-react";
import { INDUSTRIES } from "@/data/company";

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  Factory: <Factory className="w-6 h-6 text-vayu-600" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-emerald-600" />,
  Landmark: <Landmark className="w-6 h-6 text-amber-600" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-pink-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-sky-600" />,
  Truck: <Truck className="w-6 h-6 text-cyan-600" />,
  Code2: <Code2 className="w-6 h-6 text-indigo-600" />,
  Flame: <Flame className="w-6 h-6 text-orange-600" />,
};

export default function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="industries" className="relative py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-vayu-600" />
            <span>VERTICAL SPECIALIZATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industries Powered By{" "}
            <span className="text-gradient-cyan">VAYU Infrastructure</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every sector faces distinct operational, security, and latency constraints. We engineer tailored infrastructure fabrics aligned with specific regulatory and operational benchmarks.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const isHovered = activeIdx === idx;

            return (
              <div
                key={ind.name}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`relative p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  isHovered 
                    ? "border-vayu-500 bg-white shadow-cyan-md -translate-y-1" 
                    : "border-slate-200 bg-slate-50/70 hover:border-sky-300 hover:bg-white hover:shadow-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 group-hover:bg-vayu-500/10 transition-colors">
                      {INDUSTRY_ICONS[ind.icon] || <Factory className="w-6 h-6 text-vayu-600" />}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-vayu-700 font-bold">
                      {ind.stats}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-vayu-600 transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-700">
                  <span className="text-vayu-600 font-bold block mb-1">Architecture In Action:</span>
                  <p className="text-slate-500 leading-normal">{ind.useCase}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
