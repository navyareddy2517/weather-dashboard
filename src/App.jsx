import React, { useState } from "react";
import Content from "./components/ContentBox";
import Background from "./components/BackgroundBox";
import SearchBar from "./components/SearhBox";
// The App Component mainly renders three components
// First is BackgroundBox for Backgroud
// Second is SearchBox for Weather Search
// Third is ContentBox for User Weather Location and Searched Weather History
const App = () => {
  // Saves weather history
  const [weatherHistory, setweatherHistory] = useState([]);

  // Used for theme
  const [theme, setTheme] = useState("light");

  // Used for Temperature Type, Celsius and Fahrenheit
  const [tempType, setTempType] = useState("C");

  // This function is used to update weather searched history
  const updateWeatherHistory = (newWeatherHistory) => {
    setweatherHistory((prev) => {
      return [newWeatherHistory, ...prev];
    });
  };

  // This function is used to toggle theme from dark to light
  const changeToLightTheme = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    const root = document.body.querySelector("#root");
    root.classList.remove("dark");
    root.classList.add("light");
    setTheme("light");
  };

  // This function is used to toggle theme from light to dark
  const changeToDarkTheme = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    const root = document.body.querySelector("#root");
    root.classList.remove("light");
    root.classList.add("dark");
    setTheme("dark");
  };

  // This function is used to toggle temperature from Farenhite to Celsius
  const changeTempToC = () => {
    setTempType("C");
  };

  // This function is used to toggle temperature from Celsius to Farenhite
  const changeTempToF = () => {
    setTempType("F");
  };

  return (
    <>
      <Background />
      <SearchBar
        theme={theme}
        tempType={tempType}
        onUpdate={updateWeatherHistory}
      />
      <Content
        theme={theme}
        tempType={tempType}
        onChangeToLightTheme={changeToLightTheme}
        onChangeToDarkTheme={changeToDarkTheme}
        onChangeTempToC={changeTempToC}
        onChangeTempToF={changeTempToF}
        weatherHistory={weatherHistory}
      />
    </>
  );
};

export default App;
