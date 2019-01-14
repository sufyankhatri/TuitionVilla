import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import SignUp from './SignUp';
import drawer from './drawer';
import AdditionalInfo from './AdditionalInfo';
import Login from './Login';
import LoginDetails_student from './LoginDetails_student';
import PersonalInfo_student from './PersonalInfo_student';
import AdditionalInfo_student from './AdditionalInfo_student';
import Teacher_Timeline from './Teacher_Timeline';
import Student_Timeline from './Student_Timeline';
import WelcomeScreen from './WelcomeScreen';
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
        <Scene key="Login" component={Login} title="Please Login" hideNavBar={true} />
        <Scene key="teacher_signup" component={SignUp} title="Personal Information" onRight={() => Actions.additionalInfo_teacher()}
          rightTitle="Next" />
        <Scene key="additionalInfo_teacher" component={AdditionalInfo} title="Additional Information" />
        
        <Scene key="loginDetailsStudent" component={LoginDetails_student} title="Step 1 of 3" onRight={()=>Actions.PersonalInfo_student()}
        rightTitle= "Next"/>
        <Scene key="personalInfo_student" component={PersonalInfo_student} title="Step 2 of 3" onRight={()=>Actions.AdditionalInfo_student()}
        rightTitle="Next"/>
        <Scene key="additionalInfo_student" component={AdditionalInfo_student} title="Step 3 of 3" />
        <Scene key="teacher_timeline" component={Teacher_Timeline} title="TimeLine Teacher" />
        <Scene key="student_timeline" component={Student_Timeline} title="Student Timeline"/>
        
        {/* <Scene key="welcomeScreen" component={WelcomeScreen} hideNavBar={true} />
         */}
        {/* <Scene key="profile" component={Profile} title="Profile" />  */}
      </Scene>
    </Router>
  );
};

export default Routes;