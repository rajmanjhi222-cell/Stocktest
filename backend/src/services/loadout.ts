export type LoadoutPreset = {
  playerId: string;
  primary: string;
  secondary: string;
  tactical: string;
  passive: string;
};

const presets = new Map<string, LoadoutPreset>();

export function getLoadout(playerId: string): LoadoutPreset {
  return (
    presets.get(playerId) ?? {
      playerId,
      primary: "AR-Mk1",
      secondary: "SMG-Lite",
      tactical: "Frag",
      passive: "SprintBoost"
    }
  );
}

export function saveLoadout(next: LoadoutPreset): LoadoutPreset {
  presets.set(next.playerId, next);
  return next;
}
