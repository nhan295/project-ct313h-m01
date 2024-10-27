<template>
    <div class="main">
        <div class="header">
            <div class="header-nav">
                <ul class="nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#category">Category</a>
                        
                            <ul class="sub_product">
                                <li><a href="#">New arrive</a></li>
                                <li><a href="#">Romantic</a></li>
                                <li><a href="#">Adventure</a></li>
                                <li><a href="#">Economic</a></li>
                            </ul>
                        
                    </li>
                    <li><a href="#cart">Cart</a></li>
                    <li><a href="#contact">About Us</a></li>
                    
                </ul>
                
                <div class="user" >
                    <div onclick="document.getElementById('js_signup').style.display='none'">
                        <a onclick="document.getElementById('js_login').style.display='flex'" class="js-login js-closesignup">
                            LogIn
                        </a>
                    </div>
                    <div onclick="document.getElementById('js_login').style.display='none'">
                        <a onclick="document.getElementById('js_signup').style.display='flex'" class="js-signup js-closelogin">
                            SignUp
                        </a>

                    </div>
                    <!-- Account part -->
                    <!-- <ul class="subuser">
                        <li><a class="js-signup">Sign Up</a></li>
                        <li><a href="#user">Log Out</a></li>
                    </ul> -->
                </div>
                
            </div>
        </div>
    </div>

</template>  


<style scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* common */
.text-white{
    color: #fff;
}

html {
    scroll-behavior: smooth;
    font-family: Arial, Helvetica, sans-serif;
}

.header{
    position: relative;
}

.header-nav{
    position: fixed;
    background-color: #000;
    height: 70px;
    top: 0;
    left: 0;
    right: 0;
    /* làm cho thẻ chứa nó nổi lên hoặc chìm xuống */
    z-index: 1;
}

.nav > li {
    display: inline-block;
}

.nav li a {
    text-decoration: none;
    padding: 0 24px;
    line-height: 46px;
    display: block;
    color: #fff;
    font-size: 30px;
}

.sub_product li a {
    color: #000;
    line-height: 38px;
    text-align: right;
}


.nav li:hover > a {
    color: #000;
    background-color: #ccc;
}

.nav li:hover .sub_product{
    display: inline-block;
}

.user{
    float: right;
    padding-right: 20px;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;

}

.user a {
    text-decoration: none;
    padding: 0 24px;
    line-height: 46px;
    display: block;
    color: #fff;
    cursor: pointer;
    font-size: 30px;
}

.user a:hover {
    color: #000;
    background-color: #ccc;
}

.user img{
    float: inline-start;
    margin-top: 8%;
    margin-right: 8px;
}
.user-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid #fff;
}

.sub_product {
    display: none;
    min-width: 160px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: absolute;
    margin-right: 20px;
}

.sub_product li{
    color: #000;
    line-height: 38px;
    list-style-type: none;
    cursor: pointer;
}

.header-img img {
    width: 100%;
    height: auto;
    position: relative;
}

.content .content-section {
    width: 800px;
    max-width: 100%;
    padding: 64px 0;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
}

.section-heading{
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 4px;
}

.section-sub-heading{
    text-align: center;
    font-size: 15px;
    margin-top: 25px;
    padding-bottom: 16px;
    /* tạo kiểu cho chữ dùng font-style */
    font-style: italic; 
     /*opacity độ mờ  */
    opacity: 0.6;
}

.about-content{
    margin-top: 25px;
    font-size: 15px;
    /* text-align: justify; căn đều 2 bên */
    text-align: justify;
    line-height: 1.4;
}

</style>