import React from 'react';
import { Ingredient } from '../types/ingredient';
import { Checkbox, Typography, Button } from '@mui/material';

interface IngredientItemProps {
  ingredient: Ingredient;
  count: number;
  onAdd: () => void;
  onRemove: () => void;
}

export const IngredientItem: React.FC<IngredientItemProps> = ({
  ingredient,
  count,
  onAdd,
  onRemove,
}) => {
  return (
    <div className="ingredient-item">
      <Checkbox checked={count > 0} onChange={onAdd} />
      <img src={ingredient.image} alt={ingredient.name} style={{ width: '30px', marginRight: '10px' }} />
      <Typography variant="body1" style={{ flex: 1 }}>{ingredient.name}</Typography>
      <Typography variant="body2">x{count}</Typography>
      <Button
        variant="outlined"
        onClick={onRemove}
        disabled={count === 0}
        style={{ marginLeft: '10px' }}
      >
        Удалить
      </Button>
    </div>
  );
};