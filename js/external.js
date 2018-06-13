console.log('"Hello from external JavaScript"');

alert('Welcome to my Website');

var userInput = prompt('What is your favorite color?');
alert('WOW, my favorite color is ' + userInput + ' as well.');


var rentalPerDayDollars = prompt("what is the daily rental rate?");


var littleMermaidDays = prompt('How many days did you  want to rent Little Mermaid?');
console.log(littleMermaidDays);

var brotherBearDays = prompt('How many days did you  want to rent Bother Bear?');
console.log(brotherBearDays);

var herculesDays = prompt('How many days did you  want to rent Hercules?');
console.log(herculesDays);

var totalRentalCost =
    (parseInt(littleMermaidDays)
        + parseInt(brotherBearDays)
        + parseInt(herculesDays))
    * parseInt(rentalPerDayDollars)
console.log(totalRentalCost);

var totalRentalDays = parseInt(littleMermaidDays)
    + parseInt(brotherBearDays)
    + parseInt(herculesDays)

alert('Your total cost for ' + (totalRentalDays) + ' days of rental is $'  +  (totalRentalCost));





