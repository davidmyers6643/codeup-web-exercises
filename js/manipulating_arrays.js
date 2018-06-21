"use strict";
(function(){

    var langs = ['Javascript', 'CSS', 'HTML', 'Java'];


console.log(langs[0]);

langs.unshift('Groovy!');

console.log(langs[0]);

langs.push('PHP');

langs.shift();
langs.shift();

langs.pop();

// langs[0] = 'SCSS';

// langs.push(prompt('Enter your favorite programming language.'));


langs.forEach( function (lang, index) {
    console.log('element ' + lang + ' index ' + index);



});

    var todoList = [' Wake-up kids,', ' Take kids to school,', ' Drive to Codeup,', ' Code, Code, Code!!!'];

    console.log('My todo list:' + todoList);



    console.log('Completing the last item: ' + todoList[todoList.length - 1]);


    var removedItem = todoList.pop();


    console.log('Task complete: ' + removedItem);

    console.log(todoList);

    // --------------------------------------------------------

    console.log('Completing the first item: ' + todoList[0]);

    var doneItem = todoList.shift();

    console.log('Task complete: ' + doneItem);

    console.log(todoList);

    // ---------------------------------------------------------

    var pets = ['Pringles',
                'Chewie',
                'Scout',
                'Nanners'
    ];
    //
    // for (var i = 0; i < pets.length; i += 1) {
    //         console.log(pets[i]);
    // }

    // pets.forEach(function(furType, color, species) {
    //     console.log(furType, color, species);
    // });
// -------^^^^keep singular^^^^^----------------------------
//     var index = pets.indexOf('Chewie');
//     console.log(index);
//
//
//     index = pets.indexOf('Nanners');
//     console.log(index);
//
//
//     index = pets.lastIndexOf('Nanners');
//     console.log(index);



//
// function bathed(arr){
//     var bathedPets = arr.slice(arr.length - 0);
//     console.log(bathedPets);
// }
// console.log(bathed());
//
// pets.sort().reverse().reverse();
// console.log(pets);
//
// var names = ['Bob', 'Sally', 'Mary'];
//
// names.split('');
// var namesArr = names.split('');
// var namesString = namesArr.join('');
// console.log(namesString);

    var phoneNumbers = '222-222-2222\n333-333-3333\n444-444-4444';

    function cleanPhoneNumbers(phoneNums) {
        var phoneNumsArr = phoneNums. split('\n');
        var cleanNumsArr = [];

        phoneNumsArr.forEach(function(phoneNum) {
            var formattedNummber = phoneNum.split('_').join('');
            cleanNumsArr.push(formattedNummber);
        });
    return cleanNumsArr;
    }
console.log(cleanPhoneNumbers(phoneNumbers));




})();