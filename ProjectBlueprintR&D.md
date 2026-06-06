# Project Blueprint & R&D — AI-Assisted Skincare Clinic

## Executive Summary

This document outlines the MVP plan, cost-optimized AWS architecture, Vision LLM orchestration, and critical implementation safeguards for an AI-assisted skincare clinic system. The target is a production-ready, type-safe application that can support ~500 patient sessions/month while keeping operational costs under $22–$25/month.

---

## 1. Executive Project Framework

- **Project scope:** AI-Assisted Skincare Clinic System (MVP).
- **Commercial parameters:** $1,200 fixed-price delivery within an 8-week implementation timeline.
- **Core target:** Production-ready, type-safe app handling ~500 sessions/month on a live AWS environment with operational costs targeted at $20–$25/month.

---

## 2. Optimized Cloud Infrastructure Architecture (Under $22/mo)

To avoid typical enterprise AWS costs (~$125–$145/mo), the infrastructure is re-engineered to minimize managed-service premiums while preserving production performance.

Architecture (flow):

CloudFront Global CDN → ECS Fargate (0.25 vCPU container) → AWS Lambda (headless Puppeteer worker)

RDS PostgreSQL (single db.t4g.micro instance hosting separate `skincare_prod` and `skincare_staging` databases)

### Infrastructure cost breakdown

| Component | Est. Monthly Cost | Notes |
|---|---:|---|
| Compute (ECS Fargate) | ~$5.00 | Production container: 0.25 vCPU, 0.5 GB RAM (Graviton). Staging via App Runner or scaled-to-zero task. |
| Database (RDS PostgreSQL) | ~$11.50 | Single db.t4g.micro instance, two DBs (`skincare_prod`, `skincare_staging`). |
| Networking (CloudFront) | $0.00 | CloudFront handles HTTPS and routing; removes need for ALB ($18/mo). |
| Storage & CDN (S3 + CloudFront) | ~$4.00 | Patient photos and generated reports; use signed URLs for privacy. |
| Configuration (SSM Parameter Store) | $0.00 | Use SSM for secrets/params instead of Secrets Manager. |
| Telemetry (CloudWatch) | ~$1.00 | Enforce 7-day log retention to limit costs. |

**Total (approx.):** <$22/mo

---

## 3. Image Analysis & LLM Orchestration Engine

### Problem

- Dedicated skin-analysis APIs have restrictive quotas (example: 140 requests/mo for $39.90). Processing three angles per session at scale would drive monthly costs to $300+.

### Solution — Vision LLM

- Combine the three profile images (front, left, right) and send a single request to a Vision-enabled LLM (e.g., gpt-4o) with a structured system prompt that returns deterministic JSON metrics.

### Cost math (example)

- Combined payload (3 high-detail images + prompt) ≈ 2,800 tokens.
- 500 sessions × 2,800 tokens = 1.4M input tokens/month — estimated cost ≈ $3.50/month (at current token pricing assumptions).

### 4-Layer Execution Flow

1. **Ingestion Layer:** Patient completes a questionnaire and uploads 3 profile photos. Frontend coordinates assets and creates a session UUID.
2. **Analysis Layer (Vision LLM):** Send combined images + prompt to gpt-4o; receive structured JSON with skin metrics (e.g., acne severity, redness index, skin type).
3. **Authoritative Processing Layer (Doctor Rule Engine):** Feed the LLM JSON into a deterministic Node.js rule engine that applies doctor-provided rules and product mappings (seeded via Excel import). The rule engine is the source of truth — LLM does not make decisions.
4. **Output Presentation Layer (LLM Formatter):** Format the final patient-facing recommendation and educational text using an LLM layer restricted to the doctor's approved vocabulary and product set.

---

## 4. Key Implementation Tips & Critical Safeguards

### Safeguard 1 — Headless PDF generation

Problem: Running headless Chromium (Puppeteer) inside a 0.5 GB Fargate container will cause OOM crashes.

Fix: Offload PDF generation to an independent AWS Lambda function configured with at least 1 GB memory. Keep the Lambda idle by default; per-report execution costs for 500 reports/month are negligible and protect the main container from OOMs.

### Safeguard 2 — Zero-maintenance Excel data architecture

Approach: Implement Excel uploads as a single transactional overwrite. When the doctor uploads a revised product/ingredient sheet, validate schema, delete old rows, and bulk-insert the new rows in one DB transaction. Avoid background sync workers or cron jobs.

### Safeguard 3 — Strict token isolation & privacy

Policy: Do not log or send raw patient identifiers in LLM prompts or telemetry. Use an internal UUID for session linkage and keep PII in a separate, access-controlled registry table. Ensure prompts sent to LLMs contain only the de-identified metrics necessary for analysis.

---

## Appendix / Notes

- References: PPTX artifacts referenced throughout (design notes and slides). Use these as the authoritative source for slide-level details.
- Cost estimates are approximate and should be validated against current provider pricing before go-live.


