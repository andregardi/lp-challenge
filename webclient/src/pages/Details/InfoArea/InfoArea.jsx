import React from "react";
import AvailableSign from "../../../components/AvailableSign/AvailableSign";
import { currencyFormater } from "../../../utils/currencyHelper";
import styles from "./InfoArea.module.css";

const InfoArea = (props) => {
  const { overview, facts } = props;
  const {
    address,
    available,
    baths,
    beds,
    city,
    neighborhood,
    price,
    zipcode
  } = overview;
  const { heating, lot, parking, stories, type, yearBuilt } = facts;

  const formatedPrice = currencyFormater(price);

  return (
    <section className={styles.propertyInfoContainer}>
      <h3 className={styles.infoTilte}>Property Information</h3>
      <div className={styles.overviewBox}>
        <h4 className={styles.boxTilte}>Overview</h4>
        <p className={styles.boxText}>
          Price: <span>${formatedPrice}</span>
        </p>
        <p className={styles.boxText}>
          Neighborhood: <span>{neighborhood}</span>
        </p>
        <div className={styles.quantityBox}>
          <p>
            Beds: <span>{beds}</span>
          </p>
          <p>
            Baths: <span>{baths}</span>
          </p>
        </div>
        <p className={styles.boxText}>
          Address: <span>{address}</span>
        </p>
        <p className={styles.boxText}>
          City: <span>{city}</span>
        </p>
        <p className={styles.boxText}>
          ZIP code: <span>{zipcode}</span>
        </p>
        <p className={styles.boxText}>
          Available: <AvailableSign isAvailable={available} />{" "}
        </p>
      </div>
      <div className={styles.factsAndFeaturesBox}>
        <h4 className={styles.boxTilte}>Facts and features</h4>
        <p className={styles.boxText}>
          Year Built: <span>{yearBuilt}</span>
        </p>
        <p className={styles.boxText}>
          Heating: <span>{heating}</span>
        </p>
        <p className={styles.boxText}>
          Parking: <span>{parking}</span>
        </p>
        <p className={styles.boxText}>
          Lot: <span>{lot}</span>
        </p>
        <p className={styles.boxText}>
          Stories: <span>{stories}</span>
        </p>
      </div>
    </section>
  );
};

export default InfoArea;
