import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForeignheatPipe } from './foreignheat.pipe';
import { KilometerPipe } from './kilometer.pipe';

@NgModule({
  declarations: [
    ForeignheatPipe,
    KilometerPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ForeignheatPipe,KilometerPipe
  ]
})
export class MyPipesModule { }
