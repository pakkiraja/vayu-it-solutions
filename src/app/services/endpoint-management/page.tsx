import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Laptop, 
  Smartphone, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight, 
  Headphones, 
  FileCheck2, 
  Package, 
  Zap, 
  HardDrive 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Unified Endpoint Management & Digital Workplace Solutions",
  description: "MDM Microsoft Intune, automated zero-day patch management, remote workforce support, and hardware lifecycle operations by VAYU IT Solutions.",
};

export default function EndpointManagementPage() {
  const capabilities = [
    {
      title: "1. Automated Zero-Touch Patch Management",
      desc: "Distribute OS updates, third-party software patches (Chrome, Adobe, Zoom), and zero-day CVE emergency hotfixes across distributed laptops without user friction.",
      features: ["99.8% Patch Compliance Within 72 Hours", "Ring-Based Deployment Schedules", "Automated Health Smoke Tests & Rollbacks", "CVE Vulnerability Remediation Reports"],
      icon: <RefreshCw className="w-6 h-6 text-vayu-600" />,
    },
    {
      title: "2. Mobile Device Management (MDM / UEM)",
      desc: "Centralized policy enforcement, encryption (BitLocker / FileVault), and zero-touch out-of-the-box provisioning using Microsoft Intune, Jamf, and ManageEngine.",
      features: ["Zero-Touch Windows Autopilot / Apple DEP", "Conditional Access & MFA Compliance", "Remote Wipe for Lost / Stolen Devices", "Bring-Your-Own-Device (BYOD) Containerization"],
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "3. Complete Device Lifecycle Management",
      desc: "Procurement advisory, corporate image pre-configuration, asset tagging, warranty tracking, and environmentally safe e-waste de-provisioning.",
      features: ["End-to-End Asset Registry Tracking", "Warranty & Hardware Lease Audits", "Cryptographic Data Sanitization (NIST 800-88)", "Rapid Laptop Replacement Logistics"],
      icon: <HardDrive className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "4. Automated Software Packaging & Distribution",
      desc: "Silent, unattended installation of enterprise software suites, VPN clients, developer runtimes, and security agents without requiring local administrator rights.",
      features: ["Standardized Enterprise Golden Images", "Self-Service Corporate App Portals", "License Metering & Wastage Discovery", "No Admin Rights Needed for End Users"],
      icon: <Package className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "5. 24/7 Remote Desktop Support (L1 - L3)",
      desc: "Round-the-clock Bangalore-based helpdesk resolving employee software crashes, VPN connectivity glitches, identity resets, and workstation slowdowns.",
      features: ["First-Call Resolution (FCR) > 92%", "Average Wait Time < 60 Seconds", "Remote Screen-Share Diagnostics", "Customer Satisfaction (CSAT) > 98%"],
      icon: <Headphones className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "6. Workforce Productivity & Digital Experience",
      desc: "Continuous endpoint telemetry tracking boot times, application crash rates, CPU throttling, and battery degradation to resolve issues before users complain.",
      features: ["Proactive Hardware Degradation Alerts", "Application Crash Trend Analytics", "Network Latency & WiFi Diagnostics", "Employee Sentiment & CSAT Surveys"],
      icon: <Zap className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "7. Endpoint Security & Anti-Ransomware",
      desc: "Integrated EDR agents, USB port access restriction, host firewall enforcement, and browser isolation protecting hybrid laptops from malware injection.",
      features: ["USB Mass Storage Lockdown", "Zero-Day Behavioral Malware Shield", "Automated Process Sandboxing", "Full Disk Encryption (BitLocker / FileVault)"],
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "8. Endpoint Regulatory Compliance",
      desc: "Ensure 100% of employee endpoints comply with ISO 27001, SOC 2, and GDPR policies with continuous technical configuration verification.",
      features: ["Automated Non-Compliant Device Quarantine", "Screen Lock & Password Complexity Guard", "Encrypted Backup of Local Documents", "Auditor-Ready Fleet Evidence Reports"],
      icon: <FileCheck2 className="w-6 h-6 text-emerald-600" />,
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
          <span className="text-vayu-600 font-bold">Endpoint Management</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Laptop className="w-3.5 h-3.5 text-vayu-600" />
              <span>PRACTICE 05 • UNIFIED ENDPOINT MANAGEMENT & WORKPLACE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Unified Endpoint Management, MDM &{" "}
              <span className="text-gradient-cyan">Hybrid Workplace Ops</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Empower distributed workforces with frictionless device provisioning, automated zero-day patch management, proactive health telemetry, and 24/7 Bangalore remote engineering support across Windows, macOS, and Linux fleets.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all flex items-center space-x-2"
              >
                <span>Request Endpoint Fleet Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-vayu-500 hover:text-vayu-600 transition-all shadow-sm"
              >
                Speak to Workplace Specialist
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-vayu-600 font-bold">
              Workplace Fleet SLAs
            </div>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">99.8%</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Patch Compliance within 72h</div>
              <div className="text-[11px] text-slate-500 mt-1">Zero-day vulnerability remediation across all remote laptops</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-vayu-600 font-mono">92%+</div>
              <div className="text-xs text-slate-800 font-bold mt-1">First-Call Helpdesk Resolution</div>
              <div className="text-[11px] text-slate-500 mt-1">Bangalore L1/L2 engineers resolving issues on first contact</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 font-mono">&lt; 15 mins</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Zero-Touch Laptop Provisioning</div>
              <div className="text-[11px] text-slate-500 mt-1">Straight out of the box via Windows Autopilot / Apple DEP</div>
            </div>
          </div>
        </div>

        {/* 8 Capabilities Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Complete Digital Workplace Management
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Protecting corporate data while empowering employee productivity anywhere in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, idx) => (
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
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
                    {item.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
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
          <h3 className="text-2xl font-bold text-slate-900">Need unified management for your remote workforce?</h3>
          <p className="text-sm text-slate-600">Schedule a 30-minute demonstration of VAYU's zero-touch endpoint provisioning framework.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all"
          >
            <span>Book Workplace Demonstration</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
