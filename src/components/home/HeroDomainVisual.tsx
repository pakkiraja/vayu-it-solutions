"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Cloud, 
  ShieldAlert, 
  Network, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Server, 
  Lock, 
  RefreshCw, 
  Zap, 
  Radio, 
  Layers,
  ArrowRight
} from "lucide-react";

export interface DomainItem {
  id: "cloud" | "security" | "networking" | "automation" | "noc";
  title: string;
  badge: string;
  stats: string;
  icon: React.ReactNode;
}

export default function HeroDomainVisual() {
  const [activeDomain, setActiveDomain] = useState<"cloud" | "security" | "networking" | "automation" | "noc">("cloud");
  const [autoPlay, setAutoPlay] = useState(true);

  const domains: DomainItem[] = [
    { id: "cloud", title: "Cloud Architecture", badge: "AWS • Azure • FinOps", stats: "44% Cost Cut", icon: <Cloud className="w-4 h-4" /> },
    { id: "security", title: "Cybersecurity SOC", badge: "Zero Trust Defense", stats: "Sub-3m Triage", icon: <ShieldAlert className="w-4 h-4" /> },
    { id: "networking", title: "Enterprise SD-WAN", badge: "Cisco • Fortinet", stats: "99.999% Uptime", icon: <Network className="w-4 h-4" /> },
    { id: "automation", title: "IaC & GitOps", badge: "Terraform • Ansible", stats: "Zero Drift", icon: <Cpu className="w-4 h-4" /> },
    { id: "noc", title: "24/7 Managed NOC", badge: "Bangalore Operations", stats: "15m MTTR", icon: <Activity className="w-4 h-4" /> },
  ];

  // Auto-cycle through domains every 6 seconds
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveDomain((prev) => {
        const ids: ("cloud" | "security" | "networking" | "automation" | "noc")[] = ["cloud", "security", "networking", "automation", "noc"];
        const nextIdx = (ids.indexOf(prev) + 1) % ids.length;
        return ids[nextIdx];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div 
      className="relative w-full rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 lg:p-8 overflow-hidden select-none"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-50 rounded-full blur-2xl pointer-events-none"></div>

      {/* Domain Selection Tabs */}
      <div className="flex flex-wrap gap-2 pb-5 border-b border-slate-100 relative z-10">
        {domains.map((d) => {
          const isActive = activeDomain === d.id;
          return (
            <button
              key={d.id}
              onClick={() => {
                setActiveDomain(d.id);
                setAutoPlay(false);
              }}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? "bg-vayu-600 text-white shadow-md shadow-vayu-600/25 scale-[1.02]"
                  : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/60"
              }`}
            >
              <span className={isActive ? "text-white" : "text-vayu-600"}>{d.icon}</span>
              <span>{d.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Dynamic Graphic Container */}
      <div className="relative h-[340px] sm:h-[380px] w-full flex items-center justify-center pt-4">
        
        {/* ================= DOMAIN 1: CLOUD ARCHITECTURE ================= */}
        {activeDomain === "cloud" && (
          <div className="w-full h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-300">
            {/* Top Status HUD */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center space-x-2 text-slate-700 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>MULTI-CLOUD TOPOLOGY: AWS & AZURE</span>
              </span>
              <span className="text-vayu-600 font-bold bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                FinOps: 44% Spend Cut
              </span>
            </div>

            {/* Cloud Topology Diagram Graphic */}
            <div className="relative my-auto flex items-center justify-center">
              {/* Background Cloud Ring */}
              <div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-sky-200 animate-spin-slow"></div>

              {/* Central Kubernetes / Open-Source Core */}
              <div className="relative z-10 p-5 rounded-2xl bg-white border-2 border-vayu-500 shadow-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-vayu-600 mb-2">
                  <Cloud className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-slate-900">Kubernetes Core</span>
                <span className="text-[10px] font-mono text-vayu-600 font-medium">EKS & AKS Synchronized</span>
                <div className="mt-2 text-[10px] font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                  Uptime: 99.99%
                </div>
              </div>

              {/* Orbiting Satellite Node 1: AWS VPC (Left) */}
              <div className="absolute -left-2 sm:left-4 top-10 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center space-x-2.5 animate-float">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold text-xs">
                  AWS
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800">EC2 Graviton</div>
                  <div className="text-[9px] font-mono text-slate-500">Latency: 0.8ms</div>
                </div>
              </div>

              {/* Orbiting Satellite Node 2: Microsoft Azure (Right) */}
              <div className="absolute -right-2 sm:right-4 top-12 p-3 rounded-xl bg-white border border-slate-200 shadow-md flex items-center space-x-2.5 animate-float-delayed">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-vayu-600 font-bold text-xs">
                  AZ
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800">Azure AKS</div>
                  <div className="text-[9px] font-mono text-slate-500">Hybrid WAN Synced</div>
                </div>
              </div>

              {/* Orbiting Satellite Node 3: Open-Source Database (Bottom) */}
              <div className="absolute bottom-0 p-2.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center space-x-2">
                <Server className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] font-mono text-slate-700 font-semibold">
                  PostgreSQL HA Cluster • Zero License Fees
                </span>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center font-mono text-xs">
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">DEPLOY TIME</span>
                <span className="text-slate-900 font-bold">4x Faster</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">MIGRATION CUTOVER</span>
                <span className="text-emerald-600 font-bold">Zero Downtime</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">SAVINGS</span>
                <span className="text-vayu-600 font-bold">Up to 50%</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= DOMAIN 2: CYBERSECURITY SOC ================= */}
        {activeDomain === "security" && (
          <div className="w-full h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center space-x-2 text-slate-700 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>24/7 SOC THREAT RADAR • ZERO TRUST</span>
              </span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                0 Active Breaches
              </span>
            </div>

            {/* Radar / Shield Animation Graphic */}
            <div className="relative my-auto flex items-center justify-center">
              {/* Radar Grid Circles */}
              <div className="relative w-56 h-56 rounded-full border border-emerald-200 bg-emerald-50/20 flex items-center justify-center overflow-hidden">
                <div className="w-40 h-40 rounded-full border border-emerald-200/60"></div>
                <div className="w-24 h-24 rounded-full border border-emerald-200/80"></div>
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,0.25)_60deg,transparent_60deg)] animate-radar-sweep"></div>
              </div>

              {/* Central Security Shield */}
              <div className="absolute z-10 p-5 rounded-2xl bg-white border-2 border-emerald-500 shadow-xl flex flex-col items-center text-center">
                <ShieldAlert className="w-8 h-8 text-emerald-600 mb-1" />
                <span className="text-xs font-bold text-slate-900">Zero Trust Gateway</span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold">ISO 27001 Aligned</span>
              </div>

              {/* Floating Alert Tag 1 (Top Right) */}
              <div className="absolute top-4 right-2 sm:right-6 p-2.5 rounded-xl bg-white border border-emerald-200 shadow-md text-xs font-mono">
                <span className="text-emerald-600 font-bold">✓ DDoS Isolated</span>
                <div className="text-[10px] text-slate-500">Rate Limit Enforced</div>
              </div>

              {/* Floating Alert Tag 2 (Bottom Left) */}
              <div className="absolute bottom-4 left-2 sm:left-6 p-2.5 rounded-xl bg-white border border-emerald-200 shadow-md text-xs font-mono">
                <span className="text-emerald-600 font-bold">✓ MTTD: &lt; 3 mins</span>
                <div className="text-[10px] text-slate-500">Bangalore SOC Ingestion</div>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center font-mono text-xs">
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">THREAT RESPONSE</span>
                <span className="text-emerald-600 font-bold">&lt; 15 mins</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">COMPLIANCE</span>
                <span className="text-slate-900 font-bold">100% Passed</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">RANSOMWARE RESISTANCE</span>
                <span className="text-vayu-600 font-bold">Air-Gapped</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= DOMAIN 3: ENTERPRISE NETWORKING ================= */}
        {activeDomain === "networking" && (
          <div className="w-full h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center space-x-2 text-slate-700 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>
                <span>SD-WAN DYNAMIC PATH STEERING</span>
              </span>
              <span className="text-sky-700 font-bold bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                Dual Fiber + 5G Active
              </span>
            </div>

            {/* Network Mesh Graphic */}
            <div className="relative my-auto flex items-center justify-center">
              {/* Central Core Switch / Router Hub */}
              <div className="relative z-10 p-5 rounded-2xl bg-white border-2 border-vayu-500 shadow-xl flex flex-col items-center text-center">
                <Network className="w-8 h-8 text-vayu-600 mb-1" />
                <span className="text-xs font-bold text-slate-900">SD-WAN Edge Fabric</span>
                <span className="text-[10px] font-mono text-vayu-600">Cisco & Fortinet</span>
              </div>

              {/* Left Branch */}
              <div className="absolute left-2 sm:left-6 p-3 rounded-xl bg-white border border-slate-200 shadow-md text-xs font-mono">
                <div className="font-bold text-slate-800">Branch HQ (Bangalore)</div>
                <div className="text-[10px] text-emerald-600">Primary Fiber: 1.2 Gbps</div>
              </div>

              {/* Right Branch */}
              <div className="absolute right-2 sm:right-6 p-3 rounded-xl bg-white border border-slate-200 shadow-md text-xs font-mono">
                <div className="font-bold text-slate-800">Remote Plant / Retail</div>
                <div className="text-[10px] text-vayu-600">Zero Packet Loss</div>
              </div>

              {/* Bottom Uplink */}
              <div className="absolute bottom-2 p-2 rounded-lg bg-sky-50 border border-sky-200 text-[10px] font-mono text-sky-800 font-bold">
                Sub-Second Automated Failover • 99.999% Reliability
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center font-mono text-xs">
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">WAN EXPENSE</span>
                <span className="text-emerald-600 font-bold">-60% Cost</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">AVAILABILITY</span>
                <span className="text-slate-900 font-bold">99.999%</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">FAILOVER TIME</span>
                <span className="text-vayu-600 font-bold">&lt; 800ms</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= DOMAIN 4: INFRASTRUCTURE AUTOMATION ================= */}
        {activeDomain === "automation" && (
          <div className="w-full h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center space-x-2 text-slate-700 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-vayu-500 animate-ping"></span>
                <span>TERRAFORM & ANSIBLE GITOPS PIPELINE</span>
              </span>
              <span className="text-vayu-700 font-bold bg-sky-50 px-2.5 py-1 rounded-lg border border-sky-200">
                80% Manual Toil Cut
              </span>
            </div>

            {/* Interactive Terminal / Code Flow Graphic */}
            <div className="relative my-auto w-full max-w-md mx-auto p-4 rounded-2xl bg-slate-900 text-slate-200 font-mono text-[11px] shadow-xl border border-slate-800">
              <div className="flex items-center space-x-1.5 pb-2 mb-2 border-b border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] text-slate-400 ml-2">vayu-iac-pipeline.sh</span>
              </div>

              <div className="space-y-1 leading-relaxed">
                <div className="text-emerald-400">$ terraform apply -auto-approve</div>
                <div className="text-slate-400">Plan: 24 to add, 0 to change, 0 to destroy.</div>
                <div className="text-sky-300">✓ Security benchmark (CIS Level 2) passed</div>
                <div className="text-slate-400">$ ansible-playbook site.yml --diff</div>
                <div className="text-emerald-400">PLAY RECAP: ok=18 changed=0 failed=0 (Zero Drift)</div>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center font-mono text-xs">
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">SPIN-UP TIME</span>
                <span className="text-vayu-600 font-bold">&lt; 12 mins</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">HUMAN ERROR</span>
                <span className="text-emerald-600 font-bold">Zero Defect</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">ROLLBACK</span>
                <span className="text-slate-900 font-bold">Automated</span>
              </div>
            </div>
          </div>
        )}

        {/* ================= DOMAIN 5: 24/7 MANAGED NOC ================= */}
        {activeDomain === "noc" && (
          <div className="w-full h-full flex flex-col justify-between animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="flex items-center space-x-2 text-slate-700 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>BANGALORE NOC COMMAND CENTER (24/7/365)</span>
              </span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                Kurubarahalli Station
              </span>
            </div>

            {/* Server Rack Cluster Graphic */}
            <div className="relative my-auto flex items-center justify-center space-x-4">
              {/* Rack Unit 1 */}
              <div className="w-36 p-3 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-lg space-y-2 font-mono text-[10px]">
                <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                  <span className="text-slate-400">RACK-01</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="space-y-1">
                  <div className="p-1 bg-slate-800 rounded flex justify-between">
                    <span>CPU:</span> <span className="text-emerald-400">18%</span>
                  </div>
                  <div className="p-1 bg-slate-800 rounded flex justify-between">
                    <span>RAM:</span> <span className="text-vayu-400">42%</span>
                  </div>
                  <div className="p-1 bg-slate-800 rounded flex justify-between">
                    <span>TEMP:</span> <span className="text-sky-300">21°C</span>
                  </div>
                </div>
              </div>

              {/* Central NOC Badge */}
              <div className="p-4 rounded-2xl bg-white border-2 border-vayu-500 shadow-xl text-center">
                <Activity className="w-8 h-8 text-vayu-600 mx-auto mb-1" />
                <span className="text-xs font-bold text-slate-900 block">L1 - L3 Helpdesk</span>
                <span className="text-[10px] font-mono text-emerald-600 font-bold">MTTR &lt; 15 mins</span>
              </div>

              {/* Rack Unit 2 */}
              <div className="w-36 p-3 rounded-xl bg-slate-900 text-white border border-slate-700 shadow-lg space-y-2 font-mono text-[10px]">
                <div className="flex items-center justify-between pb-1 border-b border-slate-800">
                  <span className="text-slate-400">RACK-02</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="space-y-1">
                  <div className="p-1 bg-slate-800 rounded flex justify-between">
                    <span>DISK:</span> <span className="text-emerald-400">Optimal</span>
                  </div>
                  <div className="p-1 bg-slate-800 rounded flex justify-between">
                    <span>POWER:</span> <span className="text-vayu-400">Redundant</span>
                  </div>
                  <div className="p-1 bg-slate-800 rounded flex justify-between">
                    <span>SLA:</span> <span className="text-emerald-400">99.98%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center font-mono text-xs">
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">ON-CALL CREW</span>
                <span className="text-slate-900 font-bold">24/7/365</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">INCIDENT ESCALATION</span>
                <span className="text-emerald-600 font-bold">Instant P1</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="text-slate-400 block text-[10px]">FIRST RESOLUTION</span>
                <span className="text-vayu-600 font-bold">92% Fixed</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
