export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  href: string;
  icon: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  highlight: string;
}

export interface IndustryItem {
  name: string;
  desc: string;
  icon: string;
  stats: string;
  useCase: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metrics: string;
}

export const COMPANY_INFO = {
  name: "VAYU IT Solutions",
  legalName: "VAYU IT Solutions Private Limited",
  established: 2020,
  location: "Bangalore, India",
  address: "2F, 8, 16th Main Road, JC Nagar, Kurubarahalli, Bengaluru - 560086",
  phone: "+91 8031643179",
  email: "info@vayuitsolutions.com",
  supportEmail: "support@vayuitsolutions.com",
  businessHours: "Monday to Saturday 09:00 AM – 06:00 PM",
  supportAvailability: "24/7/365 NOC & SOC Global Operations",
  motto: "Transforming IT Infrastructure Through Innovation, Automation and Open Source Excellence.",
  heroHeadline: "Powering Business Through Intelligent IT Infrastructure",
  heroSubheadline: "Cloud. Security. Networking. Automation. Managed Services.",
  heroDescription: "VAYU IT Solutions empowers organizations with reliable, scalable, secure, and cost-effective infrastructure services leveraging modern technologies and disruptive open-source solutions.",
  googleMapsUrl: "https://maps.google.com/?q=2F,+8,+16th+Main+Road,+JC+Nagar,+Kurubarahalli,+Bengaluru+-+560086",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6186989441113!2d77.53428987484175!3d12.996226987321528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d84b2382ad9%3A0xe54df6fe03180bbf!2sKurubarahalli%2C%20Bengaluru%2C%20Karnataka%20560086!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "cloud",
    title: "Cloud Services & Modernization",
    shortDesc: "End-to-end cloud strategy, seamless migration, multi-cloud management, and FinOps cost optimization across AWS, Azure, and GCP.",
    description: "Accelerate your digital evolution with cloud architecture built for resilience, elastic scaling, and radical cost reduction. We architect, migrate, and operate hybrid and multi-cloud environments with automation-first principles.",
    href: "/services/cloud",
    icon: "Cloud",
    tags: ["AWS", "Azure", "GCP", "Kubernetes", "FinOps", "Migration"],
    metrics: [
      { label: "Cloud Spend Reduced", value: "35% - 50%" },
      { label: "Deployment Velocity", value: "4x Faster" },
    ],
    highlight: "Architected for zero downtime migrations and continuous cost governance."
  },
  {
    id: "networking",
    title: "Next-Gen Networking Services",
    shortDesc: "Enterprise SD-WAN, high-density wireless, campus LAN/WAN, and software-defined data center connectivity.",
    description: "Modern distributed enterprises require agile, high-throughput, and secure networking fabrics. From multi-branch SD-WAN to zero-loss data center fabrics, we ensure seamless global connectivity.",
    href: "/services/networking",
    icon: "Network",
    tags: ["SD-WAN", "Cisco", "Fortinet", "Data Center", "WiFi 6E", "Zero Trust"],
    metrics: [
      { label: "Bandwidth Efficiency", value: "+60%" },
      { label: "Network Uptime", value: "99.999%" },
    ],
    highlight: "Integrated SD-WAN with intelligent failover and proactive telemetry."
  },
  {
    id: "security",
    title: "Cyber Security & SOC Operations",
    shortDesc: "Proactive 24/7 SOC threat monitoring, SIEM/SOAR integration, vulnerability management, and regulatory compliance.",
    description: "Defend your digital perimeter with multi-layered Zero Trust security architectures. Our round-the-clock Security Operations Center proactively hunts threats, isolates anomalies, and enforces enterprise compliance.",
    href: "/services/security",
    icon: "ShieldAlert",
    tags: ["24/7 SOC", "SIEM/XDR", "VAPT", "Firewall", "Zero Trust", "ISO 27001"],
    metrics: [
      { label: "Threat Detection MTTD", value: "< 3 mins" },
      { label: "Compliance Coverage", value: "100%" },
    ],
    highlight: "AI-driven threat intelligence backed by certified security engineers."
  },
  {
    id: "automation",
    title: "Infrastructure Automation & IaC",
    shortDesc: "Eliminate repetitive toil with Infrastructure as Code (Terraform, Ansible), CI/CD pipelines, and Python/PowerShell automation.",
    description: "Transform manual operational bottlenecks into repeatable, audited, self-healing code. We automate configuration drift remediation, provisioning, patch pipelines, and ITSM workflows.",
    href: "/services/automation",
    icon: "Cpu",
    tags: ["Terraform", "Ansible", "Python", "GitOps", "CI/CD", "Self-Healing"],
    metrics: [
      { label: "Manual Effort Cut", value: "80%" },
      { label: "Configuration Drift", value: "Zero" },
    ],
    highlight: "Complete Infrastructure as Code transformation with GitOps guardrails."
  },
  {
    id: "endpoint-management",
    title: "Endpoint Management & Digital Workplace",
    shortDesc: "Centralized MDM, automated zero-day patch distribution, remote assistance, and workforce productivity engineering.",
    description: "Empower hybrid and distributed workforces with seamless device provisioning, unified endpoint management (UEM), proactive health telemetry, and airtight endpoint security.",
    href: "/services/endpoint-management",
    icon: "Laptop",
    tags: ["MDM / Intune", "Patch Automation", "Asset Lifecycle", "VDI", "Remote Ops"],
    metrics: [
      { label: "Patch Compliance Rate", value: "99.8%" },
      { label: "First-Call Resolution", value: "92%" },
    ],
    highlight: "Zero-touch onboarding and compliance across Windows, macOS, and Linux fleets."
  },
  {
    id: "managed-services",
    title: "24x7 Managed Infrastructure & NOC",
    shortDesc: "Continuous L1-L3 infrastructure monitoring, automated incident triage, SLA-backed remediation, and capacity planning.",
    description: "Enterprise IT reliability without the overhead of building an in-house round-the-clock operations team. Our Bangalore-based NOC monitors compute, storage, virtualization, and network health 24/7/365.",
    href: "/services/managed-services",
    icon: "Activity",
    tags: ["24/7 NOC", "L1-L3 Support", "ITIL Certified", "SLA Guarantees", "Disaster Recovery"],
    metrics: [
      { label: "SLA Adherence", value: "99.98%" },
      { label: "Avg Response Time", value: "< 15 mins" },
    ],
    highlight: "Predictive anomaly detection preventing outages before business impact."
  }
];

