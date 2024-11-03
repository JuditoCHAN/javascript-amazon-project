export const cart = [];

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