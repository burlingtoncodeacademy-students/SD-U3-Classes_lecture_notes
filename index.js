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
class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
one.name = 'sample';
// console.log(one);


//! Constructor
/* 
    - Allows us to provide arguments to set values to structured keys.
    - "Constructs" our key/value pair and general shape of the object.
*/

class Item {
    constructor(name,desc,price) {
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

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

let itemZero = new Item();
// console.log(itemZero);
let itemOne = new Item('beans','canned',0.89);
// console.log(itemOne);
// let brokenItem = Item();
// console.log(brokenItem);

//! Factory Functions
/* 
        - A function that processes data and creates our object. 
*/

let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(item,desc,cost) {
    return new Item(item,desc,cost);
}

let useFunction = processItem(iType,iDesc,iCost);
// console.log(useFunction);

//! Methods
/* 
        - target with dot notation
        - works similar as a function
*/

class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; // making a default value for this key.
    }

    addToInventory(newItem) {
        this.items.push(newItem);
        console.log('Item Added!');
    }
}

let dryGoods = new DeptInventory('Dry Goods');
let itemTwo = new Item('corn','canned',0.79);

dryGoods.addToInventory(itemTwo);
dryGoods.addToInventory(itemOne);
// console.log(dryGoods);

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

class Expense {
    static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }

    constructor(w,s) {
        this.purchased_price = w;
        this.sell_at = s;
        this.sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_at;

        this.sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
console.log(itemToSell);
itemToSell.addTax(.07);
console.log(itemToSell);

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