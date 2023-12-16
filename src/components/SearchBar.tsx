import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDrinkByName } from '../utils/api/getDrinkByName';
import DrinkCard from './DrinkCard';
import { Drinks } from '../types';

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const { isLoading, isError, data, error, refetch } = useQuery<Drinks, Error>(
    'search',
    () => getDrinkByName(searchInput),
    {
      enabled: false,
    },
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchInput !== '') {
      refetch();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type here..."
          value={searchInput}
          onChange={handleChange}
        />
      </form>
      <ul>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error: {error.message}</div>}
        {data?.drinks === null && <div>Nothing found...</div>}
        {data?.drinks !== null &&
          data?.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
      </ul>
    </>
  );
};

export default SearchBar;
