<template>
     <UserPage_Header />

     <div class="title" style="padding-top: 60px;">
        <h2>NEW ARRIVE</h2>
        <ListBook />
     </div>

     <div class="title" style="padding-top: 30px;">
        <h2>NHAN VAT KIET</h2>
        <ListBook />
     </div>
</template>

<script>
import UserPage_Header from '@/components/UserPage_Header.vue';
import ListBook from '@/components/ListBook.vue';
    export default {
        components: {
            UserPage_Header,
            ListBook,
        }

    };
</script>

<style>
</style>