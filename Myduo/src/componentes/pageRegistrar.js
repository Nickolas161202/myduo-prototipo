import {CheckBox,  CheckBoxComponent } from '@react-native-community/checkbox';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TouchableNativeFeedbackComponent } from 'react-native';

export default function PageRegistrar({navigation}){
    return(
<View>
    <Text>Registre</Text>

    <Text>Nome:</Text>
<TextInput
placeholder='nome'/>

<Text>Email</Text>
<TextInput
placeholder='email'/>

<Text>Senha</Text>
<TextInput
placeholder='senha'/>

<Text>Ano de Nascimento</Text>
<TextInput
placeholder='email'/>




</View>
    )
}


