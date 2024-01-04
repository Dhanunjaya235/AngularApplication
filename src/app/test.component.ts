import { Component } from '@angular/core';

@Component({
  template: `<p [appColorChange]="color">Text with highlight</p>`
})
export class TestHostComponent {
  color = 'blue';
}