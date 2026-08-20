import { Component, signal, DestroyRef } from "@angular/core";
import { SystemStore } from "./services/systemStore.service";
import { inject } from "@angular/core";
import { CpuWidget } from "./components/cpu-widget/cpu-widget";
import { MachineWidget } from "./components/machine-widget/machine-widget";
import { MemoryWidget } from "./components/memory-widget/memory-widget";

@Component({
    selector: "app-root",
    imports: [CpuWidget, MachineWidget, MemoryWidget],
    templateUrl: "./app.html",
    styleUrls: ["./app.scss"],
})
export class App {
    readonly system = inject(SystemStore);

    protected readonly title = signal("web");

    constructor() {
        this.system.start();

        inject(DestroyRef).onDestroy(() => {
            this.system.stop();
        });
    }
}
