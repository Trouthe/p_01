import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the element is in the viewport
    if (rect.top < windowHeight && rect.bottom >= 0) {
      this.renderer.addClass(this.el.nativeElement, 'fade-in');
    }
  }
}
