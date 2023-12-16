import React from 'react';
import DrinkList from './DrinkList';
import SearchBar from './SearchBar';

const HomePage: React.FC = () => {
  return (
    <>
      <DrinkList />
      <SearchBar />
    </>
  );
};

export default HomePage;
