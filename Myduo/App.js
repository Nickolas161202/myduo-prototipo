import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Init from './src/componentes/inicial'
import PageLogin from './src/componentes/login';
import PageRegistrar from './src/componentes/pageRegistrar';
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


export default function App() {
  return (<NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Init} />
    <Tab.Screen name="Settings" component={PageLogin} />
  </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
  
    justifyContent: 'center',
  },
});
