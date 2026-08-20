import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
export class SystemService {
    private readonly http = inject(HttpClient);

    private readonly baseUrl = "/system";

    getMachine() {
        return this.http.get<MachineInfo>(`${this.baseUrl}/machine`);
    }

    getCpu() {
        return this.http.get<CpuInfo>(`${this.baseUrl}/cpu`);
    }

    getNetwork() {
        return this.http.get<NetworkInfo>(`${this.baseUrl}/network`);
    }

    getMemory() {
        return this.http.get<MemoryInfo>(`${this.baseUrl}/memory`);
    }

    getDisks() {
        return this.http.get<DiskInfo>(`${this.baseUrl}/disks`);
    }

    getGraphics() {
        return this.http.get<GraphicsInfo>(`${this.baseUrl}/graphics`);
    }

    getUsb() {
        return this.http.get<UsbInfo>(`${this.baseUrl}/usb`);
    }

    getBluetooth() {
        return this.http.get<BluetoothInfo>(`${this.baseUrl}/bluetooth`);
    }

    getBattery() {
        return this.http.get<BatteryInfo>(`${this.baseUrl}/battery`);
    }

    getSystem() {
        return this.http.get<{
            machine: MachineInfo;
            cpu: CpuInfo;
            network: NetworkInfo;
            memory: MemoryInfo;
            disks: DiskInfo;
            graphics: GraphicsInfo;
            usb: UsbInfo;
            bluetooth?: BluetoothInfo;
            battery?: BatteryInfo;
        }>(this.baseUrl);
    }
}
