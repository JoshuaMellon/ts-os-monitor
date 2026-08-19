export type MemoryInfo = {
    total: number;

    free: number;
    freePercent: number;

    used: number;
    usedPercent: number;

    active: number;
    activePercent: number;

    swapTotal: number;
    swapFree: number;
    swapUsed: number;

    writeBack: number | null;
    dirty: number | null;

    memoryLayout: MemoryLayout[];
};

export interface MemoryLayout {
    size: number;
    type: string;

    formFactor: string;
    manufacturer: string | undefined;

    partNum: string;
    serialNum: string;

    bank: string;

    voltageConfigured: number | null;
    voltageMin: number | null;
    voltageMax: number | null;
}
