import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./app/screens/Home.js";
import Login from "./app/screens/Login";
import Register from "./app/screens/Register.js";
import Dashboard from "./app/screens/Dashboard.js";
import Settings from "./app/screens/Settings.js";
import { Icon } from '@rneui/themed';

const Tab = createBottomTabNavigator();
  
export default function App() {
    // ? is there a way to get the linear gradient higher up so I don't have to declare it on everypage's styling?? 
    return(
        <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{headerShown: false, tabBarStyle: 
                {display: 'flex', 
                position: 'absolute', 
                backgroundColor: '#00000050',
                borderTopWidth: 0,
            }, tabBarShowLabel: false}} 
            backBehavior={'history'}>
            <Tab.Screen name="Home" component={Home} options={{tabBarStyle: {display:'none'}, tabBarItemStyle: {display: 'none'}}}/>
            <Tab.Screen name="Login" component={Login} options={{tabBarStyle: {display:'none'}, tabBarItemStyle: {display: 'none'}}}/>
            <Tab.Screen name="Register" component={Register} options={{tabBarStyle: {display:'none'}, tabBarItemStyle: {display: 'none'}}}/>
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
            
                tabBarIcon: () => <Icon name="apps-outline" type="ionicon" color={'#fff'}/>
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
                tabBarIcon: () => <Icon name="settings-outline" type="ionicon" color={'#fff'}/>
                    }}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
};
