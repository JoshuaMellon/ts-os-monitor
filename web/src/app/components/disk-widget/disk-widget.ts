import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-disk-widget",
    imports: [CommonModule, MatCardModule, MatTabsModule, MatIconModule],
    templateUrl: "./disk-widget.html",
    styleUrls: ["./disk-widget.scss"],
})
export class DiskWidget {
    readonly system = inject(SystemStore);
}
