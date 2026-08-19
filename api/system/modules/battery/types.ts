export type BatteryInfo = {
    hasBattery: boolean;

    cycleCount: number;

    isCharging: boolean;
    acConnected: boolean;

    designedCapacity: number;
    maxCapacity: number;
    currentCapacity: number;

    capacityUnit: string;

    percent: number;
    timeRemaining: number;

    voltage: number;

    type: string;
    model: string;
    manufacturer: string;
    serial: string;
};
