import { View,TextInput,Button,StyleSheet,Text } from "react-native";

export default function GoalInput({handlePress,handleChange,inputValue}) {
    return (
        <>
        <View style={styles.inputContainer}>
            <TextInput 
                value={inputValue.text}
                onChangeText={handleChange} 
                style={styles.textInput} 
                placeholder="Vos objectifs !"
                maxLength={100}
                multiline={true}
                />
            <Button color="#0a3a6d" onPress={handlePress} title="Ajouter un objectif" />
            
        </View>
        {inputValue.error && <Text style={styles.errorMessage}>Veuillez entrer un objectif, maximum 100 caractères</Text>}
        </>
    )
}

const styles = StyleSheet.create({
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
      errorMessage : {
        paddingTop:8,
        color: '#df7070',
      }
})