import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Cloud, 
  Network, 
  ShieldAlert, 
  Cpu, 
  Laptop, 
  Activity, 
  ArrowRight, 
  Server, 
  Compass, 
  Sparkles
} from "lucide-react";
import { SERVICES } from "@/data/company";

export const metadata: Metadata = {
  title: "Enterprise IT Services Directory",
  description: "Explore VAYU IT Solutions comprehensive enterprise infrastructure services: Cloud, Networking, Cybersecurity, Automation, Endpoint Management, and 24/7 Managed NOC/SOC.",
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  cloud: <Cloud className="w-8 h-8 text-vayu-600" />,
  networking: <Network className="w-8 h-8 text-vayu-600" />,
  security: <ShieldAlert className="w-8 h-8 text-vayu-600" />,
  automation: <Cpu className="w-8 h-8 text-vayu-600" />,
  "endpoint-management": <Laptop className="w-8 h-8 text-vayu-600" />,
  "managed-services": <Activity className="w-8 h-8 text-vayu-600" />,
};

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-vayu-600" />
            <span>FULL-LIFECYCLE INFRASTRUCTURE SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Services{" "}
            <span className="text-gradient-cyan">Hub</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Delivering high-performance, cost-effective infrastructure operations through open-source innovation, automation-first engineering, and 24/7 proactive Bangalore NOC & SOC management.
          </p>
        </div>

        {/* 6 Core Practices Showcase Cards */}
        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-200/90 hover:border-sky-300 transition-all duration-300 shadow-card hover:shadow-card-hover relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                {/* Left Column: Info, Description, Tags */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 group-hover:bg-vayu-500/10 transition-all">
                      {SERVICE_ICONS[service.id]}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-vayu-700 font-bold uppercase">
                      Practice 0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-vayu-600 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 text-xs font-mono text-slate-500 italic">
                    💡 {service.highlight}
                  </div>
                </div>

                {/* Right Column: Key Metrics & Dedicated CTA */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
                  
                  <div className="grid grid-cols-2 gap-4 font-mono">
                    {service.metrics.map((m, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-xs mb-1 font-sans">{m.label}</span>
                        <span className="text-2xl font-extrabold text-vayu-600">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Link
                      href={service.href}
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 transition-all flex items-center justify-center space-x-2 shadow-md shadow-vayu-500/20"
                    >
                      <span>View Detailed {service.title.split(" ")[0]} Architecture</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>

                    <Link
                      href="/contact"
                      className="w-full py-3 px-6 rounded-xl font-semibold text-xs text-slate-700 bg-white border border-slate-300 hover:border-vayu-500 hover:text-vayu-600 transition-all text-center block shadow-sm"
                    >
                      Schedule Technical Consultation
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Extended Strategic Services: Monitoring & Consulting */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300 shadow-card space-y-4">
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-vayu-600 w-fit">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Monitoring and Operations (24/7 NOC)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Real-time telemetry, proactive health probes, automated alarm triage, and ITIL-aligned incident management executed directly by our Bangalore engineers with sub-15 minute response time.
            </p>
            <Link href="/services/managed-services" className="text-xs font-bold text-vayu-600 hover:underline inline-flex items-center space-x-1">
              <span>Explore 24/7 NOC Capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-sky-300 shadow-card space-y-4">
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-vayu-600 w-fit">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Consulting & Digital Transformation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Strategic cloud roadmapping, legacy infrastructure re-platforming, open-source adoption audits, and executive FinOps frameworks designed for high-growth enterprises and traditional businesses modernizing operations.
            </p>
            <Link href="/contact" className="text-xs font-bold text-vayu-600 hover:underline inline-flex items-center space-x-1">
              <span>Book Strategy Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
