import { BurgerState } from '../types/ingredient';
import { INGREDIENTS, BASE_BURGER_PRICE } from '../constants/ingredients';

// Функция для расчета общей стоимости бургера
export const calculateTotalPrice = (burgerState: BurgerState): number => {
  const ingredientsCost = Object.entries(burgerState).reduce((total, [name, count]) => {
    const ingredient = INGREDIENTS.find(ing => ing.name === name);
    return total + (ingredient ? ingredient.price * count : 0);
  }, 0);
  return BASE_BURGER_PRICE + ingredientsCost;
};