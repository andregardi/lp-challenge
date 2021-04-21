import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <Link className={styles.headerLinks} to="/">
            Home
          </Link>
          <Link className={styles.headerLinks} to="/list">
            List
          </Link>
          <h1>LP Challenge</h1>
          <Link className={styles.headerLinks} to="/list?searchParam=malibu">
            Search
          </Link>
          <Link className={styles.headerLinks} to="/details/1">
            Details
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
