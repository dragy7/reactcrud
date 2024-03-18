import { Link,  } from "react-router-dom"

export default function CarLink(props){
    return(
        <>
        <Link to={`/car/${props._id}`}>
        <p>{props.name}</p>
        <p>{props.model}</p>
        </Link>
        <br />
        </>
    )
}