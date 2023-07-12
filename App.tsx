/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

function HomeScreen({navigation}: any) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

function SettingScreen({navigation}: any) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        backBehavior="history"
        drawerContent={({navigation}: any) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              title="Drawer 닫기"
              onPress={() => navigation.closeDrawer()}
            />
          </SafeAreaView>
        )}
        screenOptions={{
          drawerPosition: 'left',
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '홈', headerLeft: () => <Text>Left</Text>}}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{title: '설정'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
