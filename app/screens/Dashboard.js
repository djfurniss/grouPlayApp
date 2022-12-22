import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { getPlaylists } from "../utils/api";
import { LinearGradient } from "expo-linear-gradient";
// import { Icon } from '@rneui/themed';

export default function Dashboard({ navigation }){
    const { user, playlists, setPlaylists } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true)
        const loadDashboard = async() => {
            getPlaylists(user.user_id)
            .then(({data}) => setPlaylists(data))
            .catch((err)=>{
                // return setIsLoading(true)
            })
            };
        
        user.user_name && loadDashboard();
        setIsLoading(false)
    }, [user])

// --- return ---
    return( 
        <SafeAreaView style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#03045E', '#0077B6']}
                style={styles.background}/>

            <Text style={styles.name}>grouPlay</Text>
            {isLoading ? 
            <ActivityIndicator size="large" style={styles.loader}/>
            :
            <View style={styles.screen}>

                <View style={styles.playlistContainer}>
                    {playlists.length ? playlists.map(playlist => {
                        return (
                            <View
                                key={playlist.playlist_id} 
                                style={styles.playlist}>
                                <Text 
                                    style={styles.playlistText}
                                    onPress={()=>navigation.navigate("Playlist", {playlist})}
                                    >{playlist.playlist_name}</Text>
                            </View>
                        )
                    }): <Text></Text>}
                </View>

                {/* <View style={styles.addCont}> */}
                    {/* <Text style={styles.addText}>Add</Text> */}
                    {/* <Icon name="add-outline" type="ionicon" color={'#fff'} onPress={()=>{ */}
                        {/* navigation.navigate("New") */}
                    {/* }}/> */}
                {/* </View> */}
            </View>
            }   
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    loader: {
        position: 'absolute',
        top: 0,
        bottom: 0,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    screen: {
        width: '100%',
        alignItems: 'center',
    },
    name:{
        color: '#fff',
        fontSize: 40,
        marginTop: 30,
    },
    addCont: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    add: {
        alignSelf: 'flex-end',
        borderWidth: 1,
        marginTop: 10,
        marginRight: 30,
        borderColor: '#fff',
        borderRadius: '50%',
        padding: 3,
    },
    addText: {
        color: '#fff'
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
    playlistText: {
        // backgroundColor: 'red',
        height: '100%'
    }
})