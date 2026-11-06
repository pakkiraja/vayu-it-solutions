"use client";

import React from "react";
import { 
  Calendar, 
  Clock, 
  Layers, 
  TrendingDown, 
  Lock, 
  Cpu 
} from "lucide-react";

export default function CompanyHighlightsSection() {
  const stats = [
    {
      value: "2020",
      prefix: "Since",
      label: "Established in Bangalore",
      desc: "Delivering open-source innovation and cost-effective IT scale.",
      icon: <Calendar className="w-5 h-5 text-vayu-600" />,
      bg: "bg-sky-50 text-vayu-600",
    },
    {
      value: "24/7/365",
      prefix: "Always On",
      label: "Operations & NOC/SOC",
      desc: "Real-time infrastructure monitoring, fault isolation, and SLA response.",
      icon: <Clock className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50 text-emerald-600",
    },
    {
      value: "Multi-Cloud",
      prefix: "AWS • Azure • GCP",
      label: "Certified Cloud Architects",
      desc: "Enterprise hybrid migrations with zero downtime guarantees.",
      icon: <Layers className="w-5 h-5 text-sky-600" />,
      bg: "bg-sky-50 text-sky-600",
    },
    {
      value: "Open Source",
      prefix: "Disruptive Tech",
      label: "Zero Vendor Lock-In",
      desc: "Enterprise Linux, Kubernetes, Ansible, and FinOps governance.",
      icon: <Cpu className="w-5 h-5 text-cyan-600" />,
      bg: "bg-cyan-50 text-cyan-600",
    },
    {
      value: "Zero Trust",
      prefix: "Security Driven",
      label: "Enterprise Cyber Defense",
      desc: "SIEM, SOC threat monitoring, endpoint isolation, and ISO compliance.",
      icon: <Lock className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-50 text-indigo-600",
    },
    {
      value: "40%+ Avg.",
      prefix: "Proven ROI",
      label: "Infrastructure Cost Savings",
      desc: "Slashing recurring software licenses through intelligent automation.",
      icon: <TrendingDown className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <section className="relative py-12 border-y border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-vayu-500 hover:shadow-cyan-md transition-all group overflow-hidden shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
                  {stat.prefix}
                </span>
                <div className={`p-1.5 rounded-lg ${stat.bg} transition-colors`}>
                  {stat.icon}
                </div>
              </div>

              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-vayu-600 transition-colors">
                {stat.value}
              </div>

              <div className="text-xs font-bold text-slate-800 mt-1">
                {stat.label}
              </div>

              <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-2">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
