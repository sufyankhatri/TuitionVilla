import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ScrollView, BackHandler } from 'react-native'
import {SearchBar} from 'react-native-elements'
import { connect } from 'react-redux'
import { studentFetch, studentsFetch, onSelectedStudent} from '../actions/StudentActions'
import { teacherFetch, teachersFetch, onSelectedTeacher,  TeacherChangeProfiles } from '../actions'
import Student_Card from './Student_Card'
import Teacher_Card from './Teacher_Card';
import Loader from '../common/Spinner';
import { List } from "react-native-elements"
import { Actions } from 'react-native-router-flux';

export class Student_Timeline extends Component {
  state = {
    loading: false,
    error: null
  };

  componentDidMount() {
    console.log("cdm student timeline")   
   // this.props.studentFetch();
   // this.props.teachersFetch();
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      Actions.student_timeline(); // works best when the goBack is async
      return true;
    });
    
   // this.setState({ data: this.props.students })
    
  }
  componentWillMount(){
    console.log("cwm student timeline")
    
  }

  renderRow({ item }) {
    return (
      <Teacher_Card

        teacher={item}
      // title={item.name}
      // subtitle={item.email}
      // onPress={() => {
      //   this.props.onSelectedStudent(item.uid)
      //   Actions.profileSelected()
      // }}

      />
    )
  }

  searchFilterFunction = text => {
    const newData = this.props.teachers.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.props.TeacherChangeProfiles(newData);
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };



  render() {
    console.log("inside render student timeline")
    let comp = <Loader />
    let fetchStatus = "Teacher not fetched yet"
    if (this.props.teachers.length > 0) {
      fetchStatus = "Teachers Fetched"
      console.log(this.props.teacher);
      console.log(this.props.profiles);
      comp = (
        <List>
          <FlatList
            data={this.props.profiles}
            renderItem={this.renderRow}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            //keyExtractor={item => item.email}
          />
        </List>

      )
    }
    return (
      <View>
        {comp}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginBottom: 10
  }
})

const mapStateToProps = (state) => {
  const { students } = state.student
  const{teachers, profiles} = state.teacher
  const{student,teacher}=state.auth
  return { students, profiles, teachers, student, teacher }
}

export default connect(mapStateToProps, {studentFetch, studentsFetch, onSelectedStudent, TeacherChangeProfiles, teacherFetch, teachersFetch, onSelectedTeacher })(Student_Timeline)