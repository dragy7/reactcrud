import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCar, deleteCar } from "../../models/Car";

export default function CarView() {
  const { id } = useParams();
  const [car, setCar] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [info, setInfo] = useState();
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCar(id);
    data.msg
    if (data.status === 500) return setLoaded(null);
    if (data.status === 200) {
      setCar(data.payload);
      setLoaded(true);
    }
  }

  useEffect(() => {
    load()
  }, []);

const handleChange = (e) => {
  setFormData(e.target.value);
};

const redirectToMainPage = () => {
  return navigate("/");

}

const handleDelete =  async (e) => {
  e.preventDefault();
  if(car.name === formData) {
    const data = await deleteCar(id);
    if(data.status === 200){
      redirectToMainPage();
    }else{
      setInfo(data.msg);
    }
  } else {
    setInfo("wrong input")
  }
}

  if (isLoaded === null) {
    return (
      <>
        <p> car not found</p>
      </>
    )
  }
  if (!isLoaded) {
    return (
      <>
        <p> loading car...............</p>
      </>
    )
  }
  return (
    <>
      <h1>Car view</h1>
      <p>Your car: {id}</p>
      <p>Name:  {car.name}</p>
      <p>Model:  {car.model}</p>
      <p>Color:  {car.color}</p>
      <p>Shifting:  {car.shifting}</p>
      <p>Year:  {car.year}</p>
      <Link to={`/updatecar/${id}`}>
      <p> update car</p>
      </Link>
      <form >
        <input type="text" placeholder={car.name} onChange={handleChange} />
        <button onClick={handleDelete}> delete car</button>
        <p>{info}</p>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
