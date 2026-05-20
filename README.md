# StormArena MVP (Battle Royale Inspired)

This repository contains the MVP scaffold for an original battle-royale inspired game project (fast-session BR style, without copying proprietary IP).

## MVP Scope
- Lobby join + matchmaking queue
- Wallet (deposit/withdraw + KYC state) for MVP simulation
- Shop catalog + purchase + inventory
- Progression levels + tier lookup
- Ranked season + match result rating updates
- Player loadout presets
- Health check endpoint

## Tech
- Node.js + Express + TypeScript backend
- Future realtime authoritative server + Unity client planned

## Quick start
```bash
cd backend
npm install
npm run dev
```

## API endpoints (current MVP)
> Note: systems are original StormArena implementations (not proprietary clones).

- `GET /health`
- `POST /lobby/join`
- `POST /matchmaking/enqueue`

### Wallet
- `GET /wallet/:playerId`
- `POST /wallet/kyc`
- `POST /wallet/deposit`
- `POST /wallet/withdraw`

### Shop
- `GET /shop/items`
- `GET /shop/inventory/:playerId`
- `POST /shop/purchase`

### Progression & Features
- `GET /features/catalog`
- `GET /progression/levels`
- `GET /progression/tier?score=2500`

### Advanced systems
- `GET /ranked/season`
- `GET /ranked/:playerId`
- `POST /ranked/report`
- `GET /loadout/:playerId`
- `POST /loadout/save`

## IP/Copyright safety
- No proprietary map layouts, character designs, assets, or branded names are copied.
- Genre-level mechanics are implemented with original naming and implementation details.

## Planning docs
- `docs/MVP_PLAN.md`
- `docs/FEATURE_PARITY_MATRIX.md`
