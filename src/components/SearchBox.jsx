import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
export default function SearhBox({ updateState }) {
  let [city, setCity] = useState("");

  const API_URL = `https://api.weatherapi.com/v1/current.json`;
  const API_KEY = "91bb9be51767493aaae173332241512";

  let getweather = async () => {
    // let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&metric`);
    let res = await fetch(`${API_URL}?key=${API_KEY}&q=${city}&aqi=yes`);
    let resJSON = await res.json();
    console.log(resJSON);
    let result = {
      // curr:resJSON.current,
      // location:resJSON.location,
      air: resJSON.current.air_quality,
      location: resJSON.location,
      city: resJSON.location.name,
      region: resJSON.location.region,
      country: resJSON.location.country,
      weather: resJSON.current.condition.text,
      icon: resJSON.current.condition.icon,
      temp: resJSON.current.temp_c,
      feelslike: resJSON.current.feelslike_c,
      humidity: resJSON.current.humidity,
      visiblity: resJSON.current.vis_km,
      wind: resJSON.current.wind_kph,
      wind_dir: resJSON.current.wind_dir,
      date_time:resJSON.location.localtime,
      pressure:resJSON.current.pressure_in,
      
    };

    return result;
  };

  let handleinputchange = (e) => {
    setCity(e.target.value);
  };

  let handlesubmit = async (e) => {
    e.preventDefault();
    setCity("");
    let newRes = await getweather();
    updateState(newRes);
  };

  return (
    <>
      <h1 className="p-4 font-bold text-black capitalize ">Check weather </h1>
      <form action="get">
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          required
          value={city}
          name="city"
          onChange={handleinputchange}
        />
        <div className="p-4">
          <Button
            variant="outlined"
            size="large"
            type="submit"
            onClick={handlesubmit}
          >
            Search
          </Button>
        </div>
      </form>
    </>
  );
}
