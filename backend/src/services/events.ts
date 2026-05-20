export type LiveEvent = {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string;
  rewards: string[];
};

export const liveEvents: LiveEvent[] = [
  { id: "e_founders_week", title: "Founders Week Rush", startsAt: "2026-05-20", endsAt: "2026-05-27", rewards: ["banner_founder", "crate_rare"] },
  { id: "e_zone_mastery", title: "Zone Mastery Ops", startsAt: "2026-05-28", endsAt: "2026-06-10", rewards: ["skin_zonebreaker", "token_200"] }
];
