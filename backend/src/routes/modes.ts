import { Router } from "express";
import { modeConfigs } from "../services/modes";

export const modesRouter = Router();

modesRouter.get("/list", (_req, res) => {
  return res.json({ ok: true, modes: modeConfigs });
});
