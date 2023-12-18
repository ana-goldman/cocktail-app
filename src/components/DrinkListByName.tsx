import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getDrinkByName } from '../utils/api/getDrinkByName';
import { Drinks } from '../types';
import SearchBar from './SearchBar';
import DrinkList from './DrinkList';

const DrinkListByName: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const { isLoading, isError, data, error, refetch } = useQuery<Drinks, Error>(
    'search',
    () => getDrinkByName(searchInput),
    {
      enabled: false,
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
        (data?.drinks !== null ? (
          <DrinkList data={data} />
        ) : (
          <div>Nothing found...</div>
        ))}
    </>
  );
};

export default DrinkListByName;
