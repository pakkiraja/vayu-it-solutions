import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Wifi, 
  Server, 
  ShieldCheck, 
  Activity, 
  Globe, 
  Building,
  Split
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Next-Gen Networking Services & Enterprise SD-WAN",
  description: "Enterprise LAN/WAN, SD-WAN Cisco & Fortinet integration, WiFi 6 campus fabrics, data center spine-leaf, and 24/7 network monitoring by VAYU IT Solutions.",
};

export default function NetworkingServicesPage() {
  const offerings = [
    {
      title: "1. Enterprise SD-WAN Architecture",
      desc: "Replace rigid, expensive MPLS leased lines with agile Software-Defined WAN. We deploy Cisco Catalyst SD-WAN and Fortinet Secure SD-WAN with dynamic application path steering.",
      benefits: ["60% Reduction in Telecommunications Costs", "Zero-Packet Loss Voice & Video Steering", "Automated Multi-ISP Failover", "Integrated Next-Gen Firewall (NGFW)"],
      icon: <Split className="w-6 h-6 text-vayu-600" />,
    },
    {
      title: "2. Campus LAN & WAN Engineering",
      desc: "High-density Gigabit and 10G/40G switching fabrics engineered with redundant core, distribution, and access tiers for corporate headquarters, manufacturing plants, and hospitals.",
      benefits: ["Non-blocking Wire-Speed Throughput", "802.1X Port-Based Network Access Control", "VLAN Segmentation & Micro-Perimeters", "Redundant Power & Uplink LACP Bonding"],
      icon: <Network className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: "3. Enterprise High-Density Wireless (WiFi 6/6E)",
      desc: "Predictive RF heatmaps, cloud-managed controller architectures (Cisco Meraki, Aruba, Ubiquiti), and seamless guest/corporate onboarding for dense enterprise offices.",
      benefits: ["Zero-Deadzone RF Site Surveys", "Seamless Roaming Across Campus Wings", "WPA3 Enterprise Encryption", "IoT & Guest Isolation Policies"],
      icon: <Wifi className="w-6 h-6 text-sky-600" />,
    },
    {
      title: "4. Data Center Spine-Leaf Fabrics",
      desc: "Modern data center switching architectures utilizing EVPN-VXLAN, BGP routing, and low-latency spine-leaf topologies for virtualized compute and storage clusters.",
      benefits: ["BGP Unnumbered & EVPN Overlays", "East-West Traffic Optimization", "Sub-Microsecond Latency Fabrics", "Zero Packet Drop Storage (iSCSI / RoCEv2)"],
      icon: <Server className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "5. 24/7 Network Monitoring & NOC Operations",
      desc: "Continuous SNMP, NetFlow, and sFlow telemetry with proactive packet loss detection, link saturation alerts, and automated ticket escalation handled from our Bangalore NOC.",
      benefits: ["Sub-15 Minute Incident Triage", "Real-time NetFlow Bandwidth Analytics", "Automated Configuration Backup (Git-Backed)", "Proactive Link Flap Isolation"],
      icon: <Activity className="w-6 h-6 text-cyan-600" />,
    },
    {
      title: "6. Multi-ISP Management & BGP Peering",
      desc: "Eliminate downtime caused by local fiber cuts. We configure multi-homed BGP routing across dual tier-1 ISPs with automated sub-second failover and SLA monitoring.",
      benefits: ["True Multi-Carrier Redundancy", "Autonomous System (AS) Management", "Carrier SLA Dispute Escalation", "Optimized International Routing"],
      icon: <Globe className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "7. Zero Trust Network Security",
      desc: "Network micro-segmentation, stateful packet inspection firewalls, SSL/TLS decryption, and intrusion prevention systems (IPS) embedded into every routing hop.",
      benefits: ["Lateral Movement Containment", "Deep Packet Inspection (DPI)", "Threat Intelligence Feed Sync", "Encrypted IPsec / WireGuard Tunnels"],
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    },
    {
      title: "8. Multi-Branch & Remote Connectivity",
      desc: "Secure site-to-site IPsec VPN meshing and Zero Trust Network Access (ZTNA) connecting retail outlets, remote distribution centers, and distributed regional offices.",
      benefits: ["Zero-Touch Branch Deployment", "Centralized Cloud Policy Orchestration", "Cellular 4G/5G Backup Links", "End-to-End Latency Guarantees"],
      icon: <Building className="w-6 h-6 text-rose-500" />,
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
          <span className="text-vayu-600 font-bold">Networking Services</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-vayu-600 text-xs font-mono font-bold">
              <Network className="w-3.5 h-3.5 text-vayu-600" />
              <span>PRACTICE 02 • NEXT-GEN ENTERPRISE NETWORKING</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Enterprise SD-WAN, Campus LAN &{" "}
              <span className="text-gradient-cyan">Data Center Fabrics</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Modern distributed enterprises require agile, high-throughput, and secure networking fabrics. From multi-branch SD-WAN to zero-loss spine-leaf data centers, VAYU ensures ultra-reliable global connectivity.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all flex items-center space-x-2"
              >
                <span>Request Network Topology Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="px-6 py-4 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-vayu-500 hover:text-vayu-600 transition-all shadow-sm"
              >
                Speak to Network Engineer
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-vayu-600 font-bold">
              Networking SLA Guarantees
            </div>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-vayu-600 font-mono">99.999%</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Core Network Uptime</div>
              <div className="text-[11px] text-slate-500 mt-1">Multi-ISP automatic BGP failover & redundant switching paths</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-emerald-600 font-mono">60% Saved</div>
              <div className="text-xs text-slate-800 font-bold mt-1">WAN Operating Expense</div>
              <div className="text-[11px] text-slate-500 mt-1">Eliminating legacy MPLS lines via Cisco/Fortinet SD-WAN</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="text-3xl font-extrabold text-slate-900 font-mono">&lt; 15 mins</div>
              <div className="text-xs text-slate-800 font-bold mt-1">Bangalore NOC MTTR</div>
              <div className="text-[11px] text-slate-500 mt-1">24/7 proactive monitoring and carrier escalation</div>
            </div>
          </div>
        </div>

        {/* 8 Detailed Network Offerings */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Complete Network Lifecycle Offerings
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              From physical fiber cabling and RF planning to SD-WAN orchestration and 24/7 telemetry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, idx) => (
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
                    Key Advantages:
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-600 font-mono">
                    {item.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Network Topology Visualizer */}
        <div className="mt-20 p-8 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-card space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">VAYU Enterprise Network Topology Standard</h3>
            <p className="text-xs text-slate-500">
              Multi-tiered architecture delivering high availability, automated link switching, and end-to-end telemetry.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="text-center md:text-left space-y-1">
              <span className="text-vayu-600 font-bold block">1. WAN EDGE & SD-WAN</span>
              <p className="text-slate-600">Dual Tier-1 ISPs + 5G Cellular Failover • Fortinet NGFW / Cisco SD-WAN</p>
            </div>
            <div className="text-vayu-600 hidden md:block">➔</div>
            <div className="text-center md:text-left space-y-1">
              <span className="text-sky-600 font-bold block">2. CORE & SPINE-LEAF</span>
              <p className="text-slate-600">Redundant L3 Core Switches • 10G/40G Uplinks • EVPN-VXLAN Fabric</p>
            </div>
            <div className="text-vayu-600 hidden md:block">➔</div>
            <div className="text-center md:text-left space-y-1">
              <span className="text-emerald-600 font-bold block">3. ACCESS & WIRELESS</span>
              <p className="text-slate-600">PoE+ Access Switches • WiFi 6E APs • 802.1X Dynamic VLAN Port Access</p>
            </div>
            <div className="text-vayu-600 hidden md:block">➔</div>
            <div className="text-center md:text-left space-y-1">
              <span className="text-amber-600 font-bold block">4. 24/7 BANGALORE NOC</span>
              <p className="text-slate-600">NetFlow Analysis • Sub-15m MTTR • Automated Alert Triaging</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Need a resilient enterprise network audit?</h3>
          <p className="text-sm text-slate-600">Our senior Cisco and Fortinet certified network architects in Bangalore are ready to assist.</p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-vayu-600 to-vayu-500 hover:from-vayu-700 hover:to-vayu-600 shadow-md hover:shadow-cyan-md transition-all"
          >
            <span>Request Network Architecture Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
