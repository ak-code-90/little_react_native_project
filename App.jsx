import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'



export default function App() {
  const [inputValue,setInputValue] = useState('');
  const [goalList,setGoalList] = useState([]);

  function handleChange(text) {
    setInputValue(text);
  }

  function handlePress(event) {
    event.preventDefault();
    setGoalList(prevList => [...prevList,{text:inputValue, id: nanoid()}])
    setInputValue('');
    console.log(goalList);
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
      <Button color="#0a3a6d" onPress={handlePress} style={StyleSheet.button} title="Ajouter un objectif" />
     </View>
     <View style={styles.goalsContainer}>
       <FlatList 
       data={goalList}
       keyExtractor={(item) => {item.id}}
       renderItem={itemData => {
        return (
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
        )
       }}
       alwaysBounceVertical={false}
       />
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
  },
  goalItem: {
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor: "#06afa4",
  },
  goalText: {
    color: 'white'
  }
});
