import { useContext } from "react"
import { Controller, useForm } from "react-hook-form"
import { StyleSheet, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import { api } from "../../api"
import { AuthContext } from "../../context/auth"

export const Perfil = () => {
  const { handleLogout, mulher } = useContext(AuthContext)
  const { handleSubmit, control } = useForm({
    defaultValues: {
      nome: mulher.nomeMulher,
      email: mulher.email,
      senha: mulher.senha,
      telefone: `${mulher.telefone}`,
      cpf: `${mulher.cpf}`,
    },
  })

  const onSubmit = async user => {
    const dados = {
      nomeMulher: user.nome,
      email: user.email,
      senha: user.senha,
      dtNascimento: mulher.dtNascimento,
      cpf: user.cpf,
      cpfDigito: 12,
      telefone: user.telefone,
      telefoneDDD: 11,
    }

    try {
      await api.put(`/api/mulher/${mulher.codMulher}`, dados)
    } catch (err) {
      console.log(err)
    }
  }

  const excluirConta = async () => {
    try {
      await api.delete(`/api/mulher/${mulher.codMulher}`)
      handleLogout()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <Text variant='headlineMedium' style={styles.titulo}>
        Olá, {mulher && mulher.nomeMulher.split(" ")[0]}
      </Text>
      <Button style={styles.botao} mode='elevated' onPress={() => handleLogout()}>
        Sair
      </Button>
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
              keyboardType='numeric'
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
      </View>
      <View style={styles.divBotoes}>
        <Button mode='contained' style={[styles.botao, styles.botaoExcluir]} onPress={() => excluirConta()}>
          Excluir
        </Button>
        <Button
          mode='contained'
          style={[styles.botao, styles.botaoAtualizar]}
          onPress={handleSubmit(onSubmit)}
        >
          Atualizar
        </Button>
      </View>
    </View>
  )
}

export default Perfil

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
  },
  divBotoes: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  divLogout: {
    width: 300,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  titulo: {
    marginBottom: 12,
    fontWeight: "bold",
    color: "#966B9D",
  },
  botaoExcluir: {
    backgroundColor: "#f26f6f",
  },
  botaoAtualizar: {
    backgroundColor: "#966B9D",
  },
})
