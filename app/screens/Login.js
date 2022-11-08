import { View, Image, StyleSheet, Text, Button } from "react-native";
// import Icon from 'react-native-vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";

export default function Login({ navigation }){
    return(
        <View style={styles.container}>
           <LinearGradient
                // Background Linear Gradient
                colors={['#03045E', '#0077B6']}
                style={styles.background}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
})