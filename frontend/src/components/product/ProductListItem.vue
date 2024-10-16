<script setup>
import { useCart } from '@/stores/useCart';

defineProps({
  productItem: {
    type: Object,
    required: true,
  },
});

const { addCartItem } = useCart();
</script>

<template>
  <div>
    <h2 class="has-text-weight-bold has-text-primary-00">
      {{ productItem.title }}
      <span class="tag is-primary is-pulled-right has-text-white" @click="addCartItem(productItem)">
        Add to Cart
      </span>
    </h2>
    <p class="has-text-primary-00">{{ productItem.description }}</p>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa-solid fa-dollar-sign"></i> {{ productItem.price }}
    </span>
  </div>
</template>

<style scoped>
.tag {
  cursor: pointer;
}
</style>
