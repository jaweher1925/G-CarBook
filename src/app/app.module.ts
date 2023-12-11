import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchComponent } from './component/search/search.component';
import { CarsComponent } from './component/cars/cars.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './component/login/login.component';
import { CarListComponent } from './component/cars/car-list/car-list.component';
import { CarSearchComponent } from './component/cars/car-search/car-search.component';
import { CarReservationComponent } from './component/cars/car-reservation/car-reservation.component';
import { InvoiceDownloadComponent } from './component/cars/invoice-download/invoice-download.component';
import { CarAvailabilityComponent } from './component/cars/car-availability/car-availability.component';
import { CarAddComponent } from './component/cars/car-add/car-add.component';
import { ServicesComponent } from './component/services/services/services.component';

@NgModule({
  declarations: [
    AppComponent,   
    SearchComponent,
    CarsComponent,
    
    HomeComponent,    
      ProfileComponent,
      LoginComponent,
        CarListComponent,
        CarSearchComponent,
        CarReservationComponent,
        InvoiceDownloadComponent,
        CarAvailabilityComponent,
        CarAddComponent,
        ServicesComponent,
        CarAddComponent


   
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
