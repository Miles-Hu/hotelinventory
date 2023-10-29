import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvRootHover]',
})
export class HoverDirective implements OnInit {
  @Input() 
  color: string = 'green';

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    //this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer2.setStyle(
      this.element.nativeElement,
      'background-color',
      this.color
    );
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer2.setStyle(
      this.element.nativeElement,
      'background-color',
      'red'
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer2.setStyle(
      this.element.nativeElement,
      'background-color',
      'white'
    );
  }
}
