import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Drink } from '../types';
import SearchBar from './SearchBar';
import DrinkCard from './DrinkCard';
import { getDrinkByIngredient } from '../utils/api/getDrinkByIngredient';

const DrinkListByIngredient: React.FC = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const { isLoading, isError, data, error, refetch } = useQuery<Drink[], Error>(
    ['searchByIngredient', { searchInput }],
    () => getDrinkByIngredient(searchInput),
    {
      enabled: false,
      keepPreviousData: false,
    },
  );

  const handleSearch = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (searchInput !== '') {
      refetch();
    }
  };

  return (
    <>
      <SearchBar
        value={searchInput}
        onSubmit={handleSearch}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
        withBtn={true}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {data ? (
        <ul className="list-none grid grid-cols-4 gap-5 mb-4">
          {data.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </ul>
      ) : (
        <div className="text-4xl text-center">Nothing found...</div>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
        onClick={() => navigate('/')}
      >
        Back
      </button>
    </>
  );
};

export default DrinkListByIngredient;
