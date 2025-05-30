import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.scss',
})
export class ExpansionPanelComponent {
  @Input() title: string = '';
  @Input() description?: string = '';
  @Input() content: string = '';
}
