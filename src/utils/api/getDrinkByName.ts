import axios from 'axios';
import { Drinks } from '../../types';

export const getDrinkByName = async (value: string): Promise<Drinks> => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`,
  );
  return response.data;
};
