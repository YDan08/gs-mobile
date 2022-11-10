import { DateTimePickerAndroid } from "@react-native-community/datetimepicker"
import moment from "moment/moment"
import { useContext, useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { Button, RadioButton, Text, TextInput } from "react-native-paper"
import { api } from "../../api"
import { AuthContext } from "../../context/auth"

export const CadastroOcorrencia = ({ navigation, route }) => {
  const id = route.params?.id
  const { mulher, pegarOcorrencias } = useContext(AuthContext)
  const { handleSubmit, control, setValue } = useForm()
  const [date, setDate] = useState(new Date())
  const [ocorrenciaDate, setOcorrenciaDate] = useState()
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

  const pegarIncidente = async () => {
    if (id) {
      const data = await (await api.get(`/api/localEscolhido/${id}`)).data
      if (data) {
        setValue("incidente", data.incidente)
        setValue("nivel", data.avaliacaoPerigo)
        setValue("rua", data.endereco.nomeRua)
        setValue("complemento", data.endereco.desComplemento)
        setValue("bairro", data.endereco.bairro.nomeBairro)
        setOcorrenciaDate(data.dtOcorrencia)
      }
    }
  }

  useEffect(() => {
    pegarIncidente()
  }, [])

  const onSubmit = async dados => {
    const ocorrencia = {
      codMulher: mulher.codMulher,
      incidente: dados.incidente,
      dtOcorrencia: id ? ocorrenciaDate : moment(date).format("DD/MM/YYYY"),
      avaliacaoPerigo: dados.nivel,
      endereco: {
        nomeRua: dados.rua,
        desComplemento: dados.complemento,
        bairro: {
          nomeBairro: dados.bairro,
          cidade: {
            nomeCidade: "São Paulo",
            siglaCidade: "SP",
            estado: {
              nomeEstado: "São paulo",
              siglaEstado: "SP",
            },
          },
        },
      },
    }
    if (id) {
      try {
        await api.put(`/api/localEscolhido/${id}`, ocorrencia)
        pegarOcorrencias()

        navigation.navigate("home")
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        await api.post("/api/localEscolhido", ocorrencia)
        pegarOcorrencias()

        navigation.navigate("home")
      } catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant='headlineMedium' style={styles.titulo}>
          Cadastro de ocorrência
        </Text>
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
            name='complemento'
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput
                label='Complemento'
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

          <Controller
            name='nivel'
            control={control}
            render={({ field: { onChange, value } }) => (
              <RadioButton.Group onValueChange={onChange} value={value}>
                <View style={styles.divRadio}>
                  <Text>Nível de perigo:</Text>
                  <View style={styles.optionsRadio}>
                    <View style={styles.option}>
                      <RadioButton value={3} />
                      <Text>Alto</Text>
                    </View>
                    <View style={styles.option}>
                      <RadioButton value={2} />
                      <Text>Médio</Text>
                    </View>
                    <View style={styles.option}>
                      <RadioButton value={1} />
                      <Text>Baixo</Text>
                    </View>
                  </View>
                </View>
              </RadioButton.Group>
            )}
          />

          {!id && (
            <View style={styles.divDataOcorrencia}>
              <Text>Data do ocorrido</Text>
              <Text style={styles.textData}>{moment(date).format("DD/MM/YYYY")}</Text>
              <Button onPress={show}>mudar</Button>
            </View>
          )}
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

export default CadastroOcorrencia

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
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
  },
  divDataOcorrencia: {
    marginVertical: 12,
  },
  textData: {
    marginVertical: 4,
  },
  divRadio: {
    marginVertical: 12,
  },
  optionsRadio: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titulo: {
    color: "#966B9D",
    marginTop: 20,
  },
})
