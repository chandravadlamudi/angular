import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1=9;
num2=8;

Sum(){
  alert(this.num1+this.num2);
};
Sub(){
  alert(this.num1-this.num2);
};
Mul(){
  alert(this.num1*this.num2);
};
Division(){
  alert(this.num1/this.num2);
};


num3=0;
num4=0;
result=NaN;
areaResult=0;
perimeterResult=0;
Area(){
  
  this.areaResult=this.num3*this.num4;
}
Perimeter(){
  this.perimeterResult=(2*(this.num3+this.num4))
} 


names=[''];
name="";

submit(){
  this.names.push(this.name)
} 


products:any=[]
product='';
quantity='';
price='';

addtocart(){
  var obj:any={};
    obj.product=this.product;
    obj.quantity=this.quantity;
    obj.price=this.price;
    this.products.push(obj);
  }

  users:any=[]
  Name='';
  email='';
  phone='';
  city='';
  
  signup(){
    var obj:any={};
      obj.name=this.name;
      obj.email=this.email;
      obj.phone=this.phone;
      obj.city=this.city
      this.users.push(obj);
    }

    isRed=true;
    change()
    {
      this.isRed =! this.isRed;
    }
    

    ishide=true;
    hide()
    {
      this.ishide =! this.ishide;
    }

  
  
}








