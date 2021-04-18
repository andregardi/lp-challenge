import { Link } from "react-router-dom";
import { ASSETS_SERVER_URL } from "../../../constans";
import { currencyFormater } from "../../../utils/currencyHelper";
import styles from "./PropertyCard.module.css";

const PropertyCard = (props) => {
  const { id, homeImage, overview, visits } = props;
  const { price } = overview;
  const { total: visitsTotal } = visits;

  const imgSrc = `${ASSETS_SERVER_URL}/${homeImage}`;

  const linkTo = `/details/${id}`;

  return (
    <Link to={linkTo} className={styles.shelf}>
      <div className={styles.propertyImageBox}>
        <img src={imgSrc} alt="property" className={styles.propertyImage} />
      </div>
      <div className={styles.propertyInfos}>
        <p className={styles.propertyPrice}>
          $<span>{currencyFormater(price)}</span>
        </p>
        <p className={styles.propertyView}>
          Total View:<span>{visitsTotal}</span>
        </p>
      </div>
    </Link>
  );
};

export default PropertyCard;
