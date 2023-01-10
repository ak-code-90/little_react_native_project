import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
  const [inputValue,setInputValue] = useState({text:'',error:false});
  
  const [goalList,setGoalList] = useState([]);

  function handleChange(entteredText) {
    setInputValue(prev => ({...prev,text:entteredText}));
  }

  function handlePress() {
    if (!inputValue.text) {
      setInputValue(prev => ({...prev,error:true}))
      console.log(inputValue.error)
      return
    }
    else
    setInputValue(prev => ({...prev,error:false}))
    setGoalList(prevList => [...prevList,{text: inputValue.text, id: nanoid()}])
    setInputValue(prev => ({...prev,text:''}));
    console.log(inputValue.error)
  }

  return (
    <>
    <View style={styles.appContainer}>
     <GoalInput
     handleChange={handleChange}
     handlePress={handlePress}
     inputValue={inputValue}
     />
     <View style={styles.goalsContainer}>
       <FlatList 
       data={goalList}
       keyExtractor={(item) => {return item.id;}}
       renderItem={itemData => {
        return (
          <GoalItem itemData={itemData} />
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
  goalsContainer : {
    flex: 5,
    marginTop: 8,
  },
  
});
