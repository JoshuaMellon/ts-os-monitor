export interface CpuInfo {
    manufacturer: string;
    brand: string;
    vendor: string;

    cpuLoad: CpuLoad;
    speed: number;
    speedMin: number;
    speedMax: number;

    cores: number;
    physicalCores: number;
    performanceCores: number | undefined;
    efficiencyCores: number | undefined;

    socket: string;

    virtualization: boolean;

    model: string;
}

export interface CpuLoad {
    min: number;
    max: number;
    avg: number;
    cores: number[];
}
