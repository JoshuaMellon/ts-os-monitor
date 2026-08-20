import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-usb-widget",
    imports: [CommonModule, MatCardModule, MatIconModule, MatTabsModule],
    templateUrl: "./usb-widget.html",
    styleUrls: ["./usb-widget.scss"],
})
export class UsbWidget {
    readonly system = inject(SystemStore);
}
