// import Constants from "expo-constants";
// const { manifest } = Constants;;

// const BASE_API_URL = `http://${manifest.debuggerHost.split(':').shift()}:5001`; // !stopped working
const BASE_API_URL = 'https://grumpy-pens-check-99-131-23-93.loca.lt'

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Bypass-Tunnel-Reminder", "true");

/**
 * 
 * @param {} data : object
 */
export function logIn(data){
    const url = `${BASE_API_URL}/users/login`
    return fetch(url, {
        headers,
        method: "PUT", 
        body: JSON.stringify({data}),
    })
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw res.error
            }else{
                // console.log(res)
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
                // console.log(res)
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

export function test(){
    const url = `${BASE_API_URL}/test`
    console.log("making a call to: ", url)
    return fetch(url, headers)
        .then(res => res.json())
        .then(res => console.log(res.data))
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