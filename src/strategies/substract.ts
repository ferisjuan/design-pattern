import { IStrategy } from 'interfaces/strategy'

// Las estrategias concretas implementan el algoritmo mientras
// siguen la interfaz estrategia base. La interfaz las hace
// intercambiables en el contexto.
export class ConcreteStrategySubstract implements IStrategy {
    name = 'Substract'

    execute(a: number, b: number): number {
        return a - b
    }
}
