import useMostRecentProperties from "../../services/properties/getMostRecentProperties";
import useMostVisitedProperties from "../../services/properties/getMostVisitedProperties";
import MostVisitedSession from "./MostVisitedSession/MostVisitedSession";

const Home = () => {
  const mostVisitedProperties  = useMostVisitedProperties();
  const mostRecentProperties  = useMostRecentProperties();

  const mostVisitedContent = mostVisitedProperties.loading ? (
    <h1>Loading</h1>
  ) : (
    <MostVisitedSession properties={mostVisitedProperties.data.mostVisitedProperties} />
  );

  const mostRecentContent = mostRecentProperties.loading ? (
    <h1>Loading</h1>
  ) : (
    <MostVisitedSession properties={mostRecentProperties.data.mostRecentProperties} />
  );

  console.log(mostVisitedContent)
  console.log(mostRecentContent)

  return (
    <div>
      <h1>Home</h1>
      {mostVisitedContent}
      {mostRecentContent}
    </div>
  );
};

export default Home;
