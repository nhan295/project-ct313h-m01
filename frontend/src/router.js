import { createRouter, createWebHistory } from 'vue-router';

import index from './view/index.vue';
import UserPage from './view/UserPage.vue';
import HomePage from './view/HomePage.vue';
// import Book_Cart from './components/Book_Cart.vue';
import CartPage from './view/CartPage.vue';


const routes = [
                { path: '/index', component: index},
                { path: '/HomePage', component: HomePage},
                { path: '/UserPage', component: UserPage},
                // { path: '/Book_Cart', component: Book_Cart},
                { path: '/CartPage', component: CartPage}
                
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;