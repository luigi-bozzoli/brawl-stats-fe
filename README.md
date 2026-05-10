# BrawlStats — Frontend

![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222222?logo=githubpages&logoColor=white)

React frontend for the [BrawlStats serverless pipeline](https://github.com/luigi-bozzoli/brawl-stats).
Displays Brawl Stars player statistics collected by a scheduled AWS Lambda pipeline and served through API Gateway.

This repository contains only the frontend. The full backend infrastructure — Terraform, Lambda, SQS, DynamoDB, API Gateway — lives in the [main repository](https://github.com/luigi-bozzoli/brawl-stats).

---

## Demo

Live at [brawl-stats](https://luigi-bozzoli.github.io/brawl-stats-fe/). Runs entirely in the browser using
static JSON files that mirror real API responses — no backend is active.

---

## Views

- **Leaderboard** — all tracked players ranked by aggregated stats
- **Player detail** — full stat breakdown for a single player

---

## Stack

- React 
- Vite
- GitHub Pages

---

## Local development

```bash
npm install
npm run dev
```
