import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

const App = () => {
  const [country, setCountry] = useState("");
  const API = `https://restcountries.com/v3.1/name/${country}`;
  const [info, setInfo] = useState<any>([]);
  const con = useDebounce(API);
  function inputHandler(i: React.ChangeEvent<HTMLInputElement>) {
    setCountry(i.target.value);
  }

  useEffect(() => {
    axios
      .get<[]>(API)
      .then((respose: any) => {
        console.log(respose.data);
        setInfo(respose.data);
      });
  }, [con]);

  return (
    <div className="inputContainer">
      <input
        placeholder="Country Name"
        onChange={inputHandler}
        value={country}
      />
      <Link
        className="button"
        style={{
          backgroundColor:
            info.length >0 &&
            info[0]["name"]["common"].toLowerCase() == country.toLowerCase()
              ? "#0AA1DD"
              : "#babfc4",
          pointerEvents: info.length >0 &&
          info[0]["name"]["common"].toLowerCase() == country.toLowerCase()
            ? 'auto'
            : 'none',
        }}
        to="/country-details"
        state= {info}
      >
        SUBMIT
      </Link>
    </div>
  );
};

export default App;
