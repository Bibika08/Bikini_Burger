export interface Ingredient {
  name: string;
  price: number;
  image: string;
}

export interface BurgerState {
  [key: string]: number;
}