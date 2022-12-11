import React, { useContext } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button, Alert } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { LinearGradient } from "expo-linear-gradient";

import { logOut } from "../utils/storedUser";

export default function Settings({ navigation }) {
    const { user } = useContext(UserContext)
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#03045E', '#0077B6']}
                style={styles.background}/>
            <Text style={styles.name}>{user.user_name}</Text>
            <View style={styles.logout}>
            <Button
                title="Logout"
                color="#ffffff60"
                onPress={()=>{
                    Alert.alert("Logout", "Are you sure you want to log out?", [
                        {   
                            text: "Cancel",
                            style: "cancel"
                        },
                        { 
                            text: "Yes", onPress: () =>{
                                logOut()
                                navigation.navigate("Home")
                            }
                        }])
                }}/>
                </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    name: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: 100,
    },
    logout: {
        position: 'absolute',
        bottom: 100,
    }
})