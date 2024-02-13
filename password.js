let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("psw");

eyeicon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "billeder/hide.png"; // når adgangskode er synlig er det, det åbne
    } else {
        password.type = "password";
        eyeicon.src = "billeder/view.png";
    }
};