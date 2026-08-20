import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SystemStore } from "../../services/systemStore.service";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
    selector: "app-cpu-widget",
    imports: [CommonModule, MatCardModule, MatTabsModule, MatProgressBarModule, MatIconModule, MatProgressSpinnerModule],
    templateUrl: "./cpu-widget.html",
    styleUrls: ["./cpu-widget.scss"],
})
export class CpuWidget {
    readonly system = inject(SystemStore);
}
