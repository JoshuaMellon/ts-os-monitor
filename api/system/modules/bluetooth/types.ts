export type BluetoothInfo = {
    devices: BluetoothDevice[];
};

export interface BluetoothDevice {
    device: string;
    name: string;
    manufacturer: string;

    macDevice: string;
    macHost: string;

    batteryPercent: number | null;

    type: string;
    connected: boolean;
}
