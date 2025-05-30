import React from 'react';
import type { BurgerState } from '../types/ingredient';
import { INGREDIENTS } from '../constants/ingredients';
import { calculateTotalPrice } from '../utils/calculatePrice';
import { Typography } from '@mui/material';

interface BurgerProps {
  burgerState: BurgerState;
}

export const Burger: React.FC<BurgerProps> = ({ burgerState }) => {
  // Фильтруем ингредиенты, которые есть в бургере (count > 0)
  const activeIngredients = INGREDIENTS.filter(ing => burgerState[ing.name] > 0);

  return (
    <div className="burger-section">
      <Typography variant="h5" gutterBottom>Бургер</Typography>
      <div className="burger">
        {/* Верхняя булочка всегда отображается */}
        <div className="bun bun-top"></div>
        {/* Добавляем ингредиенты */}
        {activeIngredients.map((ing, index) => (
          <div
            key={index}
            className={`ingredient ${ing.name.toLowerCase()}`}
            style={{ zIndex: 100 - index }}
          />
        ))}
        {/* Нижняя булочка всегда отображается */}
        <div className="bun bun-bottom"></div>
      </div>
      <Typography variant="h6" style={{ marginTop: '20px' }}>
        Цена: {calculateTotalPrice(burgerState)} сом
      </Typography>
    </div>
  );
};