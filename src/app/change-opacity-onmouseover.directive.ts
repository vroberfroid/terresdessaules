import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChangeOpacityOnmouseover]'
})
export class ChangeOpacityOnmouseoverDirective {
  @HostBinding('style.opacity') opacity = 0.5;
  constructor(private elRef: ElementRef, private renderer: Renderer2 ) {
  }

  @HostListener('mouseover') mouseover(eventData: Event) {
    this.opacity = 1;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.opacity = 0.5;
  }
}
