import { NavigationContainer } from "@react-navigation/native"
import { useContext } from "react"
import { AuthContext } from "../context/auth"
import { NavigationLogout } from "./Navigation"
import { NavigationLogin } from "./TabNavigation"

export const Routes = () => {
  const { logged } = useContext(AuthContext)
  return <NavigationContainer>{logged ? <NavigationLogin /> : <NavigationLogout />}</NavigationContainer>
}

export default Routes
