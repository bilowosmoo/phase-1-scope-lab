// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob"; // Declaring a global variable inside a function
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "someone";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "another person";
}
