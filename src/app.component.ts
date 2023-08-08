import { Component } from '@angular/core';
import { CustomButton } from './ui-components/custom-button.component';
import { CustomChip } from './ui-components/custom-chip.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <custom-chip [appearance]="'solid'" [color]="'secondary'">Solid Chip</custom-chip>
  <custom-chip [appearance]="'stroked'" [color]="'primary'">Stroked Chip</custom-chip>

  <button customBtn [appearance]="'stroked'" [color]="'secondary'">Stroked Button</button>
  <button customBtn [appearance]="'solid'" [color]="'secondary'">Solid Button</button>
  `,
  imports: [CustomButton, CustomChip],
})
export class AppComponent {}
