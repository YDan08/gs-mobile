import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Cadastro, CadastroOcorrencia, Home, Login, Ocorrencia } from "../screens"
const { Screen, Navigator } = createNativeStackNavigator()

export const NavigationLogout = () => {
  return (
    <Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
      <Screen name='cadastro' component={Cadastro} />
      <Screen name='login' component={Login} />
    </Navigator>
  )
}

export const NavigationOcorrencias = () => {
  return (
    <Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen
        name='cadastroOcorrencia'
        component={CadastroOcorrencia}
        options={{ animation: "slide_from_right" }}
      />
      <Screen name='ocorrencia' component={Ocorrencia} options={{ animation: "slide_from_right" }} />
    </Navigator>
  )
}
