import si from "systeminformation";
import type { UsbInfo } from "./types.js";

export async function getUsbInfo(): Promise<UsbInfo> {
    const usbData = await si.usb();

    return {
        devices: usbData.map((device) => ({
            bus: device.bus,
            id: device.id,
            name: device.name,
            type: device.type,
            removable: device.removable ?? null,
            vendor: device.vendor,
            manufacturer: device.manufacturer,
            serialNumber: device.serialNumber ?? null,
        })),
    };
}
