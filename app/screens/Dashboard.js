import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getPlaylists } from "../utils/api";

export default function Dashboard({ route }){
    const { user : {user_name} } = route.params
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        const loadDashboard = () => {

        };

        loadDashboard();
    }, [])
// --- return ---
    return( 
        <SafeAreaView style={styles.container}>
            <LinearGradient
                    // Background Linear Gradient
                    colors={['#03045E', '#0077B6']}
                    style={styles.background}/>
            <Text>Welcome, {user_name}</Text>
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
    }
})