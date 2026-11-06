"use client";

import React, { useState } from "react";
import { 
  ClipboardCheck, 
  Compass, 
  Workflow, 
  Zap, 
  Headphones, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { CUSTOMER_JOURNEY } from "@/data/company";

const JOURNEY_ICONS = [
  <ClipboardCheck key="1" className="w-6 h-6 text-vayu-600" />,
  <Compass key="2" className="w-6 h-6 text-vayu-600" />,
  <Workflow key="3" className="w-6 h-6 text-vayu-600" />,
  <Zap key="4" className="w-6 h-6 text-vayu-600" />,
  <Headphones key="5" className="w-6 h-6 text-vayu-600" />,
];

export default function CustomerJourneySection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="relative py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-vayu-600" />
            <span>HOW WE PARTNER WITH YOU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The VAYU Customer{" "}
            <span className="text-gradient-cyan">Transformation Journey</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From initial discovery and cost forensic audits to automated IaC deployment and 24/7 Bangalore NOC management, here is our proven 5-phase delivery model.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
          
          {CUSTOMER_JOURNEY.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between group shadow-sm ${
                  isActive
                    ? "border-vayu-500 shadow-cyan-md -translate-y-2"
                    : "border-slate-200 hover:border-sky-300"
                }`}
              >
                <div>
                  {/* Step Badge & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-vayu-600">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-bold">
                      {step.timeline}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 w-fit mb-4 group-hover:bg-vayu-500/10 transition-colors">
                    {JOURNEY_ICONS[idx]}
                  </div>

                  <span className="text-[11px] font-mono text-vayu-600 uppercase tracking-wider block mb-1 font-bold">
                    {step.phase}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1 font-bold">KEY DELIVERABLE</span>
                  <div className="text-xs font-semibold text-slate-800 flex items-start space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{step.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
