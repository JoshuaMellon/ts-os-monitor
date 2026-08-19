import si from "systeminformation";
import type { GraphicsInfo } from "./types.js";

export async function getGraphicsInfo(): Promise<GraphicsInfo> {
    const graphicsData = await si.graphics();

    return {
        controllers: graphicsData.controllers.map((controller) => ({
            vendor: controller.vendor,
            subVendor: controller.subVendor,
            model: controller.model,
            bus: controller.bus,
            busAddress: controller.busAddress,
            vram: controller.vram,
            vramDynamic: controller.vramDynamic,
        })),

        displays: graphicsData.displays.map((display) => ({
            vendor: display.vendor,
            model: display.model,
            main: display.main,
            builtin: display.builtin,
            connection: display.connection,
            sizeX: display.sizeX,
            sizeY: display.sizeY,
            pixelDepth: display.pixelDepth,
            resolutionX: display.resolutionX,
            resolutionY: display.resolutionY,
            currentResX: display.currentResX,
            currentResY: display.currentResY,
            positionX: display.positionX,
            positionY: display.positionY,
            currentRefreshRate: display.currentRefreshRate,
        })),
    };
}
