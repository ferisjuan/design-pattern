# Singleton pattern
Singleton pattern is a Creational Pattern. Singletons are classes which can be instanciated once and can be accessed globally.

**The Singleton Pattern should solves two problems** (this violates the Single Responsability Principle):
- Ensure that a class has only one (and should always be the same) instance
- Provide a global access point to said instance

## Singleton creation
- Make the default constructor private to prevent other objects use the new operator.
- Create a static creation method that acts as a constructor, it should call the private constructor to create an object and save it into an static field. The following calls return the cached object.

## Caveats
- Singletons are considered an anti-pattern and should be avoided in Javascript
- Violates the **SRP**: solves two problems at the time
- Can mask bad code. For example components who know too much of each other (strongly coupled)
- It's hard to test, many testing frameworks rely on instance creation
- The singleton object can be mutable
- In Javascript is easier to simply create an object with ```Object.freeze({...})```

### Credits
- **[Refactoring Guru](https://refactoring.guru/design-patterns/singleton)** web.
- **[Learning Patterns](https://play.google.com/books/reader?id=BnJLEAAAQBAJ&pg=GBS.PP1)** book.
