export interface NetworkInfo {
    interfaces: NetworkInterfaceInfo[];
    stats: NetworkStats[];
    connections: NetworkConnection[];
    wifiNetworks: WifiNetwork[];
}

export interface NetworkInterfaceInfo {
    iface: string;
    ifaceName: string;
    ip4: string;
    ip6: string;
    mac: string;
    internal: boolean;
    virtual: boolean;
    operstate: string;
    type: string;
    duplex: string;
    mtu: number | null;
    speed: number | null;
}

export interface NetworkStats {
    iface: string;
    operstate: string;
    rxBytes: number;
    rxDropped: number;
    rxErrors: number;
    txBytes: number;
    txDropped: number;
    txErrors: number;
    rxSec: number;
    txSec: number;
    ms: number;
}

export interface NetworkConnection {
    protocol: string;
    localAddress: string;
    localPort: string;
    peerAddress: string;
    peerPort: string;
    state: string;
    pid: number;
    process: string;
}

export interface WifiNetwork {
    ssid: string;
    bssid: string;
    mode: string;
    channel: number;
    frequency: number;
    signalLevel: number;
    quality: number;
    security: string[];
}
