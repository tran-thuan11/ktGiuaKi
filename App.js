import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./routers/MyStack";
import React from "react";
const App =()=>{
  return(
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  )
}
export default App