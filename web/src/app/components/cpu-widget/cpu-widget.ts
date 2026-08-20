import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SystemStore } from "../../services/systemStore.service";

@Component({
    selector: "app-cpu-widget",
    imports: [CommonModule],
    templateUrl: "./cpu-widget.html",
    styleUrls: ["./cpu-widget.scss"],
})
export class CpuWidget {
    readonly system = inject(SystemStore);
}
