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
      className="max-w-sm rounded overflow-hidden shadow-lg text-center"
      onClick={() =>
        navigate(`/${drink.idDrink}`, { state: { from: location } })
      }
    >
      <img
        className="size-fit max-h-80 inline-block"
        src={drink.strDrinkThumb}
        alt="drink"
      />
      <p className="px-6 py-4">{drink.strDrink}</p>
    </li>
  );
};

export default DrinkCard;
