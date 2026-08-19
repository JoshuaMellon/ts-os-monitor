import si from "systeminformation";
import { bytesToMb } from "../../../utils/conversions.js";

export async function getMemoryInfo() {
    const memData = await si.mem();
    const memLayoutData = await si.memLayout();

    const memoryInfo = {
        total: bytesToMb(memData.total),
        free: bytesToMb(memData.free),
        freePercent: parseFloat(((memData.free / memData.total) * 100).toFixed(2)),
        used: bytesToMb(memData.used),
        usedPercent: parseFloat(((memData.used / memData.total) * 100).toFixed(2)),
        active: bytesToMb(memData.active),
        activePercent: parseFloat(((memData.active / memData.total) * 100).toFixed(2)),

        swapTotal: bytesToMb(memData.swaptotal),
        swapFree: bytesToMb(memData.swapfree),
        swapUsed: bytesToMb(memData.swapused),

        writeBack: memData.writeback !== null ? bytesToMb(memData.writeback) : null,
        dirty: memData.dirty !== null ? bytesToMb(memData.dirty) : null,

        memoryLayout: memLayoutData.map((layout) => ({
            size: bytesToMb(layout.size),
            type: layout.type,

            formFactor: layout.formFactor,
            manufacturer: layout.manufacturer,

            partNum: layout.partNum,
            serialNum: layout.serialNum,

            bank: layout.bank,

            voltageConfigured: layout.voltageConfigured,
            voltageMin: layout.voltageMin,
            voltageMax: layout.voltageMax,
        })),
    };
    return memoryInfo;
}
