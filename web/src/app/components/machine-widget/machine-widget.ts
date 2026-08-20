import { Component, inject } from "@angular/core";
import { formatUptime } from "../../utils/times.utils";
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

    readonly formatUptime = formatUptime;

    returnUptime(uptime: number): string {
        const times = formatUptime(uptime);

        let uptimeString = "";

        if (times.years > 0) {
            uptimeString += `${times.years}y `;
        }

        if (times.months > 0) {
            uptimeString += `${times.months}mo `;
        }

        if (times.weeks > 0) {
            uptimeString += `${times.weeks}w `;
        }

        if (times.days > 0) {
            uptimeString += `${times.days}d `;
        }

        if (times.hours > 0) {
            uptimeString += `${times.hours}h `;
        }

        if (times.minutes > 0) {
            uptimeString += `${times.minutes}m `;
        }

        if (times.seconds > 0) {
            uptimeString += `${times.seconds}s`;
        }

        return uptimeString.trim();
    }
}
