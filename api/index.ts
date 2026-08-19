import { createServer } from "./api/server.ts";
import { SystemMonitor } from "./system/system.ts";

const monitor = new SystemMonitor();

await monitor.start();

createServer(monitor);
