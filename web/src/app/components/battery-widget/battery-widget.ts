import { Component, inject } from "@angular/core";

import { MatCardModule } from "@angular/material/card";

import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-battery-widget",
    imports: [MatCardModule],
    templateUrl: "./battery-widget.html",
    styleUrls: ["./battery-widget.scss"],
})
export class BatteryWidget {
    readonly system = inject(SystemStore);
}
