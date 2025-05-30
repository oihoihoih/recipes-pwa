export class CategoryDto {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;

  constructor(
    idCategory: string,
    strCategory: string,
    strCategoryThumb: string,
    strCategoryDescription: string
  ) {
    this.idCategory = idCategory;
    this.strCategory = strCategory;
    this.strCategoryThumb = strCategoryThumb;
    this.strCategoryDescription = strCategoryDescription;
  }
}
