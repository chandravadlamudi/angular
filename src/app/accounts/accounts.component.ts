import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  
  accounts:any=[];

  constructor(private accountService:AccountsService) {
    
    accountService.getAccounts().subscribe(

      (data:any)=>{
        this.accounts = data;

      },
      (error:any)=>{
        alert("Internet service err")
      }
    )

   } 

   filterTerm="";
   filter()
   {
    this.accountService.getfilteredaccounts(this.filterTerm).subscribe(
      (data:any)=>{
        this.accounts= data;
      },
      (error:any)=>{
        alert("Internet servive err")
      }
    )
    }
  


  ngOnInit(): void {
  }

}
