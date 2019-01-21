import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import {SearchBar} from 'react-native-elements'
import { connect } from 'react-redux'
import { studentFetch, studentsFetch, onSelectedStudent, changeProfiles } from '../actions/StudentActions'
import Student_Card from './Student_Card'
import Loader from '../common/Spinner';
import { List } from "react-native-elements"

export class Student_Timeline extends Component {
  state = {
    loading: false,
    error: null,
    data: [],
  };

  componentDidMount() {
    
    this.props.studentsFetch();
    this.props.studentFetch();
    console.log("Profile")
   // this.setState({ data: this.props.students })
    
  }

  renderRow({ item }) {
    return (
      <Student_Card

        student={item}
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
    const newData = this.props.students.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.props.changeProfiles(newData);
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
    let comp = <Loader />
    let fetchStatus = "Student not fetched yet"
    if (this.props.students.length > 0) {
      fetchStatus = "Students Fetched"
      console.log(this.props.students);
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
  const { students, profiles } = state.student
  return { students, profiles }
}

export default connect(mapStateToProps, {studentFetch, studentsFetch, onSelectedStudent, changeProfiles })(Student_Timeline)