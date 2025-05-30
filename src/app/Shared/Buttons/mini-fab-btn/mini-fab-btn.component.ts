import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mini-fab-btn',
  templateUrl: './mini-fab-btn.component.html',
  styleUrl: './mini-fab-btn.component.scss',
})
export class MiniFabBtnComponent {
  @Input() icon: string = '';
  @Input() active: boolean = false;
  @Output() clicked = new EventEmitter<void>();

  constructor() {}

  onClick(): void {
    this.clicked.emit();
  }
}
