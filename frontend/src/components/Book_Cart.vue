<template>

    <div class="cart_header">
            <h2>Shopping Cart</h2>
        </div>
    <div class="cart_page">
                
        <div class="left-content">
            <div class="image">
                <img src="../assets/cay-cam-ngot-cua-toi.jpg" alt="book">
            </div>

            <div class="cart_body">
                <div class="book_inf_cart">
                    <div class="bookname">
                        <h2>Tu tot den vi dai</h2>
                    </div>

                    <div class="amount">
                        <button @click="handlePlus">-</button>
                        <input type="text" name="amount" id="amount" value="1">
                        <button @click="handlePlus">+</button>
                    </div>

                    <div class="price">120.000</div>
                </div>
            </div>
        </div>

        <div class="right-content">
            <span><i class="fa-solid fa-trash"></i></span>

        </div>
    </div>
</template>

<style scoped>
h2{
    font-size: xx-large;
    text-align: center;
}
.cart_page{
    display: flex;
    justify-content: space-between;
    height: 200px;
    padding-top: 50px;
    border: 2px solid black;
    border-radius: 4px;
}

.cart_header{
padding-top: 70px;
}

.left-content {
    display: flex;
    width: 24%;
    justify-content: space-between;
}

.image img {
    height: 100%;
}

#amount{
    width: 70px;
}

</style>





