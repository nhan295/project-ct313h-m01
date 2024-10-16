<script setup>
defineProps({
  cartItem: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <p class="cart-item--title is-inline has-text-primary-00">{{ cartItem.title }}</p>
    <div class="is-pulled-right">
      <i class="fa-solid fa-circle-arrow-up cart-item--modify"></i>
      <i class="fa-solid fa-circle-arrow-down cart-item--modify"></i>
    </div>
    <div class="cart-item--content">
      <span class="cart-item--price has-text-primary has-text-weight-bold">
        ${{ cartItem.price }} each
      </span>
      <span class="cart-item--quantity has-text-grey is-pulled-right">
        Quantity: {{ cartItem.quantity }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}
</style>
