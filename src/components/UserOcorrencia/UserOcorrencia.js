import { useNavigation } from "@react-navigation/native"
import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { api } from "../../api"
import { AuthContext } from "../../context/auth"

export const UserOcorrencia = ({ rua, nivelPerigo, data, bairro, id }) => {
  const navigation = useNavigation()
  const { pegarOcorrencias } = useContext(AuthContext)
  const excluirOcorrencia = async () => {
    try {
      await api.delete(`/api/localEscolhido/${id}`)
      pegarOcorrencias()
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <View style={styles.divOcorrencia}>
      <View>
        <Text>Rua: {rua}</Text>
        <Text>Bairro: {bairro}</Text>
        <Text>Nível de perigo: {nivelPerigo === 1 ? "baixo" : nivelPerigo === 2 ? "médio" : "alto"}</Text>
        <Text>Data: {data}</Text>
        <View style={styles.divOpcoesOcorrencia}>
          <Button
            icon='square-edit-outline'
            textColor='#966B9D'
            onPress={() => navigation.navigate("cadastroOcorrencia", { id })}
          >
            Editar
          </Button>
          <Button icon='trash-can-outline' onPress={() => excluirOcorrencia()} textColor='#966B9D'>
            Excluir
          </Button>
        </View>
      </View>
    </View>
  )
}

export default UserOcorrencia

const styles = StyleSheet.create({
  divOcorrencia: {
    width: 320,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 12,
  },
  divOpcoesOcorrencia: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
})
