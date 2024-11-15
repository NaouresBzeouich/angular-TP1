import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'input[TrucSympaDirective]'
})
export class TrucSympaDirective {
  colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'purple', 'brown', 'gray', 'black', 'white'];

  @HostBinding('style.color') color: string = 'white';
  @HostBinding('style.border-color') border: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.color = this.getRandomColor();
    this.border = `2px solid ${this.getRandomColor()}`;
  }

  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.border = this.getRandomColor();
  }
}
