// Open & close sidebar 
function opensidebar() {
    document.getElementById('sidebar').style.left = '0px';
    document.getElementById('overlay').style.display = 'block';
    console.log = "menu is open"
  }

  function luksidebar() {
    document.getElementById('sidebar').style.left = '-350px';
    document.getElementById('overlay').style.display = 'none';
  }


// Dropdown funktioner
  function drop() {
    let damedrop = document.getElementById("dame");
    if (damedrop.style.display == "block") {
        damedrop.style.display = "none";
    } else {
        damedrop.style.display = "block";
    }
}

function drop2() {
    let herredrop = document.getElementById("herre");
    if (herredrop.style.display == "block") {
        herredrop.style.display = "none";
    } else {
        herredrop.style.display = "block";
    }
}

function drop3() {
    let kidsdrop = document.getElementById("kids");
    if (kidsdrop.style.display == "block") {
        kidsdrop.style.display = "none";
    } else {
        kidsdrop.style.display = "block";
    }
}