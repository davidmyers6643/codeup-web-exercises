$(function () {
    $('#playButton').click(function () {
        $('#playOutput').text($('#playInput').val());
    });
// $('p').css('width', '700px');
$('.codeup').css('border', '1px solid red');
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

$('#title').click(function () {
    $(this).css('font-size', '130px').css('background-color', 'yellow');
});

$('li').dblclick(function () {
    $(this).css('background', 'yellow');
});
    $('p').dblclick(function () {
        $('p').css('background-color', 'salmon').css('font-size', '18px');
    });
$('li').hover(function () {
    $(this).css('color', 'red');
}, function() {
  $(this).css('color', 'black');
});

alert($('h1').text());

// window.onload = function() {
    // alert( 'The page has finished loading!' );
// };
});