# VAYU IT Solutions — Enterprise Docker Deployment Guide

This guide provides end-to-end instructions for containerizing, building, and deploying the **VAYU IT Solutions** website using Docker, Docker Compose, and modern cloud container platforms.

---

## 📋 Table of Contents
1. [Architecture & Container Optimization](#1-architecture--container-optimization)
2. [Prerequisites](#2-prerequisites)
3. [Quick Start with Docker Compose](#3-quick-start-with-docker-compose)
4. [Manual Docker CLI Deployment](#4-manual-docker-cli-deployment)
5. [Environment Variables](#5-environment-variables)
6. [Production Reverse Proxy with Nginx & SSL](#6-production-reverse-proxy-with-nginx--ssl)
7. [Cloud Deployment Options](#7-cloud-deployment-options)
   - [AWS (ECS / App Runner)](#aws-ecs--app-runner)
   - [Azure Container Apps (ACA)](#azure-container-apps)
   - [Google Cloud Run](#google-cloud-run)
8. [Automated CI/CD with GitHub Actions](#8-automated-cicd-with-github-actions)
9. [Operational Monitoring & Maintenance](#9-operational-monitoring--maintenance)

---

## 1. Architecture & Container Optimization

The container setup uses a **4-stage multi-stage Docker build** based on `node:22-alpine`:
- **Stage 1 (base)**: Minimal Alpine environment with `libc6-compat`.
- **Stage 2 (deps)**: Caches `node_modules` strictly from `package-lock.json` using `npm ci`.
- **Stage 3 (builder)**: Compiles the Next.js application in **standalone mode** (`output: 'standalone'`).
- **Stage 4 (runner)**: Production image running an unprivileged system user (`nextjs:nodejs`), copying only necessary standalone runtime assets (`~120 MB` image size instead of `~1.2 GB`).

---

## 2. Prerequisites

Ensure the target deployment machine or server has:
- **Docker Engine** (v20.10.0 or higher)
- **Docker Compose** (v2.0.0 or higher)
- Port `3000` (or `80`/`443` if using a reverse proxy) open in the firewall / security groups.

Verify your local installation:
```bash
docker --version
docker compose version
```

---

## 3. Quick Start with Docker Compose

The simplest way to deploy the application in production:

### Step 1: Clone the Repository
```bash
git clone https://github.com/pakkiraja/vayu-it-solutions.git
cd vayu-it-solutions
```

### Step 2: Build and Start Container
```bash
docker compose up -d --build
```

### Step 3: Verify Container Health
```bash
docker compose ps
docker compose logs -f vayu-web
```

The website is now running at **http://localhost:3000**.

### Stop the Container
```bash
docker compose down
```

---

## 4. Manual Docker CLI Deployment

If you prefer building and managing raw Docker containers without Compose:

### Step 1: Build the Docker Image
```bash
docker build -t vayu-it-solutions:latest .
```

### Step 2: Run the Production Container
```bash
docker run -d \
  --name vayu-web \
  --restart unless-stopped \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e PORT=3000 \
  vayu-it-solutions:latest
```

### Step 3: Inspect Container Status
```bash
# View active container
docker ps

# Follow container runtime logs
docker logs -f vayu-web

# Inspect resource utilization (CPU / RAM)
docker stats vayu-web
```

### Step 4: Stop or Remove Container
```bash
docker stop vayu-web
docker rm vayu-web
```

---

## 5. Environment Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Production optimization flag |
| `PORT` | `3000` | Application server listening port |
| `HOSTNAME` | `0.0.0.0` | Bind host address for container traffic |
| `NEXT_TELEMETRY_DISABLED` | `1` | Disables anonymous Next.js telemetry collection |

---

## 6. Production Reverse Proxy with Nginx & SSL

For enterprise production deployments, route traffic through **Nginx** with TLS 1.3 / Let's Encrypt certificates.

### Nginx Virtual Host Configuration (`/etc/nginx/sites-available/vayuitsolutions.com`)

```nginx
server {
    listen 80;
    server_name vayuitsolutions.com www.vayuitsolutions.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name vayuitsolutions.com www.vayuitsolutions.com;

    ssl_certificate /etc/letsencrypt/live/vayuitsolutions.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vayuitsolutions.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Static assets caching
    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_cache_valid 200 30d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

---

## 7. Cloud Deployment Options

### AWS (ECS / App Runner)
1. **Authenticate to Amazon ECR**:
   ```bash
   aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin <AWS_ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com
   ```
2. **Tag and Push Image**:
   ```bash
   docker tag vayu-it-solutions:latest <AWS_ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/vayu-web:latest
   docker push <AWS_ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/vayu-web:latest
   ```
3. Deploy to **AWS App Runner** or an **ECS Fargate** cluster with container port `3000`.

### Azure Container Apps
1. **Push to Azure Container Registry (ACR)**:
   ```bash
   az acr login --name vayuacr
   docker tag vayu-it-solutions:latest vayuacr.azurecr.io/vayu-web:latest
   docker push vayuacr.azurecr.io/vayu-web:latest
   ```
2. **Deploy to Azure Container App**:
   ```bash
   az containerapp create \
     --name vayu-web \
     --resource-group rg-vayu-prod \
     --environment vayu-env \
     --image vayuacr.azurecr.io/vayu-web:latest \
     --target-port 3000 \
     --ingress external
   ```

### Google Cloud Run
```bash
gcloud builds submit --tag gcr.io/<PROJECT_ID>/vayu-web
gcloud run deploy vayu-web \
  --image gcr.io/<PROJECT_ID>/vayu-web \
  --platform managed \
  --region asia-south1 \
  --allow-unauthenticated \
  --port 3000
```

---

## 8. Automated CI/CD with GitHub Actions

Create `.github/workflows/docker-publish.yml` to automatically build and push Docker images on commit to `main`:

```yaml
name: Build & Push Docker Image

on:
  push:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and Push Docker Image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ghcr.io/${{ github.repository }}:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

---

## 9. Operational Monitoring & Maintenance

- **Healthcheck probe**: The container includes an automatic HTTP health probe checking `http://127.0.0.1:3000/` every 30 seconds.
- **Graceful Shutdown**: The Node.js standalone server handles `SIGINT` and `SIGTERM` signals for clean connection draining.
- **Log Aggregation**: Standard output is formatted in JSON/plain log format, compatible with Datadog, AWS CloudWatch, and Grafana Loki.

---

**VAYU IT Solutions** • Infrastructure Managed Services  
Bangalore, India • [https://vayuitsolutions.com](https://vayuitsolutions.com)
