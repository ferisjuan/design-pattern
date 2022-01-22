// The Database class defines the `getInstance` method that lets
// clients access the same instance of a database connection
// throughout the program.
class Database {
    // The field for storing the singleton instance should be
    // declared static.
    private static instance: Database

    // The singleton's constructor should always be private to
    // prevent direct construction calls with the `new`
    // operator.
    private constructor() {
        // Some initialization code, such as the actual
        // connection to a database server.
    }

    // The static method that controls access to the singleton
    // instance.
    public static getInstance() {
        if (!Database.instance) Database.instance = new Database()

        return Database.instance
    }

    // Finally, any singleton should define some business logic
    // which can be executed on its instance.
    public someBusinessLogic() {
        console.log('\nFrom Database: I am doing something important\n');
    }
}

export const database = Database.getInstance()
