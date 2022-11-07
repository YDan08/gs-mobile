import { Controller, useForm } from "react-hook-form"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"

export const CadastroOcorrencia = ({ navigation }) => {
  const { handleSubmit, control } = useForm()
  return (
    <SafeAreaView style={styles.container}>
      <Text variant='headlineMedium'>Cadastro de ocorrência</Text>
      <View style={styles.divInputs}>
        <Controller
          name='rua'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='Rua'
              mode='outlined'
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name='bairro'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='Bairro'
              mode='outlined'
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
        <Controller
          name='cidade'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='Cidade'
              mode='outlined'
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />

        <Controller
          name='incidente'
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              label='Descrição do incidente'
              mode='outlined'
              multiline={true}
              numberOfLines={10}
              onChangeText={onChange}
              value={value}
              style={styles.input}
            />
          )}
        />
      </View>
      <View style={styles.divBotoes}>
        <Button mode='contained' onPress={() => navigation.goBack()} style={styles.botao}>
          Voltar
        </Button>
        <Button mode='contained' style={styles.botao} onPress={() => navigation.navigate("home")}>
          Cadastrar
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default CadastroOcorrencia

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  divInputs: {
    width: 320,
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
})
