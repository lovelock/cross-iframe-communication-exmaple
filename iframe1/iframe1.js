window.onload = function () {
	var btn = document.getElementById('send');

    function sendMessage(e) {
        e.preventDefault();
        var message_to_send = document.getElementById("message_to_send").value;

        window.parent.postMessage(message_to_send, "http://container.unixera.com");
    }

    addEventListener('click', sendMessage, false);
}
