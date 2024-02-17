import { useContext } from "react";
import { WeatherContext } from "../../context";
import Cloud from "./../../assets/icons/cloud.svg";
import Humidity from "./../../assets/icons/humidity.svg";
import TempMax from "./../../assets/icons/temp-max.svg";
import TempMin from "./../../assets/icons/temp-min.svg";
import Wind from "./../../assets/icons/wind.svg";
function WeatherCondition() {
  const { weatherData } = useContext(WeatherContext);
  const {
    climate,
    temprature,
    maxTemprature,
    minTemprature,
    humidity,
    cloudPercentage,
    wind,
  } = weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The Weather Condition Is Now : <b>{climate}</b>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemprature)}°</p>
            <img src={TempMax} alt="temp-max" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemprature)}°</p>
            <img src={TempMin} alt="temp-min" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(humidity)}%</p>
            <img src={Humidity} alt="humidity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(cloudPercentage)}%</p>
            <img src={Cloud} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={Wind} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WeatherCondition;
