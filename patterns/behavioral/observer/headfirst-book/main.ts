import { CliDisplay } from "./concretions/CurrentConditionDisplay";
import { WeatherData } from "./concretions/WeatherData";

{
  const weatherDataProvider = new WeatherData();
  
  new CliDisplay(weatherDataProvider);

  weatherDataProvider.updateTemp(69);
  weatherDataProvider.updateTemp(420);
}
