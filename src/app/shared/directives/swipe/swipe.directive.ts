
import { Directive, Input, HostListener, Output, EventEmitter } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({ selector: '[mySwipe]' })
export class SwipeDirective {
  @Output() public mySwipe = new EventEmitter<string>();

  private touchStartX;
  private touchStartY;
  @HostListener('touchstart', ['$event']) public onTouchStart(e) {
    this.touchStartX = e.changedTouches[0].clientX;
    this.touchStartY = e.changedTouches[0].clientY;
  }
  @HostListener('touchend', ['$event']) public onTouchEnd(e) {
    const moveX = e.changedTouches[0].clientX - this.touchStartX;
    const moveY = e.changedTouches[0].clientY - this.touchStartY;
    if (Math.abs(moveY) < Math.abs(moveX)) {
      /**
       * Y轴移动小于X轴 判定为横向滑动
       */
      if (moveX > 50) {
        this.mySwipe.emit('right');
      } else if (moveX < -50) {
        this.mySwipe.emit('left');
      }
    } else if (Math.abs(moveY) > Math.abs(moveX)) {
      /**
       * Y轴移动大于X轴 判定为纵向滑动
       */
      if (moveY > 50) {
        this.mySwipe.emit('down');
      } else if (moveY < -50) {
        this.mySwipe.emit('up');
      }
    }
    this.touchStartX = this.touchStartY = -1;
  }
}
