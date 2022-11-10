import { useEffect, useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { api } from "../../api"

export const Ocorrencia = ({ navigation, route }) => {
  const { id } = route.params
  const [incidente, setIncidente] = useState()
  const pegarOcorrencia = async () => {
    const data = await (await api.get(`/api/localEscolhido/${id}`)).data
    if (data) {
      setIncidente(data)
    } else {
      navigation.goBack()
    }
  }
  useEffect(() => {
    pegarOcorrencia()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Text variant='headlineSmall' style={{ marginTop: 20 }}>
        Ocorrência
      </Text>

      {incidente && (
        <ScrollView style={styles.divOcorrencia}>
          <View style={styles.divTopico}>
            <Text style={styles.tituloTopico} variant='titleLarge'>
              Rua
            </Text>
            <Text variant='bodyMedium'>{incidente.endereco.nomeRua}</Text>
          </View>

          <View style={styles.divTopico}>
            <Text style={styles.tituloTopico} variant='titleLarge'>
              Bairro
            </Text>
            <Text variant='bodyMedium'>{incidente.endereco.bairro.nomeBairro}</Text>
          </View>

          <View style={styles.divTopico}>
            <Text style={styles.tituloTopico} variant='titleLarge'>
              Nível de perigo
            </Text>
            <Text variant='bodyMedium'>{incidente.avaliacaoPerigo}</Text>
          </View>

          <View style={styles.divTopico}>
            <Text style={styles.tituloTopico} variant='titleLarge'>
              Data
            </Text>
            <Text variant='bodyMedium'>{incidente.dtOcorrencia}</Text>
          </View>

          <View style={styles.divTopico}>
            <Text style={styles.tituloTopico} variant='titleLarge'>
              Ocorrido
            </Text>
            <Text variant='bodyMedium'>{incidente.incidente}</Text>
          </View>
        </ScrollView>
      )}

      <Button onPress={() => navigation.goBack()} style={styles.botao}>
        Voltar
      </Button>
    </SafeAreaView>
  )
}

export default Ocorrencia

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  divOcorrencia: {
    paddingHorizontal: 20,
    marginVertical: 12,
    width: 320,
  },
  botao: {
    width: 300,
  },
  divTopico: {
    marginBottom: 12,
  },
  tituloTopico: {
    fontWeight: "bold",
    marginBottom: 4,
  },
})
