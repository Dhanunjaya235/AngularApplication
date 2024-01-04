import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter')onMouseEnter(){
    this.element.nativeElement.style.color="blue";
    this.element.nativeElement.style.fontSize="40px"
  }
  @HostListener('mouseleave')onMouseLeave(){
    this.element.nativeElement.style.color='red';
    this.element.nativeElement.style.fontSize="32px";
  }
}
