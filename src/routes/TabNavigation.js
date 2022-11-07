import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationOcorrencias } from "./Navigation"
import { MaterialIcons } from "@expo/vector-icons"
import { MinhasOcorrencias, Perfil } from "../screens"

const { Navigator, Screen } = createBottomTabNavigator()

export const NavigationLogin = () => {
  return (
    <Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "purple" }}
      initialRouteName='ocorrencias'
    >
      <Screen
        name='ocorrencias'
        component={NavigationOcorrencias}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <MaterialIcons name='home' color={color} size={size} />,
        }}
      />
      <Screen
        name='minhasOcorrencias'
        component={MinhasOcorrencias}
        options={{
          tabBarLabel: "Minhas ocorrências",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='directions-walk' color={color} size={size} />
          ),
        }}
      />
      <Screen
        name='perfil'
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => <MaterialIcons name='person' color={color} size={size} />,
        }}
      />
    </Navigator>
  )
}
