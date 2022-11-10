import React, { useContext } from "react"
import { FlatList, SafeAreaView, StyleSheet } from "react-native"
import { Button, Text } from "react-native-paper"

import Ocorrencia from "../../components/Ocorrencia"
import { AuthContext } from "../../context/auth"

export const Home = ({ navigation }) => {
  const { lista } = useContext(AuthContext)
  const renderItem = ({ item }) => (
    <Ocorrencia
      rua={item.endereco.nomeRua}
      nivelPerigo={item.avaliacaoPerigo}
      data={item.dtOcorrencia}
      bairro={item.endereco.bairro.nomeBairro}
      id={item.codLocal}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text variant='headlineSmall' style={styles.titulo}>
        Lista de ocorrências
      </Text>

      <FlatList data={lista} renderItem={renderItem} style={styles.lista} />

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
  botao: {
    width: 300,
    backgroundColor: "#966B9D",
  },
  titulo: {
    color: "#966B9D",
    marginTop: 20,
  },
  lista: {
    marginBottom: 12,
  },
})
