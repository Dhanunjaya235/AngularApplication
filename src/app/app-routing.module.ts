import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AirComponent } from './air/air.component';
import { ForecastComponent } from './apikey/forecast/forecast.component';
import { CanActivateRouteService } from './can-activate-route.guard';
import { CoordinatesComponent } from './coordinates/coordinates.component';
import { SunTimingsComponent } from './sun-timings/sun-timings.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { WindComponent } from './wind/wind.component';

const routes: Routes = [
  { path: 'weather', component: ForecastComponent, canActivate: [CanActivateRouteService] },
  { path: 'coordinates', component: CoordinatesComponent, canActivate: [CanActivateRouteService] },
  { path: 'suntimings', component: SunTimingsComponent, canActivate: [CanActivateRouteService] },
  { path: 'aircondition', component: AirComponent, canActivate: [CanActivateRouteService] },
  { path: 'home', component: WildcardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'wind', component: WindComponent, canActivate: [CanActivateRouteService] },
  {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
