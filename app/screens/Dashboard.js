import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getPlaylists } from "../utils/api";

export default function Dashboard({ route }){
    const { user } = route.params
    const [isLoading, setIsLoading] = useState(false);
    const [playlists, setPlaylists] = useState([]);

    useEffect(()=>{
        setIsLoading(true)
        const loadDashboard = async() => {
            getPlaylists(user.user_id)
                .then(setPlaylists)
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

            <Text style={styles.name}>grouPlay</Text>

            <View style={styles.playlistContainer}>
                {playlists.length ? playlists.map(playlist => {
                    return (
                        <View key={playlist.playlist_id} style={styles.playlist}>
                            <Text>{playlist.playlist_name}</Text>
                        </View>
                    )
                }): <Text>Add your first playlist!</Text>}
            </View>
                
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
    name:{
        color: '#fff',
        fontSize: 40,
        marginTop: 30,
    },
    playlistContainer: {
        alignSelf: 'stretch',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
    },
    playlist: {
        backgroundColor: 'white',
        borderRadius: '10%',
        margin: 5,
        padding: 10,
        height: 100,
    },
})