export const COMPANY_HIGHLIGHTS = [
  { value: "2020", label: "Established In", sub: "Bangalore Tech Hub", icon: "Calendar" },
  { value: "24/7/365", label: "Operations Support", sub: "Bangalore NOC & SOC", icon: "Clock" },
  { value: "99.99%", label: "SLA Guaranteed", sub: "Enterprise High Availability", icon: "ShieldCheck" },
  { value: "40%+", label: "Avg. Cost Saved", sub: "Via Open-Source & IaC", icon: "TrendingDown" },
  { value: "150+", label: "Workloads Deployed", sub: "Across Multi-Cloud & On-Prem", icon: "Server" },
  { value: "< 15m", label: "Incident MTTR", sub: "Rapid Engineering Response", icon: "Zap" },
];

export const WHY_CHOOSE_US = [
  {
    id: "cost-opt",
    title: "Cost Optimization",
    desc: "Radically cut licensing and operational overhead by leveraging battle-tested open-source alternatives, automated resource rightsizing, and FinOps.",
    icon: "BadgePercent",
    stat: "Up to 50% TCO Savings",
    detail: "We replace costly proprietary vendor locks with hardened enterprise Linux, Kubernetes, Ansible, and automated cloud scheduling."
  },
  {
    id: "infra-excel",
    title: "Infrastructure Excellence",
    desc: "Rigorous ITIL-aligned processes and enterprise architecture standards ensure zero unplanned downtime and peak performance.",
    icon: "Server",
    stat: "99.99% Availability",
    detail: "Every implementation follows strict security baselines, high availability clustering, and automated multi-region backup topologies."
  },
  {
    id: "automation-first",
    title: "Automation-First Strategy",
    desc: "If a task is performed more than once, we automate it. Infrastructure as Code, CI/CD, and self-healing systems eliminate manual errors.",
    icon: "Cpu",
    stat: "80% Less Repetitive Work",
    detail: "Terraform, Ansible, and custom Python/PowerShell bots eliminate human error from deployments and patching."
  },
  {
    id: "security-driven",
    title: "Security-Driven Governance",
    desc: "Security is embedded into every layer from network edge to endpoint. Continuous vulnerability scanning and 24/7 SOC vigil.",
    icon: "Lock",
    stat: "Zero Trust Architecture",
    detail: "Full alignment with ISO 27001, SOC 2, and regulatory mandates with encrypted communications and strict RBAC."
  },
  {
    id: "modern-managed",
    title: "Modern Managed Services",
    desc: "Proactive, telemetry-backed operational support rather than reactive ticket pushing. Real-time observability and SLA transparency.",
    icon: "Activity",
    stat: "Sub-15 Min Response",
    detail: "Dedicated engineers stationed in Bangalore monitor alerts, execute remediations, and deliver monthly executive reviews."
  },
  {
    id: "digital-trans",
    title: "Digital Transformation",
    desc: "Future-proof legacy monolithic systems into agile, containerized, cloud-native environments designed for rapid innovation.",
    icon: "Rocket",
    stat: "3x Faster Time-to-Market",
    detail: "Accelerate your product release cycles with GitOps, containerized microservices, and elastic cloud scaling."
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    name: "Manufacturing & Industrial",
    desc: "Secure OT/IT convergence, plant-floor IoT connectivity, high-availability SCADA networks, and predictive maintenance infrastructure.",
    icon: "Factory",
    stats: "99.999% Plant Uptime",
    useCase: "Zero-latency campus wireless and edge compute clusters across smart manufacturing floors."
  },
  {
    name: "Healthcare & Life Sciences",
    desc: "HIPAA-compliant cloud storage, telemedicine networking fabrics, PACS imaging high-speed delivery, and clinical endpoint security.",
    icon: "HeartPulse",
    stats: "100% HIPAA Compliance",
    useCase: "Encrypted patient telemetry infrastructure and instantaneous multi-hospital data synchronization."
  },
  {
    name: "Banking & FinTech",
    desc: "Ultra-low latency transactional networks, PCI-DSS compliant cloud enclaves, automated audit trails, and anti-DDoS perimeter defenses.",
    icon: "Landmark",
    stats: "Sub-millisecond Latency",
    useCase: "Air-gapped disaster recovery sites and cryptographic hardware security module (HSM) integrations."
  },
  {
    name: "Retail & E-Commerce",
    desc: "Elastic auto-scaling cloud clusters for holiday traffic surges, POS endpoint management, and resilient multi-store SD-WAN connectivity.",
    icon: "ShoppingBag",
    stats: "10x Peak Surge Handling",
    useCase: "Multi-cloud Kubernetes clusters with automated traffic failover between AWS and Azure."
  },
  {
    name: "Education & EdTech",
    desc: "Scalable virtual learning environments, campus-wide WiFi 6 infrastructures, high-concurrency exam platforms, and LMS cloud hosting.",
    icon: "GraduationCap",
    stats: "50,000+ Concurrent Students",
    useCase: "Hybrid cloud architecture enabling seamless on-demand scaling during examination periods."
  },
  {
    name: "Logistics & Supply Chain",
    desc: "Real-time fleet telemetry tracking, warehouse automated edge compute, ruggedized device MDM, and 24/7 cross-border connectivity.",
    icon: "Truck",
    stats: "24/7 Continuous Route Ops",
    useCase: "Resilient SD-WAN connecting 45+ distribution hubs with automated satellite backup."
  },
  {
    name: "Software & Technology",
    desc: "Developer-first cloud environments, automated staging/production CI/CD pipelines, Kubernetes cluster operations, and FinOps audits.",
    icon: "Code2",
    stats: "70% Faster Release Cycles",
    useCase: "GitOps deployment pipelines with automated security policy scanning."
  },
  {
    name: "High-Growth Startups",
    desc: "Cost-optimized seed-to-scale infrastructure, cloud credits stewardship, secure developer endpoints, and rapid cloud architecture setup.",
    icon: "Flame",
    stats: "50% Cloud Bill Optimization",
    useCase: "Open-source Kubernetes and PostgreSQL architectures displacing costly proprietary managed SaaS."
  }
];

