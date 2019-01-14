import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import ImagePicker,{showImagePicker} from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'firebase';
import { connect } from 'react-redux'
import { imagePicked } from '../actions/StudentActions';

class PickImage extends Component {
  state = {
    pickedImaged: null
  }
  options = {
    title: 'Select Avatar',
    //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  pickImageHandler = () => {
    console.log("Button Pressed")
    showImagePicker( res => {
      console.log("inside showImage");
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        
        console.log("call for function");
        this.uploadImage(res.uri);

        //this.props.onImagePicked({uri: res.uri, base64: res.data});
      }
    });
  }
// pickImageHandler(){
//   showImagePicker((response) => {
//     if (!response.didCancel) {
//         this.uploadImage(response.uri);
//     }
// });
// }


   uploadImage = (uri, mime = 'application/octet-stream') => {
    console.log("inside uploadImage:",uri);
    const image = uri;

    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;

   
    let uploadBlob = null;
    const { currentUser } = firebase.auth();
    const imageRef = firebase.storage().ref(`/users/Teachers`).child(`${currentUser.uid}.jpg`);
    //let mime = 'image/jpg';
    fs.readFile(image, 'base64')
      .then((data) => {
        console.log("pehli");
        return Blob.build(data, { type: `${mime};BASE64` });
    })
    .then((blob) => {
        console.log("dusri");
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        console.log("teesri");
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        console.log("final");
        // URL of the image uploaded on Firebase storage
        console.log(url);
        
      })
      .catch((error) => {
        console.log(error);

      })  
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.props.image} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={this.pickImageHandler.bind(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

const mapStateToProps = (state) => {
  const { image } = state.student;
  return { image }
}

export default connect(mapStateToProps, { imagePicked })(PickImage);
