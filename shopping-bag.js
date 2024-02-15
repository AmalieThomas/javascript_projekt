let selectedSize = null

/*let time = false

time = true

console.log(time)*/

function openBag() {
    if ( added == true ) { 
      let popup = document.getElementById("myPopup2");
      popup.classList.toggle("show");
    }
    else {
      let popup = document.getElementById("myPopup1");
      popup.classList.toggle("show");
      /*setTimeout(function() {
        time = false;
        console.log(time);
      }, 4000);*/
    }

    document.getElementById("shopping-bag").style.color = ""
  }
  
  let sizes = ["XXS", "XS", "S", "M", "L/XL", "2XL", "3XL", "4XL", "5XL"]
  
  function sizeToggle(element, sizes) {
  
      if(element.style.backgroundColor == "grey"){
          resetBackgroundColors()
          selectedSize = null;
      }
       
      else {
          resetBackgroundColors()
          element.style.backgroundColor = "grey";
          selectedSize = sizes;
      }
  }

  function resetBackgroundColors() {
    let sizeButtons = document.getElementsByClassName("size-button");
    for (let i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].style.backgroundColor = "";
    }
}
  
    let antalProduct = 0
  
    let pris = 551.00
  
    let leveringValue = 19.00

    let added = null
  
  
  function addToBag() {
  
      if (selectedSize != null){

          antalProduct++

          addProduct(selectedSize)

          udregn()

      }
  
      else {
          alert("vælg størrelse")
      }
  
    }
  
  function addProduct(size){
  
      let productDiv = document.createElement('div');
      productDiv.innerHTML = '<h3>Compression Shine Stirrup Pant</h3>' +'<p>Str: ' + size + '</p>' +'<p>Pris: ' + pris + ' kr</p>'+ '<p>';
  
      document.getElementById('pant').appendChild(productDiv);

      document.getElementById("shopping-bag").style.color = "red"

      added = true
  }
  
  
  function udregn(){
      let ordreValue = pris * antalProduct
  
      let ialtValue = parseInt(leveringValue + ordreValue)
    
      document.getElementById("ordre-value").innerHTML = ordreValue + " Kr";
      document.getElementById("levering-value").innerHTML = leveringValue + " Kr";
      document.getElementById("ialt-value").innerHTML = ialtValue + " Kr";
  
  }