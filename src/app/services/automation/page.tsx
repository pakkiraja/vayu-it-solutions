import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Cpu, 
  Terminal, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  RefreshCw, 
  Bot, 
  Zap, 
  Layers, 
  Clock 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Infrastructure Automation & IaC Services | Terraform & Ansible",
  description: "Eliminate manual toil with Terraform, Ansible, Python, GitOps CI/CD pipelines, and AIOps automated self-healing by VAYU IT Solutions.",
};

export default function AutomationServicesPage() {
  const automationCapabilities = [
    {
      title: "1. Infrastructure as Code (IaC)",
      desc: "Declarative, audited, version-controlled cloud and on-premises infrastructure. We build reusable, modular Terraform and OpenTofu templates for VPCs, Kubernetes, and databases.",
      highlights: ["Zero Configuration Drift", "Multi-Environment Git Repositories", "Automated State Locking & Remote Backends", "Policy as Code (OPA / Sentinel)"],
      icon: <Layers className="w-6 h-6 text-vayu-600" />,
    },
    {
      title: "2. Configuration Management via Ansible",
      desc: "Agentless operating system configuration, baseline security hardening, and application provisioning orchestrated seamlessly across thousands of Linux and Windows servers.",
      highlights: ["Idempotent Playbooks", "Automated CIS Benchmark Hardening", "Rolling Zero-Downtime Package Updates", "Dynamic Cloud Inventory Plugins"],
      icon: <Terminal className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "3. Custom Python & PowerShell Automation",
      desc: "Bespoke automation scripts to connect disparate APIs, ingest log feeds, automate user lifecycle onboarding/offboarding, and bridge legacy tools with modern SaaS.",
      highlights: ["Automated User Provisioning (HR to Active Directory)", "Cloud Resource Cleanup Schedulers", "Automated SSL Certificate Renewal (ACME)", "Custom API Integration Bots"],
      icon: <Code2 className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "4. GitOps & CI/CD Pipeline Automation",
      desc: "Continuous integration and deployment pipelines using GitHub Actions, GitLab CI, and ArgoCD. Every code push runs automated security scans, tests, and canary rollouts.",
      highlights: ["Automated SAST & Secret Detection", "Canary & Blue-Green Kubernetes Cutover", "Pull-Request Preview Enclaves", "Automated Rollback on Error Spikes"],
      icon: <Workflow className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "5. Monitoring & Synthetic Alert Automation",
      desc: "Self-healing alerting rules that trigger automated restart scripts, memory flushes, and auto-scaling policies before a human engineer ever has to wake up.",
      highlights: ["Automated Remediation Webhooks", "Synthetic User Transaction Bots", "Dynamic Anomaly Detection Thresholds", "Intelligent Noise-Reduction Filters"],
      icon: <Zap className="w-6 h-6 text-rose-500" />,
    },
    {
      title: "6. Ticketing & ITSM Workflow Automation",
      desc: "Bi-directional integration between monitoring tools, Jira Service Management, ServiceNow, and Slack/Teams for zero-touch ticket generation, assignment, and escalation.",
      highlights: ["Automatic Incident Deduplication", "Auto-Resolution for Self-Healing Tasks", "SLA Breach Countdown Notifications", "One-Click ChatOps Diagnostics"],
      icon: <RefreshCw className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "7. AI-Driven Operations (AIOps)",
      desc: "Machine-learning models that correlate multi-system logs, identify the root cause of complex cascade failures, and predict hardware failure days before it occurs.",
      highlights: ["Root Cause Analysis (RCA) in Seconds", "Predictive Storage Exhaustion Alerts", "Automated Runbook Suggestions", "Natural Language Telemetry Querying"],
      icon: <Bot className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "8. Automated Patch & Compliance Pipelines",
      desc: "Scheduled, risk-staged patch deployment pipelines across dev, staging, and production tiers with automated rollback if health checks fail post-patching.",
      highlights: ["Zero-Day Critical CVE Distribution", "Automated Kernel Livepatching", "Post-Patch Smoke Test Automation", "100% Audit Trail Compliance"],
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
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
          <span className="text-vayu-600 font-bold">Automation Services</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Cpu className="w-3.5 h-3.5 text-vayu-600" />
              <span>PRACTICE 04 • INFRASTRUCTURE AS CODE & AUTOMATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Eliminate Manual Toil with{" "}
              <span className="text-gradient-cyan">Terraform, Ansible & AIOps</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              If a task has to be performed more than once, we automate it. We transform manual operational bottlenecks into repeatable, audited, self-healing code that accelerates delivery and reduces human error to zero.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all flex items-center space-x-2"
              >
                <span>Request Automation & IaC Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-vayu-500 hover:text-vayu-600 transition-all shadow-sm"
              >
                Speak to Automation Architect
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-vayu-600 font-bold">
              Automation Impact Metrics
            </div>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">80% Less</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Manual Sysadmin Operations</div>
              <div className="text-[11px] text-slate-500 mt-1">Automated IaC provisioning, patch pipelines, and self-healing bots</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-vayu-600 font-mono">Zero</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Configuration Drift</div>
              <div className="text-[11px] text-slate-500 mt-1">Continuous reconciliation via Terraform and GitOps pipelines</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 font-mono">&lt; 12 mins</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Environment Spin-Up Time</div>
              <div className="text-[11px] text-slate-500 mt-1">Down from 2+ weeks of manual provisioning</div>
            </div>
          </div>
        </div>

        {/* 8 Automation Capabilities Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              End-to-End Enterprise Automation Engineering
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From bare-metal bootstrapping to automated cloud scaling and ChatOps resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationCapabilities.map((item, idx) => (
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
                    Technical Capabilities:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Pipeline Workflow Visualizer */}
        <div className="mt-20 p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">The VAYU GitOps Automation Pipeline</h3>
            <p className="text-xs text-slate-500">
              Code committed to Git triggers automated policy audits, synthetic validation, and zero-downtime deployment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="text-center md:text-left space-y-1">
              <span className="text-vayu-600 font-bold block">1. GIT COMMIT & PR</span>
              <p className="text-slate-600">Terraform Code • OPA Policy Test • SAST Security Check</p>
            </div>
            <div className="text-vayu-600 hidden md:block">➔</div>
            <div className="text-center md:text-left space-y-1">
              <span className="text-sky-600 font-bold block">2. CI VALIDATION</span>
              <p className="text-slate-600">Speculative Plan • Cost Breakdown Preview (Infracost)</p>
            </div>
            <div className="text-vayu-600 hidden md:block">➔</div>
            <div className="text-center md:text-left space-y-1">
              <span className="text-emerald-600 font-bold block">3. GITOPS DEPLOY</span>
              <p className="text-slate-600">ArgoCD / Terraform Apply • Blue-Green Traffic Switch</p>
            </div>
            <div className="text-vayu-600 hidden md:block">➔</div>
            <div className="text-center md:text-left space-y-1">
              <span className="text-amber-600 font-bold block">4. SELF-HEALING</span>
              <p className="text-slate-600">Prometheus Telemetry • Automated Auto-Remediation</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Ready to automate your infrastructure?</h3>
          <p className="text-sm text-slate-600">Our Bangalore automation specialists will build a proof-of-concept for your highest-toil operations.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all"
          >
            <span>Request Automation Proof-of-Concept</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
