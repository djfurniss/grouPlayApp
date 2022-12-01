import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getStoredUser } from "../utils/storedUser";
import { logIn } from "../utils/api";

export default function Home({ navigation }){
    useEffect(()=>{
       getStoredUser()
        .then(({username, password})=>{
            if(username && password){
                console.log("your stored information is being loaded")
                logIn(username, password)
                .then(({data})=> navigation.navigate("Dashboard", {user: data}))
            }else{
                console.log("your log in info isn't stored")
            }
        })
    },[])

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
             <LinearGradient
                // Background Linear Gradient
                colors={['#03045E', '#0077B6']}
                style={styles.background}
            />
            <Text style={styles.name}>grouPlay</Text>

             <View style={styles.login}>
                <Button
                    title="login"
                    onPress={() => navigation.navigate('Login')}
                    color='#0077B6'/>
            </View>
            <View style={styles.register}>
                <Button
                    title='register'
                    onPress={() => navigation.navigate('Register')}
                    color='#0077B6'/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
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
    name:{
        top: 200,
        color: '#fff',
        fontSize: 40,
    },
    login:{
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: '50%',
        bottom: '20%',
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    register:{
        position: 'absolute',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: '50%',
        bottom: '12%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})