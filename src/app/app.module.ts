import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AppsComponent } from './apps/apps.component';
import { VehicleSummaryComponent } from './vehicle-summary/vehicle-summary.component';
import { FormsModule } from '@angular/forms';
import { AccountsComponent } from './accounts/accounts.component';

import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    InterpolationComponent,
    EventBindingComponent,
    AppsComponent,
    VehicleSummaryComponent,
    AccountsComponent,
    ProductComponent,
    CreatevehicleComponent,
    CreateaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
