import { Home } from "../screens/Home";
import { Game } from "../screens/Game";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Navigator = createNativeStackNavigator()

export function AppRoutes(){
  return(
    <Navigator.Navigator screenOptions={{ headerShown: false }}>
      <Navigator.Screen name='home' component={Home} />
      <Navigator.Screen name='game' component={Game} />
    </Navigator.Navigator>
  )
}