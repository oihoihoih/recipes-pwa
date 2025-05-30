import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategoryDto } from '../../Models/category.dto';
import { RecipesService } from '../../Services/recipes.service';
import { map } from 'rxjs';
import { Recipe } from '../../Models/recipe.interface';
import { Router } from '@angular/router';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class RecipesComponent implements OnInit {
  form = new FormGroup({
    category: new FormControl<string | null>(null),
  });

  categories: CategoryDto[] = [];
  categoriesName: string[] = [];
  categoryControl = new FormControl<string | null>(null);
  recipes: Recipe[] = [];
  isLoading: boolean = false;
  view: string = 'grid'; // Default view

  constructor(private recipesService: RecipesService, private router: Router) {
    this.view = 'grid'; // Initialize view to 'grid'
  }

  ngOnInit(): void {
    this.recipesService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.categoriesName = categories.map((category) => category.strCategory);
    });

    this.categoryControl.valueChanges.subscribe((selected) => {
      this.searchRecipes(selected);
    });

    this.searchRecipes('miscellaneous'); // Default search
  }

  searchRecipes(category: string | null): void {
    this.isLoading = true;
    if (category) {
      this.recipesService.getRecipesByCategory(category).subscribe({
        next: (recipes) => {
          this.recipes = recipes;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = true;
          console.error('Error fetching recipes for category:', category);
        },
      });
    } else {
      console.warn('No category provided to searchRecipes.');
    }
  }

  changeView(view: string): void {
    view === 'grid' ? (this.view = 'grid') : (this.view = 'list');
  }

  onRecipeClicked(recipe: Recipe): void {
    const recipeId = recipe.idMeal;
    this.router.navigate(['/recipe', recipeId]);
  }
}
