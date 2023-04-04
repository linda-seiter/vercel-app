import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Sample problems
      <ul>
        <li>
          <Link to="/lesson1/challenge1"> lesson1/challenge1 </Link>
        </li>

        <li>
          <Link to="/lesson1/challenge2"> lesson1/challenge2 </Link>
        </li>
      </ul>
    </div>
  );
}
