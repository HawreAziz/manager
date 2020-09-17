import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AsyncStorage } from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';


const WelcomeScreen = () => {
  useEffect(() => {
    const fetchUID = async() => {
      try{
       return await AsyncStorage.getItem('uid');
     }catch(error){
       return null;
     }
    }
    if(fetchUID()){
      Actions.main();
    }else{
      Actions.login();
    }
  }, []);
  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
           <ActivityIndicator size='large' color="#0000ff" />
        </View>
}

export default WelcomeScreen;
