import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import RestauranteTela from './telas/RestaurantesTela';
import AdicionarRestauranteTela from './telas/AdicionarRestaurantesTela';

const Navigator = createStackNavigator(
  {
    Restaurante: RestauranteTela,
    AdicionarRestaurante: AdicionarRestauranteTela,
  }
);

export default createAppContainer(Navigator);
