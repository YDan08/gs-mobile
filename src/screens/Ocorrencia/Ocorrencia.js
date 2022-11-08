import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"

export const Ocorrencia = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text variant='headlineSmall' style={{ marginTop: 20 }}>
        Ocorrência
      </Text>
      <ScrollView style={styles.divOcorrencia}>
        <View style={styles.divTopico}>
          <Text style={styles.tituloTopico} variant='titleLarge'>
            Rua
          </Text>
          <Text variant='bodyMedium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </View>

        <View style={styles.divTopico}>
          <Text style={styles.tituloTopico} variant='titleLarge'>
            Bairro
          </Text>
          <Text variant='bodyMedium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </View>

        <View style={styles.divTopico}>
          <Text style={styles.tituloTopico} variant='titleLarge'>
            Nível de perigo
          </Text>
          <Text variant='bodyMedium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </View>

        <View style={styles.divTopico}>
          <Text style={styles.tituloTopico} variant='titleLarge'>
            Data
          </Text>
          <Text variant='bodyMedium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </View>

        <View style={styles.divTopico}>
          <Text style={styles.tituloTopico} variant='titleLarge'>
            Ocorrido
          </Text>
          <Text variant='bodyMedium'>
            Ocorrido: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ratione rem eaque
            quia! In sequi exercitationem libero nobis omnis laborum alias doloribus dolores. Aut omnis
            totam vero rem iste nobis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            aliquam amet ad molestias eaque fugit quidem iusto error officiis consectetur, accusamus ab
            soluta adipisci eius laborum eveniet velit nostrum tempore.
          </Text>
        </View>
      </ScrollView>
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
