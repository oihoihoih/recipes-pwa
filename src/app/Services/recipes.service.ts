import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDto } from '../Models/category.dto';
import { map, Observable } from 'rxjs';
import { Recipe } from '../Models/recipe.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  // Fetches categories from the meal database API
  getCategories(): Observable<CategoryDto[]> {
    return this.http
      .get<{ categories: CategoryDto[] }>(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      )
      .pipe(map((res) => res.categories));
  }

  // Fetches recipes based on the selected category
  getRecipesByCategory(category: string): Observable<Recipe[]> {
    return this.http
      .get<{ meals: Recipe[] }>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      )
      .pipe(map((res) => res.meals));
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http
      .get<{ meals: Recipe[] }>(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      )
      .pipe(map((res) => res.meals[0]));
  }
}
