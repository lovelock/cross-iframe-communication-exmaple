window.onload = function () {
	var msg = document.getElementById('message');

	function receiveMessage(e) {
        console.log(e.data);
		if (e.origin !== 'http://container.unixera.com') {
			return;
		}

		msg.innerHTML = e.data;
	}

    addEventListener('message', receiveMessage, false);
}
