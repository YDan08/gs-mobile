import { DateTimePickerAndroid } from "@react-native-community/datetimepicker"
import moment from "moment/moment"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { ScrollView, StyleSheet, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"
import { api } from "../../api"

export const Cadastro = ({ navigation }) => {
  const { handleSubmit, control } = useForm()

  const [date, setDate] = useState(new Date())
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setDate(currentDate)
  }

  const show = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",
      maximumDate: Date.now(),
    })
  }

  const onSubmit = async user => {
    const mulher = {
      nomeMulher: user.nome,
      email: user.email,
      senha: user.senha,
      dtNascimento: moment(date).format("DD/MM/YYYY"),
      cpf: user.cpf,
      cpfDigito: 12,
      telefone: user.telefone,
      telefoneDDD: 11,
    }

    try {
      await api.post("/api/mulher", mulher)
      navigation.navigate("login")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <ScrollView>
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
          <View style={styles.divDataNascimento}>
            <Text>Data de Nascimento</Text>
            <Text style={styles.textData}>{moment(date).format("DD/MM/YYYY")}</Text>
            <Button onPress={show}>mudar</Button>
          </View>
        </View>
        <View style={styles.divBotoes}>
          <Button mode='contained' onPress={() => navigation.goBack()} style={styles.botao}>
            Voltar
          </Button>
          <Button mode='contained' style={styles.botao} onPress={handleSubmit(onSubmit)}>
            Cadastrar
          </Button>
        </View>
      </View>
    </ScrollView>
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
  divDataNascimento: {
    marginVertical: 16,
  },
  textData: {
    marginVertical: 4,
  },
})
