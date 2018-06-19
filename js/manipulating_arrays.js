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

})();