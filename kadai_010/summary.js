$(function () {
    $('#change-color').on('click', function() {
        $('#target').toggleClass('active-color');
    });
    $('#change-text').on('click', function() {
        if($('#target').text() === 'こんにちは！') {
            $('#target').text('HELLO!');
        } else if($('#target').text() === 'HELLO!') {
            $('#target').text('你好!');
        } else {$('#target').text('こんにちは！');
        }
    });
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});