export const CUSTOMER_JOURNEY = [
  {
    step: "01",
    phase: "Assessment & Audit",
    title: "Deep-Dive Infrastructure Assessment",
    desc: "We analyze your existing topology, identify bottlenecks, discover security vulnerabilities, and uncover license wastage to establish a baseline.",
    deliverable: "Comprehensive Architecture Audit & Cost Optimization Blueprint",
    timeline: "Week 1 - 2"
  },
  {
    step: "02",
    phase: "Architecture & Design",
    title: "Custom Solution Architecture",
    desc: "Our senior architects design a resilient, secure target state leveraging open-source technologies, multi-cloud platforms, and automated pipelines.",
    deliverable: "Target Architecture Blueprints, Security Plan & Migration Matrix",
    timeline: "Week 3 - 4"
  },
  {
    step: "03",
    phase: "Implementation & Migration",
    title: "Zero-Downtime Deployment",
    desc: "We execute Infrastructure as Code provisioning, network cutovers, and data migration using blue-green and canary strategies without impacting business operations.",
    deliverable: "Production Ready Environment with Automated CI/CD & IaC Repos",
    timeline: "Week 5 - 8"
  },
  {
    step: "04",
    phase: "Optimization & Governance",
    title: "FinOps & Performance Tuning",
    desc: "Post-launch, we fine-tune compute allocation, database caching, network routing, and automated scaling policies to maximize efficiency.",
    deliverable: "Performance Benchmarks & Initial 30-Day Cost Reduction Report",
    timeline: "Ongoing Month 1"
  },
  {
    step: "05",
    phase: "Continuous Management",
    title: "24/7 Proactive Managed Operations",
    desc: "Our Bangalore NOC & SOC takes full charge of 24/7 monitoring, patch cycles, incident triage, disaster recovery drills, and continuous evolution.",
    deliverable: "Monthly Executive SLA Reports, 24/7 On-Call Support & Quarterly Roadmaps",
    timeline: "Continuous Partnership"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "VAYU IT Solutions reduced our multi-cloud AWS and Azure monthly spend by 44% within 90 days by migrating proprietary databases to enterprise open-source clusters and automating idle resources.",
    author: "Rajeshwar Rao",
    role: "Chief Technology Officer",
    company: "Apex Global Logistics",
    industry: "Supply Chain & Logistics",
    metrics: "44% Cloud Cost Cut"
  },
  {
    quote: "Their 24/7 Bangalore NOC team is phenomenal. When our primary core switch encountered an ISP fiber cut at 2:00 AM, VAYU's automated SD-WAN switched seamlessly with zero dropped calls across 18 regional branches.",
    author: "Ananya Deshmukh",
    role: "VP of Information Technology",
    company: "HealthFirst Diagnostics",
    industry: "Healthcare",
    metrics: "99.999% Network Uptime"
  },
  {
    quote: "As a fast-growing FinTech, regulatory compliance and zero-day threat defense were keeping us awake at night. VAYU implemented a complete SOC 2 and ISO 27001 aligned Zero Trust framework with 24/7 SOC surveillance.",
    author: "Siddharth Verma",
    role: "Chief Information Security Officer",
    company: "Kredent Pay Technologies",
    industry: "Banking & FinTech",
    metrics: "100% Audit Compliance"
  },
  {
    quote: "Moving to Infrastructure as Code with VAYU transformed our engineering agility. What used to take our sysadmins 3 weeks to provision now deploys automatically via Terraform in under 12 minutes.",
    author: "Pooja Krishnan",
    role: "Director of Engineering",
    company: "NexScale Cloud Systems",
    industry: "SaaS & Technology",
    metrics: "98% Faster Provisioning"
  }
];

