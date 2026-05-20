import { Router } from "express";
import { getLoadout, saveLoadout } from "../services/loadout";

export const loadoutRouter = Router();

loadoutRouter.get("/:playerId", (req, res) => {
  return res.json({ ok: true, loadout: getLoadout(req.params.playerId) });
});

loadoutRouter.post("/save", (req, res) => {
  const { playerId, primary, secondary, tactical, passive } = req.body ?? {};
  if (!playerId || !primary || !secondary || !tactical || !passive) {
    return res.status(400).json({ error: "playerId, primary, secondary, tactical, passive are required" });
  }

  return res.json({ ok: true, loadout: saveLoadout({ playerId, primary, secondary, tactical, passive }) });
});
