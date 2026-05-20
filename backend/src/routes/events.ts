import { Router } from "express";
import { liveEvents } from "../services/events";

export const eventsRouter = Router();

eventsRouter.get("/live", (_req, res) => {
  return res.json({ ok: true, events: liveEvents });
});
