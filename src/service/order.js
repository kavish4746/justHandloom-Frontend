import http from '../http-common';

class orderclass{
  addorder(item){
      console.log(item)
      return http.post("/order/",item);
  }
  getorderbystatus(fk_emailid,status)
  {
      return http.get("/joinorder/"+fk_emailid+"/"+status);
  }
}

export default new orderclass();
