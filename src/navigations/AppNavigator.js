import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UsersNavigator from 'LigaDataTask/src/navigations/UsersNavigator';
import {useSelector} from 'react-redux';
import SplashScreenNavigator from 'LigaDataTask/src/navigations/SplashScreenNavigator';

const AppNavigator = () => {
  const Stack = createStackNavigator();
  const showGifImage = useSelector(state => state.showGifImage);

  return (
    <Stack.Navigator headerMode={false}>
      {showGifImage == 'yes' ? (
        <Stack.Screen name="Splash" component={SplashScreenNavigator} />
      ) : (
        <Stack.Screen name="Users" component={UsersNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
