# VAYU IT Solutions — Corporate Enterprise Website

![VAYU IT Solutions Logo](public/vayu_logo.png)

> **"Transforming IT Infrastructure Through Innovation, Automation and Open Source Excellence."**

---

## 🚀 Overview

**VAYU IT Solutions** is a specialized Infrastructure Managed Services provider established in 2020 in Bangalore, India. This repository contains the official enterprise corporate website built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, engineered with a high-contrast corporate light theme derived directly from the official VAYU brand logo.

---

## ✨ Features & Architecture

- **Domain-Specific Interactive Hero Section**: Dynamic, animated infrastructure topologies for Cloud Architecture, 24/7 SOC Radar, Enterprise SD-WAN, IaC GitOps Pipelines, and Managed NOC Racks.
- **Brand Identity System**: Strict adherence to the VAYU logo palette featuring Electric Sky Cyan (`#0284c7`, `#00c2ff`) and Dark Slate Gunmetal (`#1e293b`, `#334155`) on crisp corporate white surfaces.
- **Enterprise Services Directory**:
  - `/services/cloud` — Multi-Cloud, AWS, Azure, Hybrid Cloud & FinOps Cost Governance.
  - `/services/networking` — Enterprise SD-WAN, LAN/WAN, WiFi 6E & Data Center Fabrics.
  - `/services/security` — 24/7 Bangalore SOC, SIEM/SOAR, VAPT & Zero Trust.
  - `/services/automation` — Infrastructure as Code (Terraform, Ansible, Python & AIOps).
  - `/services/endpoint-management` — Intune MDM, Zero-Touch Patching & Remote Desk.
  - `/services/managed-services` — 24/7/365 Bangalore NOC, ITIL Desk & SLA Guarantees.
- **Interactive FinOps Cost Calculator**: Dynamic ROI estimator projecting enterprise TCO savings (35% to 50%) with multi-currency support (INR ₹ & USD $).
- **Interactive Global Topology Map**: Real-time multi-cloud connectivity simulation across global nodes with latency indicators.
- **Technical Insights Blog**: Pre-rendered SSG architecture playbooks with search and category filters.
- **Bangalore Headquarters Contact Hub**: Direct consultation booking, interactive Google Maps, and 24/7 NOC emergency hotlines.
- **Docker-Ready**: Optimized multi-stage Docker build with standalone output (`~120MB` production container).

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Keyframe Radars, Particle Meshes, Canvas Telemetry & Custom Precision Cursor
- **Containerization**: Docker (Node.js 22 Alpine Multi-Stage) & Docker Compose

---

## ⚡ Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🐳 Docker Deployment

To build and run the production container with Docker Compose:

```bash
docker compose up -d --build
```

For the comprehensive deployment guide covering Nginx reverse proxy, SSL, and AWS/Azure/GCP cloud containers, see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## 🏢 Company Information

- **Company Name**: VAYU IT Solutions
- **Established**: 2020
- **Location**: Bangalore, India
- **Office Address**: 2F, 8, 16th Main Road, JC Nagar, Kurubarahalli, Bengaluru - 560086
- **Phone**: +91 8031643179
- **Email**: info@vayuitsolutions.com
- **Business Hours**: Monday to Saturday 09:00 AM – 06:00 PM (24/7 NOC/SOC On-Call)

---

## 📄 License

Copyright © 2020 - 2026 VAYU IT Solutions. All rights reserved.