export const TECH_PARTNERS = [
  { name: "Amazon Web Services", category: "Cloud Infrastructure", icon: "Cloud", badge: "Advanced Consulting Partner" },
  { name: "Microsoft Azure", category: "Cloud & Enterprise", icon: "Boxes", badge: "Cloud Solutions Partner" },
  { name: "Google Cloud", category: "Cloud Platform", icon: "Cpu", badge: "Premier Partner" },
  { name: "VMware", category: "Virtualization & Cloud", icon: "Server", badge: "Enterprise Specialist" },
  { name: "Cisco", category: "Networking & Security", icon: "Network", badge: "Premier Integrator" },
  { name: "Fortinet", category: "Cybersecurity & SD-WAN", icon: "Shield", badge: "Authorized Security Expert" },
  { name: "Sophos", category: "Endpoint & XDR", icon: "ShieldCheck", badge: "Gold Partner" },
  { name: "Red Hat", category: "Enterprise Linux & Ansible", icon: "Terminal", badge: "Open Source Specialist" },
  { name: "Linux Foundation", category: "Open Source Standards", icon: "Globe", badge: "Corporate Supporter" },
  { name: "HashiCorp Terraform", category: "Infrastructure as Code", icon: "Layers", badge: "IaC Certified Partner" },
  { name: "Kubernetes", category: "Container Orchestration", icon: "Workflow", badge: "Cloud Native Partner" },
  { name: "Ansible", category: "Configuration Automation", icon: "Cog", badge: "Automation Architect" },
];

