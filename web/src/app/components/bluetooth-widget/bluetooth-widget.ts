import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-bluetooth-widget",
    imports: [CommonModule, MatCardModule, MatIconModule],
    templateUrl: "./bluetooth-widget.html",
    styleUrls: ["./bluetooth-widget.scss"],
})
export class BluetoothWidget {
    readonly system = inject(SystemStore);
}
