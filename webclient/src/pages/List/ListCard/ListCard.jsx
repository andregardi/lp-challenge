import { Link } from "react-router-dom";
import AvailableSign from "../../../components/AvailableSign/AvailableSign";
import { ASSETS_SERVER_URL } from "../../../constans";
import { currencyFormater } from "../../../utils/currencyHelper";
import styles from "./ListCard.module.css";

const mapImages = (images) =>
  images
    .slice(1, 5)
    .map((image, index) => (
      <img src={`${ASSETS_SERVER_URL}/${image}`} key={index} alt="" />
    ));

const ListCard = (props) => {
  const { homeImage, overview, images, id } = props;
  const homeImgSrc = `${ASSETS_SERVER_URL}/${homeImage}`;
  const mappedImages = mapImages(images);
  const formatedPrice = currencyFormater(overview.price);
  const linkTo = `/details/${id}`;

  return (
    <Link to={linkTo} className={styles.card}>
      <div className={styles.homeImageCell}>
        <img src={homeImgSrc} alt="" />
        <span>Price: ${formatedPrice}</span>
      </div>
      <div className={styles.infoCell}>
        <p>Neighborhood: {overview.neighborhood}</p>
        <p>
          Beds: {overview.beds} &#160; Baths: {overview.baths}
        </p>
        <p>Address: {overview.address}</p>
        <p>City: {overview.city}</p>
        <p>Zip Code: {overview.zipcode}</p>
        <p>
          <span>Available: </span>
          <AvailableSign isAvailable={overview.available} />
        </p>
      </div>
      <div className={styles.gallery}>{mappedImages}</div>
    </Link>
  );
};

export default ListCard;
