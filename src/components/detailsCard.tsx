interface name {
  common: string;
}

interface flags {
  png: string;
}
type detailsProps = {
  name: name;
  population: number;
  latlng: number[];
  flags : flags
};

type countryProps ={
    data : detailsProps
}

const DetailsCard = ({data} :countryProps) => {
  return (
    <div>
      <h1>Country Name:{data.name.common}</h1>
      <h4>Population : {data.population}</h4>
      <h4>Latitude : {data.latlng[0]} </h4>
      <h4>Longitude : {data.latlng[1]}</h4>
      <img src={data.flags.png}/>
    </div>
  );
};

export default DetailsCard;
