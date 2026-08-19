import si from "systeminformation";
import type { BatteryInfo } from "./types.js";

export async function getBatteryInfo(): Promise<BatteryInfo> {
    const batteryData = await si.battery();

    return {
        hasBattery: batteryData.hasBattery,

        cycleCount: batteryData.cycleCount,

        isCharging: batteryData.isCharging,
        acConnected: batteryData.acConnected,

        designedCapacity: batteryData.designedCapacity,
        maxCapacity: batteryData.maxCapacity,
        currentCapacity: batteryData.currentCapacity,

        capacityUnit: batteryData.capacityUnit,

        percent: batteryData.percent,
        timeRemaining: batteryData.timeRemaining,

        voltage: batteryData.voltage,

        type: batteryData.type,
        model: batteryData.model,
        manufacturer: batteryData.manufacturer,
        serial: batteryData.serial,
    };
}
