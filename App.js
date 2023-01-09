import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <>
    
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Vos objectifs !"/>
      <Button style={StyleSheet.button} title="Ajouter un objectif" />
     </View>
     <View style={styles.goalsContainer}>
      <Text>Liste des objectifs d'apprentissage...</Text>
     </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
  },
  inputContainer : {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margingBottom:24,
    borderBottomWidth:1,
    borderColor: '#ccc',
  },
  textInput : {
    borderWidth:1,
    borderColor: '#ccc',
    width:'55%',
    marginRight: 8,
    paddingLeft:8
  },
  goalsContainer : {
    flex: 5,
    marginTop: 8,
  }
 
});
