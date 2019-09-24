import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import PredictScreen from './screens/PredictScreen'


const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Prediction: { screen: PredictScreen }
})

export default createAppContainer(App);