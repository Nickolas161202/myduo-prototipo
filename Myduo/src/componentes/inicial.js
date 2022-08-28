import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Init({navigation}) {
  return (
    <View>
        <Text>MyDuo</Text>

<TouchableOpacity
onPress={() =>{
    navigation.navigate('Login', {nome:'Login'})
}}
><Text>Acesse sua conta</Text></TouchableOpacity>
<TouchableOpacity
onPress={() =>{
    navigation.navigate('Register', {nome:'Register'})
}}
><Text>Registre-se</Text></TouchableOpacity>


    </View>
    
  );
}


