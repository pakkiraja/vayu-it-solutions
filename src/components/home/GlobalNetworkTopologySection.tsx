"use client";

import React, { useState } from "react";
import { 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Server, 
  Radio, 
  MapPin,
  Layers
} from "lucide-react";

interface NodeLocation {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  status: "optimal" | "monitoring" | "active";
  latency: string;
  workloads: string;
  isHub?: boolean;
}

const GLOBAL_NODES: NodeLocation[] = [
  { id: "blr", name: "Bangalore HQ (NOC/SOC)", type: "Global Command Hub", x: 68, y: 55, status: "optimal", latency: "0.4ms", workloads: "150+ Enterprise Enclaves", isHub: true },
  { id: "bom", name: "Mumbai (DC-1)", type: "Cloud Interconnect & DR", x: 65, y: 50, status: "optimal", latency: "1.2ms", workloads: "Edge CDN & FinTech Cluster" },
  { id: "del", name: "Delhi NCR (DC-2)", type: "Northern Hub", x: 67, y: 42, status: "optimal", latency: "1.8ms", workloads: "Government & Enterprise Fabric" },
  { id: "sin", name: "Singapore (AP-1)", type: "APAC Cloud Node", x: 76, y: 62, status: "optimal", latency: "18ms", workloads: "AWS / Azure Cloud Bridge" },
  { id: "fra", name: "Frankfurt (EU-1)", type: "EMEA Cloud Gateway", x: 50, y: 35, status: "optimal", latency: "82ms", workloads: "GDPR Compliant Enclave" },
  { id: "lon", name: "London (UK-1)", type: "Edge POP", x: 46, y: 32, status: "optimal", latency: "94ms", workloads: "Financial SD-WAN Link" },
  { id: "use", name: "US-East (Virginia)", type: "Transatlantic Bridge", x: 26, y: 38, status: "optimal", latency: "145ms", workloads: "Kubernetes Hybrid Cloud" },
  { id: "tok", name: "Tokyo (JP-1)", type: "East Asia POP", x: 86, y: 44, status: "optimal", latency: "65ms", workloads: "Edge Data Ingestion" },
];

