import React from "react";
import { Link, useLocation } from "react-router-dom";
import DetailsCard from "../components/detailsCard";

const CountryDetails = () => {
  const info: any = useLocation();
  return (
    <div>
      <DetailsCard data={info.state[0]} />

      <Link
        className="button"
        style={{
          backgroundColor: "#0AA1DD",
        }}
        to="/captial-details"
        state={info.state[0].capital[0]}
      >
        {info.state[0].capital[0]}
      </Link>
    </div>
  );
};

export default CountryDetails;
