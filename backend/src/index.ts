import express from "express";
import { lobbyRouter } from "./routes/lobby";
import { matchmakingRouter } from "./routes/matchmaking";
import { walletRouter } from "./routes/wallet";
import { progressionRouter } from "./routes/progression";
import { featuresRouter } from "./routes/features";
import { shopRouter } from "./routes/shop";
import { rankedRouter } from "./routes/ranked";
import { loadoutRouter } from "./routes/loadout";
import { modesRouter } from "./routes/modes";
import { eventsRouter } from "./routes/events";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "stormarena-backend" });
});

app.use("/lobby", lobbyRouter);
app.use("/matchmaking", matchmakingRouter);
app.use("/wallet", walletRouter);
app.use("/progression", progressionRouter);
app.use("/features", featuresRouter);
app.use("/shop", shopRouter);
app.use("/ranked", rankedRouter);
app.use("/loadout", loadoutRouter);
app.use("/modes", modesRouter);
app.use("/events", eventsRouter);

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  console.log(`StormArena backend running on :${port}`);
});
