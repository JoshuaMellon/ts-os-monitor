import { Injectable, inject, signal } from "@angular/core";
import { firstValueFrom } from "rxjs";

import { SystemService } from "./system.service";

import type { MachineInfo } from "../../../../api/system/modules/machine/types.ts";
import type { CpuInfo } from "../../../../api/system/modules/cpu/types.ts";
import type { NetworkInfo } from "../../../../api/system/modules/network/types.ts";
import type { MemoryInfo } from "../../../../api/system/modules/memory/types.ts";
import type { DiskInfo } from "../../../../api/system/modules/disk/types.ts";
import type { GraphicsInfo } from "../../../../api/system/modules/graphics/types.ts";
import type { UsbInfo } from "../../../../api/system/modules/usb/types.ts";
import type { BluetoothInfo } from "../../../../api/system/modules/bluetooth/types.ts";
import type { BatteryInfo } from "../../../../api/system/modules/battery/types.ts";

@Injectable({
    providedIn: "root",
})
export class SystemStore {
    private readonly api = inject(SystemService);

    readonly machine = signal<MachineInfo | null>(null);
    readonly cpu = signal<CpuInfo | null>(null);
    readonly network = signal<NetworkInfo | null>(null);
    readonly memory = signal<MemoryInfo | null>(null);
    readonly disks = signal<DiskInfo | null>(null);
    readonly graphics = signal<GraphicsInfo | null>(null);
    readonly usb = signal<UsbInfo | null>(null);
    readonly bluetooth = signal<BluetoothInfo | null>(null);
    readonly battery = signal<BatteryInfo | null>(null);

    private timers: ReturnType<typeof setInterval>[] = [];

    async start() {
        await Promise.all([
            this.updateMachine(),
            this.updateCpu(),
            this.updateNetwork(),
            this.updateMemory(),
            this.updateDisks(),
            this.updateGraphics(),
            this.updateUsb(),
            this.updateBluetooth(),
            this.updateBattery(),
        ]);

        this.timers.push(
            setInterval(() => this.updateCpu(), 1000),
            setInterval(() => this.updateNetwork(), 1000),

            setInterval(() => this.updateMemory(), 2000),

            setInterval(() => this.updateDisks(), 5000),

            setInterval(() => this.updateBattery(), 10000),
            setInterval(() => this.updateBluetooth(), 10000),

            setInterval(() => this.updateMachine(), 30000),
            setInterval(() => this.updateGraphics(), 30000),
            setInterval(() => this.updateUsb(), 30000),
        );
    }

    stop() {
        for (const timer of this.timers) {
            clearInterval(timer);
        }

        this.timers = [];
    }

    private async updateMachine() {
        this.machine.set(await firstValueFrom(this.api.getMachine()));
    }

    private async updateCpu() {
        this.cpu.set(await firstValueFrom(this.api.getCpu()));
    }

    private async updateNetwork() {
        this.network.set(await firstValueFrom(this.api.getNetwork()));
    }

    private async updateMemory() {
        this.memory.set(await firstValueFrom(this.api.getMemory()));
    }

    private async updateDisks() {
        this.disks.set(await firstValueFrom(this.api.getDisks()));
    }

    private async updateGraphics() {
        this.graphics.set(await firstValueFrom(this.api.getGraphics()));
    }

    private async updateUsb() {
        this.usb.set(await firstValueFrom(this.api.getUsb()));
    }

    private async updateBluetooth() {
        this.bluetooth.set(await firstValueFrom(this.api.getBluetooth()));
    }

    private async updateBattery() {
        this.battery.set(await firstValueFrom(this.api.getBattery()));
    }
}
