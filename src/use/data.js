import { api } from 'boot/axios';

export default () => {
  const dailyVegitablFruitsPrice = async () => {
    const data = await api.get('api/data/get-data/');
    return data;
  };
  const dailyVegitablFruitsPriceExample = async () => {
    const data = await api.get('api/data/get-data-example/');
    return data;
  };
  return {
    dailyVegitablFruitsPrice,
    dailyVegitablFruitsPriceExample,
  };
};
