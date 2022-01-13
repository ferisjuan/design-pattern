import { IStrategy } from 'interfaces/strategy.interface'

// El contexto define la interfaz de interés para los clientes.
export class Context {
    // El contexto mantiene una referencia a uno de los objetos
    // de estrategia. El contexto no conoce la clase concreta de
    // una estrategia. Debe trabajar con todas las estrategias a
    // través de la interfaz estrategia.
    private strategy

    // Normalmente, el contexto acepta una estrategia a través
    // del constructor y también proporciona un setter
    // (modificador) para poder cambiar la estrategia durante el
    // tiempo de ejecución.
    public setStrategy(strategy: IStrategy) {
        this.strategy = strategy
    }

    // El contexto delega parte del trabajo al objeto de
    // estrategia en lugar de implementar varias versiones del
    // algoritmo por su cuenta.
    public executeStrategy(a: number, b: number): number {
        console.log(
            `Nombre de la estrategia: ${this.strategy.name}\n`,
            `Resultado: ${this.strategy.execute(a, b)}\n`
        )

        return this.strategy.execute(a, b)
    }

    constructor(strategy: IStrategy) {
        this.strategy = strategy
    }
}
