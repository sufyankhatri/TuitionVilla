import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import {SearchBar} from 'react-native-elements'
import { connect } from 'react-redux'
import { teacherFetch, teachersFetch, onSelectedTeacher,  changeProfiles } from '../actions'
import Teacher_Card from './Teacher_Card'
import Loader from '../common/Spinner';
import { List } from "react-native-elements"

export class Teacher_Timeline extends Component {
  state = {
    loading: false,
    error: null,
    data: [],
  };

  componentDidMount() {
    this.props.teachersFetch();
    this.props.teacherFetch();
    // console.log("Profile")
    // if (this.props.teachers) {
    //   this.setState({ data: this.props.teachers })
    // }
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
    let fetchStatus = "Teacher not fetched yet"
    if (this.props.teachers.length > 0) {
      fetchStatus = "Teachers Fetched"
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
  const { teachers, profiles } = state.teacher
  return { teachers, profiles }
}

export default connect(mapStateToProps, {teacherFetch, teachersFetch, onSelectedTeacher,  changeProfiles })(Teacher_Timeline)