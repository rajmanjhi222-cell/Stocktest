import { Router } from "express";
import { enqueuePlayer, queueSize } from "../services/queue";

export const matchmakingRouter = Router();

matchmakingRouter.post("/enqueue", (req, res) => {
  const { playerId, mode } = req.body ?? {};

  if (!playerId || !mode) {
    return res.status(400).json({ error: "playerId and mode are required" });
  }

  if (!["solo", "duo", "squad"].includes(mode)) {
    return res.status(400).json({ error: "mode must be solo, duo, or squad" });
  }

  const result = enqueuePlayer({
    playerId,
    mode,
    enqueuedAt: Date.now()
  });

  return res.json({ ok: true, position: result.position, queueSize: queueSize() });
});
