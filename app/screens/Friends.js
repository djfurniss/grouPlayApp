import React, { useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Friends(){
    // useEffect(()=>{
    //     console.log("useEffect")
    // }, [])

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                    // Background Linear Gradient
                    colors={['#03045E', '#0077B6']}
                    style={styles.background}/>
            <Text style={styles.pageName}>Friend's List</Text>
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
       pageName: {
        color: '#aaa',
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
   })