export default function GlobalNetworkTopologySection() {
  const [activeLayer, setActiveLayer] = useState<"cloud" | "security" | "network" | "dc" | "managed">("network");
  const [selectedNode, setSelectedNode] = useState<NodeLocation>(GLOBAL_NODES[0]);

  return (
    <section className="relative py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>REAL-TIME INFRASTRUCTURE TOPOLOGY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Global Cloud Connectivity &{" "}
              <span className="text-gradient-cyan">24/7 Operations Grid</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From our flagship 24/7 Command Center in Kurubarahalli, Bangalore, VAYU orchestrates high-throughput multi-cloud connectivity, distributed SD-WAN fabrics, and continuous SOC threat detection.
            </p>
          </div>

          {/* Interactive Layer Filter Buttons */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-50 border border-slate-200">
            {[
              { id: "network", label: "Network Ops", icon: <Activity className="w-3.5 h-3.5" /> },
              { id: "cloud", label: "Cloud Connectivity", icon: <Cloud className="w-3.5 h-3.5" /> },
              { id: "security", label: "Security Monitoring", icon: <ShieldCheck className="w-3.5 h-3.5" /> },
              { id: "dc", label: "Data Centers", icon: <Server className="w-3.5 h-3.5" /> },
              { id: "managed", label: "Managed Services", icon: <Layers className="w-3.5 h-3.5" /> },
            ].map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer.id as any)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeLayer === layer.id
                    ? "bg-vayu-600 text-white shadow-md shadow-vayu-600/25 scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                }`}
              >
                {layer.icon}
                <span>{layer.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* The Interactive Global Map Card */}
        <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 overflow-hidden shadow-xl p-6 lg:p-10">
          
          {/* Status HUD Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 mb-6 border-b border-slate-200 text-xs font-mono">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <div>
                <span className="text-slate-400 block text-[10px]">NETWORK STATUS</span>
                <span className="text-emerald-600 font-bold">100% OPERATIONAL</span>
              </div>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px]">CURRENT MODE</span>
              <span className="text-vayu-600 font-bold uppercase">{activeLayer} OVERLAY</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px]">HQ COMMAND CENTER</span>
              <span className="text-slate-900 font-bold">BANGALORE, INDIA</span>
            </div>

            <div>
              <span className="text-slate-400 block text-[10px]">ACTIVE WORKLOADS</span>
              <span className="text-slate-700 font-bold">150+ ENTERPRISE CLUSTERS</span>
            </div>
          </div>

          {/* Simulated World Map Canvas Area */}
          <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center shadow-inner">
            
            {/* World Grid Coordinate Lines */}
            <div className="absolute inset-0 bg-light-grid opacity-60"></div>

            {/* Stylized Vector World Continents */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-30" 
              viewBox="0 0 1000 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M150 80 Q 220 70 280 120 Q 260 200 200 240 Q 140 180 150 80 Z" fill="#38bdf8" />
              <path d="M260 260 Q 320 280 300 380 Q 250 440 230 360 Q 220 290 260 260 Z" fill="#38bdf8" />
              <path d="M460 100 Q 540 80 560 150 Q 500 180 460 150 Q 430 120 460 100 Z" fill="#38bdf8" />
              <path d="M480 190 Q 570 190 560 300 Q 520 370 480 320 Q 450 250 480 190 Z" fill="#38bdf8" />
              <path d="M600 90 Q 750 80 820 180 Q 740 280 660 260 Q 640 180 600 90 Z" fill="#38bdf8" />
              <path d="M660 220 L 700 240 L 675 295 L 650 250 Z" fill="#0284c7" opacity="0.9" />
              <path d="M780 320 Q 860 310 870 380 Q 800 420 770 370 Z" fill="#38bdf8" />
            </svg>

            {/* Glowing Connection Lines from Bangalore (x: 68%, y: 55%) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {GLOBAL_NODES.filter(n => !n.isHub).map((node) => (
                <g key={node.id}>
                  <line
                    x1="68%"
                    y1="55%"
                    x2={`${node.x}%`}
                    y2={`${node.y}%`}
                    stroke="rgba(2, 132, 199, 0.45)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    r="3.5"
                    fill="#0284c7"
                    className="animate-pulse"
                  >
                    <animateMotion
                      path={`M ${68 * 10} ${55 * 4.6} L ${node.x * 10} ${node.y * 4.6}`}
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
            </svg>

            {/* Render Nodes on Map */}
            {GLOBAL_NODES.map((node) => {
              const isSelected = selectedNode.id === node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  {node.isHub ? (
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-full bg-sky-400/30 animate-ping"></div>
                      <div className="absolute -inset-2 rounded-full bg-vayu-500/40 animate-pulse"></div>
                      <div className="relative w-8 h-8 rounded-full bg-vayu-600 border-2 border-white flex items-center justify-center shadow-lg shadow-vayu-600/40">
                        <MapPin className="w-4 h-4 text-white font-bold" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-vayu-500 group-hover:scale-125 transition-transform shadow-md"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-vayu-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  )}

                  {/* Node Label Tooltip */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2.5 py-1 rounded-lg text-[10px] font-mono whitespace-nowrap z-20 pointer-events-none transition-all ${
                    isSelected
                      ? "bg-vayu-600 text-white font-bold shadow-md scale-105"
                      : "bg-white text-slate-700 border border-slate-200 opacity-90 group-hover:opacity-100 shadow-sm"
                  }`}>
                    {node.name}
                  </div>
                </div>
              );
            })}

            {/* Active Node Detail Card Overlay (Bottom Left) */}
            <div className="absolute bottom-4 left-4 max-w-xs p-4 rounded-xl bg-white/95 border border-slate-200 text-xs shadow-xl hidden sm:block backdrop-blur-md">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                <span className="font-bold text-slate-900 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{selectedNode.name}</span>
                </span>
                <span className="font-mono text-vayu-600 text-[10px] font-bold">
                  {selectedNode.latency}
                </span>
              </div>
              <div className="space-y-1 text-slate-600 font-mono text-[11px]">
                <div>Role: <span className="text-slate-800 font-semibold">{selectedNode.type}</span></div>
                <div>Coverage: <span className="text-vayu-600">{selectedNode.workloads}</span></div>
                <div>Status: <span className="text-emerald-600 font-bold">Optimal (99.999%)</span></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
