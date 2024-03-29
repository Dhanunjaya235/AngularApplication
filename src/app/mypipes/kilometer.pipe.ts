import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilometer'
})
export class KilometerPipe implements PipeTransform {

  transform(value: number): unknown {
    return value*3.6;
  }

}
