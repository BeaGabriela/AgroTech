import { TouchableOpacity, Text } from "react-native";

import styles from "../../pages/styles/styleGeral"

export default function ButtonConectar(props) {
    const { value, onPress} = props

    return(
        <TouchableOpacity style={styles.button} onPress={()=>{onPress()}}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    )
}