import { StyleSheet, Text, View } from 'react-native';

import { useTranslation } from "react-i18next";
import './IMLocalize';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import Testing from './screens/Testing';


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const { t } = useTranslation();


  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Testing' screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Testing"} component={Testing}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}