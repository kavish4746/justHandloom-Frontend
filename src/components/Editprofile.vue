<template>
  <div>
      <header1></header1>
      <br><br>
      
      <section class="secclass">
    <section id="contact-form" style="background-color:lightgray;">
            <h1>Update Your Profile</h1>
            <br> 
               <form>
                <section>
                  <label for="name">         
                      <input type="email" id="name" name="name"  tabindex="1" autofocus="autofocus" v-model="infoarr[0].emailid" />
                  </label> 
                </section>
                <section>
                  <label for="email">         
                      <input type="text" id="email"  tabindex="2"  required="required" v-model="infoarr[0].u_name">
                  </label>  
                </section>
                <section>		          
                        <label for="address">
                            <textarea id="message" tabindex="5" required="required" v-model="infoarr[0].u_address"></textarea> 
                        </label>  
                      </section>
                <section>		          
                  <label for="email">         
                      <input type="text" id="email"  tabindex="2"  required="required" v-model="infoarr[0].u_city">
                  </label>         
                </section>
                
                <section>		          
                  <label for="email">         
                      <input type="number" id="email"  tabindex="2"  required="required" v-model="infoarr[0].u_mno">
                  </label>         
                </section>

                <section>		           
                  <button style="background-color:lightseagreen;"  @click="update" >Update Profile</button> 
                </section>
               </form>
    
        </section>
      </section>
      <br><br>
      <footer1></footer1>
  </div>
</template>

<script>
import infoclass from '../service/profile'
export default {
  name: 'app',
  data () {
    return {
      infoarr:[],
    }
  },
  methods:{
    update:function(){
      infoclass.updateinfodetails(this.infoarr).then(doc=>{
        console.log(doc);
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
@import '../css/editprofile.css';

</style>
