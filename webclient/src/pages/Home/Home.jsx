import PropertiesShelf from "../../components/PropertiesShelf/PropertiesShelf";
import useMostRecentProperties from "../../services/properties/getMostRecentProperties";
import useMostVisitedProperties from "../../services/properties/getMostVisitedProperties";
import SearchSession from "./SearchSession/SearchSession";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <SearchSession />
      <div className={styles.home}>
        <section className={styles.container}>
          <PropertiesShelf
            title="MOST VISITED"
            service={useMostVisitedProperties}
          />
          <PropertiesShelf
            title="LAST VISITED"
            service={useMostRecentProperties}
          />
        </section>
      </div>
    </>
  );
};

export default Home;
