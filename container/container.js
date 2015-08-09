window.onload = function () {
    var btn = document.getElementById("send");
    function receiveMessage(e) {
        console.log(e.origin);
        if (e.origin !== "http://iframe2.new-unixera.com") {
            return;
        }

        document.getElementById("message").innerHTML = e.data;
    }

    function sendMessage() {
        var message_to_send = document.getElementById("message_to_send").value;
        document.getElementById("receiver").contentWindow.postMessage(message_to_send, "http://iframe2.new-unixera.com");
    }

    btn.addEventListener("click", sendMessage);

    addEventListener("message", receiveMessage, false);
}
