import { Router } from "express";
import { gameplayFeatures } from "../services/features";

export const featuresRouter = Router();

featuresRouter.get("/catalog", (_req, res) => {
  return res.json({
    ok: true,
    designNote:
      "Feature set is original and inspired by BR genre patterns; avoid using proprietary assets or trademarked naming.",
    features: gameplayFeatures
  });
});
