import { Component, inject } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-memory-widget",
    imports: [MatCardModule],
    templateUrl: "./memory-widget.html",
    styleUrl: "./memory-widget.scss",
})
export class MemoryWidget {
    readonly system = inject(SystemStore);
}
