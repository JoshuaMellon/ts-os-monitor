import express from "express";
import type { SystemMonitor } from "../system/system.ts";
import { createSystemRouter } from "./system.ts";

const basePath = "/api/";

export const createServer = (monitor: SystemMonitor) => {
    const app = express();

    app.use(express.json());

    app.use(`${basePath}system`, createSystemRouter(monitor));

    app.get(`${basePath}health`, (_req, res) => {
        res.json({ status: "ok" });
    });

    app.listen(3000, () => {
        console.log("API listening on port 3000");
        console.log("localhost:3000/api/health");
    });
};
