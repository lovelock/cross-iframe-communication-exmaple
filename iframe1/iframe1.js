window.onload = function () {
	var msg = document.getElementById('message');

	function receiveMessage(e) {
        console.log(e.data);
		if (e.origin !== 'http://container.unixera.com') {
			return;
		}

		msg.innerHTML = e.data;
	}

    function globalFunction() {
        alert("I received message to iframe2");
    }

    addEventListener('message', receiveMessage, false);
}
