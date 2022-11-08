import { useContext } from "react"
import { Controller, useForm } from "react-hook-form"
import { StyleSheet, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import { AuthContext } from "../../context/auth"

export const Cadastro = ({ navigation }) => {
  const { handleSubmit, control } = useForm()
  const { handleLogin } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={styles.titulo}>
        Cadastro de usuário
      </Text>
      <View style={styles.divInputs}>
        <Controller
          name='nome'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='Nome Completo'
              mode='outlined'
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
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
        <Controller
          name='telefone'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='Telefone'
              mode='outlined'
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name='cpf'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='CPF'
              mode='outlined'
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Text>Data de Nascimento:</Text>
        <Button onPress={() => setOpen(true)}>mudar</Button>
      </View>
      <View style={styles.divBotoes}>
        <Button mode='contained' onPress={() => navigation.goBack()} style={styles.botao}>
          Voltar
        </Button>
        <Button mode='contained' style={styles.botao} onPress={() => handleLogin()}>
          Cadastrar
        </Button>
      </View>
    </View>
  )
}

export default Cadastro

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
    backgroundColor: "#966B9D",
  },
  divBotoes: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  titulo: {
    marginBottom: 12,
    fontWeight: "bold",
    color: "#966B9D",
  },
})
