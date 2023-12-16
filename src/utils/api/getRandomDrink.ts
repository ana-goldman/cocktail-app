import axios from 'axios';
import { Drinks } from '../../types';

export const getRandomDrink = async (): Promise<Drinks> => {
  const response = await axios.get(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  );
  return response.data;
};
