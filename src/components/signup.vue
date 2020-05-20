<template style="bacground-color:grey;">
  <div>
    <div class="wrapper">
  <div class="signup1" >
  <div class="signup" >
    <h1>Sign Up</h1>
    <form>
      <fieldset>
        <label>Name</label>
        <input type="text" placeholder="Enter your full name" v-model="signuparr[0].u_name">
      </fieldset>
      <fieldset>
        <label>Email</label>
        <input type="email" placeholder="Email" v-model="signuparr[0].u_email">
      </fieldset>
      <fieldset>
        <label>Password</label>
        <input type="password" placeholder="Password" v-model="signuparr[0].u_password">
      </fieldset>
      <fieldset>
        <label>Address</label>
        <textarea rows="5" cols="50" placeholder="Enter Your Address" v-model="signuparr[0].u_address"></textarea>
      </fieldset>
      <fieldset>
        <label>City</label>
        <select v-model="signuparr[0].u_city">
          <option selected value="Ahmedabad">Ahmedabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Jodhpur">Jodhpur</option>
        </select>
      </fieldset>
      <fieldset>
        <label>State</label>
        <select v-model="signuparr[0].u_state">
          <option selected value="Gujarat">Gujarat</option>
          <option value="Maharastra">Maharastra</option>
          <option value="Rajasthan">Rajasthan</option>
        </select>
      </fieldset>
      <fieldset>
        <label>Mobile No.</label>
        <input type="number" v-model="signuparr[0].u_mob" placeholder="Enter Your mobile Number">
      </fieldset>
      <br>
      <button @click="signup">Sign Up Now</button>
      <br>
      <h6>Already have account?<router-link to="/">&nbsp;Login now</router-link></h6>
    </form>
  </div>  
      </div>
</div>
  </div>
</template>

<script>
import signupclass from '../service/signup'
export default {
  data () {
    return {
      signuparr:[{
        u_email:"",
        u_password:"",
        u_name:"",
        u_address:"",
        u_city:"",
        u_state:"",
        u_mob:0,
        u_type:"user"
      }]
    }
  },
  methods:{
    signup:function(){
      console.log(this.signuparr);
      signupclass.adduser(this.signuparr[0]).then(doc=>{
        console.log(doc);


                  this.$fire({
											title: "Successfully Registered",
											type: "success",
											timer: 3000
										}).then(r => {
											console.log(r.value);
                    });
              this.$router.push({path:"/"});
      })
    }
  }
}
</script>

<style scoped>
*,
html {
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}
html,
body {
  height: 100%;
  width: 100%;
  background-image: linear-gradient( #abd6ca, #c1e8d9);
  font-family: 'Montserrat', sans-serif;
  color: #3d4151; 
}
.wrapper {
  position: relative;
}
.signup {
  height: auto;
  width: 60%;
  background-color:whitesmoke;
  border-radius: 20px;
  position: absolute;
  margin-bottom: 100px;
  box-shadow: 0px 15px 15px #3d4151;
  padding: 2%;
  margin-left:19%;
  margin-top:2%;
}

.signup1 {
  height: auto;
  width: 100%;
  background: #ffffff;
  
}


label, button, input,textarea {
  display: block;
}
label {
  margin-bottom: 2%;
}
button {
  background: lightslategray;
  border: none;
  height: 40px;
  width: 90%;
  border-radius: 10px;
  color: #ffffff;
  margin-left:3%;
}
button:hover {
  background-color: #1da19a;
}
input,select {
  width: 90%;
  height: 40px;
  margin-bottom: 2%;
  border: 1px solid #9a5c77;
  border-radius: 5px;
  padding-left: 2%;
  margin-left:3%;
}

textarea {
  width: 90%;
  height: auto;
  margin-bottom: 2%;
  border: 1px solid #9a5c77;
  border-radius: 5px;
  padding-left: 2%;
  margin-left:3%;
}
label
{
  margin-left:3%;
}
fieldset {
  border: none;
}
h1 {
  text-align: center;
}
</style>
