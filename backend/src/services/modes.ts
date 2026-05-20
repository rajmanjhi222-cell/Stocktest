export type ModeConfig = {
  id: string;
  name: string;
  squadSize: 1 | 2 | 4;
  mapPool: string[];
  hasRespawnBeacon: boolean;
  rankedEligible: boolean;
};

export const modeConfigs: ModeConfig[] = [
  { id: "br_solo", name: "BR Solo", squadSize: 1, mapPool: ["IronDunes", "SkyHarbor"], hasRespawnBeacon: false, rankedEligible: true },
  { id: "br_duo", name: "BR Duo", squadSize: 2, mapPool: ["IronDunes", "SkyHarbor"], hasRespawnBeacon: true, rankedEligible: true },
  { id: "br_squad", name: "BR Squad", squadSize: 4, mapPool: ["IronDunes", "SkyHarbor", "NightRidge"], hasRespawnBeacon: true, rankedEligible: true },
  { id: "arena_tdm", name: "Arena Clash", squadSize: 4, mapPool: ["FoundryYard"], hasRespawnBeacon: false, rankedEligible: false }
];
