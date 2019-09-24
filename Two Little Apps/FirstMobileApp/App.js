import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

const Images = [
  {
      uri: "https://i.imgur.com/mxgtWKt.jpg",
      label: "Cat in blue jeans"
  },

  {
      uri: "https://i.imgur.com/XCRnNWn.jpg",
      label: "A cat with frog head accessory"
  },

  {
      uri: "https://i.imgur.com/dqQX1K0.jpg",
      label: "A close up of a dog"
  },

  {
      uri: "https://i.imgur.com/nZXbSbh.jpg",
      label: "Puppies!"
  },

  {
      uri: "https://i.imgur.com/mXCjefR.jpg",
      label: "Two bunnies in profile"
  },

  {
      uri: "https://i.imgur.com/AGyxRcc.jpg",
      label: "A rabbit surrounded by chicks"
  }
];

export default class FirstMobileApp extends Component {
  state = {
      index: 0,
      imageWidth: null
  }

  nextImage(event) {
      const { index, imageWidth } = this.state,
            X = event.nativeEvent.locationX,
            delta = (X < imageWidth/2) ? -1 : +1;

      let newIndex = (index + delta) % Images.length;

      if (newIndex < 0) {
          newIndex = Images.length - Math.abs(newIndex);
      }

      this.setState({
          index: newIndex
      });
  }

  onImageLayout(event) {
      this.setState({
          imageWidth: event.nativeEvent.layout.width
      });
  }

  render() {
      const image = Images[this.state.index];

      return (
          <View style={styles.container}>
              <View style={styles.empty} />
              <TouchableHighlight onPress={this.nextImage.bind(this)}
                                  style={styles.image}>
                  <Image source={{uri: image.uri}}
                         style={styles.image}
                         onLayout={this.onImageLayout.bind(this)}>
                  </Image>
              </TouchableHighlight>
              <Text style={styles.imageLabel}>{image.label}</Text>
              <View style={styles.empty} />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 50, 200, 0.5)',
  },
  image: {
      flex: 2,
      width: width-10,
      justifyContent: 'flex-end',
      alignItems: 'center'
  },
  imageLabel: {
      textAlign: 'center',
      backgroundColor: 'rgba(100, 100, 120, 0.5)',
      color: 'white',
      width: width-10
  },
  empty: {
      flex: 1
  }
});
