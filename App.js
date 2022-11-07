import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import AuthProvider from "./src/context/auth"
import Routes from "./src/routes"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
