import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from './src/screens/ProfileScreen';
import TextScreen from './src/screens/TextScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeMenu from './src/screens/HomeMenu';
import HomeRestuarent from './src/screens/HomeRestuarent';


const navigator = createStackNavigator(
  {
    // Splash : SplashScreen,
    Home: HomeScreen,
    profile: ProfileScreen,
    text: TextScreen,
    counter: CounterScreen,
    homemenu: HomeMenu,
    homeresturant: HomeRestuarent,
  },
  {
    initialRouteName: "homemenu",
    defaultNavigationOptions: {
      title: "Resturants"
    }
  }
);

export default createAppContainer(navigator);
