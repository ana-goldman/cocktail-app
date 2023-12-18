import React from 'react';
import RandomDrink from './RandomDrink';
import DrinkListByName from './DrinkListByName';

const HomePage: React.FC = () => {
  return (
    <>
      <RandomDrink />
      <DrinkListByName />
    </>
  );
};

export default HomePage;
