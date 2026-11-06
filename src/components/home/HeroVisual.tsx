"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Server, Shield, Cpu, Cloud, Activity, Terminal, Zap } from "lucide-react";

export default function HeroVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"network" | "cloud" | "security">("network");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes for interconnected infrastructure mesh
    const nodeCount = 38;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    const colors = ["#00c2ff", "#38bdf8", "#0284c7", "#67e8f9", "#334155"];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1.5,
        baseRadius: Math.random() * 2.5 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // Packet pulses traveling along connections
    const packets: Array<{
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
      color: string;
    }> = [];

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle circular cyber radar rings
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.save();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.06)";
      ctx.lineWidth = 1;
      for (let r = 80; r < Math.max(width, height) * 0.7; r += 70) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw 8-ray radial radar sweep reminiscent of the VAYU 8-point rosette
      const sweepAngle = time * 0.5;
      const sweepGradient = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 300);
      sweepGradient.addColorStop(0, "rgba(0, 194, 255, 0.12)");
      sweepGradient.addColorStop(1, "rgba(0, 194, 255, 0)");
      ctx.fillStyle = sweepGradient;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, 280, sweepAngle, sweepAngle + 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        n.pulse += n.pulseSpeed;
        const currentRadius = n.baseRadius + Math.sin(n.pulse) * 1.2;

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw connections between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Randomly spawn data packet pulses
            if (Math.random() < 0.003 && packets.length < 16) {
              packets.push({
                fromIdx: i,
                toIdx: j,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02,
                color: "#38bdf8",
              });
            }
          }
        }
      }

      // Draw traveling packet pulses
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const start = nodes[pkt.fromIdx];
        const end = nodes[pkt.toIdx];
        if (!start || !end) continue;

        const curX = start.x + (end.x - start.x) * pkt.progress;
        const curY = start.y + (end.y - start.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(curX, curY, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#00c2ff";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[520px] lg:h-[600px] flex items-center justify-center select-none"
    >
      {/* Background HTML5 Canvas with network packet simulation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Central 3D Floating VAYU Core Hub */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)`,
        }}
      >
        {/* Glowing Halo Rings inspired by the VAYU logo loops */}
        <div className="absolute w-72 h-72 rounded-full border border-vayu-500/20 animate-spin-slow pointer-events-none"></div>
        <div className="absolute w-80 h-80 rounded-full border border-dashed border-vayu-400/30 animate-spin-reverse pointer-events-none"></div>
        <div className="absolute -inset-8 bg-vayu-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>

        {/* Central Card with VAYU Official Logo */}
        <div className="relative glass-card p-8 rounded-3xl border border-vayu-500/40 shadow-2xl shadow-cyan-950/80 bg-slateRibbon-void/85 backdrop-blur-xl flex flex-col items-center text-center max-w-sm group">
          <div className="relative w-28 h-28 mb-3 transition-transform duration-500 group-hover:scale-110">
            <div className="absolute -inset-2 rounded-full bg-vayu-500/30 blur-xl group-hover:bg-vayu-400/50 transition-all"></div>
            <Image
              src="/vayu_logo.png"
              alt="VAYU IT Solutions Central Core"
              width={112}
              height={112}
              priority
              className="relative object-contain w-full h-full drop-shadow-[0_0_25px_rgba(0,194,255,0.7)]"
            />
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-vayu-500/10 border border-vayu-500/30 text-vayu-300 text-xs font-mono font-medium mb-1">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>NOC CORE: BANGALORE</span>
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight">
            VAYU Infrastructure Mesh
          </h3>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            Zero Trust • High Availability • Open-Source IaC
          </p>

          <div className="grid grid-cols-2 gap-2 w-full mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono">
            <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-left">
              <span className="text-slate-500 block">SLA UPTIME</span>
              <span className="text-emerald-400 font-bold">99.999%</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-left">
              <span className="text-slate-500 block">LATENCY</span>
              <span className="text-vayu-400 font-bold">&lt; 1.2ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Satellite Floating Enterprise Nodes */}
      {/* Node 1: Cloud Orchestrator (Top-Left) */}
      <div
        className="absolute top-6 left-2 sm:left-8 z-20 transition-transform duration-300 ease-out hidden sm:block"
        style={{
          transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`,
        }}
      >
        <div className="glass-card px-4 py-3 rounded-2xl border border-vayu-500/30 bg-slateRibbon-void/90 flex items-center space-x-3 shadow-xl hover:border-vayu-400 transition-colors">
          <div className="p-2 rounded-xl bg-vayu-500/15 border border-vayu-500/40 text-vayu-300">
            <Cloud className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center space-x-1.5">
              <span>Multi-Cloud Fabric</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              AWS • Azure • GCP Synced
            </div>
          </div>
        </div>
      </div>

      {/* Node 2: Cyber Threat Shield (Top-Right) */}
      <div
        className="absolute top-12 right-2 sm:right-6 z-20 transition-transform duration-300 ease-out hidden sm:block"
        style={{
          transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0)`,
        }}
      >
        <div className="glass-card px-4 py-3 rounded-2xl border border-vayu-500/30 bg-slateRibbon-void/90 flex items-center space-x-3 shadow-xl hover:border-vayu-400 transition-colors">
          <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">24/7 SOC Radar</div>
            <div className="text-[10px] text-emerald-400 font-mono">Zero Active Threats</div>
          </div>
        </div>
      </div>

      {/* Node 3: Automation Engine (Bottom-Left) */}
      <div
        className="absolute bottom-10 left-4 sm:left-12 z-20 transition-transform duration-300 ease-out hidden sm:block"
        style={{
          transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * -40}px, 0)`,
        }}
      >
        <div className="glass-card px-4 py-3 rounded-2xl border border-vayu-500/30 bg-slateRibbon-void/90 flex items-center space-x-3 shadow-xl hover:border-vayu-400 transition-colors">
          <div className="p-2 rounded-xl bg-sky-500/15 border border-sky-500/40 text-vayu-300">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">IaC Auto-Remediation</div>
            <div className="text-[10px] text-slate-400 font-mono">Ansible • Terraform Active</div>
          </div>
        </div>
      </div>

      {/* Node 4: FinOps Cost Saver (Bottom-Right) */}
      <div
        className="absolute bottom-8 right-4 sm:right-10 z-20 transition-transform duration-300 ease-out hidden sm:block"
        style={{
          transform: `translate3d(${mousePos.x * -30}px, ${mousePos.y * -30}px, 0)`,
        }}
      >
        <div className="glass-card px-4 py-3 rounded-2xl border border-vayu-500/30 bg-slateRibbon-void/90 flex items-center space-x-3 shadow-xl hover:border-vayu-400 transition-colors">
          <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">FinOps Governance</div>
            <div className="text-[10px] text-amber-300 font-mono">42% TCO Saved</div>
          </div>
        </div>
      </div>
    </div>
  );
}
