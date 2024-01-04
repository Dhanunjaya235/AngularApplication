import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foreignheat'
})
export class ForeignheatPipe implements PipeTransform {

  transform(value: number): number {
    return (value*1.8)+32;
  }

}
