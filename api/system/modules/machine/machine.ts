import os from "node:os";
import type { MachineInfo } from "./types.ts";

export function getMachineInfo(): MachineInfo {
    const uptime = os.uptime();

    return {
        hostname: os.hostname(),
        platform: os.platform(),
        arch: os.arch(),
        type: os.type(),
        release: os.release(),
        version: os.version(),

        uptime,
        bootTime: Date.now() - uptime * 1000,

        userInfo: {
            username: os.userInfo().username,
            homedir: os.userInfo().homedir,
            shell: os.userInfo().shell,
        },
    };
}
