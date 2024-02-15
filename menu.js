// Lavet af Cecilie Kruse Fyhn Knudsen

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


// Her er vores onclick funktioner til at vise vores content
function drop() {
    let damedrop = document.getElementById("dame");
    if (damedrop.style.display == "block") {
        damedrop.style.display = "none";
    } else {
        document.getElementById('dame').innerHTML = dameoptions;
        damedrop.style.display = "block";
    }
  }

function drop2() {
    let herredrop = document.getElementById("herre");
    if (herredrop.style.display == "block") {
        herredrop.style.display = "none";
    } else {
        document.getElementById('herre').innerHTML = options; 
        herredrop.style.display = "block";

    }
}

function drop3() {
    let kidsdrop = document.getElementById("kids");
    if (kidsdrop.style.display == "block") {
        kidsdrop.style.display = "none";
    } else {
        document.getElementById('kids').innerHTML = options; 
        kidsdrop.style.display = "block";
    }
}

// Her er array og loop 

let kategori =['Trøjer', 'Bukser', 'Sko', 'Accessories']; 
let options = ""; 
for (var i=0; i < kategori.length;++i) { 
    options += '<a href="#">' + kategori[i] + "</a>"
}

// Ny array til dame - de skal jo også købe kjoler 

let damekategori =['Trøjer', 'Kjoler', 'Bukser', 'Sko', 'Accessories']; 
let dameoptions = ""; 
for (var i=0; i < damekategori.length;++i) { 
    dameoptions += '<a href="#">' + damekategori[i] + "</a>"
}

