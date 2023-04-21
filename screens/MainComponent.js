import MenuItemInfoScreen from './MenuItemInfoScreen';
import MenuScreen from './MenuScreen';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ContactScreen from './ContactScreen';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tabs = createMaterialTopTabNavigator();


const screenOptions = {
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#0a0908' }
};

const MenuNavigator = () => {
      const Stack = createStackNavigator();

      return (
            <Stack.Navigator
                  initialRouteName='Menu'
                  screenOptions={{
                        headerMode: 'screen'
                  }}
            >
                  <Stack.Screen
                        name='Menu'
                        component={MenuScreen}
                        options={{ headerShown: false }}
                  />
                  <Stack.Screen
                        name='MenuItem'
                        component={MenuItemInfoScreen}
                        screenOptions={screenOptions}
                        options={({ route }) => ({
                              title: route.params.menuItem.name
                        })}
                  />
            </Stack.Navigator>
      );
};

const Main = () => {
      return (
            <View
                  style={{
                        flex: 1,
                        paddingTop:
                              Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                  }}
            >
                  <Tabs.Navigator initialRouteName='Home'>
                        <Tabs.Screen name='Home' component={HomeScreen} />
                        <Tabs.Screen name='Menu' component={MenuNavigator} />
                        <Tabs.Screen name='Cart' component={CartScreen} />
                        <Tabs.Screen name='Contact' component={ContactScreen} />
                  </Tabs.Navigator>


            </View>
      );
};

export default Main;