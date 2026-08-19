export type UsbInfo = {
    devices: UsbDevice[];
};

export interface UsbDevice {
    bus: number;
    id: number | string;
    name: string;
    type: string;

    removable: boolean | null;

    vendor: string;
    manufacturer: string;

    serialNumber: string | null;
}