export const CORE_VALUES = [
  {
    name: "Innovation",
    desc: "Constantly championing disruptive open-source tooling, modern cloud architectures, and automated intelligence to outpace conventional vendor lock-in.",
    icon: "Lightbulb"
  },
  {
    name: "Integrity",
    desc: "Uncompromising honesty and transparency in our recommendations, pricing, SLA reporting, and security practices.",
    icon: "ShieldCheck"
  },
  {
    name: "Customer Success",
    desc: "We measure our accomplishment strictly by our clients' bottom-line cost savings, operational reliability, and accelerated business growth.",
    icon: "Trophy"
  },
  {
    name: "Security",
    desc: "Security is non-negotiable. Every line of code, network packet, and server configuration is engineered under Zero Trust paradigms.",
    icon: "Lock"
  },
  {
    name: "Excellence",
    desc: "Pursuing engineering mastery in every deployment, adhering to ITIL standards, and delivering flawless execution every single day.",
    icon: "Award"
  },
  {
    name: "Reliability",
    desc: "Dependable 24/7/365 infrastructure vigil. When systems matter most, VAYU's Bangalore command center is always on guard.",
    icon: "CheckCircle"
  }
];

export const COMPANY_JOURNEY_MILESTONES = [
  {
    year: "2020",
    quarter: "Q1",
    title: "Foundation in Bangalore",
    desc: "VAYU IT Solutions was incorporated in Bangalore with an ambitious mission: delivering enterprise-grade infrastructure managed services at affordable rates through open-source innovation and automation.",
    stats: "5 Founding Engineers • 1st Data Center Client"
  },
  {
    year: "2021",
    quarter: "Q3",
    title: "Launch of 24/7 Bangalore NOC",
    desc: "Established our dedicated 24/7 Network Operations Center (NOC) in Kurubarahalli, Bengaluru, servicing multi-branch retail and manufacturing networks with sub-15 minute response times.",
    stats: "24/7 NOC Live • 25+ Enterprise Networks"
  },
  {
    year: "2022",
    quarter: "Q2",
    title: "Multi-Cloud & FinOps Practice",
    desc: "Expanded into comprehensive cloud transformation, launching specialized AWS, Azure, and Kubernetes migration practices, saving clients over 40% on cloud licensing.",
    stats: "AWS & Azure Certified • $1.2M+ Cloud Spend Optimized"
  },
  {
    year: "2023",
    quarter: "Q4",
    title: "Advanced SOC & Zero Trust Integration",
    desc: "Inaugurated our dedicated Cyber Security Operations Center (SOC) offering AI-driven threat intelligence, SIEM/SOAR automation, and regulatory compliance advisory.",
    stats: "SOC Operations Active • ISO 27001 Aligned"
  },
  {
    year: "2024",
    quarter: "Q2",
    title: "Automation-First IaC Frameworks",
    desc: "Standardized proprietary open-source automation modules using Ansible, Terraform, and Python, enabling clients to provision self-healing hybrid architectures in minutes.",
    stats: "80% Provisioning Time Cut • 100+ Enterprise Clients"
  },
  {
    year: "2025 - 2026",
    quarter: "Current",
    title: "Next-Gen AI-Driven Infrastructure Operations",
    desc: "Pioneering AIOps for predictive telemetry, automated fault isolation, and autonomous cloud optimization, expanding our footprint across global enterprises.",
    stats: "150+ Enterprise Deployments • 99.99% Guaranteed SLA"
  }
];

