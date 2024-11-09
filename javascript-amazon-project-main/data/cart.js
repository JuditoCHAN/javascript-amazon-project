export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}]; //Normalizing the data: technique to search for all the info of the values that are in products.js... mediante productId se busca el objeto en product.js para obtener las demas propiedades


export function addToCart(productId) {
    //check if the product is already in the cart
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    //we add it to cart or increase the quantity
    if(matchingItem) {
      matchingItem.quantity++;
    } else {
        cart.push({
          productId: productId,
          quantity: 1
        });
    }
  }


  export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
      if(cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    cart = newCart;
  }