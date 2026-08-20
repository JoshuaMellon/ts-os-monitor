import { Component, signal, DestroyRef } from "@angular/core";
import { inject } from "@angular/core";

import { SystemStore } from "./services/systemStore.service";

import { CpuWidget } from "./components/cpu-widget/cpu-widget";
import { MachineWidget } from "./components/machine-widget/machine-widget";
import { MemoryWidget } from "./components/memory-widget/memory-widget";
import { NetworkWidget } from "./components/network-widget/network-widget";
import { DiskWidget } from "./components/disk-widget/disk-widget";
import { GraphicsWidget } from "./components/graphics-widget/graphics-widget";
import { UsbWidget } from "./components/usb-widget/usb-widget";
import { BluetoothWidget } from "./components/bluetooth-widget/bluetooth-widget";
import { BatteryWidget } from "./components/battery-widget/battery-widget";

@Component({
    selector: "app-root",
    imports: [CpuWidget, MachineWidget, MemoryWidget, NetworkWidget, DiskWidget, GraphicsWidget, UsbWidget, BluetoothWidget, BatteryWidget],
    templateUrl: "./app.html",
    styleUrls: ["./app.scss"],
})
export class App {
    readonly system = inject(SystemStore);

    protected readonly title = signal("web");

    constructor() {
        this.system.start();

        inject(DestroyRef).onDestroy(() => {
            this.system.stop();
        });
    }
}
