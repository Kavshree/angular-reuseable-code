import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'custom-chip',
  template: '<span><ng-content></ng-content></span>',
  standalone: true,
  styles: [
    `
    :host{
      display: inline-flex;
      border-radius: 25px;
      padding: 7px;
      justify-content: center;
    }
  `,
  ],
})
export class CustomChip extends BaseComponent {}
