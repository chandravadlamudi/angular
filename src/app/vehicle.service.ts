import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  data=[];
  constructor(private httpClient:HttpClient) {

  }
  
  getVehicles():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
  
  
  getfilteredVehicles(filterTerm:any){
      return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?filter='+filterTerm);
  }



  getsortVehicles(column:any,order:any){
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+column+'&order='+order);
}

getpagedVehicles(page:any,limit:any){
  return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?page='+page+'&limit='+limit);
}

  
  }
