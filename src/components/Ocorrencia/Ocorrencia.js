import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View } from "react-native"
import { Text, TouchableRipple } from "react-native-paper"

export const Ocorrencia = ({ rua, nivelPerigo, data, bairro, id }) => {
  const navigation = useNavigation()
  return (
    <TouchableRipple onPress={() => navigation.navigate("ocorrencia", { id })} style={styles.divOcorrencia}>
      <View>
        <Text>Rua: {rua}</Text>
        <Text>Bairro: {bairro}</Text>
        <Text>Nível de perigo: {nivelPerigo}</Text>
        <Text>Data: {data}</Text>
      </View>
    </TouchableRipple>
  )
}

export default Ocorrencia

const styles = StyleSheet.create({
  divOcorrencia: {
    width: 320,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 12,
  },
})
