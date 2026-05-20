import { addFunds, getWallet } from "./wallet";

export type ShopItem = {
  id: string;
  name: string;
  type: "weapon_skin" | "character_cosmetic" | "emote" | "crate";
  price: number;
  rarity: "common" | "rare" | "epic";
};

const catalog: ShopItem[] = [
  { id: "wf-skin-01", name: "Neon Rift Rifle Skin", type: "weapon_skin", price: 120, rarity: "rare" },
  { id: "wf-outfit-07", name: "Dune Runner Outfit", type: "character_cosmetic", price: 180, rarity: "epic" },
  { id: "wf-emote-03", name: "Victory Pulse Emote", type: "emote", price: 60, rarity: "common" },
  { id: "wf-crate-02", name: "Tactical Supply Crate", type: "crate", price: 90, rarity: "rare" }
];

const inventory = new Map<string, string[]>();

export function listShopItems(): ShopItem[] {
  return catalog;
}

export function getInventory(playerId: string): string[] {
  return inventory.get(playerId) ?? [];
}

export function purchaseItem(playerId: string, itemId: string): { ok: boolean; reason?: string; balance: number; inventory: string[] } {
  const item = catalog.find((x) => x.id === itemId);
  if (!item) return { ok: false, reason: "item_not_found", balance: getWallet(playerId).balance, inventory: getInventory(playerId) };

  const wallet = getWallet(playerId);
  if (wallet.balance < item.price) {
    return { ok: false, reason: "insufficient_balance", balance: wallet.balance, inventory: getInventory(playerId) };
  }

  addFunds(playerId, -item.price);
  const nextInv = [...getInventory(playerId), itemId];
  inventory.set(playerId, nextInv);
  return { ok: true, balance: getWallet(playerId).balance, inventory: nextInv };
}
