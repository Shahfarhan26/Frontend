let age = 25;
let ticketPrice;

if (age < 5) {
    ticketPrice = 0;
} 
else if (age <= 12) {
    ticketPrice = 100;
} 
else if (age <= 59) {
    ticketPrice = 200;
} 
else {
    ticketPrice = 150;
}

if (ticketPrice === 0) {
    console.log("Free ticket!");
} else {
    console.log("Ticket Price: ₹" + ticketPrice);
}