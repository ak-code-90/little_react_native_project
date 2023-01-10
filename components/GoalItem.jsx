import { View,Text,StyleSheet } from "react-native"

export default function GoalItem({itemData}) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor: "#06afa4",
      },
      goalText: {
        color: 'white'
      },
})