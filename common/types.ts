export interface RecipeCardProps {
  title: string;
  publisher: string;
  image_url: string;
  id: string;
}

export interface RecipeIngredientsProps {
  quantity?: number;
  unit: string;
  description: string;
}
