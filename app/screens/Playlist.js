import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import songsFiller from "../../assets/songsFiller";
import { Icon } from '@rneui/themed';

export default function Playlist({ navigation, route}){
   const { playlist } = route.params;
   const [modalOpen, setModalOpen] = useState(false)
//    console.log(playlist)
// console.log(songsFiller)

    return (
        <SafeAreaView style={styles.container}>
        <LinearGradient
                // Background Linear Gradient
                colors={['#03045E', '#0077B6']}
                style={styles.background}/>

        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={()=>setModalOpen(false)}>
            <View style={styles.modalCont}>
                <View style={styles.modalView}>
                    {/* <LinearGradient
                        // Background Linear Gradient
                        colors={['#03045E', '#0077B6']}
                        style={styles.background}/> */}
                    <Pressable
                        style={ styles.closeButton}
                        onPress={() => setModalOpen(false)}
                        >
                        <Icon name="close" type="ionicon" color='#fff'/>
                    </Pressable>
                    <Text style={styles.text}>Playlist Information</Text>
                </View>
            </View>
        </Modal>

        <View style={styles.rowCont}>
            <Text style={[styles.header, styles.text]}>{playlist.playlist_name} </Text>
            <Icon name="information-circle-outline" type="ionicon" color={'#fff'} onPress={()=>setModalOpen(true)}/>
        </View>
        {/* <Text style={styles.text}>songs</Text> */}
        {songsFiller.length && 
            <View style={styles.optsCont}>
                <View>
                    <Icon name="shuffle-outline" type="ionicon" color={'#fff'}/>
                    <Text style={[styles.text, styles.smallText]}>shuffle</Text>
                </View>
                <View>
                    <Icon name="play-outline" type="ionicon" color={'#fff'}/>
                    <Text style={[styles.text, styles.smallText]}>play all</Text>
                </View>
                <View>
                    {/* you can only edit if you're the owner */}
                    {/* editting will display the "menu-outline" icon and a delete icon instead of play */}
                    <Icon name="pencil-outline" type="ionicon" color={'#fff'}/>
                    <Text style={[styles.text, styles.smallText]}>edit</Text>
                </View>
                <View>
                    <Icon name="share-outline" type="ionicon" color={'#fff'}/>
                    <Text style={[styles.text, styles.smallText]}>share</Text>
                </View>
            </View>
        }
        {songsFiller.length && songsFiller.map((song,index)=>{
            // console.log(song.song_name, index)
            return(
                <View style={index === 0 ? styles.firstSong : index === songsFiller.length-1 ? styles.lastSong : styles.songCont}>
                    <View>
                        <Text style={styles.songName}>{song.song_name}</Text>
                        <Text>{song.artist}</Text>
                        <View style={[styles.rowCont, {alignSelf: 'flex-start'}]}>
                            <Icon name="person" type="ionicon" color='#000' size={10}/>
                            <Text>user</Text>
                        </View>
                    </View>
                    <Icon name="play-circle-outline" type="ionicon" color={'#000'}/>
                </View>
            )
        })}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    rowCont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    optsCont:{
        width: 250,
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    songCont:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        backgroundColor: '#fff',
        padding: 15,
        borderBottomColor: '#000',
    },
    firstSong:{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        backgroundColor: '#fff',
        padding: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    lastSong:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        backgroundColor: '#fff',
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text:{
        color: '#fff'
    },
    songName:{
        fontWeight: '700'
    },
    smallText: {
        fontSize: 10,
    },
    header:{
        fontSize: 40,
        marginTop: 30,
    },
    modalCont: {
        width: '100%',
        marginTop: 75,
        alignSelf: 'center',
    },
    modalView: {
        backgroundColor: "#1d1d1d",
        borderRadius: 20,
        padding: 35,
        paddingBottom: '100%',
        height: '100%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      closeButton:{
        alignSelf: 'flex-end',
        marginBottom: 10,
        marginTop: -10,
        marginRight: -10,
      }
   })