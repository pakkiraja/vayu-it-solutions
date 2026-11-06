"use client";

import React from "react";
import { 
  Cloud, 
  Boxes, 
  Cpu, 
  Server, 
  Network, 
  Shield, 
  ShieldCheck, 
  Terminal, 
  Globe, 
  Layers, 
  Workflow, 
  Cog,
  Sparkles
} from "lucide-react";
import { TECH_PARTNERS } from "@/data/company";

const PARTNER_ICONS: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-6 h-6 text-amber-500" />,
  Boxes: <Boxes className="w-6 h-6 text-sky-600" />,
  Cpu: <Cpu className="w-6 h-6 text-red-500" />,
  Server: <Server className="w-6 h-6 text-blue-600" />,
  Network: <Network className="w-6 h-6 text-vayu-600" />,
  Shield: <Shield className="w-6 h-6 text-red-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
  Terminal: <Terminal className="w-6 h-6 text-red-600" />,
  Globe: <Globe className="w-6 h-6 text-emerald-600" />,
  Layers: <Layers className="w-6 h-6 text-purple-600" />,
  Workflow: <Workflow className="w-6 h-6 text-blue-600" />,
  Cog: <Cog className="w-6 h-6 text-red-600" />,
};

export default function TechnologyPartnersSection() {
  return (
    <section className="relative py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-vayu-600" />
            <span>ENTERPRISE ALLIANCES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Certified Across Leading{" "}
            <span className="text-gradient-cyan">Technology Ecosystems</span>
          </h2>

          <p className="text-slate-600 text-sm">
            We hold direct certifications and partner alliances with world-class enterprise vendors and open-source foundations.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-vayu-500 hover:shadow-card transition-all flex flex-col items-center text-center group"
            >
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-3 group-hover:scale-110 group-hover:bg-sky-50 transition-all">
                {PARTNER_ICONS[partner.icon] || <Cloud className="w-6 h-6 text-vayu-600" />}
              </div>

              <div className="text-xs font-bold text-slate-800 group-hover:text-vayu-600 transition-colors">
                {partner.name}
              </div>

              <div className="text-[10px] text-slate-500 font-mono mt-1">
                {partner.category}
              </div>

              <div className="text-[9px] text-vayu-600 font-mono mt-1.5 px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200 font-bold">
                {partner.badge}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
