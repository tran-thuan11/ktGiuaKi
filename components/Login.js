import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import auth from "@react-native-firebase/auth"
import Register from "./Register";
import { Image } from "react-native";
import Home from "./Home";

const Login =({navigation})=>{
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const handleLogin=()=>{
        auth().signInWithEmailAndPassword(email,password)
        .then(()=> navigation.navigate('Home',{email}))
        .catch(e => Alert.alert(e.message))
    }
    return(
        <View style ={styles.container}>
            <Image
              style ={styles.logo}
              source={{uri:"https://www.gstatic.com/devrel-devsite/prod/vc851b65627ca98cc752c9ae13e5f506cd6dbb7ed1bb4c8df6090c5f9130ed83c/firebase/images/touchicon-180.png"}}
            ></Image>
            <TextInput style={styles.input}
                label={"Email"}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.input}
                label={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button mode="contained" onPress={handleLogin} style={styles.button}>
                Login
            </Button>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Don't have an account?</Text>
                <Button style={styles.footerLink} onPress={()=> navigation.navigate("Register")}>Sign up</Button>
            </View>
        </View>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    logo: {
        alignSelf: 'center',
        height: 150,
        width: 150,
        margin: 30,
    },
    input: {
        height: 50,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: 'navy',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10
    },
    footerText: {
        fontSize: 16,
        color: '#000000',
        alignSelf: 'center',
        paddingLeft: 100
    },
    footerLink: {
        color: "navy",
        fontWeight: "bold",
        fontSize: 16,
        paddingRight:80
    }
})