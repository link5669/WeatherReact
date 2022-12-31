import { Weather } from "./components/Weather";
import React, { useState, useEffect } from "react";
const api_key = "key";
var city;
var country = "US";
var data;
var latitude;
var longitude;


export const App = () => {
  const [data, setData] = useState(null);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  function showPosition(position) {
    console.log(latitude);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude; 
  }

  async function getCountry(lat, long) {
    const request = await fetch("https://ipinfo.io/json?token=646df66eaa0892")
    const jsonResponse = await request.json()
    city = jsonResponse.city;
    getData();
    // country = jsonResponse.country;
  }
  
  const getData = async () => {
    console.log("Fetching data");
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=imperial`
    );
    setData(await api_call.json());
    console.log(data);
  };

  useEffect(() => {
    getCountry();
  }, []);

  if (!data)
    return (
      <>
        <p>Loading..</p>
      </>
    );

  return (
    <>
    <Weather 
     data={data}
     city={city}
     country={country}
     latitude={latitude}
     longitude={longitude}
    />
    </>
  );
};
