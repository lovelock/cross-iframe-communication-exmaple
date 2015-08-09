window.onload = function () {
    function receiveMessage(e) {
        console.log(e.origin);
        if (e.origin !== "http://iframe1.unixera.com") {
            return;
        }

        document.getElementById("message").innerHTML = e.data;
    }

    addEventListener("message", receiveMessage, false);
}
