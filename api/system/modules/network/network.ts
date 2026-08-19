import si from "systeminformation";
import type { NetworkInfo, NetworkInterfaceInfo, NetworkStats, NetworkConnection, WifiNetwork } from "./types.js";

export async function getNetworkInfo(): Promise<NetworkInfo> {
    const [interfaces, stats, allConnections, wifi] = await Promise.all([si.networkInterfaces(), si.networkStats(), si.networkConnections(), si.wifiNetworks()]);

    const connections = allConnections
        .filter((connection) => connection.protocol !== "tcp" && connection.protocol !== "udp")
        .map(
            (connection): NetworkConnection => ({
                protocol: connection.protocol,
                localAddress: connection.localAddress,
                localPort: connection.localPort,
                peerAddress: connection.peerAddress,
                peerPort: connection.peerPort,
                state: connection.state,
                pid: connection.pid,
                process: connection.process,
            }),
        );

    return {
        interfaces: interfaces.map(
            (network): NetworkInterfaceInfo => ({
                iface: network.iface,
                ifaceName: network.ifaceName,
                ip4: network.ip4,
                ip6: network.ip6,
                mac: network.mac,
                internal: network.internal,
                virtual: network.virtual,
                operstate: network.operstate,
                type: network.type,
                duplex: network.duplex,
                mtu: network.mtu,
                speed: network.speed,
            }),
        ),

        stats: stats.map(
            (network): NetworkStats => ({
                iface: network.iface,
                operstate: network.operstate,

                rxBytes: network.rx_bytes,
                rxDropped: network.rx_dropped,
                rxErrors: network.rx_errors,

                txBytes: network.tx_bytes,
                txDropped: network.tx_dropped,
                txErrors: network.tx_errors,

                rxSec: network.rx_sec,
                txSec: network.tx_sec,

                ms: network.ms,
            }),
        ),

        connections,

        wifiNetworks: wifi.map(
            (network): WifiNetwork => ({
                ssid: network.ssid,
                bssid: network.bssid,
                mode: network.mode,
                channel: network.channel,
                frequency: network.frequency,
                signalLevel: network.signalLevel,
                quality: network.quality,
                security: network.security,
            }),
        ),
    };
}
