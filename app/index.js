/**
 * TODO: Assign your own values to meet the conditions below:
 * 1. Declare an object, `customer`. Initialize it with the following properties:
 *  - `firstName`
 *  - `lastName`
 *  - `id`
 *  - `phoneNumber`
 * - `email`
 *
 * All should be strings except for `id`, which should be a number.
 *
 * 2. Mutate `customer` to add another property. Name it `address`. The value should be another object (nested objects) with the following properties:
 *  - `street`
 * - `city`
 * - `state`
 * - `zipCode`
 *
 * Use strings for all of these values.
 *
 * 3. Use a template literal to `console.log` a message, "Welcome, <firstName> <lastName>!". Use the `customer` object, interpolation and dot notation to access the appropriate properties.
 *
 * 4. Create a new object, `product` (or give it a better name). Initialize it with the following properties:
 * - `name`
 * - `price`
 * - `description`
 * - `quantity`
 *
 * name and description are strings. Others are numbers.
 *
 * 5. Pretend that the customer has added 7 of the product to their cart (Insure that the value you used for 'quantity' above is over 7.).
 * You need to `log` a message to the screen that says, "Total: $<total>". Calculate the appropriate total by multiplying the price of the product by the quantity. Once again, use interpolation in your template literal.
 *
 * 6. Log a new message that prints either 'true' or 'false' to the screen depending on whether or not the customer spent over $100. Use conditional operators to accomplish this. Don't worry about the '$' symbol. Just use the number 100.
 *
 * 7. Update `product` to reflect the new quantity. In other words, the new quantity value should be 7 less than whatever you initialized it with.
 */

const { getParseTreeNode } = require("typescript");

const customer = {
  firstName: "Charles",
  lastName: "Acquah-Davis",
  id: 123,
  phoneNumber: "07565918857",
  email: "c.acquahdavis@gmail.com",
};

customer.address = {street: "46 elm green",
    city: "basildon",
    state: "essex",
    zipCode: "SS133EB"};

console.log(`Welcome, ${customer.firstName} ${customer.lastName}`);

const product = {
  name: "Bob",
  price: 9.99,
  description: "Really cool",
  quantity: 10,
};

let total = product.quantity * product.price;

console.log(`Total: ${total}`);

if total >= 100 (console.log("true"))

else (console.log("false"));

// product.quantity = product.quantity - ; unfinished

// miss read the question 6 and 7
