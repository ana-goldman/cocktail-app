import axios from 'axios';
import { Drinks } from '../../types';

export const getDrinkById = async (id: string): Promise<Drinks> => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  return response.data;
};
