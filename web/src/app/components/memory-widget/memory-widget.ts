import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { mbToGb } from "../../utils/conversions.utils";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-memory-widget",
    imports: [CommonModule, MatCardModule, MatTabsModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule],
    templateUrl: "./memory-widget.html",
    styleUrl: "./memory-widget.scss",
})
export class MemoryWidget {
    readonly system = inject(SystemStore);

    mbToGb = mbToGb;
}
