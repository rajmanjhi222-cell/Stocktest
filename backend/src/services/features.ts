export type GameplayFeature = {
  id: string;
  name: string;
  category: "combat" | "mobility" | "social" | "progression";
  description: string;
};

export const gameplayFeatures: GameplayFeature[] = [
  {
    id: "adaptive-zone",
    name: "Adaptive Zone Collapse",
    category: "combat",
    description: "Safe zone shrinks with variable pacing to reduce downtime."
  },
  {
    id: "beacon-redeploy",
    name: "Beacon Redeploy",
    category: "combat",
    description: "Teammates can rejoin once through beacon activation."
  },
  {
    id: "parkour-vault",
    name: "Parkour Vault",
    category: "mobility",
    description: "Fast traversal moves over low-height obstacles."
  },
  {
    id: "squad-comms-wheel",
    name: "Quick Comms Wheel",
    category: "social",
    description: "Contextual communication without voice chat."
  },
  {
    id: "seasonal-rank-track",
    name: "Seasonal Rank Track",
    category: "progression",
    description: "Competitive ladder with seasonal reset and rewards."
  }
];
