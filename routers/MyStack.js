import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../components/Home";
import React from "react";
const Stack = createStackNavigator()
const MyStack =()=>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}
export default MyStack;