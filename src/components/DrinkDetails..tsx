import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDrinkById } from '../utils/api/getDrinkById';
import { Drinks } from '../types';

const DrinkDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { isLoading, isError, data, error } = useQuery<Drinks, Error>(
    'searchById',
    () => getDrinkById(id as string),
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <p>{data.drinks[0].strDrink}</p>
          <img src={data.drinks[0].strDrinkThumb} alt="drink" />
          <p>Ingredients</p>
          <ul>
            {Object.entries(data.drinks[0])
              .filter(
                ([key, value]) =>
                  key.startsWith('strIngredient') && value && value.trim(),
              )
              .map(([key, value]) => (
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
