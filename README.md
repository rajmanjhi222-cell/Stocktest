# BattleForge MVP (Battle Royale Inspired)

This repository contains the MVP scaffold for an original battle-royale inspired game project (inspired by the fast-session style of popular BR games, without copying IP).

## MVP Scope (Phase 1)
- Basic lobby API
- Basic matchmaking queue API (in-memory for MVP)
- Player wallet ledger API skeleton (no real payment processing yet)
- Original BR-inspired feature catalog API
- Progression levels and rank tier API
- Health check endpoint

## Tech
- Node.js + Express + TypeScript backend
- Future client planned in Unity

## Quick start
```bash
cd backend
npm install
npm run dev
```

## API endpoints (MVP)
- `GET /health`
- `POST /lobby/join`
- `POST /matchmaking/enqueue`
- `POST /wallet/deposit-intent`
- `POST /wallet/withdraw-request`
- `GET /features/catalog`
- `GET /progression/levels`
- `GET /progression/tier?score=2500`

## Important
This MVP intentionally avoids cloning any proprietary game assets/mechanics. It provides an original foundation that can evolve into a production game.


## IP/Copyright safety
- This project does **not** copy proprietary game code/assets/maps/characters.
- Feature design follows generic battle-royale patterns with original naming and implementation.

## Planning docs
- `docs/MVP_PLAN.md`
- `docs/FEATURE_PARITY_MATRIX.md`
