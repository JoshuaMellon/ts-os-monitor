import si from "systeminformation";
import type { BluetoothInfo } from "./types.js";

export async function getBluetoothInfo(): Promise<BluetoothInfo> {
    const bluetoothData = await si.bluetoothDevices();

    return {
        devices: bluetoothData.map((device) => ({
            device: device.device,
            name: device.name,
            manufacturer: device.manufacturer,

            macDevice: device.macDevice,
            macHost: device.macHost,

            batteryPercent: device.batteryPercent ?? null,

            type: device.type,
            connected: device.connected,
        })),
    };
}
