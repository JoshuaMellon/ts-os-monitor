import express from "express";
import { SystemMonitor } from "./system/monitor/system-monitor.ts";

const app = express();
const monitor = new SystemMonitor();

await monitor.start();

app.get("/api/system", (_req, res) => {
    const systemInfo = monitor.getInfo();

    if (!systemInfo) {
        res.status(503).json({
            error: "System information is not ready",
        });
        return;
    }

    res.json(systemInfo);
});

app.listen(3000, () => {
    console.log("API listening on port 3000");
});
