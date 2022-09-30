/* // use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart
} */

const addDataToLs = (id) => {
  let shoppingCart;
  let storedData = localStorage.getItem("shoping-cart");
  if (storedData) {
    shoppingCart = JSON.parse(storedData);
  } else {
    shoppingCart = {};
  }

  let quantity = shoppingCart[id];

  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shoping-cart", JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
  let shoppingCart;
  let storedData = localStorage.getItem("shoping-cart");
  if (storedData) {
    shoppingCart = JSON.parse(storedData);
  } else {
    shoppingCart = {};
  }
  return shoppingCart;
};

export { addDataToLs, getShoppingCart };
