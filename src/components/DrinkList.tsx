import React from 'react';
import { useQuery } from 'react-query';
import { getRandomDrink } from '../utils/api/getRandomDrink';
import { Drinks } from '../types';
import DrinkCard from './DrinkCard';

const DrinkList: React.FC = () => {
  const { isLoading, isError, data, error, refetch } = useQuery<Drinks, Error>(
    'item',
    getRandomDrink,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <span>Here is your list</span>
      <ul>
        {data?.drinks.map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </ul>
      <button onClick={() => refetch()}>Click me</button>
    </>
  );
};

export default DrinkList;
