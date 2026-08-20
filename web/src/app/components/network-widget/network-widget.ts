import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-network-widget",
    imports: [CommonModule, MatCardModule, MatTabsModule],
    templateUrl: "./network-widget.html",
    styleUrls: ["./network-widget.scss"],
})
export class NetworkWidget {
    readonly system = inject(SystemStore);
}
