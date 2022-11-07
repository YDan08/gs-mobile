import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"

export const MinhasOcorrencias = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant='headlineSmall' style={{ marginTop: 20 }}>
        Minhas ocorrências
      </Text>

      <ScrollView style={styles.containerOcorrencias}>
        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
          <View style={styles.divOpcoesOcorrencia}>
            <Button>Editar</Button>
            <Button>Excluir</Button>
          </View>
        </View>

        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
          <View style={styles.divOpcoesOcorrencia}>
            <Button>Editar</Button>
            <Button>Excluir</Button>
          </View>
        </View>

        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
          <View style={styles.divOpcoesOcorrencia}>
            <Button>Editar</Button>
            <Button>Excluir</Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MinhasOcorrencias

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  divOcorrencia: {
    width: 320,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 12,
  },
  containerOcorrencias: {
    marginVertical: 20,
  },
  botao: {
    width: 300,
  },
  divOpcoesOcorrencia: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})
