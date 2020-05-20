<template>
  <div>
      <header1></header1>
  <div class="container">

  <div v-if="cartarr.length==0">
    <img src="../images/emptycart.jpg" style="width:60%;margin-left:20%;">
    <router-link to="/dashboard"><button style="width:30%;margin-left:-45%;margin-top:40%;" class="btn btn-sm btn-outline-success">Continue Shopping </button></router-link>
  </div>
  <table id="cart" class="table table-hover table-condensed" v-if="cartarr.length>0">
    <thead>
      <tr>
        <th style="width:50%">Product</th>
        <th style="width:10%">Price</th>
        <th style="width:8%">Quantity</th>
        <th style="width:22%" class="text-center">Subtotal</th>
        <th style="width:10%"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in cartarr" v-bind:key="item.c_id">
        <td data-th="Product">
          <div class="row">
            <div class="col-sm-2"><img style="height:100px;width:100px;" v-bind:src="'http://localhost:3000/images/products/' + item.fk_p_img" alt="..." class="img-responsive" /></div>
            <div class="col-sm-10">
              <h4 class="productname">{{item.fk_p_name}}</h4>
              <p class="productname"> {{item.fk_p_des}}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">Rs.{{item.fk_p_price}}</td>
        <td data-th="Quantity">
          <input type="number" class="form-control text-center" @change="onchange(item)" v-model="item.qty">
        </td>
        <td data-th="Subtotal" class="text-center">Rs.{{item.c_price}}</td>
        <td class="actions" data-th="">
          <button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
          <button @click="ondelete(item)" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2" style="font-size:18px;"><b>+CGST 9 %</b></td>  
        <td></td>
        <td class="text-center" style="color:red;">+ <b>{{cgst}}</b></td>
      </tr>
      <tr>
        <td colspan="2" style="font-size:18px;"><b>+SGST 9 %</b></td>    
        <td></td>
        <td class="text-center" style="color:red;">+ <b>{{sgst}}</b></td>
      </tr>
      <tr>
        <td colspan="2" style="font-size:18px;"><b>Total Payable Amount</b></td>  
        <td></td>
        <td class="text-center" style="font-size:18px;color:blue;">Rs.<b>{{total}}</b></td>
      </tr>
      <tr>
        <td><button @click="onplaceorder" style="width:100%;margin-left:50%;" class="btn btn-sm btn-outline-success">Place Order</button></td>  
      </tr>
    </tfoot>
  </table>





</div>

       <footer1 class="footer"></footer1>
  </div>
</template>

<script>
import cartclass from '../service/cart';
import profileclass from '../service/profile';
import orderclass from '../service/order';
import suborderclass from '../service/suborder';
export default {
  data () {
    return {
      cartarr:[{}],
      total:0.0,
      sgst:0.0,
      cgst:0.0,
      order:[{
        o_id:'',
        o_price:"",
        o_date:new Date().toLocaleString(),
        fk_emailid:"",
        fk_address:"",
        status:"pending"
      }],
      suborder:[{
        fk_o_id:'',
        fk_p_id:'',
        fk_p_name:'',
        fk_p_qty:'',
        fk_p_price:'',
        c_price:'',
      }],
      // suborder:[],
      j:0,
    }
  },
  created(){
    cartclass.getcartbyemail(localStorage.getItem('emailid')).then(doc=>{
      this.cartarr=doc.data;

      for(let i=0;i<this.cartarr.length;i++)
      {
        console.log(this.cartarr[i].c_price);
        this.total+=this.cartarr[i].c_price;
      }
      this.sgst=this.total*0.09;
      this.cgst=this.total*0.09;
      this.total+=this.sgst+this.cgst;
      console.log(this.total.toFixed()+ "Total value");
      console.log(this.cartarr);
    })


  },
  methods:{
    onchange:function(item){
      this.total-=this.sgst;
      this.total-=this.cgst;
      this.total-=item.c_price;
      item.c_price=item.fk_p_price*item.qty;
      this.total+=item.c_price;
      this.sgst=this.total*0.09;
      this.cgst=this.total*0.09;
      this.total+=this.sgst+this.cgst;
      console.log(item.c_price);

      console.log(this.total.toFixed()+ "Total value");
    },
    ondelete:function(item){
        cartclass.deleteitem(item._id).then(doc=>{
                      console.log(doc);
                for(let i=0;i<this.cartarr.length;i++)
                {
                  if(this.cartarr[i]._id == item._id )
                  {
                      this.total-=this.sgst;
                      this.total-=this.cgst;
                      this.total-=item.c_price;
                      this.sgst=this.total*0.09;
                      this.cgst=this.total*0.09;
                      this.cartarr.splice(i,1);   
                  }
                }
        })
        
    },
    onplaceorder:function(){
      this.order[0].o_id=Math.random()*100;
      console.log(this.total.toFixed()+ "Total value in final");
      this.order[0].o_price=this.total.toFixed();

      this.order[0].fk_emailid=localStorage.getItem('emailid');
      profileclass.getEmpdetails(localStorage.getItem('emailid')).then(doc=>{
        this.order[0].fk_address=doc.data[0].u_address;
      orderclass.addorder(this.order[0]).then(doc=>{
        console.log(doc);
              console.log(doc.data._id);
              
              console.log(this.cartarr.length);
              for(let i=0;i<this.cartarr.length;i++)
              {
                            this.suborder[i]={
                            fk_o_id:this.order[0].o_id,
                            fk_p_id:this.cartarr[i].fk_p_id,
                            fk_p_name:this.cartarr[i].fk_p_name,
                            fk_p_qty:this.cartarr[i].qty,
                            fk_p_price:this.cartarr[i].fk_p_price,
                            c_price:this.cartarr[i].c_price,
                           }


                        console.log(this.suborder[i]);

                  suborderclass.addsuborder(this.suborder[i]).then(doc1=>{
                    console.log(doc1);
                    this.$fire({
											title: "Your Order is Successfully placed",
											type: "success",
											timer: 3000
										}).then(r => {
											console.log(r.value);
                    });
                    this.cartarr=[];
                  }) 
                  
              }
      })

      cartclass.deleteallitem(localStorage.getItem('emailid')).then(doc=>{
        console.log(doc);
      })
      })
    }
  }
}
</script>

<style scoped>
.footer
{
  margin-top:100%;
}
.total
{
  margin-left:10%;
}
.btn{
  margin-left:100%;
}
.finaltotal
{
  margin-left:70%;
}
.productname
{
  margin-left:5%;
}
.table tbody tr td,
.table tfoot tr td {
  vertical-align: middle;
}

@media screen and (max-width: 600px) {
  table#cart tbody td .form-control {
    width: 20%;
    display: inline !important;
  }
  .actions .btn {
    width: 36%;
    margin: 1.5em 0;
  }
  .actions .btn-info {
    float: left;
  }
  .actions .btn-danger {
    float: right;
  }
  table#cart thead {
    display: none;
  }
  table#cart tbody td {
    display: block;
    padding: .6rem;
    min-width: 320px;
  }
  table#cart tbody tr td:first-child {
    background: #333;
    color: #fff;
  }
  table#cart tbody td:before {
    content: attr(data-th);
    font-weight: bold;
    display: inline-block;
    width: 8rem;
  }
  table#cart tfoot td {
    display: block;
  }
  table#cart tfoot td .btn {
    display: block;
  }
}
</style>
