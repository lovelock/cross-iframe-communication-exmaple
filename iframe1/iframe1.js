window.onload = function () {
    document.domain = "unixera.com";
	var msg = document.getElementById('message');
    var receiver = top.document.getElementById("iframe2").contentWindow;
    var btn = document.getElementById("send");

	function receiveMessage(e) {
        console.log(e.data);
		if (e.origin !== 'http://iframe2.unixera.com') {
			return;
		}

		msg.innerHTML = e.data;
	}

    function sendMessage(e) {
        var message_to_send = document.getElementById("message_to_send").value;
        receiver.postMessage(message_to_send, "http://iframe2.unixera.com");
    }

    btn.addEventListener("click", sendMessage);

    window.addEventListener('message', receiveMessage, false);
}
