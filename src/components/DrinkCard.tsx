import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drink } from '../types';

type Props = {
  drink: Drink;
};

const DrinkCard: React.FC<Props> = ({ drink }) => {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/${drink.idDrink}`)}>
      <img src={drink.strDrinkThumb} alt="drink" />
      <p>{drink.strDrink}</p>
    </li>
  );
};

export default DrinkCard;
