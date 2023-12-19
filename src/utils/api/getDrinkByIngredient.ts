import axios from 'axios';
import { Drink } from '../../types';

export const getDrinkByIngredient = async (value: string): Promise<Drink[]> => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${value}`,
  );
  console.log(response.data);
  return response.data.drinks;
};
