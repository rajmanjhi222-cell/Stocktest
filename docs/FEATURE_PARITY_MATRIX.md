# Feature Parity Matrix (Original BR Blend)

This matrix maps **genre-level** battle-royale capabilities inspired by mainstream BR titles into an **original, non-infringing** BattleForge design.

## Status legend
- **Done**: Present in current MVP backend APIs/services.
- **In Progress**: Partially scaffolded, needs persistence/realtime/game-server logic.
- **Planned**: Not yet implemented in current codebase.

| Capability Area | Genre Expectation (High-Level) | BattleForge Original Design | Status | Current Backend Mapping |
|---|---|---|---|---|
| Lobby & Identity | Player joins lobby, basic profile context | Lobby join with playerId + nickname validation | Done | `POST /lobby/join` |
| Match Queue | Queue by team mode (solo/duo/squad) | In-memory queue with position and queue size | Done | `POST /matchmaking/enqueue` + `queue.ts` |
| Health/Service Check | Service heartbeat for clients/devops | JSON health endpoint | Done | `GET /health` |
| Wallet Deposit Flow | Add funds before purchasing content | Deposit intent endpoint (mock provider) | In Progress | `POST /wallet/deposit-intent` |
| Wallet Withdrawal Flow | Request payout/withdrawal | Withdrawal request endpoint with pending review | In Progress | `POST /wallet/withdraw-request` |
| Progression Levels | XP-based level progression | Level bands with unlock milestones | Done | `GET /progression/levels` |
| Competitive Rank Tiers | Score-based tier brackets | Rookie→Diamond tier resolver | Done | `GET /progression/tier?score=` |
| Feature Catalog | Discover gameplay systems | Original BR feature catalog endpoint | Done | `GET /features/catalog` |
| Shrinking Zone | Dynamic safe-zone pressure | Adaptive zone timeline + configurable circles | Planned | To be added (`match-service`) |
| Rejoin/Respawn Assist | Team comeback mechanic | One-time beacon redeploy flow | Planned | To be added (`respawn-service`) |
| Loot Economy | Ground loot, rarity, loadout risk | Weighted loot tables + tiered drops | Planned | To be added (`loot-service`) |
| Weapon Systems | Distinct weapon classes and handling | Modular recoil/spread archetypes (original params) | Planned | To be added (`combat-service`) |
| Movement Layer | Sprint/vault/traverse systems | Parkour vault + stamina curve | Planned | To be added (`movement-service`) |
| Vehicles | Rotational mobility options | Limited fuel vehicle spawns by zone phase | Planned | To be added (`vehicle-service`) |
| Team Communication | Quick non-voice callouts | Contextual comms wheel phrases | Planned | To be added (`social-service`) |
| Ranked Seasons | Seasonal rank reset/reward loops | Seasonal rank track with reward buckets | In Progress | feature exists in catalog, rules pending |
| Missions/Events | Daily/weekly progression hooks | Daily missions + event pass objectives | In Progress | unlock placeholders in progression |
| Cosmetics/Inventory | Non-pay-to-win visual personalization | Inventory + skin ownership ledger | Planned | To be added (`inventory-service`) |
| Anti-Cheat | Abuse prevention and fairness | Server-authoritative checks + anomaly flags | Planned | To be added (`trust-service`) |
| Custom Rooms | Private match hosting | Room templates + access codes | Planned | To be added (`room-service`) |
| Clan/Social | Group progression/social identity | Clan creation + contribution points | In Progress | progression unlock placeholder |

## Copyright/IP Safety Rules Applied
1. No proprietary map layouts, character names, branded UI, or asset reuse.
2. No trademarked mode names copied as product identity.
3. Only genre-level mechanics are mapped; implementation details remain original.
4. Any future client assets must be custom-created or properly licensed.

## Next implementation slices (recommended)
1. **Authoritative Match Service**: zone + respawn + elimination events.
2. **Persistent Data Layer**: PostgreSQL (profiles, progression, wallet ledger).
3. **Compliance Wallet Layer**: KYC state machine, risk scoring, withdrawal approvals.
4. **LiveOps Layer**: season configs, event toggles, mission rotations.
