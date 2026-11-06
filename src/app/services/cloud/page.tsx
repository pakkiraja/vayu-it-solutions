import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  TrendingDown, 
  ShieldCheck, 
  RefreshCw, 
  Workflow, 
  Zap, 
  Activity,
  Boxes
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Enterprise Cloud Services & Multi-Cloud Modernization",
  description: "End-to-end cloud strategy, zero-downtime migration, FinOps cost optimization, and multi-cloud operations across AWS, Azure, and GCP by VAYU IT Solutions.",
};

export default function CloudServicesPage() {
  const sections = [
    {
      id: "strategy",
      title: "1. Cloud Strategy & Architecture Advisory",
      desc: "Every successful cloud journey begins with rigorous workload discovery and financial modeling. We evaluate your application dependencies, data gravity, and licensing constraints to craft an optimal cloud roadmap.",
      deliverables: ["Cloud Readiness Assessment", "TCO & FinOps 3-Year Projection", "Landing Zone Architecture Blueprint", "Application Rationalization (6R Model)"],
      icon: <Layers className="w-6 h-6 text-vayu-600" />,
    },
    {
      id: "migration",
      title: "2. Zero-Downtime Cloud Migration",
      desc: "Migrate legacy on-premises workloads, virtual machines, and databases into AWS and Microsoft Azure with minimal to zero business interruption using automated replication and blue-green cutovers.",
      deliverables: ["Live Database Replication", "Lift-and-Shift to Replatforming", "VMware to Cloud Native Cutover", "Post-Cutover Integrity Verification"],
      icon: <RefreshCw className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: "aws",
      title: "3. Amazon Web Services (AWS) Practice",
      desc: "Specialized AWS architectures utilizing EC2 Graviton, EKS, RDS, S3 lifecycle tiers, and CloudFront. Engineered for elastic autoscaling, sub-second latency, and continuous cost optimization.",
      deliverables: ["AWS Control Tower & Landing Zones", "Amazon EKS Kubernetes Clusters", "Aurora PostgreSQL / Open-Source Migration", "AWS Well-Architected Reviews"],
      icon: <Cloud className="w-6 h-6 text-amber-500" />,
    },
    {
      id: "azure",
      title: "4. Microsoft Azure Enterprise Services",
      desc: "Seamless enterprise integration with Microsoft 365, Azure Virtual Desktop, Azure Kubernetes Service (AKS), and Entra ID. Perfect for compliance-heavy organizations requiring hybrid connectivity.",
      deliverables: ["Azure Virtual WAN & ExpressRoute", "AKS Containerized Modernization", "Azure Hybrid Benefit Licensing", "Zero Trust Identity via Entra ID"],
      icon: <Boxes className="w-6 h-6 text-sky-600" />,
    },
    {
      id: "hybrid",
      title: "5. Hybrid & Multi-Cloud Management",
      desc: "Prevent vendor lock-in with unified cross-cloud control planes. Manage Kubernetes clusters, software-defined networks, and storage enclaves across AWS, Azure, and on-premises data centers.",
      deliverables: ["Unified Observability Pane", "Cross-Cloud Network Peering", "Data Sovereignty Compliance", "Disaster Recovery Failover Clustering"],
      icon: <Workflow className="w-6 h-6 text-purple-600" />,
    },
    {
      id: "finops",
      title: "6. Cloud Cost Optimization (FinOps Practice)",
      desc: "Reduce your monthly AWS and Azure bills by 35% to 50%. We conduct deep forensic audits, implement automated instance rightsizing, schedule non-production shutdowns, and orchestrate Spot instances.",
      deliverables: ["Automated Idle Resource Cleanup", "Spot Instance Orchestration", "Reserved Instance / Savings Plan Stewardship", "Chargeback & Tagging Governance"],
      icon: <TrendingDown className="w-6 h-6 text-emerald-600" />,
    },
    {
      id: "monitoring",
      title: "7. 24/7 Cloud Telemetry & NOC Observability",
      desc: "Proactive synthetic transactions, log aggregation (OpenTelemetry, Prometheus, Grafana), and continuous health telemetry managed 24/7/365 by our Bangalore engineering team.",
      deliverables: ["Sub-15 Minute Incident MTTR", "Open-Source Telemetry (Prometheus/Grafana)", "Predictive Autoscaling Policies", "Monthly Executive SLA Reports"],
      icon: <Activity className="w-6 h-6 text-cyan-600" />,
    },
    {
      id: "bdr",
      title: "8. Backup, Archival & Disaster Recovery (BDR)",
      desc: "Air-gapped ransomware-resilient immutable backups and automated multi-region disaster recovery replication with strict Recovery Time Objective (RTO < 15m) and Recovery Point Objective (RPO < 5m).",
      deliverables: ["Immutable Cloud Storage Vaults", "Automated DR Drills & Failover Testing", "Cross-Region S3 / Blob Replication", "Business Continuity Certification"],
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
      id: "devops",
      title: "9. DevOps & Kubernetes Enablement",
      desc: "Empower developer agility with production-grade Kubernetes, automated CI/CD pipelines, GitOps workflows (ArgoCD), and Infrastructure as Code using Terraform and Ansible.",
      deliverables: ["Production-Hardened EKS/AKS Clusters", "GitOps Continuous Delivery (ArgoCD)", "Terraform Multi-Environment Modules", "Developer Self-Service Portals"],
      icon: <Zap className="w-6 h-6 text-rose-500" />,
    },
  ];

  return (
    <div className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mb-8">
          <Link href="/" className="hover:text-vayu-600 font-semibold">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-vayu-600 font-semibold">Services</Link>
          <span>/</span>
          <span className="text-vayu-600 font-bold">Cloud Services</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Cloud className="w-3.5 h-3.5 text-vayu-600" />
              <span>PRACTICE 01 • CLOUD SERVICES & MODERNIZATION</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Enterprise Cloud Strategy, Migration &{" "}
              <span className="text-gradient-cyan">FinOps Cost Optimization</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Accelerate your digital evolution with cloud architecture built for resilience, elastic scaling, and radical cost reduction. We architect, migrate, and operate hybrid and multi-cloud environments across AWS, Microsoft Azure, and GCP.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all flex items-center space-x-2"
              >
                <span>Request Cloud Migration Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-vayu-500 hover:text-vayu-600 transition-all shadow-sm"
              >
                Call Cloud Desk: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Quick Metrics Showcase */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-card space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-vayu-600 font-bold">
              Proven Cloud Practice Impact
            </div>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">35% - 50%</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Average Monthly Cloud Spend Reduction</div>
              <div className="text-[11px] text-slate-500 mt-1">Via FinOps, Patroni/Postgres open-source migration & automated rightsizing</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-vayu-600 font-mono">Zero</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Unplanned Cutover Downtime</div>
              <div className="text-[11px] text-slate-500 mt-1">Strict blue-green staging and live replication procedures</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 font-mono">99.99%</div>
              <div className="text-xs text-slate-800 font-bold mt-1">SLA Uptime Guarantee</div>
              <div className="text-[11px] text-slate-500 mt-1">Multi-zone high availability backed by 24/7 Bangalore NOC</div>
            </div>
          </div>
        </div>

        {/* 9 Detailed Practice Sections */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Full Spectrum Cloud Architecture Capabilities
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every stage of your cloud lifecycle engineered for maximum ROI and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((sec) => (
              <div
                key={sec.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 w-fit mb-4 group-hover:bg-vayu-500/10 transition-colors">
                    {sec.icon}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-vayu-600 transition-colors mb-3">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-vayu-600 uppercase tracking-wider block mb-2 font-bold">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-mono">
                    {sec.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Architecture Diagram Visual */}
        <div className="mt-20 p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-card space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">VAYU Cloud Modernization Architecture</h3>
            <p className="text-xs text-slate-500">
              Standardized hybrid deployment model delivering high resiliency, automated security guardrails, and continuous FinOps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-vayu-600 font-bold block text-sm">LAYER 1: EDGE & NETWORK</span>
              <p className="text-slate-600">CloudFront / Azure CDN • Cloudflare Zero Trust • Direct Connect / ExpressRoute</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-sky-600 font-bold block text-sm">LAYER 2: COMPUTE & K8S</span>
              <p className="text-slate-600">Amazon EKS • Azure AKS • Spot Orchestration • Graviton / ARM Nodes</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-emerald-600 font-bold block text-sm">LAYER 3: DATA & STORAGE</span>
              <p className="text-slate-600">Patroni PostgreSQL Clusters • Redis Caching • S3 Glacier Archival Vaults</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-amber-600 font-bold block text-sm">LAYER 4: OPS & FINOPS</span>
              <p className="text-slate-600">Prometheus / Grafana • Automated IaC • 24/7 Bangalore NOC Vigil</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Ready to review your cloud architecture?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Book a 45-minute technical deep dive with our principal cloud architects in Bangalore.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all"
          >
            <span>Schedule Free Cloud Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
