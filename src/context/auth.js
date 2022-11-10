import { createContext, useEffect, useState } from "react"
import { api } from "../api"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const AuthContext = createContext({
  handleLogin: dados => {},
  handleLogout: () => {},
  pegarOcorrencias: () => {},
})

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false)
  const [mulher, setMulher] = useState()
  const [lista, setLista] = useState([])

  const handleLogin = async dados => {
    const mulheres = await (await api.get("/api/mulher")).data
    const mulher =
      mulheres && mulheres.filter(info => info.email === dados.email && info.senha === dados.senha)[0]
    await AsyncStorage.removeItem("@id")
    if (mulher) {
      await AsyncStorage.setItem("@id", JSON.stringify(mulher.codMulher))
      setMulher(mulher)
      setLogged(true)
    }
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem("@id")
    setMulher(false)
    setLogged(false)
  }

  const pegarOcorrencias = async () => {
    const data = await (await api.get("/api/localEscolhido")).data
    if (data) {
      setLista(data)
    }
  }

  useEffect(() => {
    pegarOcorrencias()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleLogout,
        logged,
        mulher,
        pegarOcorrencias,
        lista,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
