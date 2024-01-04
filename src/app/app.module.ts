import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ApikeyModule } from './apikey/apikey.module';
import { MyPipesModule } from './mypipes/mypipes.module';
import { CoordinatesComponent } from './coordinates/coordinates.component';
import { FormsModule } from '@angular/forms';
import { SunTimingsComponent } from './sun-timings/sun-timings.component';
import { AirComponent } from './air/air.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { LogoutComponent } from './logout/logout.component';
import { ColorchangeDirective } from './colorchange.directive';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { WindComponent } from './wind/wind.component';
import { TestHostComponent } from './test.component';

@NgModule({
  declarations: [
    AppComponent,
    CoordinatesComponent,
    SunTimingsComponent,
    AirComponent,
    LogoutComponent,
    WildcardComponent,
    ColorchangeDirective,
    AboutComponent,
    WindComponent,
    TestHostComponent
  ],
  imports: [
    BrowserModule,
    MyPipesModule,
    ApikeyModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule, ColorchangeDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
