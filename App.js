import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { colors } from './public/Colors';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/Profile';
import { PostsProvider } from './context/postsContext';
import { UserProvider } from './context/userContext';



const Stack = createNativeStackNavigator();
const options={headerShown:false} 
export default function App() {
  return (
    <UserProvider>
    <PostsProvider>
    <NavigationContainer>
      <StatusBar backgroundColor={"dark" == 'Light' ? '#fff' : colors.backgroundDark} barStyle={"dark" == 'Light' ? 'dark-content' : 'light-content'}/>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen options={options} name="Home" component={Home} />
        <Stack.Screen options={options} name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </PostsProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
