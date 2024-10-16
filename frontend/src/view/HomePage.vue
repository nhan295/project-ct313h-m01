<template>
     
   <HomePage_Header />

     <div class="title" style="padding-top: 60px;">
        <h2>NEW ARRIVE</h2>
        <ListBook />
     </div>

     <div class="title" style="padding-top: 30px;">
        <h2>ROMANTIC</h2>
        <ListBook />
     </div>

     <div class="title" style="padding-top: 30px;">
        <h2>ADVANTURE</h2>
        <ListBook />
     </div>
    
</template>

<script>
import HomePage_Header from '@/components/HomePage_Header.vue';
import ListBook from '@/components/ListBook.vue';
    export default {
        components: {
            HomePage_Header,
            ListBook,
        }

    };
</script>