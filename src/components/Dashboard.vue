<template>
  <div>
      <header1></header1>
    <section id="head">
            <div class="container">
            <div class="row">
                <div class="col-md-6"><img class="head-img" style="height:300px;width:650px;" src="../images/dash.jpg" alt="" /></div>
                <div class="col-md-6 head-text">
                    <h6>You want lower prices, we hear you.</h6>
                    <h1>Expect More. Pay Less .</h1>
                    <p>A place where we meet your expectations.You wish we deliver </p>
                    <button class="my-btn btn"><i class="fas fa-cart-arrow-down"></i> Shop Now</button>
                </div>
            </div>
        </div>
    </section>


    <section id="shiping">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="shipping-box">
                        <div class="box-icon"><i class="fas fa-truck"></i></div>
                        <div class="box-title">
                            <h3>Free Shipping</h3>
                            <p>above $5 only</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="shipping-box">
                        <div class="box-icon"><i class="far fa-address-book"></i></div>
                        <div class="box-title">
                            <h3>Certified products</h3>
                            <p>100% guarantee</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="shipping-box">
                        <div class="box-icon"><i class="far fa-money-bill-alt"></i></div>
                        <div class="box-title">
                            <h3>Huge Savings</h3>
                            <p>at lowest price</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="shipping-box">
                        <div class="box-icon"><i class="fas fa-recycle"></i></div>
                        <div class="box-title">
                            <h3>Easy Returns</h3>
                            <p>no questions asked</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



        <section id="Best-selling">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="title">
                        <h1>Categories wise Products</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="products" @click="clickonhand">
                            <div class="product-img"><img src="../images/handcraft.jpg" style="height:400px;width:100%;" alt="" /></div>
                            <div class="product-desc">
                                <div class="product-name"><h2>Handcrafted Accessories</h2></div>
								                  <div class="product-rating"><img src="https://multifix24.es/wp-content/uploads/2019/03/multifix24-5-estrellas.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="products" @click="clickonhome">
                            <div class="product-img"><img src="../images/offerimg3.jpg" alt="" style="height:400px;width:100%;" /></div>
                            <div class="product-desc">
                                <div class="product-name"><h2>Home related products</h2></div>
								                  <div class="product-rating"><img src="https://multifix24.es/wp-content/uploads/2019/03/multifix24-5-estrellas.png" alt="" /></div>    
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-6">
                        <div class="products" @click="clickondining">
                            <div class="product-img"><img src="../images/dining.jpg" style="height:400px;width:100%;" alt="" /></div>
                            <div class="product-desc">
                                <div class="product-name"><h2>Dinings</h2></div>
								 <div class="product-rating"><img src="https://multifix24.es/wp-content/uploads/2019/03/multifix24-5-estrellas.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="products" @click="clickonkitchen">
                            <div class="product-img"><img src="../images/kitchendash.jpg" alt="" style="height:400px;width:100%;" /></div>
                            <div class="product-desc">
                                <div class="product-name"><h2>Kitchen products</h2></div>
								                  <div class="product-rating"><img src="https://multifix24.es/wp-content/uploads/2019/03/multifix24-5-estrellas.png" alt="" /></div>    
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </section>
    <footer1></footer1>
     
  </div>
</template>

<script>
export default {
  data () {
    return {
      catid:'',
    }  
  },
  methods:{
     clickonhand:function(){
       this.catid=1;
       this.$router.push({path:'/productview/' + this.catid});
     },
     clickonhome:function(){
       this.catid=2;
       this.$router.push({path:'/productview/' + this.catid});
     }, 
     clickondining:function(){
       this.catid=3;
       this.$router.push({path:'/productview/' + this.catid});
     },
     clickonkitchen:function(){
       this.catid=5;
       this.$router.push({path:'/productview/' + this.catid});
     },
  }
}
</script>

<style scoped>
a,h2{
	color: #75b61ac2;
}
a:hover{
	color: #75B61A;
	text-decoration: none;
}
section {
    padding: 100px 0px;
}
img{
  width: 100%;
}
header#header{
	background: #fff;
	border-bottom: 2px solid #75B61A;
}
.my-menu{
	float: right !important;
}
.my-navbar li a{
	font-weight: bold;
}
.mbl-btn i{
	color: #75B61A;
}
.shopping-bag i {
    font-size: 30px;
    color: #75B61A;
}


.head-text {
    text-align: left;
}

img.head-img {
    width: 200px;
    margin-left:-33%;
    margin-top:-5%;
}
button .my-btn{
	background: #75b61ac2;
	color: white;
	font-size: 20px;
	font-weight: bold;
	padding: 10px 20px;
}
.my-btn:hover{
	background: #75B61A;
	color: white;
	
}
section#shiping {
    padding: 50px;
    background: #001524;
    color: white;
}

.box-icon {
    display: inline-block;
}

.box-title {
    display: inline-grid;
    margin-left: 20px;
}

.box-title h3 {
    font-size: 23px;
}

.box-icon i {
    color: #75B61A;
    font-size: 30px;
}
.shipping-box {
    background: #1C2F3C;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 5px;
}

.title {
    text-align: center;
    margin-bottom: 60px;
}

.products {
    background: #F6F7F2;
    padding: 10px;
  transition: all .5s;
  width:100%;
  height:100%;
}

.product-desc {
    text-align: center;
}
.product-rating{
	width: 100px;
	margin: auto;
	margin-bottom: 5px;
}
.products:hover {
    box-shadow: 0px 0px 5px 1px #ddd;
}
img
{
  height:50%;
}
.product-img {
    margin-bottom: 20px;
}
.product-img img{
	cursor: pointer;
}

</style>
