<template>
   <UserPage_Header />
   <Book_Cart />
</template>

<script>
import Book_Cart from '@/components/Book_Cart.vue';
import UserPage_Header from '@/components/UserPage_Header.vue';

export default {
        components: {
            UserPage_Header,
            Book_Cart

        }

    };
</script>