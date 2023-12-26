import React, { useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getDrinkById } from '../utils/api/getDrinkById';
import { Drink } from '../types';

const DrinkDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
        <div className="mb-4">
          <div className="text-center mb-6">
            <p className="text-4xl pb-4">{data.strDrink}</p>
            <img
              className="size-fit max-h-80 inline-block rounded-full"
              src={data.strDrinkThumb}
              alt="drink"
            />
          </div>

          <p className="text-4xl pb-4">Ingredients</p>
          <ul className="list-disc">
            {ingredients.map(([key, value]) => (
              <li className="text-sm" key={key}>
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
        onClick={() => {
          const back = location.state?.from?.pathname;
          back ? navigate(back) : navigate('/');
        }}
      >
        Back
      </button>
    </>
  );
};

export default DrinkDetails;
