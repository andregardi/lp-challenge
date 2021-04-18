import { useParams } from "react-router-dom";
import useGetPropertyById from "../../services/properties/getPropertyById";
import ImagesArea from "./ImagesArea";

const useGetPropertyByIdContent = (propertyId) => {
  const { loading, error, data } = useGetPropertyById(propertyId);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h4>Error loading data</h4>;

  return (
    <div>
      <ImagesArea {...data} />
    </div>
  );
};

const Details = () => {
  const { propertyId } = useParams();
  const content = useGetPropertyByIdContent(parseInt(propertyId));
  return content;
};

export default Details;
