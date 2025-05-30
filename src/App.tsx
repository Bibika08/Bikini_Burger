import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { INGREDIENTS } from './constants/ingredients';
import { BurgerState } from './types/ingredient';
import { IngredientItem } from './components/IngredientItem';
import { Burger } from './components/Burger';
import { Typography } from '@mui/material';
import './styles/App.css';

const App: React.FC = () => {
  // Инициализация состояния бургера
  const [burgerState, setBurgerState] = useState<BurgerState>(
    INGREDIENTS.reduce((acc, ing) => ({ ...acc, [ing.name]: 0 }), {})
  );

  // Функция добавления ингредиента
  const handleAddIngredient = (name: string) => {
    setBurgerState(prev => ({ ...prev, [name]: prev[name] + 1 }));
  };

  // Функция удаления ингредиента (удаляем по одному)
  const handleRemoveIngredient = (name: string) => {
    setBurgerState(prev => ({ ...prev, [name]: Math.max(0, prev[name] - 1) }));
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <div className="app">
        <div className="ingredients-section">
          <Typography variant="h5" gutterBottom>Ингредиенты</Typography>
          {INGREDIENTS.map(ingredient => (
            <IngredientItem
              key={ingredient.name}
              ingredient={ingredient}
              count={burgerState[ingredient.name]}
              onAdd={() => handleAddIngredient(ingredient.name)}
              onRemove={() => handleRemoveIngredient(ingredient.name)}
            />
          ))}
        </div>
        <Burger burgerState={burgerState} />
      </div>
    </ThemeProvider>
  );
};

export default App;