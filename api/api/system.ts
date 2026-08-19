import { Router } from "express";
import type { SystemMonitor } from "../system/system.ts";

export const createSystemRouter = (monitor: SystemMonitor) => {
    const router = Router();

    const getSystemInfo = () => {
        const systemInfo = monitor.getInfo();

        if (!systemInfo) {
            return null;
        }

        return systemInfo;
    };

    router.get("", (_req, res) => {
        const systemInfo = getSystemInfo();

        if (!systemInfo) {
            res.status(503).json({
                error: "System information is not ready",
            });
            return;
        }

        res.json(systemInfo);
    });

    router.get("/machine", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(503).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.machine);
    });

    router.get("/cpu", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(503).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.cpu);
    });

    router.get("/network", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(503).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.network);
    });

    router.get("/memory", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(503).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.memory);
    });

    router.get("/disks", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(503).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.disks);
    });

    router.get("/graphics", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(503).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.graphics);
    });

    router.get("/usb", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(503).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.usb);
    });

    router.get("/bluetooth", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(404).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.bluetooth);
    });

    router.get("/battery", (_req, res) => {
        const systemInfo = getSystemInfo();
        if (!systemInfo) {
            res.status(404).json({
                error: "System information is not ready",
            });
            return;
        }
        res.json(systemInfo.battery);
    });

    return router;
};
