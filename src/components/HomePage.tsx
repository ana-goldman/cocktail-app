import React from 'react';
import RandomDrink from './RandomDrink';
import DrinkListByName from './DrinkListByName';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="mt-5 mb-5 grid grid-cols-2 gap-4">
      <RandomDrink />
      <Link
        to="/drinks"
        className="text-4xl text-center text-blue-500 hover:text-blue-800"
      >
        Search by Ingredient
      </Link>
      <DrinkListByName />
    </div>
  );
};

export default HomePage;
