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
          <Link className={styles.headerLinks} to="/list/page/1">
            List
          </Link>
          <h1>Luxury Presence</h1>
          <Link className={styles.headerLinks} to="/">
            Home
          </Link>
          <Link className={styles.headerLinks} to="/page2">
            page2
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
