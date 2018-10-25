$(function () {
    $('form').submit(function (e) { 
        e.preventDefault();
        console.log('submitted form');
    });
});