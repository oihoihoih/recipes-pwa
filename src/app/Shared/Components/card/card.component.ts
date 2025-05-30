import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../Models/recipe.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() meal!: Recipe;
  @Output() itemClicked = new EventEmitter<Recipe>();

  isHovered: boolean = false;

  constructor() {}

  onClick(item: Recipe): void {
    this.itemClicked.emit(item);
  }
}
