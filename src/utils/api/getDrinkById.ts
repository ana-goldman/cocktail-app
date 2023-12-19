import axios from 'axios';
import { Drink } from '../../types';

export const getDrinkById = async (id: string): Promise<Drink> => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  return response.data.drinks[0];
};
