import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drink } from '../types';

type Props = {
  drink: Drink;
};

const DrinkCard: React.FC<Props> = ({ drink }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <li
      onClick={() =>
        navigate(`/${drink.idDrink}`, { state: { from: location } })
      }
    >
      <img src={drink.strDrinkThumb} alt="drink" />
      <p>{drink.strDrink}</p>
    </li>
  );
};

export default DrinkCard;
