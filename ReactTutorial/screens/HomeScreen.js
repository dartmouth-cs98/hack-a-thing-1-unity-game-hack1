import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, ActivityIndicator, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    }
  });

class HomeScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor() {
        super();

        this.state = {
            loading: false,
        }

        this.onClick = this.onClick.bind(this);
        this.getPermissionAsync = this.getPermissionAsync.bind(this);
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    async getPermissionAsync() {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
    }


    async onClick() {
        this.setState({loading: true});

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (result.cancelled) {
            this.setState({loading: false});
        } else {
            this.setState({loading: false});
            const { navigate } = this.props.navigation;
            navigate('Prediction', { image: result });
        }
    }

    render() {
        return (
          <View style={styles.Container}>
            <StatusBar hidden />
            {this.props.loading ? 
            <ActivityIndicator size="large" color="#e74c3c" /> :
            <Button title="Analyze Image"onPress={this.onClick}></Button>}
          </View>
        )
      }
}

HomeScreen.propTypes = {
    navigation: PropTypes.object,
  }
  
  export default HomeScreen