export const BLOG_POSTS = [
  {
    slug: "slashing-cloud-costs-with-open-source-finops",
    title: "Slashing Enterprise Cloud Spend by 40%: The Open-Source FinOps Playbook",
    excerpt: "How forward-thinking enterprises are breaking free from vendor lock-in by pairing modern open-source tooling with automated FinOps governance across AWS and Azure.",
    date: "February 12, 2026",
    readTime: "6 min read",
    category: "Cloud",
    tags: ["FinOps", "Open Source", "AWS", "Azure", "Cost Optimization"],
    author: {
      name: "Arun Kumar",
      role: "Lead Cloud Architect, VAYU IT Solutions",
      avatar: "/images/authors/arun.jpg"
    },
    featured: true,
    content: `
      <h2>The Crisis of Modern Cloud Overspending</h2>
      <p>As enterprise cloud adoption matures, CIOs and CFOs are facing an alarming reality: unmanaged cloud sprawl and escalating proprietary licensing costs are outpacing revenue growth. At VAYU IT Solutions, our audits consistently reveal that 35% to 45% of enterprise cloud spend is wasted on idle resources, over-provisioned instance classes, and expensive proprietary database licenses that have robust open-source alternatives.</p>
      
      <h3>1. Replacing Proprietary Database Licences with Hardened PostgreSQL</h3>
      <p>Proprietary enterprise database licenses can cost hundreds of thousands of dollars annually. By migrating non-core and analytical workloads to Kubernetes-managed, highly-available PostgreSQL clusters with Patroni and pgBouncer, organizations immediately eliminate recurring license fees while retaining enterprise-grade ACID compliance, replication, and point-in-time recovery.</p>

      <h3>2. Automated Resource Scheduling via Infrastructure as Code</h3>
      <p>Development, staging, and QA environments rarely need to run 24 hours a day, 7 days a week. We implement automated event-driven serverless schedulers that scale non-production environments to zero during off-business hours and weekends. This simple automation alone cuts compute expenses by up to 65% for non-production environments.</p>

      <h3>3. Spot and Graviton / ARM Architecture Adoption</h3>
      <p>Migrating containerized workloads to ARM-based processors (like AWS Graviton or Azure Ampere) yields a 20% to 40% price-performance improvement with minimal code changes. Pairing this with intelligent Spot instance orchestration for batch and asynchronous processing delivers dramatic bottom-line cost reduction.</p>

      <h3>Conclusion: Agility Without the Financial Hangover</h3>
      <p>Cloud modernization should liberate your business, not weigh it down with vendor extortion. With deliberate open-source architecture and continuous FinOps surveillance, enterprises can maximize cloud speed without ballooning budgets.</p>
    `
  },
  {
    slug: "zero-trust-architecture-network-security-2026",
    title: "Implementing Practical Zero Trust in Distributed Enterprise Networks",
    excerpt: "Moving beyond perimeter security: A step-by-step framework to enforce micro-segmentation, continuous identity verification, and least-privilege access.",
    date: "January 28, 2026",
    readTime: "8 min read",
    category: "Cyber Security",
    tags: ["Zero Trust", "Network Security", "SD-WAN", "SOC", "Firewall"],
    author: {
      name: "Meera Krishnan",
      role: "Head of Cybersecurity & SOC, VAYU IT Solutions",
      avatar: "/images/authors/meera.jpg"
    },
    featured: false,
    content: `
      <h2>The Death of the Traditional Network Perimeter</h2>
      <p>The old castle-and-moat security model is fundamentally broken. In an era where employees connect from home, branch offices, and coffee shops while data resides in multi-cloud enclaves, the assumption that internal traffic is inherently trustworthy is the single greatest vulnerability an enterprise can harbor.</p>

      <h3>The Three Pillars of Modern Zero Trust</h3>
      <ul>
        <li><strong>Explicit Verification:</strong> Authenticate and authorize based on all available data points including identity, location, device health, and telemetry signals.</li>
        <li><strong>Least Privilege Access:</strong> Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA) risk-based adaptive policies.</li>
        <li><strong>Assume Breach:</strong> Minimize blast radius through network micro-segmentation, end-to-end encryption, and continuous automated threat hunting.</li>
      </ul>

      <h3>Micro-segmentation with Next-Gen Firewalls and SD-WAN</h3>
      <p>By enforcing micro-segmentation policies at the network access layer, compromised endpoints cannot traverse laterally across the enterprise subnet. Even if a phishing exploit compromises a workstation, the blast radius is strictly isolated from core production databases and ERP backbones.</p>
    `
  },
  {
    slug: "mastering-infrastructure-as-code-with-terraform-and-ansible",
    title: "Mastering Hybrid Infrastructure as Code: Terraform Meets Ansible",
    excerpt: "How to harmoniously orchestrate multi-cloud infrastructure provisioning and operating system configuration management without state drift.",
    date: "January 15, 2026",
    readTime: "7 min read",
    category: "Automation",
    tags: ["Terraform", "Ansible", "IaC", "DevOps", "Python"],
    author: {
      name: "Sandeep Nair",
      role: "Principal Automation Engineer, VAYU IT Solutions",
      avatar: "/images/authors/sandeep.jpg"
    },
    featured: false,
    content: `
      <h2>The Clean Separation of Concerns</h2>
      <p>One of the most common pitfalls in enterprise infrastructure automation is using a single tool for everything. Terraform excels at declarative cloud infrastructure provisioning (VPCs, subnets, route tables, compute instances, IAM roles). Ansible excels at procedural operating system configuration management (package installation, hardening, template rendering, service management).</p>

      <h3>Automating the Handoff</h3>
      <p>By combining Terraform cloud outputs with dynamic Ansible inventories, our engineering team eliminates all manual IP addressing and SSH key distribution. A single Git pull request can spin up an entirely isolated testing enclave, execute compliance tests, and tear it down automatically upon PR merge.</p>
    `
  },
  {
    slug: "building-resilient-enterprise-sd-wan",
    title: "Building Resilient Enterprise SD-WAN for 50+ Multi-Branch Operations",
    excerpt: "How software-defined WAN reduces MPLS costs by 60% while dramatically improving application performance and uptime.",
    date: "December 20, 2025",
    readTime: "5 min read",
    category: "Networking",
    tags: ["SD-WAN", "Networking", "Cisco", "Fortinet", "MPLS"],
    author: {
      name: "Rohan Shenoy",
      role: "Lead Network Infrastructure Specialist, VAYU IT Solutions",
      avatar: "/images/authors/rohan.jpg"
    },
    featured: false,
    content: `
      <h2>Why Legacy MPLS Is Holding Enterprises Back</h2>
      <p>Traditional leased-line MPLS connections are notoriously expensive, slow to provision, and inflexible for cloud-first SaaS workloads. When branch employees access Microsoft 365 or Salesforce, backhauling traffic through a central corporate data center introduces massive latency and user frustration.</p>

      <h3>Intelligent Dynamic Path Steering</h3>
      <p>SD-WAN dynamically inspects packet performance (jitter, packet loss, latency) across multiple commercial broadband and fiber links in real-time, steering latency-sensitive VoIP and video traffic along the healthiest link while routing bulk backups over secondary circuits.</p>
    `
  },
  {
    slug: "why-open-source-is-the-future-of-enterprise-it-infrastructure",
    title: "Why Open Source Is the True Foundation of Enterprise IT Infrastructure",
    excerpt: "From Linux kernels to Kubernetes and OpenTelemetry: how open source drives higher reliability, greater transparency, and zero vendor lock-in.",
    date: "November 14, 2025",
    readTime: "6 min read",
    category: "Open Source",
    tags: ["Open Source", "Linux", "Kubernetes", "Enterprise IT", "Strategy"],
    author: {
      name: "Arun Kumar",
      role: "Lead Cloud Architect, VAYU IT Solutions",
      avatar: "/images/authors/arun.jpg"
    },
    featured: false,
    content: `
      <h2>The Shift From Vendor Dependency to Code Sovereignty</h2>
      <p>The greatest software innovations of the past twenty years—from Linux and Kubernetes to Prometheus, Grafana, and PostgreSQL—originated and flourished in the open-source ecosystem. Proprietary vendors wrap these same open-source foundations in proprietary interfaces and charge exorbitant annual premiums.</p>

      <p>At VAYU IT Solutions, our foundational philosophy is simple: we help enterprises harness battle-tested open-source software, back it with rigorous enterprise SLAs and 24/7 engineering support, and return control of the technology roadmap to where it belongs: inside the enterprise.</p>
    `
  },
  {
    slug: "automated-endpoint-patching-zero-trust-workforce",
    title: "Eliminating Patch Fatigue: Automated Endpoint Management for Hybrid Workforces",
    excerpt: "How automated zero-touch patch compliance across Windows, macOS, and Linux endpoints prevents 85% of ransomware exploits.",
    date: "October 30, 2025",
    readTime: "5 min read",
    category: "Endpoint Management",
    tags: ["Endpoint", "MDM", "Patch Management", "Security", "Workplace"],
    author: {
      name: "Meera Krishnan",
      role: "Head of Cybersecurity & SOC, VAYU IT Solutions",
      avatar: "/images/authors/meera.jpg"
    },
    featured: false,
    content: `
      <h2>The Critical Gap Between Vulnerability Disclosure and Patch Deployment</h2>
      <p>Over 80% of successful cyberattacks exploit known vulnerabilities for which a security patch had already been available for more than 30 days. The problem isn't the availability of patches; it's the operational complexity of testing and rolling them out across a dispersed remote workforce.</p>

      <p>Through ring-based automated deployment and automated rollback telemetry, VAYU IT Solutions achieves 99.8% patch compliance within 72 hours of critical CVE releases without disrupting user productivity.</p>
    `
  }
];
