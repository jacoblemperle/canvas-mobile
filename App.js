import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { Scene, Router } from 'react-native-router-flux';
import store from './store';
import Home from './components/home/Home';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Scene key="root">
            <Scene key="home" component={ Home } initial={true} />

          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
