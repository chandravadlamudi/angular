import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit { 
  name="abc";
  number=6;
  balance=NaN;
  boolean=true;
  undefined=undefined;
  array=[1,2,3,4,5];
  person={
    name:"chandra",
    age:20
  };
  dob="02/11/2020";
  
  

  

  constructor() { }

  ngOnInit(): void {
  }

}
