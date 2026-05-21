import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Principal from './src/telas/Principal';
import Esportivos from './src/telas/Esportivos';
import SUVs from './src/telas/SUVs';
import Eletricos from './src/telas/Eletricos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">

        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: 'Bem Vindo(a)',
            headerStyle: { backgroundColor: 'black' },
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="Esportivos"
          component={Esportivos}
          options={{
            title: 'Carros Esportivos',
            headerStyle: { backgroundColor: 'red' },
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="SUVs"
          component={SUVs}
          options={{
            title: 'SUVs',
            headerStyle: { backgroundColor: 'darkblue' },
            headerTintColor: 'white',
          }}
        />

        <Stack.Screen
          name="Eletricos"
          component={Eletricos}
          options={{
            title: 'Carros Elétricos',
            headerStyle: { backgroundColor: 'green' },
            headerTintColor: 'white',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}