"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  TrendingDown
} from "lucide-react";
import { formatNumber } from "@/lib/utils";

export default function CostCalculatorSection() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [monthlySpend, setMonthlySpend] = useState<number>(800000);
  const [serverCount, setServerCount] = useState<number>(35);
  const [envType, setEnvType] = useState<"hybrid" | "cloud" | "onprem">("cloud");

  const handleCurrencyChange = (curr: "INR" | "USD") => {
    if (curr === currency) return;
    setCurrency(curr);
    if (curr === "INR") {
      setMonthlySpend(800000);
    } else {
      setMonthlySpend(12000);
    }
  };

  const savingsRate = envType === "cloud" ? 0.42 : envType === "hybrid" ? 0.38 : 0.45;
  const estimatedMonthlySavings = Math.round(monthlySpend * savingsRate);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const hoursSavedPerMonth = Math.round(serverCount * 2.8);

  const currSymbol = currency === "INR" ? "₹" : "$";
  const locale = currency === "INR" ? "en-IN" : "en-US";

  return (
    <section className="relative py-24 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
            <Calculator className="w-3.5 h-3.5 text-vayu-600" />
            <span>INTERACTIVE ROI ESTIMATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Enterprise{" "}
            <span className="text-gradient-cyan">Cost Reduction</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover how much your enterprise can save by replacing bloated proprietary licenses, automating repetitive sysadmin tasks, and adopting VAYU's open-source managed infrastructure.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-8 shadow-sm">
            
            {/* Header & Currency Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs font-mono text-slate-600 uppercase tracking-wider font-bold">
                Select Your Infrastructure Scope
              </span>
              <div className="flex rounded-xl bg-white p-1 border border-slate-200 shadow-sm">
                <button
                  onClick={() => handleCurrencyChange("INR")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    currency === "INR"
                      ? "bg-vayu-600 text-white shadow"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  INR (₹)
                </button>
                <button
                  onClick={() => handleCurrencyChange("USD")}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                    currency === "USD"
                      ? "bg-vayu-600 text-white shadow"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            {/* Slider 1: Monthly IT Spend */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-800">Current Monthly Infrastructure Spend</span>
                <span className="font-mono text-lg font-bold text-vayu-600">
                  {currSymbol} {formatNumber(monthlySpend, locale)} / mo
                </span>
              </div>
              <input
                type="range"
                min={currency === "INR" ? 100000 : 2000}
                max={currency === "INR" ? 5000000 : 80000}
                step={currency === "INR" ? 50000 : 1000}
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vayu-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>{currSymbol} {currency === "INR" ? "1,00,000" : "2,000"}</span>
                <span>{currSymbol} {currency === "INR" ? "25,00,000" : "40,000"}</span>
                <span>{currSymbol} {currency === "INR" ? "50,00,000+" : "80,000+"}</span>
              </div>
            </div>

            {/* Slider 2: Number of Servers / VMs */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-slate-800">Managed Instances & Servers</span>
                <span className="font-mono text-lg font-bold text-vayu-600">
                  {serverCount} Servers / VMs
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={300}
                step={5}
                value={serverCount}
                onChange={(e) => setServerCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-vayu-600"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>5 nodes</span>
                <span>150 nodes</span>
                <span>300+ nodes</span>
              </div>
            </div>

            {/* Radio 3: Environment Type */}
            <div className="space-y-3">
              <span className="text-sm font-semibold text-slate-800 block">
                Deployment Model
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "cloud", label: "Public Multi-Cloud", desc: "AWS / Azure / GCP" },
                  { id: "hybrid", label: "Hybrid Cloud", desc: "On-Prem + Cloud" },
                  { id: "onprem", label: "Data Center / DC", desc: "Bare-Metal / VMware" },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setEnvType(type.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      envType === type.id
                        ? "border-vayu-600 bg-white text-slate-900 shadow-sm"
                        : "border-slate-200 bg-white/70 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 mb-0.5">{type.label}</div>
                    <div className="text-[10px] font-mono text-slate-500">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Projected Real-Time Savings HUD (Crisp Contrast Card) */}
          <div className="lg:col-span-5 rounded-3xl p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
                  Projected Financial Impact
                </span>
              </div>

              {/* Huge Annual Savings Callout */}
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-xs font-mono text-slate-400 block mb-1">
                  ESTIMATED ANNUAL RUNTIME SAVINGS
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  {currSymbol} {formatNumber(estimatedAnnualSavings, locale)}
                  <span className="text-base text-emerald-400 font-sans ml-2">/ yr</span>
                </div>
                <div className="text-xs text-slate-300 mt-2 font-mono">
                  Approx. <strong className="text-emerald-400">{Math.round(savingsRate * 100)}% overall reduction</strong> in infrastructure TCO
                </div>
              </div>

              {/* Key Breakdown Metrics */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
                  <span className="text-slate-400 block text-[10px]">MONTHLY REINVESTABLE CAPITAL</span>
                  <span className="text-white font-bold text-sm">
                    {currSymbol} {formatNumber(estimatedMonthlySavings, locale)}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
                  <span className="text-slate-400 block text-[10px]">MANUAL TOIL ELIMINATED</span>
                  <span className="text-sky-300 font-bold text-sm">
                    ~{hoursSavedPerMonth} hrs / mo
                  </span>
                </div>
              </div>

              {/* Assurances */}
              <div className="space-y-2 pt-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>99.99% Availability Guaranteed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>24/7 Bangalore NOC/SOC Support Included</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6 mt-6 border-t border-slate-800">
              <Link
                href="/contact"
                className="w-full py-4 rounded-xl font-bold text-sm text-center flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-400 to-vayu-500 text-slate-950 shadow-lg hover:shadow-cyan-md hover:scale-[1.02] transition-all"
              >
                <span>Request Custom ROI Assessment Report</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-[11px] text-center text-slate-400 mt-2">
                No commitment • Detailed 10-page architecture breakdown provided
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
