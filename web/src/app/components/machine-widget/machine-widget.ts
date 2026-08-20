import { Component, inject } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { SystemStore } from "../../services/systemStore.service";
import { MatIconModule } from "@angular/material/icon";

import { DatePipe } from "@angular/common";

@Component({
    selector: "app-machine-widget",
    imports: [MatCardModule, DatePipe, MatIconModule],
    templateUrl: "./machine-widget.html",
    styleUrls: ["./machine-widget.scss"],
})
export class MachineWidget {
    readonly system = inject(SystemStore);
}
