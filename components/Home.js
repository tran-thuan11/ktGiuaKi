import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from "react-native-paper"
import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import { logout } from '../store';
import auth from '@react-native-firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
const db = firebase.firestore();

const Home = ({navigation, route}) => {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState('');
  const [fullname, setFullname] = useState('')
  
  //Handle Logout
  React.useEffect(() => {
    db.collection('USERS').doc(route.params.email).get().then(document =>{setFullname(document.data().fullName)})
    navigation.setOptions({
      headerRight: () => (
          <Button onPress={() =>{logout; navigation.navigate('Login')}}>Logout</Button>
      ),
      headerTitle: () =>(
      <Text style={{fontWeight:'bold',fontSize:18}}>Hello {fullname}</Text>
      )
    });
  }, [navigation,fullname]);
  //Add Job
  useEffect(() => {
    const unsubscribe = db.collection('jobs').onSnapshot((snapshot) => {
      const newJobs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setJobs(newJobs);
    });
    return () => unsubscribe();
  }, []);
  const addJob = async () => {
    if (newJob.trim() !== '') {
      await db.collection('jobs').add({
        name: newJob
      });
      setNewJob('');
    }
  };
  const renderItem = ({ item, index }) => (
    <View style={styles.item}>
      <Text style={styles.text}>{`${index + 1}. ${item.name}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
       <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            value={newJob}
            onChangeText={setNewJob}
            placeholder="Thêm công việc mới"
          />
        <Button mode='contained' style={styles.buttonAddJob} onPress={addJob}>Add</Button>
      </View>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    height: 48,
    width: 300, 
    backgroundColor:'#e6e6e6',
    fontSize: 16,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttonAddJob:{
    backgroundColor: 'navy',
    height: 48,
    width: 80,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
  },
});

export default Home;