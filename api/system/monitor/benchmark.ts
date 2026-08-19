export interface BenchmarkResult {
    name: string;
    seconds: number;
}

export class Benchmark {
    private readonly startTime = performance.now();
    private readonly results: BenchmarkResult[] = [];

    constructor(private readonly logging = true) {}

    async measure<T>(name: string, fn: () => T | Promise<T>): Promise<T> {
        const start = performance.now();

        const result = await fn();

        const seconds = (performance.now() - start) / 1000;

        this.results.push({
            name,
            seconds,
        });

        if (this.logging) {
            console.log(`[Benchmark] ${name}: ${seconds.toFixed(2)}s`);
        }

        return result;
    }

    finish(): BenchmarkResult[] {
        const seconds = (performance.now() - this.startTime) / 1000;

        this.results.unshift({
            name: "total",
            seconds,
        });

        if (this.logging) {
            console.log(`[Benchmark] TOTAL: ${seconds.toFixed(2)}s`);
        }

        return this.results;
    }
}
