import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CaptialDetails = () => {
  const data: any = useLocation();
  const API = `http://api.weatherstack.com/current?access_key=adc214b9f8383d6e7fb9251fbca3ce9b&query=${data.state}`;
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
       axios
          .get<[]>(API)
          .then((respose: any) => {
              console.log(respose.data);
              setInfo(respose.data);
          });
  }, [API]);
  if(info === null){
    return(<h1>loading...</h1>);
  }
  else {
  return (
    <div>
      <h4>Temperature : {info.current.temperature}</h4>
      <h4>Wind Speed : {info.current.wind_speed}</h4>
      <h4>Time Zone Id : {info.location.timezone_id}</h4>
      <img src={info.current.weather_icons[0]}/>
    </div>
  );}
};

export default CaptialDetails;
