<script setup>
import ProductListItem from './ProductListItem.vue';
import { useProducts } from '@/stores/useProducts';

const { productItems, getProductItems } = useProducts();

getProductItems();
</script>

<template>
  <div id="products" class="box has-background-white">
    <div class="products--header has-text-centered">
      <i class="fa-solid fa-2x fa-circle-user"></i>
    </div>
    <div class="product-list">
      <div v-for="productItem in productItems" :key="productItem.id" class="product-list--item">
        <ProductListItem :productItem="productItem" />
      </div>
    </div>
    <div class="product-count has-text-right has-text-primary-00">
      <span class="has-text-weight-bold"># of products: {{ productItems.length }}</span>
    </div>
  </div>
</template>

<style scoped>
.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 10px 0;
}
</style>
