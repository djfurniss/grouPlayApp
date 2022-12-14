import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, Button, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { UserContext } from "../contexts/UserContext";

import { logIn } from "../utils/api";
import { storeUser } from "../utils/storedUser";

export default function Login({ navigation }){
    const { setUser } = useContext(UserContext)
// --- hooks ---
    const [user_name, setUser_name] = useState(null)
    const [password, setPassword] = useState(null)
    const [err, setErr] = useState(null)

// --- handlers ---
    const handleLogin = () => {
        setErr(null)
        const loginData = {user_name, password}
        logIn(loginData)
            .then(({ data })=>{
                // console.log(data)
                storeUser(user_name, password)
                setUser(data)
                setUser_name(null)
                setPassword(null)
                navigation.navigate("Dashboard")
            })
            .catch(setErr)
    };

// --- return ---
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#03045E', '#0077B6']}
                    style={styles.background}/>
                
                <KeyboardAvoidingView behavior="position" style={styles.secondaryContainer}>
                    <Text style={styles.heading}>Login</Text>
                    {err && <Text style={styles.err}>{err}</Text>}
                    <TextInput
                        style={styles.usernameInput}
                        onChangeText={setUser_name}
                        value={user_name}
                        autoCapitalize="none"
                        placeholder="username"
                        placeholderTextColor='gray'/>
                    <TextInput
                        style={styles.passwordInput}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="password"
                        placeholderTextColor='gray'/>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button 
                                title='back'
                                onPress={()=>navigation.navigate("Home")}/>
                        </View>
                        <View style={styles.button}>
                            <Button 
                                title='login'
                                onPress={handleLogin}/>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    heading: {
        fontSize: 50,
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-around',
        marginTop: 15,
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: '50%',
        marginVertical: 5,
        width: '45%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    usernameInput: {
        borderColor: '#fff',
        borderWidth: .5,
        borderTopRightRadius: '25%',
        borderTopLeftRadius: '25%',
        borderBottomWidth: 0,
        fontSize: 18,
        color: '#fff',
        width: 250,
        padding: 20,
    },
    passwordInput: {
        borderColor: '#fff',
        borderWidth: .5,
        borderBottomRightRadius: '25%',
        borderBottomLeftRadius: '25%',
        fontSize: 20,
        color: '#fff',
        width: 250,
        padding: 18,
    },
    err:{
        color: 'gray',
        textAlign: 'center',
        marginBottom: 10
    }
})