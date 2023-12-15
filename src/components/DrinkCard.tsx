import { Drink } from '../types';

const DrinkCard: React.FC<{ key: string; drink: Drink }> = (props: {
  drink: Drink;
}) => {
  const { drink } = props;

  return (
    <li>
      <img src={drink.strDrinkThumb} alt="drink" />
      <p>{drink.strDrink}</p>
    </li>
  );
};

export default DrinkCard;
