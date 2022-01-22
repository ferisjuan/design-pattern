class Counter {
    private static instance: Counter
    private count = 0

    private constructor() {}

    public static getInstance(): Counter {
        if (!Counter.instance) {
            Counter.instance = new Counter()
        }

        return Counter.instance
    }

    public getCount(): number {
        return this.count
    }

    public increment(): void {
        this.count++
    }

    public decrement(): void {
        this.count--
    }
}

const counter = Counter.getInstance()
const counter2 = Counter.getInstance()

if (counter === counter2) {
    console.log('🚀🚀🚀 ~ Singleton works💪!!')
} else {
    console.log('🚀🚀🚀 ~ Singleton failed💩')
}

export { counter }
