import { Router } from "express";
import { applyMatchResult, getRank, getSeason } from "../services/ranked";

export const rankedRouter = Router();

rankedRouter.get("/season", (_req, res) => {
  return res.json({ ok: true, season: getSeason() });
});

rankedRouter.get("/:playerId", (req, res) => {
  return res.json({ ok: true, rank: getRank(req.params.playerId) });
});

rankedRouter.post("/report", (req, res) => {
  const { playerId, placement, eliminations } = req.body ?? {};
  if (!playerId || typeof placement !== "number" || typeof eliminations !== "number") {
    return res.status(400).json({ error: "playerId, placement, eliminations are required" });
  }

  return res.json({ ok: true, rank: applyMatchResult(playerId, placement, eliminations) });
});
