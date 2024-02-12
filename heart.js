document.getElementById("heart1").addEventListener("mouseover", fullHeart);

function fullHeart() {
    heart1.classList.remove("fa-regular");
    heart1.classList.add("fa-solid");
  }

  document.getElementById("heart1").addEventListener("mouseout", emptyHeart);

 function emptyHeart() {
    heart1.classList.remove("fa-solid");
    heart1.classList.add("fa-regular");
 }
