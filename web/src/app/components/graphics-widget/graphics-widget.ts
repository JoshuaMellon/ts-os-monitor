import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-graphics-widget",
    imports: [CommonModule, MatCardModule, MatTabsModule, MatIconModule],
    templateUrl: "./graphics-widget.html",
    styleUrls: ["./graphics-widget.scss"],
})
export class GraphicsWidget {
    readonly system = inject(SystemStore);
}
