let counter = 0

      function add_to_cart(){
          counter++;
          let k = document.getElementById("cart");
          k.innerHTML = counter;
      }


/*
var counter = 0;
var basketElement = document.getElementById('basket');
var itemsList = document.getElementById('itemsList');
var popup = document.getElementById('popup');

var items = [];

function addItemToCart(title, price, id) {   
  counter++;
  basketElement.innerText = counter;
  
  let isItemExist = false;
  
  for (let i=0; i< items; i++) {
  }
  if (isItemExist) {
  } else {
    items.push({
      title: title,
      price: price,
      id: id,
      count: 1  
    });
  }
  
  updatePopupData();
}


function updatePopupData() {
  for(let i = 0; i < items.length; i++) {
    basketItem.classList.add('basket-item'); 
    basketItem.innerText = items[i].title;  
  }
}

function openPopup() {
  popup.style.visibility = 'visible';
}

*/












