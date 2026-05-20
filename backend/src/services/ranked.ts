export type SeasonConfig = {
  seasonId: string;
  startedAt: string;
  endsAt: string;
  softResetPercent: number;
};

export type RankSnapshot = {
  playerId: string;
  rating: number;
  division: "Rookie" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond";
};

const currentSeason: SeasonConfig = {
  seasonId: "S1-Founders",
  startedAt: "2026-05-20",
  endsAt: "2026-08-20",
  softResetPercent: 20
};

const ratings = new Map<string, number>();

function divisionFor(rating: number): RankSnapshot["division"] {
  if (rating < 1000) return "Rookie";
  if (rating < 2000) return "Bronze";
  if (rating < 3000) return "Silver";
  if (rating < 4500) return "Gold";
  if (rating < 6500) return "Platinum";
  return "Diamond";
}

export function getSeason(): SeasonConfig {
  return currentSeason;
}

export function getRank(playerId: string): RankSnapshot {
  const rating = ratings.get(playerId) ?? 1000;
  return { playerId, rating, division: divisionFor(rating) };
}

export function applyMatchResult(playerId: string, placement: number, eliminations: number): RankSnapshot {
  const current = ratings.get(playerId) ?? 1000;
  const placementScore = Math.max(0, 110 - placement * 3);
  const next = Math.max(0, current + placementScore + eliminations * 20 - 30);
  ratings.set(playerId, next);
  return getRank(playerId);
}
