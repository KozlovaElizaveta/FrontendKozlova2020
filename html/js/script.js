let counter = 0

    function add_to_cart(){
        if (counter != 0) {
          counter++;
          let k = document.getElementById("cart");
          k.innerHTML = counter;
        }
        else{
          counter++;
          let k = document.getElementById("cart");
          if (counter == 1) {
            k.classList.remove("hide");
            k.classList.add("show");
          }
        }
      }




      

