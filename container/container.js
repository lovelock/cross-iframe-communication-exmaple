window.onload = function () {
	var receiver = document.getElementById('receiver').contentWindow;
	var btn = document.getElementById('send');

	function sendMessage() {
		e.preventDefault();

		receiver.postMessage('Welcome to UnixEra.com', 'http://iframe2.unixera.com');
	}
}