import { Router } from "express";
import { addFunds, getWallet, requestWithdrawal, setKyc } from "../services/wallet";

export const walletRouter = Router();

walletRouter.get("/:playerId", (req, res) => {
  return res.json({ ok: true, wallet: getWallet(req.params.playerId) });
});

walletRouter.post("/kyc", (req, res) => {
  const { playerId, approved } = req.body ?? {};
  if (!playerId || typeof approved !== "boolean") {
    return res.status(400).json({ error: "playerId and boolean approved are required" });
  }
  return res.json({ ok: true, wallet: setKyc(playerId, approved) });
});

walletRouter.post("/deposit", (req, res) => {
  const { playerId, amount } = req.body ?? {};

  if (!playerId || typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({ error: "valid playerId and positive amount are required" });
  }

  return res.json({ ok: true, status: "credited", wallet: addFunds(playerId, amount) });
});

walletRouter.post("/withdraw", (req, res) => {
  const { playerId, amount } = req.body ?? {};

  if (!playerId || typeof amount !== "number" || amount <= 0) {
    return res.status(400).json({ error: "valid playerId and positive amount are required" });
  }

  const result = requestWithdrawal(playerId, amount);
  if (!result.accepted) {
    return res.status(400).json({ ok: false, reason: result.reason, wallet: result.wallet });
  }

  return res.json({ ok: true, status: "withdrawal_accepted", wallet: result.wallet });
});
