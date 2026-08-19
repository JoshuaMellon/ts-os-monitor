import type { CpuInfo } from "./modules/cpu/types.js";
import type { DiskInfo } from "./modules/disk/types.js";
import type { GraphicsInfo } from "./modules/graphics/types.js";
import type { MemoryInfo } from "./modules/memory/types.js";
import type { NetworkInfo } from "./modules/network/types.js";
import type { MachineInfo } from "./modules/machine/types.js";
import type { UsbInfo } from "./modules/usb/types.js";
import type { BluetoothInfo } from "./modules/bluetooth/types.js";
import type { BatteryInfo } from "./modules/battery/types.js";

export interface SystemInfo {
    machine: MachineInfo;

    cpu: CpuInfo;
    network: NetworkInfo;
    memory: MemoryInfo;
    disks: DiskInfo;
    graphics: GraphicsInfo;

    usb: UsbInfo;
    bluetooth?: BluetoothInfo | undefined;
    battery?: BatteryInfo | undefined;
}
