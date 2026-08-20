interface Uptime {
    years: number;
    months: number;
    weeks: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function formatUptime(uptime: number): Uptime {
    const years = Math.floor(uptime / (3600 * 24 * 365));
    const months = Math.floor((uptime % (3600 * 24 * 365)) / (3600 * 24 * 30));
    const weeks = Math.floor((uptime % (3600 * 24 * 30)) / (3600 * 24 * 7));
    const days = Math.floor((uptime % (3600 * 24 * 30)) / (3600 * 24));
    const hours = Math.floor((uptime % (3600 * 24)) / 3600);
    const minutes = Math.trunc(Math.floor((uptime % 3600) / 60));
    const seconds = Math.floor(uptime % 60);
    return {
        years,
        months,
        weeks,
        days,
        hours,
        minutes,
        seconds,
    } as Uptime;
}

export function mbToGb(mb: number): number {
    return (mb / 1024).toFixed(2) as unknown as number;
}
