# Syntax: docker/dockerfile:1
# Multi-stage production build for VAYU IT Solutions Next.js Application

# ================================
# Stage 1: Base Alpine Environment
# ================================
FROM node:22-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

# ================================
# Stage 2: Install Dependencies
# ================================
FROM base AS deps

COPY package.json package-lock.json* ./
RUN npm ci

# ================================
# Stage 3: Build the Application
# ================================
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set Next.js telemetry to disabled
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ================================
# Stage 4: Production Runner
# ================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create a non-root system user and group for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy static assets and standalone server output
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

# Next.js standalone entrypoint
CMD ["node", "server.js"]
