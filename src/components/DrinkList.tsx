import React from 'react';
import DrinkCard from './DrinkCard';
import { Drinks } from '../types';

type Props = {
  data: Drinks;
};

const DrinkList: React.FC<Props> = ({ data }) => {
  return (
    <ul>
      {data?.drinks.map((drink) => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}
    </ul>
  );
};

export default DrinkList;
