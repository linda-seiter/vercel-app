import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Sample playgrounds
      <ul>
        <li>
          <Link to="/lesson1/playground1"> lesson1/playground1 </Link>
        </li>

        <li>
          <Link to="/lesson1/playground2"> lesson1/playground2 </Link>
        </li>
      </ul>
    </div>
  );
}
