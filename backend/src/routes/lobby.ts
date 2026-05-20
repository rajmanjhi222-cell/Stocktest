import { Router } from "express";

export const lobbyRouter = Router();

lobbyRouter.post("/join", (req, res) => {
  const { playerId, nickname } = req.body ?? {};

  if (!playerId || !nickname) {
    return res.status(400).json({ error: "playerId and nickname are required" });
  }

  return res.json({
    ok: true,
    player: { playerId, nickname },
    message: "Joined lobby"
  });
});
