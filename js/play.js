$(function () {
    $('#playButton').click(function () {
        $('#playOutput').text($('#playInput').val());
    });
// $('p').css('width', '700px');
$('.codeup').css('border', '1px solid green');
//
// // alert($('#double').click(function () {
// //     alert($(this).text())
// // }));
// var contents = $('h1').html();
// alert(contents);
//

$('*').css('background-color', 'papayawhip');
$('li').css('font-size', '20px').css('background-color', 'aqua');

$('#code').css('font-Family', 'cursive').css('font-size', '25px').css('background-color', 'lightblue');

// $('#title').click(function () {
//     $(this).css('font-size', '130px').css('background-color', 'yellow');

});

$('li').dblclick(function () {
    $(this).css('background', 'yellow');
});
    $('p').dblclick(function () {
        $('p').css('background-color', '#c69653').css('font-size', '18px');
    });
$('li').hover(function () {
    $(this).css('color', 'red');
}, function() {
  $(this).css('color', 'black');
});

$('#playInput').keyup(function(event) {
    console.log(event.key);
    console.log(event.keyCode);
    if(event.key === 'd') {
        alert('That is the 1st letter in my name');
    }
});

$('#playButton').click(function () {
    $('#playInput').off();
});
alert($('h1').text());
//
// var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
//
// $(document).keydown(function(e) {
//
//     kkeys.push( e.keyCode );
//
//     if ( kkeys.toString().indexOf( konami ) >= 0 ) {
//
//         $(document).unbind('keydown',arguments.callee);
//
//         // do something awesome
//         $("body").addClass("konami");
//
//     }

// });


// window.onload = function() {
    // alert( 'The page has finished loading!' );

// };
// });

// $('#title').click(function () {
//     var currentColor = $(this).css('background-color');
//     if (currentColor == 'rgb(0, 255, 255') {
//         $(this).css('background-color', 'white');
//     } else {
//         $(this).css('background-color', 'cyan');
//     }
// });


