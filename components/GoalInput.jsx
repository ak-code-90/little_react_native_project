import { View,TextInput,Button,StyleSheet,Text,Modal, Image } from "react-native";

export default function GoalInput({handlePress,handleChange,inputValue,visible,closeModal}) {
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={{uri:"https://freesvg.org/img/1329309424.png"}} />
                <TextInput 
                    value={inputValue.text}
                    onChangeText={handleChange} 
                    style={styles.textInput} 
                    placeholder="Vos objectifs d'apprentissage !"
                    maxLength={100}
                    multiline={true}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color="#df7070" onPress={closeModal} title="Fermer" />
                    </View>

                    <View style={styles.button}>
                        <Button color="#0a3a6d" onPress={handlePress} title="Ajouter un objectif" />
                    </View>
                </View>
            </View>

            {inputValue.error && <Text style={styles.errorMessage}>Veuillez entrer un objectif, maximum 100 caractères</Text>}
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        borderColor: '#ccc',
        backgroundColor: '#06afa4'
      },
      image: {
        width:100,
        height:100,
        margin:20
      },
      textInput : {
        borderWidth:1,
        borderColor: '#d0eaff',
        backgroundColor:'#d0eaff',
        color:'#120438',
        borderRadius: 6,
        width:'100%',
        padding:16
      },
      buttonContainer : {
        flexDirection:'row',
        marginTop:16,
      },
      button: {
      width:150,
      marginHorizontal:8
      },
      errorMessage : {
      paddingTop:8,
      color: '#df7070',
      },
})