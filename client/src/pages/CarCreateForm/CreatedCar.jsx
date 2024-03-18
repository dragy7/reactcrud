import { useParams, Link} from "react-router-dom"

export default function CreatedCar() {
    const {id} = useParams();
    return(
        <>
        <p> your cretaed car: {id}</p>
        <Link to={`/car/${id}`}>
        <p>view car</p>
        </Link>
        <Link to={"/"}>
        <p>go home</p>
        </Link>
        
        </>
    )
}
 