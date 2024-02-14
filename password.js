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

//matchende adgandskode
document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('psw');
    var repeatPasswordInput = document.getElementById('psw-repeat');
  
    //event listener for hver gang tasten løftes (keyup)
    passwordInput.addEventListener('keyup', checkPasswordMatch);
    repeatPasswordInput.addEventListener('keyup', checkPasswordMatch);
});


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


//login og bliv member knap fungerer
document.addEventListener('DOMContentLoaded', function () {
    // Find knapperne
    var signupButton = document.querySelector('.signupbtn');
    var loginButton = document.querySelector('.cancelbtn');

    //event listeners til knapperne
    signupButton.addEventListener('click', function (event) {
        event.preventDefault(); // Forhindrer standard formularindsendelse
        handleSignup();
    });

    loginButton.addEventListener('click', function (event) {
        alert('Log ind-knappen blev klikket.');
    });
});

function handleSignup() {
    //når formularen er gyldig, fortsættes den med at sende eller udføre andre handlinger
    alert('Brugeren er blevet tilmeldt!');
}

//hvis ikke alle felter er udfyldt vil der komme en popmeddelse
function handleSignup() {
    var nameInput = document.getElementById('navn');
    var nicknameInput = document.getElementById('nickname');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('psw');
    var repeatPasswordInput = document.getElementById('psw-repeat');

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

// Hjælpefunktion til at kontrollere, om et inputfelt er tomt
function isEmpty(input) {
    return input.value.trim() === '';
}