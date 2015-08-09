window.onload = function () {
	var message = document.getElementById('message');

	function receiveMessage(e) {
		if (e.origin !== 'http://iframe1.unixera.com') {
			return;
		}

		message.innerHTML = e.data;
	}

	if (window.addEventListener) {
		addEventListener('message', receiveMessage, false);
	} else {
		attachEvent('onmessage', receiveMessage);
	}
}