import { useState } from "react";
import { Alert, View, StyleSheet} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import auth from "@react-native-firebase/auth"
import { createAccount } from "../store";
import { Image } from "react-native";

const Register =({navigation})=>{
    const [fullName,setFullname]= useState("")
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [confirmpassword,setConfirmPassword]= useState("")
    const handleCreateAccount=()=>{
        // auth().createUserWithEmailAndPassword(fullName,email,password,confirmpassword)
        // .then(()=> Alert.alert("dang ky thanh cong"))
        // .catch(e => Alert.alert(e.message))
        const role ="customer"
        createAccount(fullName,email,password,role)
    }
    return(
        <View style ={styles.container}>
           <Image
              style ={styles.logo}
              source={{uri:"https://www.gstatic.com/devrel-devsite/prod/vc851b65627ca98cc752c9ae13e5f506cd6dbb7ed1bb4c8df6090c5f9130ed83c/firebase/images/touchicon-180.png"}}/>
            <TextInput style={styles.input}
                label={"Full Name"}
                value={fullName}
                onChangeText={setFullname}
            />
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
            <TextInput style={styles.input}
                label={"Confirm Password"}
                value={confirmpassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Button mode="contained" onPress={handleCreateAccount} style={styles.button}>
                Create Account
            </Button>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>Already got an account?</Text>
                <Button style={styles.footerLink} onPress={()=> navigation.navigate("Login")}>Login</Button>
            </View>
        </View>
    )
}
export default Register;
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