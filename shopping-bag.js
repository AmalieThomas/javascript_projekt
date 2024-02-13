/*let size = ["XXS", "XS", "S", "M", "L/XL", "2XL", "2XL", "3XL", "4XL", "5XL"]

function addItem () {

}
*/

var x = 4

function openBag() {
  if ( x>2 ) { 
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
  }
  else {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");

  }

}