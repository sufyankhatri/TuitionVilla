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
import PersonalInfo from './PersonalInfo';
import Student_Profile from './Student_Profile';
import Teacher_Profile from './Teacher_Profile';
//import {connect} from 'react-redux';
import Chat from '../MashChat/Chat';
import {Dimensions} from "react-native"
const Routes = () => {
  return (
    <Router>
      <Scene key="root"
        navigationBarStyle={{ backgroundColor: '#16334c' }}
        titleStyle={{ color: '#fff' }}
      >
        {/* <Scene key="welcomeScreen" component={WelcomeScreen} hideNavBar={true} />*/}
        <Scene key="Login" component={Login} title="Please Login" hideNavBar={true} /> 

        <Scene key="teacher_signup" component={SignUp} title="Step 1 of 3" onRight={() => Actions.personalInfoTeacher()}
          rightTitle="Next" onBack={()=>Actions.Login()}/>
        <Scene key="personalInfoTeacher" component={PersonalInfo} title="Step 2 of 3" onRight={() => Actions.additionalInfo_teacher()}
          rightTitle="Next" onBack={()=>Actions.teacher_signup()}/>
        <Scene key="additionalInfo_teacher" component={AdditionalInfo} title="Step 3 of 3" onBack={()=>Actions.personalInfo_teacher()}/>

        <Scene key="loginDetailsStudent" component={LoginDetails_student} title="Step 1 of 3" onRight={() => Actions.personalInfo_student()}
          rightTitle="Next" onBack={()=>Actions.Login()} />
        <Scene key="personalInfo_student" component={PersonalInfo_student} title="Step 2 of 3" onRight={() => Actions.additionalInfo_student()}
          rightTitle="Next" onBack={()=>Actions.loginDetailsStudent()}/>
        <Scene key="additionalInfo_student" component={AdditionalInfo_student} title="Step 3 of 3" onBack={()=>Actions.personalInfo_student()}/>
        <Scene drawer={true}
          contentComponent={drawer}
          drawerWidth={300}
          titleStyle={{ color: '#fff' }}
          hideNavBar
          key="tabbar"
        >
          <Scene key="teacher_timeline" component={Teacher_Timeline} title="Teacher Timeline" />
          <Scene key="student_timeline" component={Student_Timeline} title="Student Timeline" />
          <Scene key="student_profile" component={Student_Profile} title="Profile" />
          <Scene key="student_profileSelected" component={Student_Profile} title="Profile"/>
          <Scene key="teacher_profile" component={Teacher_Profile} title="Teacher Profile" />
          <Scene key="teacher_profileSelected" component={Teacher_Profile} title="Teacher Profile" />
          <Scene key="Chat" component={Chat} title="Chat" />
           {/* <Scene key="Chat" component={Chat} title="Chat App"/> */}
        </Scene>

      </Scene>
    </Router>
  );
};
// const mapStateToProps = (state) => {
//   const { teachers } = state.teacher
//   return { teachers }
// }

// export default connect(mapStateToProps)(Routes);
export default Routes;