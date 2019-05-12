import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types';

const weatherCases = {
    Rain: {
      colors: ["#00C6FB", "#005BEA"],
      title: "비가 내립니다.",
      subtitle: "우산 챙기세요.",
      icon: "ios-rainy"
    },
    Clear: {
      colors: ["#FEF253", "#FF7300"],
      title: "날이 무척 무덥습니다.",
      subtitle: "선크림 꼭 바르고 외출하세요.",
      icon: "ios-sunny"
    },
    Thunderstorm: {
      colors: ["#00ECBC", "#007ADF"],
      title: "몇 차례의 소나기와 뇌우가 있습니다.",
      subtitle: "낙뢰를 유발할 수 있는 물품 사용 시 주의하세요.",
      icon: "ios-thunderstorm"
    },
    Clouds: {
      colors: ["#D7D2CC", "#304352"],
      title: "구름 많은 날씨입니다.",
      subtitle: "아침, 밤 쌀쌀한 일교차 주의하세요.",
      icon: "ios-cloudy"
    },
    Snow: {
      colors: ["#7DE2FC", "#B9B6E5"],
      title: "눈이 내립니다.",
      subtitle: "운전 시 주의하세요.",
      icon: "ios-snow"
    },
    Haze: {
        colors: ["#D7D2CC", "#304352"],
        title: "안개 낀 날입니다.",
        subtitle: "운전 시 주의하세요.",
        icon: "ios-partly-sunny"
      },
};

function Weather({ weatherName, temp }) {
    console.log(weatherName);
    return (
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    temp: {
        fontSize: 48,
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        color: "white",
        marginBottom: 10,
        fontWeight: "100"
    },
    subtitle: {
        fontSize: 24,
        color: "white",
        marginBottom: 24
    }
})