export function bytesToMb(bytes: number): number {
    return parseFloat((bytes / (1024 * 1024)).toFixed(3));
}

export function mbToGb(mb: number): number {
    return parseFloat((mb / 1024).toFixed(3));
}

export function bytesToGb(bytes: number): number {
    return parseFloat((bytes / (1024 * 1024 * 1024)).toFixed(3));
}
