"use strict";
(function(){
    //
    //
    var students = ['Xavier', 'Charles', 'Jillian',
    'Vincent', 'Matthew', 'Don', 'Stephen', 'Ruusa'];
    //
    // for (var i = 0; i < students.length; i++) {
    //     console.log(students[i]);
    // }
    // var greet = function(name) {
    //     var greeting = 'Hello, ' + name + '!';
    //     console.log(greeting);
    // }
    students.forEach(function (name) {
      var greeting = 'hello ' + name + '!';
      console.log(greeting);
    });
    // var yell = function() {
    //     console.log('Hey!');
    //     }
    //     console.log(yell());
    //     console.log(yell);
    //
    // greet(students[0]);
    // greet(students[1]);
    // greet(students[2]);
    // greet(students[3]);
    // greet(students[4]);
    // greet(students[5]);
    // greet(students[6]);
    // greet(students[7]);
    //
    // console.log(students);
    //
    // var grades = [99, 82, 88, 91, 67, 95];
    // var answers = [true, true, false, false,];
    // var cities = ['san Antonio', 'Austin', 'Dalles', 'Houston'];
    // var stuff = [74, 'bazooka', false, [1, 'something']];
    // console.log(stuff);
    // console.log(students[0]);
    // console.log(students[students.length -1]);
    //
    //
    //
    // for (var i = 0; i < students.length; i++) {
    //     console.log(students[i]);
    // }

//
//
//     var sanAntonio = 'San Antonio';
//     var austin = 'Austin';
//     var dallas = 'Dallas';
//     var houston = 'Houston';
//     var texasCities = [sanAntonio, austin, dallas, houston];
//
//     for (var i = 0; i < texasCities.length; i++) {
//         console.log(texasCities[i]);
//     }


    var pringles = 'Pringles';
    var chewie = 'Chewie';
    var scout = 'Scout';
    var nanners = 'Nanners';
    var myersPets = [pringles, chewie, scout, nanners];

    for (var i = 0; i < myersPets.length; i++) {
        console.log(myersPets[i]);
    }

//
//     var batonRouge = 'Baton Rouge';
//     var capitalCities = [austin, batonRouge];
//     var citiesWith2Words = [sanAntonio, batonRouge];
//
//     console.log(texasCities);
//     console.log(capitalCities);
//     console.log(citiesWith2Words);
//
//
//
// var ourArray = [];
// console.log(ourArray);
//
//
//
// var name = 'Daniel';
// var firstInitial = name[1];
// var lastLetter = name[name.length -2];
// console.log(lastLetter, firstInitial);


})();