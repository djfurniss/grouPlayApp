import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TextInput, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function New(){
    const [state, setState] = useState(null)

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                    // Background Linear Gradient
                    colors={['#03045E', '#0077B6']}
                    style={styles.background}/>
            <Text>New jams!</Text>

            <View style={styles.optionsCont}>
                <Text 
                    style={styles.opt}
                    onPress={()=>{
                        setState("new")
                        }}>start a new playlist</Text>
                <Text 
                    style={styles.opt}
                    onPress={({target})=>{
                        setState("join");
                    }}>join a friend's playlist</Text>
            </View>

            
            {state === "new" ?
            <View>
                {/* <Text>new</Text>  */}
                <TextInput 
                    style={styles.input}
                    placeholder="playlist"
                    placeholderTextColor='gray'/>
            </View>    
                : 
            <View>
                {/* <Text>joining</Text> */}
                <TextInput 
                    style={styles.input}
                    placeholder="code"
                    placeholderTextColor='gray'/>
                <Button
                    title="join"/>
            </View>}
            

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
 container:{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    optionsCont:{
        display: 'flex',
        flexDirection: 'row',
    },
    opt: {
        color: '#fff',
        padding: 20,
        fontSize: 16,
        // textDecorationLine: 'underline',
    },
    input: {
        borderColor: '#fff',
        borderWidth: .5,
        borderRadius: '50%',
        // borderBottomRightRadius: '25%',
        // borderBottomLeftRadius: '25%',
        fontSize: 14,
        color: '#fff',
        width: 250,
        padding: 18,
    },
})
