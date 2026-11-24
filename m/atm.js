let correctPin = 1234;
let enteredPin = 1234;

let balance = 10000;
let amount = 5000;

if (enteredPin === correctPin) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log("Withdrawal successful!");
        console.log("Withdrawn amount: ₹" + amount);
        console.log("Remaining balance: ₹" + balance);
    } else {
        console.log("Error: Insufficient balance!");
    }
} else {
    console.log("Error: Incorrect PIN!");
}