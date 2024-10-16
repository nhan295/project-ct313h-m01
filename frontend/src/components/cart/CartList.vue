<script setup>
import CartListItem from './CartListItem.vue';
import { useCart } from '@/stores/useCart';

const { cartItems, cartQuantity, cartTotal, getCartItems } = useCart();

getCartItems();
</script>

<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa-solid fa-2x fa-cart-shopping"></i>
    </div>
    <p v-if="!cartItems.length" class="cart-empty-text has-text-centered has-text-primary-00">
      Add some items to the cart!
    </p>
    <ul v-if="cartItems.length > 0">
      <li v-for="cartItem in cartItems" :key="cartItem.id" class="cart-item">
        <CartListItem :cartItem="cartItem" />
      </li>
    </ul>
    <div class="cart-details">
      <p class="has-text-primary-00">
        Total Quantity:
        <span class="has-text-weight-bold">{{ cartQuantity }}</span>
      </p>
      <p class="cart-remove-all--text has-text-primary-00">
        <i class="fa-solid fa-trash"></i>Remove all
      </p>
    </div>
    <button type="button" :disabled="!cartItems.length" class="button is-primary has-text-white">
      Checkout (<span class="has-text-weight-bold">${{ cartTotal }}</span>)
    </button>
  </div>
</template>

<style scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa-solid {
  padding-right: 5px;
}
</style>
