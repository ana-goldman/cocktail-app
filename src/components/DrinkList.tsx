import { useQuery } from 'react-query';
import { getDrinks } from '../utils/api/getDrinks';
import { Drinks } from '../types';
import DrinkCard from './DrinkCard';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const DrinkList: React.FC = () => {
  const { isLoading, isError, data, error, refetch } = useQuery<Drinks, Error>(
    'item',
    () => getDrinks(url),
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <span>Here is your list</span>
      <ul className="card-list">
        {data?.drinks.map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </ul>
      <button onClick={() => refetch()}>Click me</button>
    </>
  );
};

export default DrinkList;
