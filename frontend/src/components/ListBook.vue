<template>
    <div class="list">
        <h2>NEW ARRIVE</h2>
        <div class="list-item">
            <div v-for = "book in newarrive" :key="book.SACH_ID" >
            <img src="`./assets/${book.SACH_Anh || 'default.jpg'}`" alt="">
            <span>{{book.Sach_Ten }}</span>
            <span>{{book.Sach_GiaBan}}</span>
            </div>
        </div>

        <h2>ROMANTIC</h2>
        <div class="list-item">
            <div v-for = "book in romantic" :key="book.SACH_ID" >
            <img src="`./assets/${book.SACH_Anh || 'default.jpg'}`" alt="">
            <span>{{book.Sach_Ten }}</span>
            <span>{{book.Sach_GiaBan}}</span>
            </div>
        </div>

        <h2>ADVENTURE</h2>
        <div class="list-item">
            <div v-for = "book in adventure" :key="book.SACH_ID" >
            <img src="`./assets/${book.SACH_Anh || 'default.jpg'}`" alt="">
            <span>{{book.Sach_Ten }}</span>
            <span>{{book.Sach_GiaBan}}</span>
            </div>
        </div>

        <h2>ECONOMIC</h2>
        <div class="list-item">
            <div v-for = "book in adventure" :key="book.SACH_ID" >
                <img src="`./assets/${book.SACH_Anh || 'default.jpg'}`" alt="">
                <span>{{book.Sach_Ten }}</span>
                <span>{{book.Sach_GiaBan}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newarrive: [],
      romantic: [],
      adventure: [],
      economic: []
    };
  },
  methods: {
    fetchBooks() {
      axios.get('http://localhost:3000/api/books')
        .then(response => {
          const allBooks = response.data;
          // Filter books for different categories based on some condition, e.g., by date or category
          this.newarrive = allBooks.filter(book => /* your condition for new arrive */);
          this.romanticBooks = allBooks.filter(book => /* your condition for romantic */);
          this.adventure = allBooks.filter(book => /* your condition for new arrive */);
          this.economic = allBooks.filter(book => /* your condition for romantic */);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }
  },
  mounted() {
    this.fetchBooks();
  }
};
</script>

<style scoped>

    .list {
        display: flex;
        justify-content: space-around;
    }

    .list-item {
        display: flex;
        height: 100%;
        /* margin: auto 0; */
        align-items: center;
        flex-direction: column;
        border: 1px solid rgb(119, 138, 150);
        border-radius: 4px;
        box-shadow: inset;
    }
    .list-item img {
        width: 40%;
    }
</style>
