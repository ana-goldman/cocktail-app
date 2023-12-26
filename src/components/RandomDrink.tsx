import React from 'react';
import { useQuery } from 'react-query';
import { getRandomDrink } from '../utils/api/getRandomDrink';
import { Drinks } from '../types';
import DrinkCard from './DrinkCard';

const RandomDrink: React.FC = () => {
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
    <ul className="list-none text-center justify-self-center space-y-4">
      {data && <DrinkCard drink={data.drinks[0]} />}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
        onClick={() => refetch()}
      >
        Refresh
      </button>
    </ul>
  );
};

export default RandomDrink;
