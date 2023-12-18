import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Drink } from '../types';

type Props = {
  drink: Drink;
};

const DrinkCard: React.FC<Props> = ({ drink }) => {
  const navigate = useNavigate();

  const onClick = (id: string) => {
    console.log(id);
    navigate(`/${drink.idDrink}`);
  };

  return (
    <li onClick={() => onClick(drink.idDrink)}>
      <img src={drink.strDrinkThumb} alt="drink" />
      <p>{drink.strDrink}</p>
    </li>
  );
};

export default DrinkCard;
