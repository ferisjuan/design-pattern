import { Context } from './context/context'
import { ConcreteStrategyAdd } from './strategies/add'
import { ConcreteStrategySubstract } from './strategies/substract'
import { ConcreteStrategyMultiply } from './strategies/multiply'

// El código cliente elige una estrategia concreta y la pasa al
// contexto. El cliente debe conocer las diferencias entre
// estrategias para elegir la mejor opción.
const context = new Context(new ConcreteStrategyAdd())

context.executeStrategy(5, 8)

context.setStrategy(new ConcreteStrategySubstract())
context.executeStrategy(5, 8)

context.setStrategy(new ConcreteStrategyMultiply())
context.executeStrategy(5, 8)
