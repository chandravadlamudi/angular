import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-summary',
  templateUrl: './vehicle-summary.component.html',
  styleUrls: ['./vehicle-summary.component.css']
})
export class VehicleSummaryComponent implements OnInit {
  
  vehicles:any=[];

  constructor(private vehicleService:VehicleService) 
  {
    vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles= data;
      },
      (error:any)=>{
        alert("Internet servive err")
      }
    )
   } 

   filterTerm="";
   filter()
   {
    this.vehicleService.getfilteredVehicles(this.filterTerm).subscribe(
      (data:any)=>{
        this.vehicles= data;
      },
      (error:any)=>{
        alert("Internet servive err")
      }
    )

   } 

   column="";
   order="";
   sort()
   {
    this.vehicleService.getsortVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles= data;
      },
      (error:any)=>{
        alert("Internet servive err")
      }
    )

   } 
   
   page="";
   limit="";
   paged()
   {
    this.vehicleService.getpagedVehicles(this.page,this.limit).subscribe(
      (data:any)=>{
        this.vehicles= data;
      },
      (error:any)=>{
        alert("Internet servive err")
      }
    )

   } 
   
   

   



  ngOnInit(): void {
  }

}
