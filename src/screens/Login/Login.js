import { useContext } from "react"
import { Controller, useForm } from "react-hook-form"
import { StyleSheet, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import { AuthContext } from "../../context/auth"

export const Login = ({ navigation }) => {
  const { handleSubmit, control } = useForm()
  const { handleLogin } = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={styles.titulo}>
        Login
      </Text>
      <View style={styles.divInputs}>
        <Controller
          name='email'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='Email'
              mode='outlined'
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name='senha'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='Senha'
              mode='outlined'
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
      </View>
      <Button mode='contained' onPress={() => handleLogin()} style={styles.botao}>
        Entrar
      </Button>
      <Button
        onPress={() => navigation.navigate("cadastro")}
        style={styles.botaoCadastro}
        textColor='#966B9D'
      >
        Não tem conta? Cadastre-se
      </Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  divInputs: {
    width: 300,
    marginVertical: 12,
  },
  input: {
    marginTop: 12,
  },
  botao: {
    width: 120,
    marginTop: 12,
    backgroundColor: "#966B9D",
  },
  botaoCadastro: {
    marginTop: 12,
  },
  titulo: {
    marginBottom: 12,
    fontWeight: "bold",
    color: "#966B9D",
  },
})
