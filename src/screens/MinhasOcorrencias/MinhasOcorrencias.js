import { useContext, useEffect, useState } from "react"
import { FlatList, SafeAreaView, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { api } from "../../api"
import UserOcorrencia from "../../components/UserOcorrencia/UserOcorrencia"
import { AuthContext } from "../../context/auth"

export const MinhasOcorrencias = () => {
  const { mulher, lista } = useContext(AuthContext)
  const [minhasOcorrencias, setMinhasOcorrencias] = useState([])
  const renderItem = ({ item }) => (
    <UserOcorrencia
      rua={item.endereco.nomeRua}
      nivelPerigo={item.avaliacaoPerigo}
      data={item.dtOcorrencia}
      bairro={item.endereco.bairro.nomeBairro}
      id={item.codLocal}
    />
  )

  const pegarOcorrencias = async () => {
    const data = await (await api.get("/api/localEscolhido")).data
    if (data) {
      const listaData = lista.filter(ocorrencia => ocorrencia.mulher.codMulher === mulher.codMulher)
      setMinhasOcorrencias(listaData)
    }
  }

  useEffect(() => {
    pegarOcorrencias()
  }, [lista])

  return (
    <SafeAreaView style={styles.container}>
      <Text variant='headlineSmall' style={styles.titulo}>
        Minhas ocorrências
      </Text>

      <FlatList data={minhasOcorrencias} renderItem={renderItem} style={styles.lista} />
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
  titulo: {
    color: "#966B9D",
    marginTop: 20,
  },
  lista: {
    marginBottom: 12,
  },
})
