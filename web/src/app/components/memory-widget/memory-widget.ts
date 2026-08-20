import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-memory-widget",
    imports: [CommonModule, MatCardModule, MatTabsModule, MatIconModule],
    templateUrl: "./memory-widget.html",
    styleUrl: "./memory-widget.scss",
})
export class MemoryWidget {
    readonly system = inject(SystemStore);
}
