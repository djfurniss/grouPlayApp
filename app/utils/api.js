const { manifest } = Constants;
import Constants from "expo-constants";

const BASE_API_URL = `http://${manifest.debuggerHost.split(':').shift()}:5001`;

export function logIn(username, password){
    const url = `${BASE_API_URL}/users/login/?username=${username}&password=${password}`
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw res.error
            }else{
                return res
            }
        })
        .catch(err => {
            throw err
        })
};

export function getPlaylists(userId){
    const url = `${BASE_API_URL}/playlists/`
};