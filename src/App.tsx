import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';
import UserView from './features/user/UserView';
import {Provider} from 'react-redux';
import store from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <CakeView />
        <IcecreamView />
        <UserView />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
