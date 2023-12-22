import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDrinkByName } from '../utils/api/getDrinkByName';
import { Drinks } from '../types';
import SearchBar from './SearchBar';
import DrinkCard from './DrinkCard';
import { useDebounce } from '../utils/hooks/useDebounce';

const DrinkListByName: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const debouncedValue = useDebounce<string>(searchInput, 500);
  const { isLoading, isError, data, error } = useQuery<Drinks, Error>(
    ['searchByName', { debouncedValue }],
    () => getDrinkByName(debouncedValue),
    {
      enabled: debouncedValue.trim().length >= 3,
      keepPreviousData: false,
    },
  );

  return (
    <>
      <SearchBar
        value={searchInput}
        onChange={(e) => setSearchInput(e.currentTarget.value)}
        withBtn={false}
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
