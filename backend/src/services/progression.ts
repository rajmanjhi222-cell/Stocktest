export type Tier = "Rookie" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond";

export type LevelBand = {
  level: number;
  xpRequired: number;
  unlocks: string[];
};

export const levelBands: LevelBand[] = [
  { level: 1, xpRequired: 0, unlocks: ["default_loadout", "casual_queue"] },
  { level: 5, xpRequired: 1200, unlocks: ["duo_queue", "daily_missions"] },
  { level: 10, xpRequired: 3500, unlocks: ["squad_queue", "ranked_preview"] },
  { level: 15, xpRequired: 7000, unlocks: ["ability_slot_2", "event_pass"] },
  { level: 20, xpRequired: 12000, unlocks: ["ranked_mode", "clan_support"] }
];

export function resolveTier(score: number): Tier {
  if (score < 1000) return "Rookie";
  if (score < 2000) return "Bronze";
  if (score < 3000) return "Silver";
  if (score < 4500) return "Gold";
  if (score < 6500) return "Platinum";
  return "Diamond";
}
