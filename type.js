window.onload = function () {
    document.getElementById('sayHelloBtn').addEventListener('click', onClick);
};
function onClick() {
    document.getElementById('helloWorldBlock').innerHTML = "<h3>hello-world</h3>";
}
