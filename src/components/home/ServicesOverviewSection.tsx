"use client";

import React from "react";
import Link from "next/link";
import { 
  Cloud, 
  Network, 
  ShieldAlert, 
  Cpu, 
  Laptop, 
  Activity, 
  ArrowRight, 
  Sparkles,
  Server,
  Compass
} from "lucide-react";
import { SERVICES } from "@/data/company";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-7 h-7 text-vayu-600" />,
  networking: <Network className="w-7 h-7 text-vayu-600" />,
  security: <ShieldAlert className="w-7 h-7 text-vayu-600" />,
  automation: <Cpu className="w-7 h-7 text-vayu-600" />,
  "endpoint-management": <Laptop className="w-7 h-7 text-vayu-600" />,
  "managed-services": <Activity className="w-7 h-7 text-vayu-600" />,
};

export default function ServicesOverviewSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-vayu-600" />
              <span>CORE SERVICE CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Enterprise Infrastructure{" "}
              <span className="text-gradient-cyan">Practices</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Engineered for resilience, high throughput, and radical cost reduction. We replace expensive proprietary software with hardened open-source solutions and 24/7 managed support.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-vayu-500 text-slate-800 hover:text-vayu-600 transition-all font-mono text-sm self-start lg:self-end font-semibold shadow-sm"
          >
            <span>View All Services Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Core Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 shadow-card hover:shadow-card-hover"
            >
              <div>
                {/* Card Top: Icon & Tags */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 group-hover:bg-vayu-500/10 group-hover:border-sky-300 transition-colors">
                    {SERVICE_ICONS[service.id] || <Activity className="w-7 h-7 text-vayu-600" />}
                  </div>

                  <div className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold">
                    SLA: 99.99%
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-vayu-600 transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Tags Pill Cloud */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-600 group-hover:border-sky-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metrics & Dedicated CTA */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  {service.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px]">{m.label}</span>
                      <span className="text-vayu-600 font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs text-center flex items-center justify-center space-x-2 bg-slate-50 hover:bg-vayu-600 hover:text-white text-slate-800 border border-slate-200 hover:border-vayu-600 transition-all duration-200"
                >
                  <span>Explore {service.title.split(" ")[0]} Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Practices: Monitoring & Consulting */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-vayu-600">
              <Server className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Monitoring and Operations (NOC)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Continuous telemetry, automated health probes, proactive synthetic transactions, and incident management handled directly by our 24/7 Bangalore engineering team.
              </p>
              <Link href="/services/managed-services" className="text-xs font-bold text-vayu-600 hover:underline inline-block pt-1">
                Learn more about NOC operations →
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 text-vayu-600">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900">Consulting & Digital Transformation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strategic roadmapping, legacy modernization assessments, open-source suitability reviews, and executive FinOps governance tailored for modern CTOs.
              </p>
              <Link href="/contact" className="text-xs font-bold text-vayu-600 hover:underline inline-block pt-1">
                Book transformation advisory session →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
