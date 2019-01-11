import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import SignUp from './SignUp';
import drawer from './drawer';
import AdditionalInfo from './AdditionalInfo';
import Login from './Login';
import Timeline from './Timeline';
const Routes = () => {
  return (
    <Router>
      <Scene key="root"
        drawer={true}
        contentComponent={drawer}
        drawerWidth={200}
        navigationBarStyle={{ backgroundColor: '#16334c' }}
        titleStyle={{ color: '#fff' }}
      >

        <Scene key="Information" component={SignUp} title="Personal Information" onRight={() => Actions.additionalInfo()}
          rightTitle="Next" initial />
        <Scene key="additionalInfo" component={AdditionalInfo} title="Additional Information"  />
        <Scene key="Login" component={Login} title="Please Login"  />
        <Scene key="timeline" component={Timeline} title="TimeLine" />
      </Scene>
    </Router>
  );
};

export default Routes;