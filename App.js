import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { Scene, Router } from 'react-native-router-flux';
import store from './store';
import Home from './components/Home/Home';
import Calendar from './components/Calendar/Calendar';
import Messages from './components/Messages/Messages';
import Notifications from './components/Notifications/Notifications';
import Todo from './components/Todo/Todo';


const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'black' :'gray'}} style={styles.tabStyles}>{title}</Text>
    );
}

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Scene key="root" >
            <Scene
                key="tabbar"
                tabs={true}
                tabBarStyle={styles.tabBarStyle}
            >
              <Scene key="courses" title="Courses" icon={TabIcon}>

                <Scene key="courselist"
                       sceneStyle={{ marginTop: 85 }}
                       component={Home}
                       title="Courses"
                />

              </Scene>


              <Scene key="calendar" title="Calendar" icon={TabIcon}>

                <Scene key="calendarstuff"
                       component={ Calendar }
                       title="Courses"
                />


              </Scene>

              <Scene key="todo" title="To Do" icon={TabIcon}>

                <Scene key="todos"
                       component={ Todo }
                       title="To Do"
                />


              </Scene>


              <Scene key="notifications" title="Notifications" icon={TabIcon}>

                <Scene
                    key="notification"
                    component={ Notifications }
                    title="Notifications"
                />
              </Scene>


              <Scene key="messages" title="Messages" icon={TabIcon}>

                <Scene
                    key="message"
                    component={ Messages }
                    title="Messages"
                />
                <Scene
                    key="black"
                    component={Home}
                    title="Black"
                />

              </Scene>


            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#edeaea',
    },
    tabStyles: {
      fontSize: 12
    }
});

