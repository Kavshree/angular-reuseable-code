import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'custom-button, button[customBtn]',
  template: '<span><ng-content></ng-content></span>',
  standalone: true,
  styles: [
    `
    :host {
      display: inline-flex;
      border-radius: 2px;
      padding: 7px;
      justify-content: center;
    }
  `,
  ],
})
export class CustomButton extends BaseComponent {}
