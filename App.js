import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from './src/screens/ProfileScreen';
import TextScreen from './src/screens/TextScreen';
// import SplashScreen from './src/screens/SplashScreen';

const navigator = createStackNavigator(
  {
    // Splash : SplashScreen,
    Home: HomeScreen,
    profile: ProfileScreen,
    text : TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
