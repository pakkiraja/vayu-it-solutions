import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ShieldCheck, 
  Target, 
  Lightbulb, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Cpu, 
  Terminal, 
  Globe, 
  Lock, 
  Clock, 
  Building2 
} from "lucide-react";
import { 
  COMPANY_INFO, 
  CORE_VALUES, 
  COMPANY_JOURNEY_MILESTONES 
} from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Enterprise IT Transformation Since 2020",
  description: "Learn about VAYU IT Solutions, established in 2020 in Bangalore, India. Our vision, mission, core values, open-source engineering ethos, and leadership journey.",
};

const VALUE_ICONS: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="w-6 h-6 text-amber-500" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  Trophy: <Award className="w-6 h-6 text-vayu-600" />,
  Lock: <Lock className="w-6 h-6 text-indigo-600" />,
  Award: <Award className="w-6 h-6 text-rose-500" />,
  CheckCircle: <CheckCircle2 className="w-6 h-6 text-sky-600" />,
};

export default function AboutPage() {
  const differentiators = [
    {
      title: "Open Source Expertise",
      desc: "We harness production-grade enterprise Linux, Kubernetes, PostgreSQL, Prometheus, and Ansible to liberate organizations from exorbitant proprietary vendor licensing locks.",
      icon: <Terminal className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "Cloud-First Approach",
      desc: "Whether building cloud-native microservices on AWS or modernizing legacy infrastructure into Microsoft Azure, our architectures prioritize resilience, elasticity, and FinOps governance.",
      icon: <Globe className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "Automation-First Strategy",
      desc: "Manual operational toil is eliminated through Infrastructure as Code, CI/CD GitOps pipelines, and self-healing bots that resolve incidents in seconds.",
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "Security-Focused Delivery",
      desc: "Zero Trust architecture is non-negotiable. Every network segment, API gateway, and endpoint is monitored 24/7/365 by our certified Bangalore SOC engineers.",
      icon: <Lock className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "Cost-Effective Solutions",
      desc: "We deliver 35% to 50% bottom-line reductions in recurring IT operational expenses, proving that world-class reliability does not require bloated enterprise vendor budgets.",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Enterprise ITIL Standards",
      desc: "Certified ITIL v4 operational frameworks, formal Change Advisory Boards, sub-15 minute incident MTTR guarantees, and transparent monthly executive SLA reporting.",
      icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
    },
  ];

  return (
    <div className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mb-8">
          <Link href="/" className="hover:text-vayu-600 font-semibold">Home</Link>
          <span>/</span>
          <span className="text-vayu-600 font-bold">About Us</span>
        </div>

        {/* Section 1: Hero & Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Building2 className="w-3.5 h-3.5 text-vayu-600" />
              <span>ESTABLISHED 2020 • BANGALORE, INDIA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Transforming Enterprise IT Through{" "}
              <span className="text-gradient-cyan">Open-Source Innovation</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              VAYU IT Solutions was established in 2020 with an uncompromising mission: to deliver enterprise-grade Infrastructure Managed Services at affordable costs through the strategic adoption of modern open-source technologies and automation.
            </p>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Headquartered in Kurubarahalli, Bengaluru, our engineering center provides 24/7/365 NOC and SOC coverage for fast-growing technology companies, manufacturing plants, healthcare providers, and enterprise leaders worldwide.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-700">
              <div className="flex items-center space-x-2 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Calendar className="w-4 h-4 text-vayu-600" />
                <span>Founded: 2020</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <MapPin className="w-4 h-4 text-vayu-600" />
                <span>HQ: Bengaluru, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>24/7 Bangalore NOC & SOC</span>
              </div>
            </div>
          </div>

          {/* Logo Brand Emblem Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-10 rounded-3xl bg-white border border-slate-200 flex flex-col items-center text-center max-w-md shadow-xl">
              <div className="relative w-36 h-36 mb-6">
                <Image
                  src="/vayu_logo.png"
                  alt="VAYU Corporate Emblem"
                  width={144}
                  height={144}
                  priority
                  className="object-contain"
                />
              </div>

              <span className="text-2xl font-extrabold text-slate-900 tracking-wider flex items-center">
                VAYU
                <span className="text-vayu-600 font-light text-base ml-2 tracking-widest uppercase">
                  IT Solutions
                </span>
              </span>

              <p className="text-xs text-slate-500 italic font-mono mt-3 leading-relaxed">
                "{COMPANY_INFO.motto}"
              </p>

              <div className="mt-6 pt-4 border-t border-slate-100 w-full text-left text-xs font-mono space-y-1 text-slate-600">
                <div>📍 2F, 8, 16th Main Road, JC Nagar</div>
                <div>Kurubarahalli, Bengaluru - 560086</div>
                <div className="text-vayu-600 pt-1 font-bold">📞 {COMPANY_INFO.phone}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100 text-vayu-600 w-fit">
              <Target className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono text-vayu-600 uppercase tracking-widest font-bold">
              Our Vision
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              To become the world's most trusted partner for modern infrastructure transformation.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We envision a future where organizations of all sizes operate with bulletproof reliability, zero vendor lock-in, and radical cost transparency—leveraging open-source technologies backed by enterprise-grade engineering excellence.
            </p>
          </div>

          <div className="p-8 lg:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 w-fit">
              <Sparkles className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-bold">
              Our Mission
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Deliver innovative, secure, scalable and cost-effective IT services.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We empower businesses to outperform their competitors by eliminating operational toil through automation, safeguarding data with Zero Trust architectures, and continuously optimizing cloud and network environments.
            </p>
          </div>
        </div>

        {/* Section 3: Core Values */}
        <div id="values" className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-vayu-600" />
              <span>THE FOUNDATION OF OUR CULTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Six Guiding Core Values
            </h2>
            <p className="text-slate-500 text-sm">
              These principles govern every architectural decision, client interaction, and engineering milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.name}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-card transition-all space-y-3 group"
              >
                <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 w-fit group-hover:bg-vayu-500/10 transition-colors">
                  {VALUE_ICONS[val.icon] || <ShieldCheck className="w-6 h-6 text-vayu-600" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-vayu-600 transition-colors">
                  {val.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Interactive Company Journey (2020 - Present) */}
        <div id="journey" className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Calendar className="w-3.5 h-3.5 text-vayu-600" />
              <span>OUR MILESTONES (2020 - PRESENT)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              The Evolution of VAYU IT Solutions
            </h2>
            <p className="text-slate-500 text-sm">
              From our founding in Bangalore to servicing 150+ enterprise workloads across global sectors.
            </p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-8 md:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-vayu-500 before:via-sky-300 before:to-slate-300">
            {COMPANY_JOURNEY_MILESTONES.map((m, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-6`}
                >
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-vayu-600 flex items-center justify-center text-xs font-bold text-vayu-600 shadow-md z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-vayu-600"></span>
                  </div>

                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? "md:pl-10" : "md:pr-10"}`}>
                    <div className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-card transition-all space-y-2 group">
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-extrabold font-mono text-vayu-600">
                          {m.year} • {m.quarter}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold">
                          Milestone 0{idx + 1}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 group-hover:text-vayu-600 transition-colors">
                        {m.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {m.desc}
                      </p>

                      <div className="pt-2 text-[11px] font-mono text-emerald-600 font-bold border-t border-slate-100">
                        ✓ {m.stats}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 5: Why VAYU Detailed Differentiators */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              The VAYU Engineering Difference
            </h2>
            <p className="text-slate-500 text-sm">
              Why leading organizations trust VAYU to safeguard and optimize their most mission-critical workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff) => (
              <div
                key={diff.title}
                className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-card transition-all space-y-3"
              >
                <div className="p-3 rounded-2xl bg-sky-50 border border-sky-100 w-fit">
                  {diff.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">{diff.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900">
              Meet our team at our Bangalore Headquarters
            </h3>
            <p className="text-xs text-slate-500">
              Visit our 24/7 Command Center in Kurubarahalli, Bengaluru, or connect virtually with our chief architects.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all flex items-center space-x-2"
          >
            <span>Connect with Us Today</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
