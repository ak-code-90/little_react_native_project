import { View,Text,StyleSheet, Pressable } from "react-native"

export default function GoalItem({itemData,onDeleteItem,id}) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{color:'#024944'}}
            style={({pressed}) => pressed && styles.pressedItem } 
            onPress={onDeleteItem.bind(this,id)}
            >
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin:8,
        borderRadius:6,
        backgroundColor: "#06afa4",
    },

    pressedItem: {
    opacity: 0.5
    },

    goalText: {
    color: 'white',
    padding:8,
    },
})