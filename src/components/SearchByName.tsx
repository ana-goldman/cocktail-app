import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDrinkByName } from '../utils/api/getDrinkByName';
import DrinkCard from './DrinkCard';
import { Drinks } from '../types';
import SearchBar from './SearchBar';

const SearchByName: React.FC = () => {
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
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {data?.drinks !== null ? (
        <ul>
          {data?.drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </ul>
      ) : (
        <div>Nothing found...</div>
      )}
    </>
  );
};

export default SearchByName;
