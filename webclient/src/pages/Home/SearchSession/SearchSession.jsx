import { useHistory } from "react-router-dom";
import styles from "./SearchSession.module.css";

const SearchSession = () => {
  const history = useHistory();

  const searchSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements["search-param"];
    history.push(`/list/?searchParam=${value}`);
  };

  return (
    <section className={styles.search}>
      <h2 className={styles.searchTitle}>
        The Leading World Class Real Estate Brokerage
      </h2>
      <form
        autoComplete="off"
        className={styles.searchForm}
        onSubmit={searchSubmit}
      >
        <input
          type="text"
          name="search-param"
          className={styles.searchInput}
          placeholder="Search by neighborhood, city, or a ZIP code"
        />
        <button type="submit" className={styles.searchButton}></button>
      </form>
    </section>
  );
};

export default SearchSession;
