import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather'

const API_KEY = "4072df176f7de59570ca7c0db0c5be73";

export default class App extends Component {
  state = {
    isLoaded: false,
    error:null,
    temperature: null,
    name: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        {
          this._getWeather(position.coords.latitude, position.coords.longitude);
        };
      },
      error => {
        this.setState({
          error:error
        });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;    
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather 
            weatherName={name} 
            temp={temperature}
          />
        ) : (
            <View style={styles.loading}>
              <Text style={styles.loadingText}>날씨정보를 불러오고 있습니다.</Text>
              {error ? <Text style={styles.errorText}>{error}</Text> : null}
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errorText:{
    color:"red",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 24
  }
});
