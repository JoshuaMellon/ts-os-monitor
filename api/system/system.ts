import type { CpuInfo } from "./modules/cpu/types.js";
import type { DiskInfo } from "./modules/disk/types.js";
import type { GraphicsInfo } from "./modules/graphics/types.js";
import type { MemoryInfo } from "./modules/memory/types.js";
import type { NetworkInfo } from "./modules/network/types.js";
import type { MachineInfo } from "./modules/machine/types.js";
import type { UsbInfo } from "./modules/usb/types.js";
import type { BluetoothInfo } from "./modules/bluetooth/types.js";
import type { BatteryInfo } from "./modules/battery/types.js";
import { getBatteryInfo } from "./modules/battery/battery.ts";
import { getBluetoothInfo } from "./modules/bluetooth/bluetooth.ts";
import { getCpuInfo } from "./modules/cpu/cpu.ts";
import { getDiskInfo } from "./modules/disk/disk.ts";
import { getGraphicsInfo } from "./modules/graphics/graphics.ts";
import { getMachineInfo } from "./modules/machine/machine.ts";
import { getMemoryInfo } from "./modules/memory/memory.ts";
import { getNetworkInfo } from "./modules/network/network.ts";
import { getUsbInfo } from "./modules/usb/usb.ts";

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

export class SystemMonitor {
    private systemInfo: SystemInfo | null = null;

    async start() {
        await this.initialize();

        setInterval(() => this.updateFastInfo(), 5000);
        setInterval(() => this.updateMediumInfo(), 30000);
        setInterval(() => this.updateSlowInfo(), 60000);
    }

    getInfo(): SystemInfo | null {
        return this.systemInfo;
    }

    private async updateFastInfo() {
        if (!this.systemInfo) return;

        const [cpu, network, memory] = await Promise.all([getCpuInfo(), getNetworkInfo(), getMemoryInfo()]);

        this.systemInfo.cpu = cpu;
        this.systemInfo.network = network;
        this.systemInfo.memory = memory;
    }

    private async updateMediumInfo() {
        if (!this.systemInfo) return;

        const [disks] = await Promise.all([getDiskInfo()]);

        this.systemInfo.disks = disks;
    }

    private async updateSlowInfo() {
        if (!this.systemInfo) return;

        const [machine, graphics, usb, bluetooth, battery] = await Promise.all([getMachineInfo(), getGraphicsInfo(), getUsbInfo(), getBluetoothInfo(), getBatteryInfo()]);

        this.systemInfo.machine = machine;
        this.systemInfo.graphics = graphics;
        this.systemInfo.usb = usb;
        this.systemInfo.bluetooth = bluetooth;
        this.systemInfo.battery = battery;
    }

    private async initialize() {
        const [machine, cpu, network, memory, disks, graphics, usb, bluetooth, battery] = await Promise.all([
            getMachineInfo(),
            getCpuInfo(),
            getNetworkInfo(),
            getMemoryInfo(),
            getDiskInfo(),
            getGraphicsInfo(),
            getUsbInfo(),
            getBluetoothInfo(),
            getBatteryInfo(),
        ]);

        this.systemInfo = {
            machine,
            cpu,
            network,
            memory,
            disks,
            graphics,
            usb,
            bluetooth,
            battery,
        };
    }
}
