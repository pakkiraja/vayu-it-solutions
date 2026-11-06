"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  ShieldCheck, 
  Radio, 
  AlertCircle
} from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    mobile: "",
    serviceRequired: "Cloud Services & Modernization",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fullName.trim() || 
      !formData.email.trim() || 
      !formData.mobile.trim() || 
      !formData.message.trim()
    ) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="py-16 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mb-8">
          <Link href="/" className="hover:text-vayu-600 font-semibold">Home</Link>
          <span>/</span>
          <span className="text-vayu-600 font-bold">Contact Us</span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
            <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>24/7 BANGALORE COMMAND CENTER</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Connect with Our Enterprise{" "}
            <span className="text-gradient-cyan">Infrastructure Team</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you need a full infrastructure cost optimization audit, 24/7 managed NOC services, or urgent security incident response, our engineering leads are at your disposal.
          </p>
        </div>

        {/* Contact Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl relative">
            <div className="mb-6 space-y-1">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center space-x-2">
                <span>Schedule a Technical Consultation</span>
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                Fill in the details below. Our senior architects will reply within 2 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Inquiry Received Successfully</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A dedicated VAYU infrastructure specialist from our Bangalore headquarters will review your requirements for <strong>{formData.serviceRequired}</strong> and reach out shortly via phone or email.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        company: "",
                        email: "",
                        mobile: "",
                        serviceRequired: "Cloud Services & Modernization",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-vayu-600 text-white text-xs font-mono font-bold hover:bg-vayu-700 transition-colors shadow-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center space-x-2 font-medium">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-500" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rajeshwar Rao"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vayu-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Apex Global Systems"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vayu-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vayu-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vayu-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Service Required <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-vayu-500 focus:bg-white transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Infrastructure Cost Reduction Audit">
                      Infrastructure Cost Reduction Audit (FinOps)
                    </option>
                    <option value="24/7 Bangalore NOC/SOC Support">
                      24/7 Bangalore NOC/SOC Support
                    </option>
                    <option value="General Enterprise Consultation">
                      General Enterprise Advisory
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Message / Project Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Briefly describe your current IT challenges, number of servers/VMs, or specific service requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-vayu-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 transition-all flex items-center justify-center space-x-2 shadow-md hover:shadow-cyan-md"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <span>Submit Architecture Request</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-4 text-[11px] text-slate-500 pt-2 font-mono">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Strict NDA Protected</span>
                  </span>
                  <span>•</span>
                  <span>No Sales Spam</span>
                  <span>•</span>
                  <span>Direct Engineer Response</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Bangalore HQ Details & Office Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Info Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 space-y-6 shadow-card">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-mono font-bold text-vayu-600 uppercase tracking-wider">
                  Bangalore Headquarters
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              </div>

              <div className="space-y-4 text-xs text-slate-600">
                {/* Address */}
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-vayu-600 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="leading-relaxed">
                    <strong className="text-slate-900 block text-sm mb-0.5">Corporate Office & NOC:</strong>
                    {COMPANY_INFO.address}
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-vayu-600 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Direct Phone:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-slate-900 hover:text-vayu-600 font-mono font-bold text-sm transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-100 text-vayu-600 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Inquiries & Support:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-vayu-600 hover:underline font-mono text-xs transition-colors font-medium"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 pt-2 border-t border-slate-100">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-slate-900 block text-sm">Business Operations:</strong>
                    <div className="text-[11px] text-slate-500">{COMPANY_INFO.businessHours}</div>
                    <div className="text-[11px] font-mono text-emerald-600 font-bold">
                      NOC / SOC: 24/7/365 On-Call Emergency Ops
                    </div>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-bold text-xs text-center flex items-center justify-center space-x-2 bg-slate-50 border border-slate-200 text-slate-800 hover:bg-sky-50 hover:text-vayu-600 hover:border-sky-300 transition-all shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-vayu-600" />
                <span>Get Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-card h-64 relative">
              <iframe
                title="VAYU IT Solutions Location Map"
                src={COMPANY_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 border border-slate-200 text-[10px] font-mono text-slate-800 font-bold shadow-md backdrop-blur-md">
                📍 Kurubarahalli, Bengaluru 560086
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
