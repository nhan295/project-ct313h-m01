import { ref } from 'vue';

let productItems = ref([]);

export function useProducts() {
  async function getProductItems() {
    // http://localhost:5173/api/products -> http://localhost:3000/products
    let result = await fetch('/api/products');
    productItems.value = await result.json();
  }

  return {
    productItems,
    getProductItems
  };
}
