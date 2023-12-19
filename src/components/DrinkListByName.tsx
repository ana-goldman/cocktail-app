import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDrinkByName } from '../utils/api/getDrinkByName';
import { Drinks } from '../types';
import SearchBar from './SearchBar';
import DrinkCard from './DrinkCard';

const DrinkListByName: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const { isLoading, isError, data, error, refetch } = useQuery<Drinks, Error>(
    ['searchByName', { searchInput }],
    () => getDrinkByName(searchInput),
    {
      enabled: searchInput.trim().length >= 3,
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
      />
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {data &&
        (data?.drinks?.length > 0 ? (
          <ul>
            {data.drinks.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </ul>
        ) : (
          <div>Nothing found...</div>
        ))}
    </>
  );
};

export default DrinkListByName;
