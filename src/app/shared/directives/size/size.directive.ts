import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[sizeDirective]'
})
export class SizeDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('window:load') onLoad() {
    this.fixHeight();
    this.fixWidth();
  }

  @HostListener('window:resize') onResize() {
    this.fixHeight();
    this.fixWidth();
  }

  @HostListener('mouseenter') noMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  fixHeight() {
    console.log(this.el.nativeElement.clientHeight);
  }

  fixWidth() {
    console.log(this.el.nativeElement.clientWidth);
    const width = this.el.nativeElement.clientWidth;
    if (width < 480) {
      this.el.nativeElement.style.backgroundColor = 'yellow';
    } else {
      this.el.nativeElement.style.backgroundColor = 'red';
    }
  }
}
