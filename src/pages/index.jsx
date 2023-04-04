import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Sample problems
      <ul>
        <li>
          <Link to="/lesson1/challenge1/playground">
            {" "}
            lesson1/challenge1/playground{" "}
          </Link>
        </li>

        <li>
          <Link to="/lesson1/challenge2/playground">
            {" "}
            lesson1/challenge2/playground{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
