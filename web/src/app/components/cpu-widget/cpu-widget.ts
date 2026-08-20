import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SystemStore } from "../../services/systemStore.service";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
    selector: "app-cpu-widget",
    imports: [CommonModule, MatCardModule, MatTabsModule],
    templateUrl: "./cpu-widget.html",
    styleUrls: ["./cpu-widget.scss"],
})
export class CpuWidget {
    readonly system = inject(SystemStore);
}
