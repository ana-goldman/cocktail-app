import React from 'react';
import RandomDrink from './RandomDrink';
import DrinkListByName from './DrinkListByName';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <RandomDrink />
      <DrinkListByName />
      <span>
        Find your drink <Link to="/drinks">here</Link>
      </span>
    </>
  );
};

export default HomePage;
