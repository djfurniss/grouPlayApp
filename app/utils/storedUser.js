import { useAsyncStorage } from '@react-native-async-storage/async-storage';
const {getItem: getPassword, setItem: setPassword, removeItem} = useAsyncStorage("password");
const {getItem: getUsername, setItem: setUsername} = useAsyncStorage("user_name");


export async function storeUser(username, password){
    try{
        await setUsername(username)
        await setPassword(password)
        console.log("your username and password are set in storage!")
    }catch (error){
        console.error(error)
    }
};

export async function getStoredUser(){
    try{
        const username = await getUsername()
        const password = await getPassword()
        // console.log("stored data loaded: ", username, password)
        return {username, password}
    }catch (error){
        console.error(error)
    }
};

export async function logOut(){
    try{
        await removeItem()
    }catch(error){
        console.error(error)
    }
};