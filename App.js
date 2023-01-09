import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <>
    
    <View style={styles.appContainer}>
     <View>
      <TextInput placeholder="Vos objectifs d'apprentissage"/>
      <Button title="Ajouter un objectif" />
     </View>
     <View>
      <Text>Liste des objectifs...</Text>
     </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50,
  }
});
