import "./header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header id="main-header">
      <h1>PokéApp</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
