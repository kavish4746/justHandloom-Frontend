<template>
  <div class="bodyclass">
      <header1></header1>
      <br><br>
      <section class="secclass">
    <section id="contact-form">
        <section class="title">
            <h1 class="title">Update Your Password</h1>
            <br> 
        </section>
            <p id="failure">Oopsie...message not sent.</p>  
            <p id="success">Your message was sent successfully. Thank you!</p>
    
               <form>
                <section>
                  <label for="name">
                      <input type="text" class="form-control" placeholder="Enter Your Existing Password *" v-model="enteredpassword">
                  </label> 
                </section>
                <section>
                  <label for="email">
                      <input type="text" class="form-control" placeholder="Middle Name"  v-model="newpassword">
                  </label>  
                </section>
            
                
                <section>		           
                  <button @click="update">Update Password</button> 
                </section>
               </form>
               
        </section>
      </section>
      <footer1 class="footer"></footer1>
  </div>
</template>

<script>
import infoclass from '../service/profile'
export default {
  name: 'app',
  data () {
    return {
        enteredpassword:'',
        newpassword:'',
      infoarr:[],
    }
  },
  methods:{
    update:function(){
      infoclass.getEmpdetails(localStorage.getItem('emailid')).then(doc=>{ 
      if(this.enteredpassword==doc.data[0].password)
      {
        this.infoarr=doc.data;
        this.infoarr[0].password=this.newpassword;
        infoclass.updateinfodetails(this.infoarr).then(doc=>{
          console.log(doc);
        })
      }
      else
      {
        alert("not reg");
      }
    })
    }
  },
  created(){
    infoclass.getEmpdetails(localStorage.getItem('emailid')).then(doc=>{
      this.infoarr=doc.data;
      console.log(this.infoarr);
      console.log(localStorage.getItem('emailid'));
    })
  }
}
</script>

<style scoped>

@import '../css/editpassword.css';

.footer{
  margin-top:40%;
}
</style>
