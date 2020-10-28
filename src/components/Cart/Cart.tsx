import React from 'react';

function Cart(): React.ReactElement {
  return (
    <div className="cart">
      <div className="cart__items">
        ádasdas
        {/* {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )} */}
      </div>
      {/* <CustomButton onClick={hideCart}>GO TO CHECKOUT</CustomButton> */}
    </div>
  );
}

export default Cart;
