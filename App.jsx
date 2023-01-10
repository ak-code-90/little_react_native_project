import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';



export default function App() {
  const [inputValue,setInputValue] = useState({text:'',error:false});
  const [goalList,setGoalList] = useState([]);
  const [modalIsVisible,setModalIsVisible] = useState(false)

  function openModal() {
    setModalIsVisible(true);
  }

  function closeModal() {
    setModalIsVisible(false);
  }

  function handleChange(entteredText) {
    setInputValue(prev => ({...prev,text:entteredText}));
  }

  function handlePress() {
    if (!inputValue.text) {
      setInputValue(prev => ({...prev,error:true}))
      return
    }
    else
    setInputValue(prev => ({...prev,error:false}))
    setGoalList(prevList => [...prevList,{text: inputValue.text, id: nanoid()}])
    setInputValue(prev => ({...prev,text:''}));
    closeModal();
  }

  function deleteItem(id) {
    setGoalList(prevList => prevList.filter(goal => goal.id !== id));
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button title='Ajouter un nouvel objectif' color="#629b97" onPress={openModal} />
      <GoalInput
        visible={modalIsVisible}
        closeModal={closeModal}
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
          <GoalItem 
          itemData={itemData} 
          onDeleteItem={deleteItem}
          id={itemData.item.id}
          />
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
    paddingHorizontal:8,
  },
  goalsContainer : {
    flex: 5,
    marginTop: 8,
  },
  
});
