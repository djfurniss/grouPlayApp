import React, { useState, useEffect, useContext } from "react";
import { 
    View, 
    StyleSheet, 
    Text, 
    Button, 
    TextInput, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    SafeAreaView
} from "react-native";
import { UserContext } from "../contexts/UserContext";
import { LinearGradient } from "expo-linear-gradient";

import { register, logIn } from "../utils/api"; // onsubmit
import { storeUser } from "../utils/storedUser";


export default function Register({ navigation }){
    const { setUser } = useContext(UserContext)
    useEffect(()=>setErr(null), [])
    const [user_name, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [inputWarning, setInputWarning] = useState("")
    const [email, setEmail] = useState(null)
    const [err, setErr] = useState(null)

    const handleSubmit = () => {
        // call register api
        setErr(null)
        register({user_name, password, email})
        .then(({ data })=>{
            console.log(data)
            storeUser(user_name, password)
            logIn({user_name, password})
            .then(()=>{
                setUser(data)
                navigation.navigate("Dashboard")
            })
        })
        .catch((error) =>{
            typeof error === "string" && setErr(error)
        })
    }

    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#03045E', '#0077B6']}
                style={styles.background}/>

            <KeyboardAvoidingView behavior="position" style={styles.secondaryContainer}>
                <Text style={styles.heading}>Register</Text>
                {err && <Text style={styles.err}>{err}</Text>}
                {inputWarning && <Text style={styles.err}>{inputWarning}</Text>}
                <TextInput
                    style={styles.topInput}
                    onChangeText={setUsername}
                    value={user_name}
                    autoCapitalize="none"
                    onFocus={()=>setInputWarning("only letters and _ are valid")}
                    onBlur={()=>setInputWarning("")}
                    placeholder="username"
                    placeholderTextColor='gray'/>
                <TextInput
                    style={styles.midInput}
                    onChangeText={setEmail}
                    value={email}
                    autoCapitalize="none"
                    placeholder="email"
                    placeholderTextColor='gray'/>
                <TextInput
                    style={styles.bottomInput}
                    onChangeText={setPassword}
                    value={password}
                    onFocus={()=>{setInputWarning("password criteria: at leat 8 character long, at least 1 uppercase letter, at least one of the following special characters (!$%*?)")}}
                    onBlur={()=>setInputWarning("")}
                    secureTextEntry={true}
                    placeholder="password"
                    placeholderTextColor='gray'/>
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='cancel'
                            onPress={()=>navigation.navigate("Home")}/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='register'
                            onPress={handleSubmit}/>
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
        marginTop: 30,
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
    topInput: {
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
    midInput: {
        borderColor: '#fff',
        borderWidth: .5,
        // borderBottomRightRadius: '25%',
        // borderBottomLeftRadius: '25%',
        fontSize: 20,
        color: '#fff',
        width: 250,
        padding: 18,
    },
    bottomInput: {
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
        marginBottom: 10,
        alignSelf: 'center',
        width: 250
    }
})