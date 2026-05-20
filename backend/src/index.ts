import express from "express";
import { lobbyRouter } from "./routes/lobby";
import { matchmakingRouter } from "./routes/matchmaking";
import { walletRouter } from "./routes/wallet";
import { progressionRouter } from "./routes/progression";
import { featuresRouter } from "./routes/features";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "battleforge-backend" });
});

app.use("/lobby", lobbyRouter);
app.use("/matchmaking", matchmakingRouter);
app.use("/wallet", walletRouter);
app.use("/progression", progressionRouter);
app.use("/features", featuresRouter);

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  console.log(`BattleForge backend running on :${port}`);
});
