export interface DiskInfo {
    totalDisks: number;
    totalSize: number;

    totalUsed: number;
    totalUsedPercentage: string;

    totalAvailable: number;
    totalAvailablePercentage: string;

    disks: DiskStats[];
}

export interface DiskStats {
    fs: string;
    type: string;

    size: number;

    used: number;
    usedPercentage: string;

    available: number;
    availablePercentage: string;

    mount: string;
    rw: boolean | null;
}
