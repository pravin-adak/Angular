import { Directive,ElementRef,HostListener,Renderer2,HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @HostBinding('style.backgroundColor') background: string = 'initial';
  @HostBinding('style.fontWeight') fontWeight: string = 'initial';
  @HostBinding('style.color') color: string = 'initial';
  constructor(private element:ElementRef,private renderer:Renderer2) { }
@HostListener('mouseenter')onMouseEnter(){
   this.background= '#5d5e81';
   this.fontWeight = 'bold';
   this.color='white';
}
@HostListener('mouseleave')onMouseLeave(){
  this.background= 'initial';
  this.fontWeight = 'initial';
  this.color='initial';
}
}
