import React, { Component } from 'react';
import CartedProduct from '../components/CartedProduct';

class ShoppingCart extends Component {
  render() {
    if (localStorage.length === 0) {
      return (
        <div>
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        </div>
      );
    }
    const productsInCart = JSON.parse(localStorage.products);
    return (
      <div>
        <p>
          Quantidade de itens no carrinho:
          { productsInCart.length }
        </p>
        <ul>
          {productsInCart.map((product, index) => (
            <CartedProduct key={ index } product={ product } />))}
        </ul>
        <button type="button">Finalizar Compra</button>
      </div>
    );
  }
}

export default ShoppingCart;
