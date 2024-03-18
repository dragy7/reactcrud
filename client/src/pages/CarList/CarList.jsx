import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCars } from "../../models/Car";
import CarLink from "./CarLink";


export default function CarList() {
  const [cars, setCars] = useState();
  const [isLoaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getCars();
    data.msg
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCars(data.payload);
      setLoaded(true);
    }

  }
  useEffect(() => {
    load()
  }, []);

  if (isLoaded === null) {
    return(
      <>
      <p> cars not found</p>
      </>
    )
  }
if (!isLoaded){
  return(
    <>
    <p> loading cars...............</p>
    </>
  )
}

  return (
    <>
      <h1>Car list</h1>
      {
        cars.map((car, index) => (
          <CarLink key={index} {...car}/>
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
