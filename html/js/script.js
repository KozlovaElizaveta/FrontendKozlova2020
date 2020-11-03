let counter = 0
let counterOfGoods = 1;
let arrayGoods = 
[
  ["Циркуль Berlingo 'Standard' металлический, 135мм, блистер", 134.00],
  ["Ручка маслян. LOREX GRADIENT. SWEET", 44.60],
  ["Карандаш механический Berlingo 'X', 0,5мм, с ластиком, ассорти", 57.42],
  ["Карандаш механический MunHwa 'MP Gold Trima' 0,5мм", 144.50],
  ["Набор текстовыделителей Berlingo 'Textline HL300', 4цв., 1-5мм, европодвес", 218.60],
  ["Набор маркеров для декорирования Centropen '2690' золото,серебро, 2шт., 1,5-3мм", 281.60],
  ["Акварель Гамма 'Классическая', медовая, 32 цвета, без кисти, пластик.", 274.70],
  ["Кисть белка Гамма, круглая №02", 80.00]
]

    function add_to_cart(){
        if (counter != 0) {
          counter++;
          let popUp = document.getElementById("bubblePop");
          popUp.innerHTML = counter;
        }
        else{
          counter++;
          let popUp = document.getElementById("bubblePop");
          if (counter == 1) {
            popUp.classList.remove("hide");
            popUp.classList.add("show");
          }
          popUp.innerHTML = counter;
        }
      }





