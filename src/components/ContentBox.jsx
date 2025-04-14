import UserWeather from "./UserWeather";
import React from "react";
import propTypes from "prop-types";

// This component is used to render two components
// First component, UserWeather for user weather information
// Second component, WeatherHistory for searched weather history 
const Content= ({
  weatherHistory,
  theme,
  tempType,
  onChangeToLightTheme,
  onChangeToDarkTheme,
  onChangeTempToC,
  onChangeTempToF,
}) => {
  return (
    <div className={`content-box ${theme}`}>
      <UserWeather
        theme={theme}
        tempType={tempType}
        onChangeTempToC={onChangeTempToC}
        onChangeTempToF={onChangeTempToF}
        onChangeToLightTheme={onChangeToLightTheme}
        onChangeToDarkTheme={onChangeToDarkTheme}
      />
    
    </div>
  );
};

// Validate Props
Content.propTypes = {
  weatherHistory: propTypes.array.isRequired,
  theme: propTypes.string.isRequired,
  tempType: propTypes.string.isRequired,
  onChangeTempToC: propTypes.func.isRequired,
  onChangeTempToF: propTypes.func.isRequired,
  onChangeToLightTheme: propTypes.func.isRequired,
  onChangeToDarkTheme: propTypes.func.isRequired,
};

export default Content;