window.onload = function () {
    var receiver = document.getElementById('receiver').contentWindow;
    var btn = document.getElementById('send');

    function sendMessage(e) {
        e.preventDefault();
        console.log('sending message from container to iframe2');

        var message_to_send = document.getElementById('message_to_send').value;
        receiver.postMessage(message_to_send, 'http://iframe2.unixera.com');
        console.log('sent message from container to iframe2');
    }

    btn.addEventListener('click', sendMessage);
}
