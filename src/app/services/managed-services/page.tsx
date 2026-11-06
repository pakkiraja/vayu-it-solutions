import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Activity, 
  Clock, 
  ShieldCheck, 
  Headphones, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Server, 
  AlertCircle, 
  Layers, 
  FileText 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "24/7 Managed Infrastructure Services & Bangalore NOC",
  description: "Round-the-clock ITIL managed services, 24/7 NOC monitoring, incident triage, SLA guarantees, and capacity management by VAYU IT Solutions.",
};

export default function ManagedServicesPage() {
  const operationsModules = [
    {
      title: "1. 24/7/365 Bangalore NOC Operations",
      desc: "Our command center in Kurubarahalli, Bangalore maintains an unbroken 24/7 watch over enterprise servers, storage arrays, network switches, and cloud instances.",
      deliverables: ["Continuous Health Heartbeats & Telemetry", "Sub-15 Minute Incident Response MTTR", "Automated First-Responder Remediation", "Real-Time Engineering Escalation Tiers"],
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "2. ITIL-Aligned Service Desk (L1 - L3)",
      desc: "Single Point of Contact (SPOC) for technical incidents, service requests, and hardware alarms staffed by certified engineers around the clock.",
      deliverables: ["First Contact Resolution > 92%", "Omnichannel Ingestion (Portal, Email, Phone)", "Strict ITIL v4 Process Compliance", "Dedicated Technical Account Management"],
      icon: <Headphones className="w-6 h-6 text-vayu-600" />,
    },
    {
      title: "3. Comprehensive Infrastructure Monitoring",
      desc: "Deep instrumentation across CPU, memory, disk I/O, network bandwidth, hypervisors (VMware/KVM), and container clusters using open-source telemetry stacks.",
      deliverables: ["Prometheus & Grafana Enterprise Dashboards", "Synthetic HTTP & Transaction Probes", "SNMP & NetFlow Hardware Telemetry", "Dynamic Multi-Threshold Alerting"],
      icon: <Server className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "4. Rapid Incident & Emergency Management",
      desc: "High-urgency command protocol for unexpected production outages. Automated war rooms, stakeholder communication, and swift service restoration.",
      deliverables: ["Automated Major Incident Bridges", "Root Cause Analysis (RCA) Within 24h", "Post-Mortem Actionable Remediations", "Emergency On-Call Escalation Matrix"],
      icon: <AlertCircle className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "5. Change & Release Governance",
      desc: "Formal Change Advisory Board (CAB) review, pre-deployment risk scoring, staging validation, and rollback rehearsal to prevent self-inflicted production outages.",
      deliverables: ["Zero Unauthorized Production Changes", "Automated Rollback Playbooks", "Change Impact & Dependency Mapping", "Scheduled Maintenance Window Coordination"],
      icon: <Layers className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "6. Problem Management & Toil Reduction",
      desc: "We don't just clear alerts; we eliminate root causes. We investigate recurrent incidents, identify architectural defects, and write automation scripts to banish toil.",
      deliverables: ["Trend Analysis Across Recurring Incidents", "Permanent Bug & Configuration Fixes", "Known Error Database (KEDB) Curation", "Continuous Technical Debt Paydown"],
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "7. Executive SLA Reporting & Transparency",
      desc: "Transparent, real-time access to operational metrics, availability logs, ticket resolution durations, and capacity forecasts via interactive dashboards.",
      deliverables: ["Monthly Executive Health Reviews", "Transparent SLA Uptime Records", "Contractual Financial Credits for Breaches", "Executive Quarterly Business Reviews (QBR)"],
      icon: <BarChart3 className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "8. Proactive Capacity & Performance Planning",
      desc: "Predictive resource modeling to ensure compute, RAM, disk, and network bandwidth scale smoothly before peak business surges and seasonal demands.",
      deliverables: ["90-Day Predictive Runway Forecasting", "Storage Growth Trend Modeling", "Cloud Autoscaling Boundary Audits", "Hardware Refresh Lifecycle Roadmaps"],
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <div className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mb-8">
          <Link href="/" className="hover:text-vayu-600 font-semibold">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-vayu-600 font-semibold">Services</Link>
          <span>/</span>
          <span className="text-vayu-600 font-bold">Managed Infrastructure Services</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Activity className="w-3.5 h-3.5 text-vayu-600" />
              <span>PRACTICE 06 • 24/7/365 MANAGED INFRASTRUCTURE & NOC</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              24/7 Bangalore NOC Operations, ITIL Service Desk &{" "}
              <span className="text-gradient-cyan">SLA Guarantees</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Gain enterprise IT reliability without the massive expense of staffing an in-house round-the-clock operations team. Our Bangalore-based engineers monitor, triage, and resolve infrastructure incidents 24 hours a day, 365 days a year.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all flex items-center space-x-2"
              >
                <span>Request Managed Services Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-vayu-500 hover:text-vayu-600 transition-all shadow-sm"
              >
                Call Bangalore NOC: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-vayu-600 font-bold flex items-center justify-between">
              <span>Bangalore NOC Live Stats</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-vayu-600 font-mono">99.98%</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Contractual SLA Adherence</div>
              <div className="text-[11px] text-slate-500 mt-1">Backed by penalty-linked service credits</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">&lt; 15 mins</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Critical P1 Response Time</div>
              <div className="text-[11px] text-slate-500 mt-1">Direct escalation to senior L3 infrastructure leads</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 font-mono">24/7/365</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Continuous Live Human Coverage</div>
              <div className="text-[11px] text-slate-500 mt-1">Kurubarahalli, Bengaluru Command Facility</div>
            </div>
          </div>
        </div>

        {/* 8 Operational Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Enterprise Managed Operations Ecosystem
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              ITIL v4 certified operational governance delivered with rigorous execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationsModules.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 w-fit mb-4 group-hover:bg-vayu-500/10 transition-colors">
                    {item.icon}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-vayu-600 transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-vayu-600 uppercase tracking-wider block mb-2 font-bold">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
                    {item.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Need an around-the-clock infrastructure partner?</h3>
          <p className="text-sm text-slate-600">Discover how our Bangalore command center seamlessly integrates with your existing IT organization.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all"
          >
            <span>Discuss Managed Services SLAs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
