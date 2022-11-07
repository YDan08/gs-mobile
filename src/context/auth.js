import { createContext, useState } from "react"

export const AuthContext = createContext({
  handleLogin: () => {},
  handleLogout: () => {},
})

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false)

  const handleLogin = () => {
    setLogged(true)
  }

  const handleLogout = () => {
    setLogged(false)
  }

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, logged }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
