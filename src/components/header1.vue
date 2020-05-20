<template>
  <div>
    <div id="rc_logo">
<a class="logo" title="Logo"><b><i style="color:lightseagreen;">j</i><span style="color:lightseagreen;">H</span></b></a> <!-- Swap this placeholder out for your logo image -->
</div>  

<div class="rc_nav" id="centered_nav">
<!-- <a href="./Dashboard.vue" title="Home">HOME</a>
<a href="./offer" title="Services">OFFERS</a>
<a href="#about" title="About">CART</a>
<a href="#about" title="About">PAST ORDERS</a>
<a href="#about" title="About">PROFILE</a>
<a href="#about" title="About">ABOUT US</a>
<a href="#contact" title="Contact">CONTACT US</a> -->

<router-link to="/dashboard">HOME</router-link>
<router-link to="/offer" title="Offers">OFFERS</router-link>
<router-link to="/cart" title="Cart"><i style="color:white;" class="fas fa-shopping-cart"></i>&nbsp;CART</router-link>
<router-link to="/pastorder" title="Your past orders">PAST ORDERS</router-link>
<router-link to="/profile" title="Your profile"><i style="color:white;" class="fas fa-user"></i>&nbsp;PROFILE</router-link>
<router-link to="/wishlist" title="your wishlist"><i style="color:red;" class="fas fa-heart"></i>WishList</router-link>
<router-link to="/aboutus" title="About">ABOUT US</router-link>
<router-link to="/contactus" title="Contact"><i style="color:white;" class="fas fa-comment"></i>&nbsp;CONTACT US</router-link>
<router-link to="/"><i  class="fas fa-sign-out-alt"></i>&nbsp;Logout</router-link>
<a href="javascript:void(0);" title="Menu" style="font-size:18px;" class="icon" onclick="myFunction()">&#9776;</a>

</div>
  </div>
</template>

<script>

</script>

<style scoped>
.logo
{
  font-size:30px;
  color:lightseagreen;
}
#rc_logo {
 left: 25px;
 padding: 15px;
 position: absolute;
 color: #fff;
 font-size: 19px;
 font-family: Poppins;
 text-decoration: none;
}

#rc_logo a { 
color: inherit; 
text-decoration: none;
} 

.rc_nav {
  overflow: hidden;
  background-color: #363841;
  text-align: center;
  z-index: 6;
}

.rc_nav a {
 display: inline-block;
 margin-right: -4px;  /* inline-block gap fix */
 color: #fff;
 padding: 22px 22px;
 text-decoration: none;
 font-family: Poppins;
 font-size: 18px;
 z-index: 9;
}

.rc_nav a:hover {
  background-color: #575b69;
}

.rc_nav .icon {
  display: none;
}

.rc_content {
  text-align: center; 
  padding-left:14px; 
  font-family: Poppins; 
  margin-top: 100px;  
  color: #8e909b;
}


@media screen and (max-width: 820px) {
  .rc_nav a {display: none;}
  .rc_nav a.icon {
    float: right;
    display: block;
    width: 60px;
  }
}

@media screen and (max-width: 820px) {
  .rc_nav.responsive {position: relative; top: 73px;}
  .rc_nav.responsive .icon {
    position: fixed;
    right: 0;
    top: 0;
  }
  .rc_nav.responsive a {
    float: none;
    display: block;
    text-align: center;
  }

}


</style>
