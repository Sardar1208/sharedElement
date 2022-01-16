import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './screens/Home';
import Info from './screens/Info';

const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}  />
        <Stack.Screen name='Info' component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
