import { Link } from "react-router";

export default function Index() {
  return (
    <div>
      <h1>Index</h1>

      <Link to="/about">About</Link>
    </div>
  );
}
