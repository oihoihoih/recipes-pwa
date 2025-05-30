import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-text-button',
  templateUrl: './icon-text-button.component.html',
  styleUrl: './icon-text-button.component.scss',
})
export class IconTextButtonComponent {
  @Input() icon: string = '';
  @Input() buttonText: string = '';
}
