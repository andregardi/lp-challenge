import { useParams } from "react-router-dom";
import useGetPropertyById from "../../services/properties/getPropertyById";
import ImagesArea from "./ImagesArea/ImagesArea";
import InfoArea from "./InfoArea/InfoArea";
import styles from "./Details.module.css";

const Details = () => {
  const { propertyId } = useParams();
  const { loading, error, data } = useGetPropertyById(parseInt(propertyId));

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h4>Error loading data</h4>;

  return (
    <div>
      <div className={styles.detailsPageConainer}>
        <ImagesArea {...data}></ImagesArea>
        <InfoArea {...data} />
      </div>
    </div>
  );
};

export default Details;
