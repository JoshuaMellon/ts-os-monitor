import { Component, signal, DestroyRef } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SystemStore } from "./services/systemStore.service";
import { inject } from "@angular/core";
import { CpuWidget } from "./components/cpu-widget/cpu-widget";

@Component({
    selector: "app-root",
    imports: [CpuWidget],
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
