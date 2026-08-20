import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-usb-widget",
    imports: [CommonModule, MatCardModule],
    templateUrl: "./usb-widget.html",
    styleUrls: ["./usb-widget.scss"],
})
export class UsbWidget {
    readonly system = inject(SystemStore);
}
