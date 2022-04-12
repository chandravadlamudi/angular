import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  test1(){
    alert("clicked");
  }
  test2(){
    alert("dblclicked");
  }
  test3(){
    alert("keypress");
  }
  
  test4(){
    alert("keyup");
  }
  test5(){
    alert("keydown");
  }
  test6(){
    alert("focus");
  }
  test7(){
    alert("mouseenter");
  }
  
  
  
  
  

  
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
