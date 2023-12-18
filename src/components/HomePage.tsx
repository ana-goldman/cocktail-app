import React from 'react';
import DrinkList from './DrinkList';
import SearchByName from './SearchByName';

const HomePage: React.FC = () => {
  return (
    <>
      <DrinkList />
      <SearchByName />
    </>
  );
};

export default HomePage;
