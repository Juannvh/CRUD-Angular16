import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ElementoFondo: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.ElementoFondo.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ElementoFondo.nativeElement.style.backgroundColor = '';
  }

}
