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
        <ul>
          {data.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </ul>
      ) : (
        <div>Nothing found...</div>
      )}
      <button onClick={() => navigate('/')}>Back</button>
    </>
  );
};

export default DrinkListByIngredient;
