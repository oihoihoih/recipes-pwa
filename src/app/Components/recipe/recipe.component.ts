import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../Services/recipes.service';
import { Recipe } from '../../Models/recipe.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
})
export class RecipeComponent implements OnInit {
  recipe!: Recipe;
  ingredients: string[] = [];
  measures: string[] = [];

  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier) {
      this.recipesService.getRecipeById(identifier).subscribe((recipe) => {
        this.recipe = recipe;
        this.ingredients = Object.keys(recipe)
          .filter(
            (key) => key.startsWith('strIngredient') && (recipe as any)[key]
          )
          .map((key) => (recipe as any)[key]);

        this.measures = Object.keys(recipe)
          .filter((key) => key.startsWith('strMeasure') && (recipe as any)[key])
          .map((key) => (recipe as any)[key]);
        console.log(this.ingredients, this.measures);
      });
    }
  }

  // Add methods to handle recipe-related functionality

  goBack(): void {
    this.router.navigateByUrl('/');
  }
}
