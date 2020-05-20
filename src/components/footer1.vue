<template>
  <div>
    <footer id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="footer-box">
                        <div class="footer-title">
                            <h5>Download Our Mobile App</h5>
                        </div>
                        <div class="footer-desc">
                            <p>Mobile application is under construction...please wait for some time</p>
                        </div>
                        <div class="app-img">
                            <div class="app-store"><a href="#"><img src="images/play-store.png" alt="" /></a></div>
                            <div class="app-store"><a href="#"><img src="images/app-store.png" alt="" /></a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer-box">
                        <div class="footer-title">
                            <router-link to="/dashboard"><div class="footer-logo"><img style="height:90%;width:90%;" src="../images/jH.png" alt="" /></div></router-link>
                        </div>
                        <div class="footer-desc">
                            <p style="text-align: center;font-size:20px;">One stop for Shopping</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="footer-box">
                        <div class="footer-title">
                            <h5>Quick Links</h5>
                        </div>
                        <div class="footer-desc">
                            <ul>
                                <li><router-link to="/aboutus"> More About Us</router-link></li>
                                <li><a href="#">Visit Store</a></li>
                                <li><router-link to="/contactus">Let's Connect</router-link></li>
                                <li><a href="#">Locate Store</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="footer-box">
                        <div class="footer-title">
                            <h5>Sites Links</h5>
                        </div>
                        <div class="footer-desc">
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Shipping Details</a></li>
                                <li><router-link to="/offer">Different Offers</router-link></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>

</script>
<style scoped>
footer#footer {
    background: black;
    color: #6B7780;
    padding: 60px;
}
.app-store {
    display: inline-block;
    width: 150px;
    margin-right: 10px;
}

.app-img {
    float: left;
}
.footer-title{
    margin-bottom: 20px;
}
.footer-title h5 {
    color: white;
}
.footer-logo{
	width: 150px;
	margin: auto;
}
.footer-desc ul{
	list-style: none;
	padding-left: 0px;
}
.footer-desc ul li{
	padding: 6px 0px;
}

</style>

