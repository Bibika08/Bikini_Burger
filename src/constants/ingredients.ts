import { Ingredient } from '../types/ingredient';

// Импортируем изображения (нужно добавить в папку assets)
import meatImage from '../assets/meat.jpg';
import cheeseImage from '../assets/cheese.jpg';
import saladImage from '../assets/salad.jpg';
import baconImage from '../assets/bacon.jpg';

// Список ингредиентов с ценами
export const INGREDIENTS: Ingredient[] = [
  { name: 'Meat', price: 80, image: meatImage },
  { name: 'Cheese', price: 50, image: cheeseImage },
  { name: 'Salad', price: 10, image: saladImage },
  { name: 'Bacon', price: 60, image: baconImage },
];

// Базовая цена бургера
export const BASE_BURGER_PRICE = 30;