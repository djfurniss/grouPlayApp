import React, { useState, useContext } from "react";
import { SafeAreaView, View, StyleSheet, Text, TextInput, Button, TouchableWithoutFeedback , Keyboard} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createPlaylist } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

export default function New(){
    const { user } = useContext(UserContext)
    const [state, setState] = useState("new")
    const [playlist_name, setPlaylist_name] = useState('')

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <LinearGradient
                        // Background Linear Gradient
                        colors={['#03045E', '#0077B6']}
                        style={styles.background}/>

                <Text style={styles.pageName}>ADD PLAYLIST</Text>

                <View style={styles.optionsCont}>
                    <Text 
                        style={[styles.opt, state === "new" ? styles.activeOpt : styles.inactiveOpt]}
                        onPress={()=>setState("new")}>start a new playlist</Text>
                    <Text 
                        style={[styles.opt, state === "join" ? styles.activeOpt : styles.inactiveOpt]}
                        onPress={()=> setState("join")}>join a playlist</Text>
                </View>

                
                {state === "new" ?
                <View>
                    <TextInput 
                        style={styles.input}
                        placeholder="playlist name"
                        onChangeText={setPlaylist_name}
                        value={playlist_name}
                        placeholderTextColor='gray'/>
                    <Button 
                        title="start new playlist"
                        onPress={()=>{
                            createPlaylist(playlist_name, user.user_id)
                        }}/>
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
        </TouchableWithoutFeedback>
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
    pageName: {
        color: '#aaa',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    optionsCont:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 75,
    },
    opt: {
        color: '#fff',
        padding: 20,
        fontSize: 16,
        // textDecorationLine: 'underline',
    },
    activeOpt: {
        fontWeight: "500",
    },  
    inactiveOpt:{
        color: '#ffffff80',
    },
    input: {
        borderColor: '#fff',
        borderWidth: .5,
        borderRadius: 10,
        // borderBottomRightRadius: '25%',
        // borderBottomLeftRadius: '25%',
        fontSize: 14,
        color: '#fff',
        width: 250,
        padding: 18,
        margin: 15,
    },
})
