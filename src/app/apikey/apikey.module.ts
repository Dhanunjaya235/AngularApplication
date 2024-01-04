import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastComponent } from './forecast/forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyPipesModule } from '../mypipes/mypipes.module';
import { ColorDirective } from './color.directive';
@NgModule({
  declarations: [
    ForecastComponent,
    ColorDirective
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule,MyPipesModule
  ],
  exports:[
    ForecastComponent,ColorDirective
  ]
})
export class ApikeyModule { }
