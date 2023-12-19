import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDrinkById } from '../utils/api/getDrinkById';
import { Drink } from '../types';

const DrinkDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { isLoading, isError, data, error } = useQuery<Drink, Error>(
    'searchById',
    () => getDrinkById(id as string),
  );

  const ingredients = useMemo(
    () =>
      data
        ? Object.entries(data).filter(
            ([key, value]) =>
              key.startsWith('strIngredient') && value && value.trim(),
          )
        : [],
    [data],
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <p>{data.strDrink}</p>
          <img src={data.strDrinkThumb} alt="drink" />
          <p>Ingredients</p>
          <ul>
            {ingredients.map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => navigate('/')}>Back</button>
    </>
  );
};

export default DrinkDetails;
