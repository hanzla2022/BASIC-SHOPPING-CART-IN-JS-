// //
let totalAmount = document.getElementById('total_amount');
let cartContainer = document.getElementById('ItemsCart');
let selectedProducts = document.getElementById('itemsSelected');
let clearItemsSection = document.getElementById('clear_section');

// HTML ELEMETNS CREATED INSIDE JS
let clearButton = document.createElement('button');
let itemSelectionCounter = document.createElement('span');
// // ASSIGNING ITEMS IN ARRAY OBJECTS

let shopItems = [
  {
    itemName: 'socks',
    itemId: 1,
    itemPrice: 20,
  },
  {
    itemName: 'jacket',
    itemId: 2,
    itemPrice: 15,
  },
  {
    itemName: 'shorts',
    itemId: 3,
    itemPrice: 30,
  },
];

let cartBox = [];

// CLEARING THE CART
function clearCart() {
  if (cartBox.length === 0) {
    alert('cart is empty');
  } else if (cartBox !== []) {
    // alert('cart is empty');
    cartBox = [];
    updateCart();
    alert('do u want to clear the cart');
  } else if (cartBox === []) {
    updateCart();
  }
}
//  ITEM SELECTION EVENT LISTENER

function addToCart(productId) {
  for (let item of shopItems) {
    if (productId === item.itemId) {
      itemSelectionCounter.classList.add('selected');
      selectedProducts.appendChild(itemSelectionCounter);
      // CLEAR BUTTON APPEND
      clearButton.textContent = 'Clear Cart X';
      clearButton.classList.add('redButton');
      clearButton.addEventListener('click', clearCart);
      clearItemsSection.appendChild(clearButton);
      // PUSHING MATCHED ID INTO EMPTY ARRAY
      cartBox.push(item);
      updateCart();
      // break;
    }
  }
}

// UPDATE CART UI

function updateCart() {
  cartContainer.innerHTML = '';
  let total = 0;
  let totalItemsSelected = 0;
  for (let selectedItem of cartBox) {
    let cartItem = document.createElement('li');
    cartItem.textContent = `${selectedItem.itemName} $${selectedItem.itemPrice}`;
    cartContainer.appendChild(cartItem);
    cartContainer.classList.add('addpadding');
    total += selectedItem.itemPrice;
    totalItemsSelected++;
    //////// REMOVING CART ELEMENTS
    // clearButton.addEventListener('click', clearCart);
  }
  itemSelectionCounter.textContent = totalItemsSelected;
  totalAmount.textContent = `Total  $${total}`;
}

//////////////////
//////////////////
////////////////// TESTING CODE
// let aniSelector = document.getElementById('animals');

// let animals = [
//   {
//     animal: 'cat',
//   },
//   {
//     animal: 'horse',
//   },
//   {
//     animal: 'parrot',
//   },
// ];
// for (let selectAnimal of animals) {
//   if (selectAnimal.animal === 'horse') {
//     aniSelector.textContent = selectAnimal.animal;
//   }
// }
