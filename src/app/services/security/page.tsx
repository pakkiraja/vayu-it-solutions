import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldAlert, 
  ShieldCheck, 
  Lock, 
  Radio, 
  Eye, 
  Bug, 
  FileCheck2, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Enterprise Cyber Security Services & 24/7 SOC Operations",
  description: "24/7 SOC threat monitoring, SIEM/SOAR integration, VAPT vulnerability assessment, Next-Gen firewall management, and ISO 27001 compliance by VAYU IT Solutions.",
};

export default function SecurityServicesPage() {
  const securityPractices = [
    {
      title: "1. 24/7/365 Security Operations Center (SOC)",
      desc: "Bangalore-based continuous threat hunting, telemetry surveillance, anomaly detection, and rapid breach containment powered by certified cybersecurity analysts.",
      features: ["Sub-3 Minute Threat Triage MTTD", "Behavioral Anomaly Detection", "24/7 On-Call Incident Responders", "Continuous Threat Intelligence Ingestion"],
      icon: <Radio className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "2. SIEM & SOAR Integration",
      desc: "Centralize log telemetry from firewalls, servers, cloud APIs, and endpoints into modern open-source and enterprise SIEM engines with automated playbooks.",
      features: ["Wazuh & Elastic Security Hardening", "Automated Playbook Execution (SOAR)", "Log Retention for Regulatory Audits", "Custom Correlation Rule Engineering"],
      icon: <Eye className="w-6 h-6 text-vayu-600" />,
    },
    {
      title: "3. Vulnerability Assessment & Pen Testing (VAPT)",
      desc: "Thorough vulnerability assessments and black-box / white-box penetration tests across web applications, external networks, internal subnets, and cloud enclaves.",
      features: ["OWASP Top 10 Security Audits", "Network Infrastructure Penetration", "Detailed Executive & Remediation Reports", "Quarterly Automated CVE Scans"],
      icon: <Bug className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "4. Managed Next-Gen Firewall (NGFW)",
      desc: "Policy lifecycle management, SSL deep packet decryption, IPS signature tuning, and application control across Fortinet, Palo Alto Networks, and Cisco firewalls.",
      features: ["Zero Unauthorized Firewall Rule Drift", "Intrusion Prevention System (IPS) Tuning", "Dynamic Threat Feed Synchronization", "Geo-IP Blocking & DDoS Mitigation"],
      icon: <Lock className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "5. Endpoint Detection & Response (EDR / XDR)",
      desc: "Continuous behavioral endpoint monitoring, automated ransomware process termination, memory-space defense, and host isolation across Windows, Mac, and Linux.",
      features: ["Instant Lateral Host Isolation", "Ransomware Rollback Mechanisms", "Zero-Day Memory Exploit Guard", "Centralized Fleet Policy Enforcement"],
      icon: <ShieldAlert className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "6. Multi-Cloud Security Posture (CSPM)",
      desc: "Continuous compliance auditing for AWS, Azure, and GCP enclaves. Detect exposed S3 buckets, permissive IAM roles, unencrypted disks, and networking misconfigurations.",
      features: ["CIS Cloud Benchmark Compliance", "IAM Least-Privilege Remediation", "Real-Time Cloud Drift Alerts", "Automated Encryption Enforcement"],
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "7. Regulatory Compliance Management",
      desc: "Prepare, certify, and maintain enterprise compliance for ISO/IEC 27001, SOC 2 Type II, HIPAA, PCI-DSS, and GDPR with audited technical evidence collection.",
      features: ["Pre-Audit Gap Assessments", "Technical Policy Documentation", "Automated Continuous Audit Evidence", "Third-Party Vendor Risk Audits"],
      icon: <FileCheck2 className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "8. Rapid Incident Response & Forensics",
      desc: "Immediate forensic triage, attacker eviction, root cause identification, and clean system restoration when a suspected security breach occurs.",
      features: ["Dedicated Emergency Response SLA", "Chain-of-Custody Digital Forensics", "Executive Incident Debriefs", "Post-Incident Hardening Roadmaps"],
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
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
          <span className="text-vayu-600 font-bold">Cyber Security</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <ShieldAlert className="w-3.5 h-3.5 text-vayu-600" />
              <span>PRACTICE 03 • ZERO TRUST CYBERSECURITY & SOC</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              24/7 SOC Threat Hunting, SIEM &{" "}
              <span className="text-gradient-cyan">Zero Trust Architecture</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Defend your corporate perimeter, cloud enclaves, and endpoints with multi-layered Zero Trust security. Our round-the-clock Security Operations Center (SOC) in Bangalore hunts threats, isolates anomalies, and enforces enterprise compliance.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all flex items-center space-x-2"
              >
                <span>Request Comprehensive VAPT / Security Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-vayu-500 hover:text-vayu-600 transition-all shadow-sm"
              >
                Call Bangalore SOC Desk: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-vayu-600 font-bold flex items-center justify-between">
              <span>SOC Operations Status</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">&lt; 3 mins</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Mean Time to Detect (MTTD)</div>
              <div className="text-[11px] text-slate-500 mt-1">Continuous behavioral SIEM & automated endpoint correlation</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-vayu-600 font-mono">100%</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Audit Compliance Success</div>
              <div className="text-[11px] text-slate-500 mt-1">ISO 27001, SOC 2, HIPAA, and GDPR technical controls</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 font-mono">Zero</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Ransomware Breaches</div>
              <div className="text-[11px] text-slate-500 mt-1">Across all VAYU managed enterprise fleets</div>
            </div>
          </div>
        </div>

        {/* 8 Security Pillars Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Enterprise Cyber Defense Architecture
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Multi-tiered protection engineered for zero trust, continuous verification, and rapid containment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPractices.map((practice, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 w-fit mb-4 group-hover:bg-vayu-500/10 transition-colors">
                    {practice.icon}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-vayu-600 transition-colors mb-2">
                    {practice.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {practice.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-vayu-600 uppercase tracking-wider block mb-2 font-bold">
                    Core Capabilities:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
                    {practice.features.map((f, fIdx) => (
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

        {/* Interactive Threat Shield Diagram */}
        <div className="mt-20 p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">VAYU 360° Zero Trust Defense Model</h3>
            <p className="text-xs text-slate-500">
              Never trust, always verify: Identity, Network, Endpoint, and Data protection synchronized with Bangalore SOC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-emerald-600 font-bold block text-sm">1. IDENTITY & ACCESS</span>
              <p className="text-slate-600">MFA Enforced • Just-In-Time (JIT) Privileges • Entra ID / Okta Federation</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-vayu-600 font-bold block text-sm">2. NETWORK DEFENSE</span>
              <p className="text-slate-600">Micro-segmentation • Fortinet NGFW • WireGuard Encrypted Enclaves</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-sky-600 font-bold block text-sm">3. ENDPOINT XDR</span>
              <p className="text-slate-600">Behavioral Ransomware Shield • Host Isolation • Zero-Day Patching</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-purple-600 font-bold block text-sm">4. 24/7 SOC SURVEILLANCE</span>
              <p className="text-slate-600">Elastic/Wazuh SIEM • Real-time Threat Hunting • Sub-3m Triage</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Concerned about your security posture?</h3>
          <p className="text-sm text-slate-600">Get a confidential External Perimeter & Vulnerability Assessment from our Bangalore SOC team.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all"
          >
            <span>Request Security Vulnerability Audit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
