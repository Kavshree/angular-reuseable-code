import { Directive, HostBinding, Input } from '@angular/core';

@Directive()
export class BaseComponent {
  @Input() appearance: 'solid' | 'stroked' = 'solid';
  @Input() color: 'primary' | 'secondary' = 'primary';
  @HostBinding('class') protected get AT() {
    return {
      [this.appearance]: true,
      [this.color]: true,
    };
  }
}
