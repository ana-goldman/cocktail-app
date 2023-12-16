import React from 'react';
import { Drink } from '../types';

type Props = {
  drink: Drink;
};

const DrinkCard: React.FC<Props> = ({ drink }) => {
  return (
    <li>
      <img src={drink.strDrinkThumb} alt="drink" />
      <p>{drink.strDrink}</p>
    </li>
  );
};

export default DrinkCard;
