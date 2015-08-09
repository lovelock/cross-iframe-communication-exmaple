//document.domain = "unixera.com";
window.onload = function () {
    location.href="http://iframe1.unixera.com/iframe3.html";
    parent.say();
    //frames.iframe3.sayHello();
}

function iframe2_function () {
    alert("I am from iframe2");
}

