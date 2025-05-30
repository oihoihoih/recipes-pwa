import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../Models/recipe.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() items!: any[];
  @Input() title = '';
  @Output() itemClicked = new EventEmitter<Recipe>();

  constructor() {}

  onClick(item: Recipe): void {
    console.log('clicked item:', item);
    this.itemClicked.emit(item);
  }
}
