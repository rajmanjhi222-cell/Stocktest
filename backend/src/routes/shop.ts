import { Router } from "express";
import { getInventory, listShopItems, purchaseItem } from "../services/shop";

export const shopRouter = Router();

shopRouter.get("/items", (_req, res) => {
  return res.json({ ok: true, items: listShopItems() });
});

shopRouter.get("/inventory/:playerId", (req, res) => {
  return res.json({ ok: true, playerId: req.params.playerId, items: getInventory(req.params.playerId) });
});

shopRouter.post("/purchase", (req, res) => {
  const { playerId, itemId } = req.body ?? {};
  if (!playerId || !itemId) return res.status(400).json({ error: "playerId and itemId are required" });

  const result = purchaseItem(playerId, itemId);
  if (!result.ok) return res.status(400).json(result);
  return res.json(result);
});
