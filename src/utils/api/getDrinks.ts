import axios from 'axios';
import { Drinks } from '../../types';

export const getDrinks = async (url: string): Promise<Drinks> => {
  const response = await axios.get(url);
  return response.data;
};
