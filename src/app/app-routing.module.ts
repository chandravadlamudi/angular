import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AppComponent } from './app.component';
import { AppsComponent } from './apps/apps.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { VehicleSummaryComponent } from './vehicle-summary/vehicle-summary.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent, children:[
    {path:"interpolation", component:InterpolationComponent},
    {path:"event-binding", component:EventBindingComponent},
    {path:"apps", component:AppsComponent},
    {path:"vehicle-summary", component:VehicleSummaryComponent},
    {path:"create-vehicle", component:CreatevehicleComponent},
    {path:"create-account", component:CreateaccountComponent},
    {path:"home", component:HomeComponent},
    {path:"accounts", component:AccountsComponent},
    {path:"products", component:ProductComponent},
    {path:"", component:HomeComponent},
    
  ]},
  {path:"", component:LoginComponent},
  {path:"**", component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
