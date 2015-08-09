window.onload = function () {
	var msg = document.getElementById('message');
    var btn = document.getElementById("send");

	function receiveMessage(e) {
        console.log(e.data);
		if (e.origin !== 'http://container.unixera.com') {
			return;
		}

		msg.innerHTML = e.data;
	}

    function sendMessage() {
        var message_to_send = document.getElementById("message_to_send").value;
        window.parent.postMessage(message_to_send, "http://container.unixera.com");
    }

    btn.addEventListener('click', sendMessage, false);
    addEventListener('message', receiveMessage, false);
}
