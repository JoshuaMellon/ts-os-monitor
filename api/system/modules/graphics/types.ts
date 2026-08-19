export type GraphicsInfo = {
    controllers: GraphicsController[];
    displays: GraphicsDisplay[];
};

export interface GraphicsController {
    vendor: string;
    subVendor: string | undefined;
    model: string;

    bus: string;
    busAddress: string | undefined;

    vram: number | null;
    vramDynamic: boolean;
}

export interface GraphicsDisplay {
    vendor: string;
    model: string;

    main: boolean;
    builtin: boolean;
    connection: string | null;

    sizeX: number | null;
    sizeY: number | null;

    pixelDepth: number | null;

    resolutionX: number | null;
    resolutionY: number | null;

    currentResX: number | null;
    currentResY: number | null;

    positionX: number | null;
    positionY: number | null;

    currentRefreshRate: number | null;
}
