const BASE_API_URL = 'https://slimy-snails-kneel-96-19-85-213.loca.lt'

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Bypass-Tunnel-Reminder", "true");


export function logIn(data){
    const url = `${BASE_API_URL}/users/login`
    return fetch(url, {
        headers,
        method: "PUT",
        body: JSON.stringify({data}),
    })
        .then(resHandler)
};

export function register(data){
    const url = `${BASE_API_URL}/users/register`
    return fetch(url, {
        headers,
        method: "POST", 
        body: JSON.stringify({data}),
    })
        .then(resHandler)
};

export function getPlaylists(user_id){
    const url = `${BASE_API_URL}/users/${user_id}/playlists`
    return fetch(url)
        .then(resHandler)
};

export function createPlaylist(playlist_name, user_id){
    const url = `${BASE_API_URL}/playlists/create`
    return fetch(url, {
        headers,
        method: "POST",
        body: JSON.stringify({data: {playlist_name, user_id}})
    })
    .then(resHandler)
    .then(console.log)
}

export function test(){
    const url = `${BASE_API_URL}/test`
    console.log("making a call to: ", url)
    return fetch(url, headers)
        .then(resHandler)
};

function resHandler(res){
    return res.json()
    .then(res=>{
        if(res.error){
            // console.error(res.error)
            throw res.error
        }else{
            return res
        }
    })
    .catch(err => {
        console.error(err)
        throw err
    })
};