import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppRoutes } from "./app.routes";

export function Routes(){
  return (
    <NavigationContainer>
        <AppRoutes />
    </NavigationContainer>
  )
}