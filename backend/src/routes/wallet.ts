import { Router } from "express";

export const walletRouter = Router();

walletRouter.post("/deposit-intent", (req, res) => {
  const { playerId, amount } = req.body ?? {};

  if (!playerId || typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({ error: "valid playerId and positive amount are required" });
  }

  return res.json({
    ok: true,
    status: "intent_created",
    provider: "mock",
    message: "Integrate real payment gateway in Milestone 4"
  });
});

walletRouter.post("/withdraw-request", (req, res) => {
  const { playerId, amount } = req.body ?? {};

  if (!playerId || typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({ error: "valid playerId and positive amount are required" });
  }

  return res.json({
    ok: true,
    status: "pending_review",
    message: "KYC/risk checks required before payout"
  });
});
