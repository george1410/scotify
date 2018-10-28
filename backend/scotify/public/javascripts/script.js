$(function () {
    $('form').submit(function (e) { 
        e.preventDefault();
        var inputText = $('#input-text').val();

        data = {
            text: inputText
        };

        $.getJSON('/translate', data, (data) => {
                console.log(data);
                $('#output-text').text(JSON.stringify(data));
            }
        );
    });
});