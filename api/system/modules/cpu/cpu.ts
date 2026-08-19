import si from "systeminformation";

import type { CpuInfo, CpuLoad } from "./types.ts";

export async function getCpuInfo(): Promise<CpuInfo> {
    const siCpu = await si.cpu();

    const cpuCurrentSpeed: CpuLoad = await si.cpuCurrentSpeed();

    return {
        manufacturer: siCpu.manufacturer,
        brand: siCpu.brand,
        vendor: siCpu.vendor,

        cpuLoad: cpuCurrentSpeed,

        speed: siCpu.speed,
        speedMin: siCpu.speedMin,
        speedMax: siCpu.speedMax,

        cores: siCpu.cores,
        physicalCores: siCpu.physicalCores,
        performanceCores: siCpu.performanceCores,
        efficiencyCores: siCpu.efficiencyCores,

        socket: siCpu.socket,

        virtualization: siCpu.virtualization,

        model: siCpu.model,
    };
}
