let units = 600;
let bill;

if (units <= 200) {
    bill = units * 3;
} 
else if (units <= 400) {
    bill = (200 * 3) + ((units - 200) * 5);
} 
else {
    bill = (200 * 3) + (200 * 5) + ((units - 400) * 8);
}

console.log("Total Units: " + units);
console.log("Electricity Bill: ₹" + bill);