import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './component/search/search.component';
import { CarsComponent } from './component/cars/cars.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegestrationComponent } from './component/regestration/regestration.component';
import { CarListComponent } from './component/cars/car-list/car-list.component';
import { CarAddComponent } from './component/cars/car-add/car-add.component';
import { CarReservationComponent } from './component/cars/car-reservation/car-reservation.component';
import { ServicesComponent } from './component/services/services/services.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: "full" },
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'services',component:ServicesComponent} ,
  {path:'cars',component:CarsComponent,},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegestrationComponent},
  {path:'car',component:CarsComponent},
  {path:'carList',component:CarListComponent},
  {path:'carAdd',component:CarAddComponent},
  {path:'carReservation',component:CarReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
