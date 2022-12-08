import { Stack, Typography } from "@mui/material";
import { Logo } from "./Logo";

export const Weather = ({ data, city, country, latitude, longitude }) => {
  return (
    <div style={{textAlign: "center", fontFamily: "monospace", padding:"15%", fontSize:"140%"}}>
      <h1 class="h1">Current Weather</h1>
      <p>Current City: {city}</p>
      <p>Current Country: {country}</p>
      <p>Current Temperature: {data.main.temp}˚F</p>
      <p>Description: {data.weather[0].description}</p>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      </div>
    // </>
  );
};
