import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from './src/screens/ProfileScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    profile: ProfileScreen
  },
  {
    initialRouteName: "profile",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
