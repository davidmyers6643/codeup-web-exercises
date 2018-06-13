console.log('"Hello from external JavaScript"');

alert('Welcome to my Website');

var userInput = prompt('What is your favorite color?');
alert('WOW, my favorite color is ' + userInput + ' as well.');

var little_mermaid_days_rented = lm_days_rented;

var brother_bear_days_rented = bb_days_rented;

var hercules_days_rented = h_days_rented;

var price_of_daily_rental = 3.00;

var lm_days_rented = prompt('How many days did you  want to rent Little Mermaid?');
console.log(lm_days_rented);

var bb_days_rented = prompt('How many days did you  want to rent Bother Bear?');
console.log(bb_days_rented);

var h_days_rented = prompt('How many days did you  want to rent Hercules?');
console.log(h_days_rented);

console.log(bb_days_rented * price_of_daily_rental)
+= (h_days_rented * price_of_daily_rental)
+= (lm_days_rented * price_of_daily_rental);


