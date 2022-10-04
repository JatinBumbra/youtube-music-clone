import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home';
import FullDisplay from './components/play-screen/FullDisplay';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name='Home' component={Home} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name='Player' component={FullDisplay} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
