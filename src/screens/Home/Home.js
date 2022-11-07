import React from "react"
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"

export const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant='headlineSmall' style={{ marginTop: 20 }}>
        Lista de ocorrências
      </Text>

      <ScrollView style={styles.containerOcorrencias}>
        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
        </View>
        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
        </View>
        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
        </View>
        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
        </View>
        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
        </View>
        <View style={styles.divOcorrencia}>
          <Text>Rua: Rua Augusto</Text>
          <Text>Bairro: Vila Lara</Text>
          <Text>Nível de perigo: Alto</Text>
        </View>
      </ScrollView>

      <Button
        mode='contained'
        style={styles.botao}
        onPress={() => navigation.navigate("cadastroOcorrencia")}
      >
        Cadastar nova ocorrência
      </Button>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-between",
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
})
