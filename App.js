import React, { useState } from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./app/screens/Home.js";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register.js";
import Dashboard from "./app/screens/Dashboard.js";
import New from "./app/screens/New.js";
import Playlist from "./app/screens/Playlist.js";
import Friends from "./app/screens/Friends.js";
import Settings from "./app/screens/Settings.js";
import { UserContext } from "./app/contexts/UserContext";
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();
  
export default function App() {
    // ? is there a way to get the linear gradient higher up so I don't have to declare it on everypage's styling?? 
    const [user, setUser] = useState({})
    const [playlists, setPlaylists] = useState([])

    return(
        <NavigationContainer>
            <UserContext.Provider value={{user, setUser, playlists, setPlaylists}}>
                <Tab.Navigator 
                    screenOptions={{headerShown: false, tabBarStyle: 
                        {display: 'flex', 
                        position: 'absolute', 
                        backgroundColor: '#00000050',
                        borderTopWidth: 0,
                    }, tabBarShowLabel: false}} 
                    backBehavior={'history'}>
                    <Tab.Screen name="Home" component={Home} options={{tabBarStyle: {display:'none'}, tabBarItemStyle: {display: 'none'}}}/>
                    <Tab.Screen 
                        name="New"
                        component={New}
                        options={
                            {tabBarStyle: 
                                {display: 'flex', 
                                position: 'absolute', 
                                backgroundColor: '#00000050',
                                borderTopWidth: 0,
                                },
                            tabBarIcon: ({focused}) => <Icon name="add-circle-outline" type="ionicon" color={focused ? '#fff' : "#ffffff80"}/>,
                        }
                    }/>
                    <Tab.Screen name="Login" component={Login} options={{tabBarStyle: {display:'none'}, tabBarItemStyle: {display: 'none'}}}/>
                    <Tab.Screen name="Register" component={Register} options={{tabBarStyle: {display:'none'}, tabBarItemStyle: {display: 'none'}}}/>
                    
                    {/* <Tab.Screen 
                        name="Friends" 
                        component={Friends} 
                        options={
                            {tabBarStyle: 
                                {display: 'flex', 
                                position: 'absolute', 
                                backgroundColor: '#00000050',
                                borderTopWidth: 0,
                            },
                        tabBarIcon: () => <Icon name="people-outline" type="ionicon" color={'#fff'}/>
                            }}/> */}

                    <Tab.Screen 
                        name="Dashboard" 
                        component={Dashboard} 
                        options={
                            {tabBarStyle: 
                                {display: 'flex', 
                                position: 'absolute', 
                                backgroundColor: '#00000050',
                                borderTopWidth: 0,
                            },
                    
                        tabBarIcon: ({focused}) => <Icon name="home-outline" type="ionicon" color={focused ? '#fff' : "#ffffff80"}/>
                        }}/>
                    
                    <Tab.Screen 
                        name="Settings" 
                        component={Settings} 
                        options={
                            {tabBarStyle: 
                                {display: 'flex', 
                                position: 'absolute', 
                                backgroundColor: '#00000050',
                                borderTopWidth: 0,
                            },
                        tabBarIcon: ({focused}) => <Icon name="settings-outline" type="ionicon" color={focused ? '#fff' : "#ffffff80"}/>
                            }}/>

                    <Tab.Screen 
                        name="Playlist"
                        component={Playlist}
                        options={{tabBarItemStyle: {display: 'none'}}}/>

                </Tab.Navigator>
            </UserContext.Provider>
        </NavigationContainer>
    )
};
