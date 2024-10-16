import { ref, computed } from 'vue';

let cartItems = ref([]);

let cartQuantity = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.quantity, 0);
});

let cartTotal = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
});

export function useCart() {
  async function getCartItems() {
    let result = await fetch('/api/cart');
    cartItems.value = await result.json();
  }

  async function addCartItem(product) {
    let result = await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    });

    cartItems.value = await result.json();
  }

  return { cartItems, cartQuantity, cartTotal, getCartItems, addCartItem };
}
