// PART 1: SHOPPING DATA

// Rice
const riceName = "Rice";
const ricePrice = 2500;
const riceQuantity = 2;

const riceTotal = ricePrice * riceQuantity;

// Sugar
const sugarName = "Sugar";
const sugarPrice = 1800;
const sugarQuantity = 3;

const sugarTotal = sugarPrice * sugarQuantity;

// Cooking Oil
const oilName = "Cooking Oil";
const oilPrice = 6500;
const oilQuantity = 1;

const oilTotal = oilPrice * oilQuantity;

// Bread
const breadName = "Bread";
const breadPrice = 1200;
const breadQuantity = 2;

const breadTotal = breadPrice * breadQuantity;

// Milk
const milkName = "Milk";
const milkPrice = 1500;
const milkQuantity = 4;

const milkTotal = milkPrice * milkQuantity;

// Calculate the subtotal
const subtotal =
    riceTotal +
    sugarTotal +
    oilTotal +
    breadTotal +
    milkTotal;

console.log("Subtotal:", subtotal, "RWF");
// PART 2: DISCOUNT, VAT, AND FINAL TOTAL

let discount = 0;

// Check whether the customer qualifies for a discount
if (subtotal >= 20000) {
    discount = subtotal * 0.10;
}

// Calculate the amount after discount
const amountAfterDiscount = subtotal - discount;

// Calculate VAT at 18%
const vat = amountAfterDiscount * 0.18;

// Calculate the final total
const finalTotal = amountAfterDiscount + vat;

console.log("Subtotal:", subtotal, "RWF");
console.log("Discount:", discount, "RWF");
console.log("VAT:", vat, "RWF");
console.log("Final Total:", finalTotal, "RWF");
// PART 3: DATA TYPES AND TYPE CONVERSION

const customerName = "aline UWASE";
const customerAge = "22";
const amountPaid = "30000";
const isMember = true;

// Display data types before conversion
console.log("Age before conversion:", typeof customerAge);
console.log("Amount paid before conversion:", typeof amountPaid);

// Convert strings into numbers
const ageNumber = Number(customerAge);
const paymentNumber = Number(amountPaid);

// Display data types after conversion
console.log("Age after conversion:", typeof ageNumber);
console.log("Amount paid after conversion:", typeof paymentNumber);

// Format the customer's name
const formattedName = customerName
    .toLowerCase()
    .replace(/\b\w/g, letter => letter.toUpperCase());

console.log("Customer Name:", formattedName);

// Generate initials
const nameParts = formattedName.split(" ");

const initials =
    nameParts[0][0] + "." +
    nameParts[1][0] + ".";

console.log("Initials:", initials);

// Check membership
console.log("Is the customer a member?", isMember);
// Check whether the customer qualifies for the standard discount
const eligibleForDiscount = subtotal >= 20000;

console.log("Eligible for discount:", eligibleForDiscount);

// Calculate the customer's remaining balance
const change = paymentNumber - finalTotal;

console.log("Change:", change, "RWF");
// PART 4: FORMATTED SHOPPING RECEIPT

// Format money with commas and two decimal places
function formatMoney(amount) {
    return amount.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

console.log("========================================");
console.log("          SMART SHOP RECEIPT");
console.log("========================================");

console.log(`Customer: ${formattedName}`);
console.log(`Initials: ${initials}`);
console.log(`Membership: ${isMember ? "Active" : "Inactive"}`);

console.log("----------------------------------------");
console.log("Item          Qty       Total (RWF)");
console.log("----------------------------------------");

console.log(
    `${riceName.padEnd(14)}${String(riceQuantity).padEnd(10)}${formatMoney(riceTotal)}`
);

console.log(
    `${sugarName.padEnd(14)}${String(sugarQuantity).padEnd(10)}${formatMoney(sugarTotal)}`
);

console.log(
    `${oilName.padEnd(14)}${String(oilQuantity).padEnd(10)}${formatMoney(oilTotal)}`
);

console.log(
    `${breadName.padEnd(14)}${String(breadQuantity).padEnd(10)}${formatMoney(breadTotal)}`
);

console.log(
    `${milkName.padEnd(14)}${String(milkQuantity).padEnd(10)}${formatMoney(milkTotal)}`
);

console.log("----------------------------------------");

console.log(`Subtotal:          ${formatMoney(subtotal)} RWF`);
console.log(`Discount:          ${formatMoney(discount)} RWF`);
console.log(`VAT (18%):         ${formatMoney(vat)} RWF`);

console.log("----------------------------------------");

console.log(`FINAL TOTAL:       ${formatMoney(finalTotal)} RWF`);
console.log(`Amount Paid:       ${formatMoney(paymentNumber)} RWF`);

if (change >= 0) {
    console.log(`Change:            ${formatMoney(change)} RWF`);
} else {
    console.log(`Balance Due:       ${formatMoney(Math.abs(change))} RWF`);
}

console.log("========================================");
console.log("       Thank you for shopping!");
console.log("========================================");
/*
PART 5: THEORY QUESTIONS

1. What is the difference between let and const?

Answer:
let declares a variable whose value can be reassigned.
const declares a variable that cannot be reassigned.


2. What is the difference between == and ===?

Answer:
== compares values and may convert their data types.
=== compares both value and data type without type conversion.


3. Why do we convert "30000" into a number before calculations?

Answer:
Because "30000" is a string. Converting it into a number
allows JavaScript to perform mathematical calculations correctly.


4. What is the difference between adding numbers and strings?

Answer:
Adding numbers performs arithmetic addition.
Adding strings joins them together.

Example:
5 + 3 = 8
"5" + "3" = "53"


5. What is the purpose of typeof in JavaScript?

Answer:
typeof identifies the data type of a value.

Example:
typeof 25 returns "number".
typeof "Hello" returns "string".
typeof true returns "boolean".
*/