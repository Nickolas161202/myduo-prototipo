    import { StatusBar } from 'expo-status-bar';
    import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

    export default function PageLogin({navigation}){


    return(<View>
        <Text>MyDuo</Text>
        <Text>Login</Text>

        <Text>Email</Text>
    
        <TextInput
        placeholder='insira o email'
        />

        <Text>Senha</Text>
        <TextInput
        placeholder='Insira a senha'/>

        <TouchableOpacity><Text>Esqueci a senha</Text></TouchableOpacity>
        
        
        <div>
            <Text>Não possui conta?</Text>
        <TouchableOpacity><Text>Criar conta</Text></TouchableOpacity>
        </div>

        </View>
    )


}