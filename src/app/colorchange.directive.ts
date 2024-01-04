import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = "blue";
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = 'red';
  }
}
