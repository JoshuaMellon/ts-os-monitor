import si from "systeminformation";

import { bytesToGb } from "../../../utils/conversions.js";

import type { DiskStats, DiskInfo } from "./types.js";

export async function getDiskInfo(): Promise<DiskInfo> {
    const diskStats = await getDiskStats();

    const totalDisks = diskStats.length;
    const totalSize = diskStats.reduce((acc, disk) => acc + disk.size, 0);

    const totalUsed = parseFloat(diskStats.reduce((acc, disk) => acc + disk.used, 0).toFixed(2));
    const totalUsedPercentage = (totalSize > 0 ? (totalUsed / totalSize) * 100 : 0).toFixed(2);

    const totalAvailable = parseFloat(diskStats.reduce((acc, disk) => acc + disk.available, 0).toFixed(2));
    const totalAvailablePercentage = (totalSize > 0 ? (totalAvailable / totalSize) * 100 : 0).toFixed(2);

    return {
        totalDisks,
        totalSize,
        totalUsed,
        totalUsedPercentage,
        totalAvailable,
        totalAvailablePercentage,
        disks: diskStats,
    };
}

async function getDiskStats(): Promise<DiskStats[]> {
    const disks = await si.fsSize();
    return disks.map((disk) => {
        return {
            fs: disk.fs,
            type: disk.type,

            size: bytesToGb(disk.size),

            used: bytesToGb(disk.used),
            usedPercentage: ((bytesToGb(disk.used) / bytesToGb(disk.size)) * 100).toFixed(2),

            available: bytesToGb(disk.available),
            availablePercentage: ((bytesToGb(disk.available) / bytesToGb(disk.size)) * 100).toFixed(2),

            mount: disk.mount,
            rw: disk.rw,
        };
    });
}
