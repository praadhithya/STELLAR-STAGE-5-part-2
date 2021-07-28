import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Linking
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

export default class DailyPic extends Component {
  constructor(props) {
        super(props);
        this.state = {
            apod: {},
        };
    }

    componentDidMount() {
      this.getApod()
    }

    getApod = () => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=muYpP7WcHwjhnb6TacUHh0NFPHD1eHjrQnaFMkFX")
            .then(response => {
                this.setState({ apod: response.data })
            })
            .catch(error => {
                alert(error.message)
            })
    }
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground
            source={require('../assets/stars.gif')} style={styles.backgroundImage}>
            <Text style={styles.routeText}>Astronomy Picture of The Day</Text>
            <Text style={styles.titleText}>{this.state.apod.title}</Text>
            <TouchableOpacity
            onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>
            <View style={styles.iconImage}>
            <Image source={require("../assets/play-video.png")} style={{width: 50, height: 50}}></Image>
            </View>
            </TouchableOpacity>
            <Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
            </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginRight: -10
    },
    routeText: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 11,
        paddingLeft: 10,
        textAlign: 'center',
        color: '#e7469a'
    },
    iconImage: {
    },
    explanationText:{
      color: 'white',
      fontSize: 20,
      textAlign: 'center'
    }
});