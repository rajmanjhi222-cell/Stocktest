import { Router } from "express";
import { levelBands, resolveTier } from "../services/progression";

export const progressionRouter = Router();

progressionRouter.get("/levels", (_req, res) => {
  return res.json({ ok: true, levels: levelBands });
});

progressionRouter.get("/tier", (req, res) => {
  const score = Number(req.query.score ?? 0);

  if (Number.isNaN(score) || score < 0) {
    return res.status(400).json({ error: "score must be a non-negative number" });
  }

  return res.json({ ok: true, score, tier: resolveTier(score) });
});
