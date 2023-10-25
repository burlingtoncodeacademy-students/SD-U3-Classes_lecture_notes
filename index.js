//! Classes
/* 
        - Introduced in 2015
        - A function that helps us create objects
        - Defines a category of objects

*   Base Structure:

    class NameOfClass {
        constructor(parameter) {
            this.key = parameter
        }

        methodName(){
            ... code block
        }
    }
*/
//! Instantiating 
/* 
    - how we create an object.
*/


//! Constructor
/* 
    - Allows us to provide arguments to set values to structured keys.
    - "Constructs" our key/value pair and general shape of the object.
*/


/*
? 1    2
class Item {
?      3               4
    constructor(name,desc,price) {
?       5     6     7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

    1. Keyword to establish what type of "function"
    2. The Name of our class. Should be Pascal case.
    3. Keyword - is automatically run when the class is instantiated.
    4. The parameters for our constructed object. Established the values of the new object.
    5. Keyword - Refers to "this" specific object being created.
    6. The name of a key to our new object. (Item has 3 keys being constructed)
    7. The value for those keys (referenced by the parameters)

* keyword "new"
    - required
    - invokes our constructor within our class.
*/


/* 
*   Factory Functions
        - A function that processes data and invokes a class constructor. 
*/


//! Methods
/* 
        - target with dot notation
        - works similar as a function
*/



/* 
?       1           2
    addToInventory(newItem) {
?           3               4
        this.items.push(newItem);
        console.log('Item added!')
    }
?   5
    let dryGoods = new DeptInventory('Dry Goods');
?   6
    dryGoods.addToInventory(itemOne);

    1. Name of method
    2. This method requires a parameter to completed the task.
        - not all methods require a parameter
    3. "this" keyword references THIS object being created.
    4. Using an array method to update the items array of the object.
    5. Creating a new department based off the class.
    6. Targeting the newly created object and using a method within it to add to its item array.
*/

//! Factory Methods
/* 
    - Only reachable within the class itself
        - Not available to the object after creation
    - Target it through the class
        ex: Class.factoryMethodName([parameters]);
*/



/* 
?  1              2     
static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * 0.25);
?                    3
        return new Expense(wholesale, upcharge);
    }
?                      4
let itemToSell = Expense.addUpchargeForProfit(1);

    1. Keyword "static" binds this to just this class. Cannot be accessed anywhere else.
    2. Name of the method. This one expects an argument to be passed into it.
    3. Once the method has processed the logic, what is returned is the object creation. 
        *- "new" invokes the constructor which creates the object.
    4. Crafted a variable to hold the created object. 
        - passing in the wholesale amount of (1) as the argument to be evaluated in the factory method.
*/

//! Class Inheritance
/* 
    - Properties that are passed down into each object.
        - i.e.: methods that are built within a class. These are accessible to all objects created through that class constructor.
*/