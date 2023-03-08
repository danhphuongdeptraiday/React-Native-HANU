import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

const getLocation = async (placeName) => {
  const api = `https://geocoding-api.open-meteo.com/v1/search?name=${placeName}`;
  // console.log(api);
  const res = await fetch(api);
  const json = await res.json();
  console.log(json);
  const arrResult = json.results;
  const firstPlace = arrResult[0];
  const location = {
    name: firstPlace.admin1 + ", " + firstPlace.country,
    latitude: firstPlace.latitude,
    longitude: firstPlace.longitude,
  };
  return location;
};

const getWeather = async (loc) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true`;

  const res = await fetch(url);
  const json = await res.json();

  console.log(json);

  return {
    temp: json.current_weather.temperature,
    weatherCode: json.current_weather.weathercode,
  };
};

export default function App() {
  const [text, setText] = useState("");

  const [weatherData, setWeatherData] = useState({
    name: "",
    temp: "",
    weatherCode: "",
  });

  const showWeather = () => {
    setWeatherData(getLocation);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ImageBackground
        source={require("./assets/clear.png")}
        resizeMethod="cover"
        style={{
          height: "100%",
          backgroundColor: "#ccc",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "rgba(0, 0, 0, 0.7)",
          // filter: `blur(10px)`,
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ backgroundColor: "#5F9EA0", width: 200 }}>
            <Text
              style={{ textAlign: "center", color: "black", fontSize: "24px" }}
            >
              {weatherData.name}
            </Text>
            <Text
              style={{ textAlign: "center", color: "black", fontSize: "24px" }}
            >
              {weatherData.temp} độ C
            </Text>
            <Text
              style={{ textAlign: "center", color: "black", fontSize: "24px" }}
            >
              {weatherData.weatherCode}
            </Text>
          </View>
          <TextInput
            placeholder="Search for location"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
            style={{
              color: "black",
              marginTop: 30,
              width: 300,
              backgroundColor: "gray",
              padding: 20,
              fontSize: 16,
              borderRadius: 10,
            }}
          ></TextInput>
          <Button
            title="click me"
            onPress={
              // showWeather
              async () => {
                const location = await getLocation(`${text}`);

                const current_weather = await getWeather(location);
                console.log(current_weather);
                setWeatherData({
                  name: text,
                  temp: current_weather.temp,
                  weatherCode: current_weather.weatherCode,
                });
              }
            }
          />
        </View>
        {/* <ActivityIndicator ></ActivityIndicator> */}

        {/* <View style={{ color: "white" }}>
          <Text>This Does not work on the status bar</Text>
        </View> */}
      </ImageBackground>
    </View>
  );
}
