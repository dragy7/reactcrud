import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Main Page</h1>
      <Link to={"/createcar"}>
        <p>Create car form</p>
      </Link>
      <Link to={"/cars"}>
        <p>View cars</p>
      </Link>

    </>
  );
}
