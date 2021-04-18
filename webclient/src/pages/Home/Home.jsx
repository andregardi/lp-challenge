import PropertiesShelf from "../../components/PropertiesShelf/PropertiesShelf";
import useMostRecentProperties from "../../services/properties/getMostRecentProperties";
import useMostVisitedProperties from "../../services/properties/getMostVisitedProperties";
import SearchSession from "./SearchSession/SearchSession";

const Home = () => {
  return (
    <div>
      <SearchSession />
      <PropertiesShelf
        title="MOST VISITED"
        service={useMostVisitedProperties}
      />
      <PropertiesShelf
        title="LAST VISITED"
        service={useMostRecentProperties}
      />
    </div>
  );
};

export default Home;
