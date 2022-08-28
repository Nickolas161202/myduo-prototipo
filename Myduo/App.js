import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Init from './src/componentes/inicial'
import PageLogin from './src/componentes/login';
import PageRegistrar from './src/componentes/pageRegistrar';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator> 
      <Stack.Screen
      name =  'Init'
      component={Init}
      />
      <Stack.Screen
      name =  'Login'
      component={PageLogin}
      />
      
      <Stack.Screen
      name =  'Register'
      component={PageRegistrar}
      />
      </Stack.Navigator>
      </NavigationContainer>

     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
});
