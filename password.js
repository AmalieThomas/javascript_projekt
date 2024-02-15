let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("psw");

eyeicon.onclick = function () {
    if (password.type === "password") {
        password.type = "text";
        eyeicon.src = "billeder/hide.png"; // når adgangskode er synlig er det, det åbne øje
    } else {
        password.type = "password";
        eyeicon.src = "billeder/view.png";
    }
};


function checkPasswordMatch() {
    var password = document.getElementById('psw').value;
    var repeatPassword = document.getElementById('psw-repeat').value;
    var passwordMatchMessage = document.getElementById('password-match-message');
  
    // Tjek om adgangskode og gentaget adgangskode er ens
    if (password === repeatPassword) {
      passwordMatchMessage.textContent = 'Adgangskode matcher.';
      passwordMatchMessage.style.color = 'green';
    } else {
      passwordMatchMessage.textContent = 'Adgangskode matcher ikke.';
      passwordMatchMessage.style.color = 'red';
    }
}

// Globale variabler, fordi det bruges i to funktioner 
let nameInput = document.getElementById('navn');
let nicknameInput = document.getElementById('nickname');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('psw');
let repeatPasswordInput = document.getElementById('psw-repeat');
//hvis ikke alle felter er udfyldt vil der komme en popmeddelse
function handleSignup() {
    if (
        isEmpty(nameInput) ||
        isEmpty(nicknameInput) ||
        isEmpty(emailInput) ||
        isEmpty(passwordInput) ||
        isEmpty(repeatPasswordInput)
    ) {
        alert('Alle felter skal udfyldes.');
        return; // Stop funktionen, hvis ikke alle felter er udfyldt
    }

    // Hvis formularen er gyldig, kan du fortsætte med at sende den eller udføre andre handlinger
    alert('Velkommen, du er nu blevet en H&N member');
}

function login() {
    if (
        isEmpty(nameInput) ||
        isEmpty(nicknameInput) ||
        isEmpty(emailInput) ||
        isEmpty(passwordInput) ||
        isEmpty(repeatPasswordInput)
    ) {
        alert('Alle felter skal udfyldes.');
        return; // Stop funktionen, hvis ikke alle felter er udfyldt
    }

    // Hvis formularen er gyldig, kan du fortsætte med at sende den eller udføre andre handlinger
    alert('Du er nu logget ind');
}

// Hjælpefunktion til at kontrollere, om et inputfelt er tomt
function isEmpty(input) {
    return input.value.trim() === '';
}

var myArray = ['Hunkøn', 'Hankøn', 'Barn', 'Kat', 'Hest', 'Nonne', 'Intetkøn', 'Prinsesse', 'Prins']
       
// Dropdown element fra DOM
var dropdown = "";
for (var i = 0; i < myArray.length; ++i) {

dropdown += '<option>' + myArray[i] + '</option>'
}
document.getElementById("valgmuligheder").innerHTML = dropdown; 