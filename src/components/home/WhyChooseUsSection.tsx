"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BadgePercent, 
  Server, 
  Cpu, 
  Lock, 
  Activity, 
  Rocket, 
  ArrowRight, 
  Sparkles,
  ChevronRight
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/company";

const ICON_MAP: Record<string, React.ReactNode> = {
  BadgePercent: <BadgePercent className="w-6 h-6 text-vayu-600" />,
  Server: <Server className="w-6 h-6 text-vayu-600" />,
  Cpu: <Cpu className="w-6 h-6 text-vayu-600" />,
  Lock: <Lock className="w-6 h-6 text-vayu-600" />,
  Activity: <Activity className="w-6 h-6 text-vayu-600" />,
  Rocket: <Rocket className="w-6 h-6 text-vayu-600" />,
};

export default function WhyChooseUsSection() {
  const [selectedId, setSelectedId] = useState<string>("cost-opt");

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-vayu-600" />
            <span>THE VAYU STRATEGIC ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Enterprise Leaders Choose{" "}
            <span className="text-gradient-cyan">VAYU IT Solutions</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We reject the bloated, multi-million dollar vendor model. We replace expensive proprietary black boxes with battle-tested open-source platforms, automated self-healing scripts, and relentless cost governance.
          </p>
        </div>

        {/* 6 Rich Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const isSelected = selectedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-300 bg-white border ${
                  isSelected
                    ? "border-vayu-500 shadow-cyan-md -translate-y-1"
                    : "border-slate-200 hover:border-sky-300 hover:shadow-card-hover"
                } flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 group-hover:bg-vayu-500/10 transition-colors">
                      {ICON_MAP[item.icon] || <Server className="w-6 h-6 text-vayu-600" />}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-vayu-700 font-bold">
                      {item.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-vayu-600 transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-700 leading-relaxed font-mono">
                    <strong className="text-vayu-600">Tactical Impact: </strong>
                    {item.detail}
                  </p>

                  <div className="mt-4 flex items-center text-xs font-bold text-vayu-600 group-hover:text-vayu-700 transition-colors">
                    <span>Explore Methodology</span>
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Fast Audit CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-slate-900">
              Want to see where your infrastructure is bleeding budget?
            </h4>
            <p className="text-sm text-slate-600">
              Get an impartial, engineering-led Infrastructure Audit with detailed FinOps and security recommendations.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all flex items-center space-x-2"
          >
            <span>Request Infrastructure Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
