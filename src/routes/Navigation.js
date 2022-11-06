import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home"
const { Screen, Navigator } = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <Navigator>
      <Screen name='home' component={Home} options={{ title: "Home" }} />
    </Navigator>
  )
}
