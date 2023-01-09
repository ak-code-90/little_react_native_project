import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { nanoid } from 'nanoid'

export default function App() {
  const [inputValue,setInputValue] = useState('');
  const [goalList,setGoalList] = useState([]);


  function handleChange(text) {
    setInputValue(text);
  }

  function handlePress(event) {
    event.preventDefault();
    setGoalList(prevList => ([...prevList,inputValue]))
    setInputValue('');
  }

  return (
    <>
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput 
        value={inputValue}
        onChangeText={handleChange} 
        style={styles.textInput} 
        placeholder="Vos objectifs !"
        maxLength={100}
        multiline={true}
        />
      <Button onPress={handlePress} style={StyleSheet.button} title="Ajouter un objectif" />
     </View>
     <View style={styles.goalsContainer}>
      {goalList.map((goal,i) => <Text key={goal[i]}>{goal}</Text>)}
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
