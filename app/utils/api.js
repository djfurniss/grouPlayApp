import Constants from "expo-constants";
const { manifest } = Constants;

// const BASE_API_URL = `http://${manifest.debuggerHost.split(':').shift()}:5001`;
let BASE_API_URL = process.env.NODE_ENV === "development" ? `http://${manifest.debuggerHost.split(':').shift()}:5001` : process.env.BASE_API_URL
console.log(BASE_API_URL)

const headers = new Headers();
headers.append("Content-Type", "application/json");

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

export function register(data){
    const url = `${BASE_API_URL}/users/register`
    return fetch(url, {
        headers,
        method: "POST", 
        body: JSON.stringify({data}),
    })
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw res.error
            }else{
                console.log(res)
                return res
            }
        })
        .catch(err => {
            throw err
        })
};

export function getPlaylists(user_id){
    const url = `${BASE_API_URL}/users/${user_id}/playlists`
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw res.error
            }else{
                return res.data
            }
        })
        .catch(err => {
            throw err
        })
};