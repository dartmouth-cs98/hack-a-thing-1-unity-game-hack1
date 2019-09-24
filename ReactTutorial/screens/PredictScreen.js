import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Clarifai from 'clarifai';

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      flexDirection:'column',
      justifyContent: 'center',
      alignContent: 'center',
    }, 
    InnerContainer: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignContent: 'center',
    }
  });

class PredictScreen extends Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            result: '',
        }

        this.cancel = this.cancel.bind(this);

    }

    componentDidMount() {
        const app = new Clarifai.App({
            apiKey: "YOUR_CLARIFAI_API_KEY"
        });

        process.nextTick = setImmediate // RN polyfill
        const { data } = this.props.navigation.state.params.image
        app.models.predict(Clarifai.GENERAL_MODEL, { base64: data })
            .then(response => {
                console.log(response);
                if (response.outputs.length > 0 && response.outputs[0].data) {
                    return this.setState({
                        loading: false,
                        result: response.outputs[0].data.concepts[0].name
                    })
                }
                this.setState({
                    loading: false,
                    result: 'No result!'
                });  
            })
            .catch(e => {
                console.log(e);
                Alert.alert("Error", "Unable to classify your photo" + e, 
                [{ text: 'OK', onPress: () => this.cancel() },],
                { cancelable: false });
                this.setState({ loading: false });
        });
    }

    cancel() {
        const backAction = NavigationActions.back()
        this.props.navigation.dispatch(backAction)
    }

    render() {
        const { type, data } = this.props.navigation.state.params.image
        const sourceImage = `data:${type};base64,${data}`
        return (
            <View style={styles.Container}>
                {
              this.state.loading ?
              // display Analyze Screen
              <View style={styles.InnerContainer}>
                <ActivityIndicator size={1} color='#95a5a6' />
                <Text>Analyzing...</Text>
              </View> :
              // Display result screen
              <View>
                  <Text>{this.result}</Text>
            </View>
          }
        </View>
        
        )
      }
}

export default PredictScreen;

