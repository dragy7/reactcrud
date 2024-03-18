import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateCar, getCar } from "../../models/Car";


export default function CarUpdateForm() {
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

  const updateForm = async () => {
    const car = await updateCar(id, formData);
    if (car.status === 200) {
      redirectToSuccessPage(car.payload._id);
    } else {
      setInfo(car.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/car/${id}`);
  };

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
      <h1>Car update form</h1>
      <p>Your car: {id}</p>
          <form>
        <input type="text" defaultValue={car.name} required name="name" placeholder="Enter name" onChange={e => handleChange(e)} />
        <input type="text" defaultValue={car.model} required name="model" placeholder="Enter model" onChange={e => handleChange(e)} />
        <input type="text" defaultValue={car.color} required name="color" placeholder="Enter color" onChange={e => handleChange(e)} />
        <input type="text" defaultValue={car.shifting} required name="shifting" placeholder="Enter shifting" onChange={e => handleChange(e)} />
        <input type="number" defaultValue={car.year} required name="year" placeholder="Enter year" onChange={e => handleChange(e)} />
        <button onClick={handleUpdate}>
          Update Car 
        </button>
      </form>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
