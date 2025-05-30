import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss',
})
export class PrimaryButtonComponent {
  @Input() icon: string = '';
  @Input() buttonText: string = '';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  @Output() click = new EventEmitter<void>();

  constructor() {}

  onClick(): void {
    this.click.emit();
  }
}
