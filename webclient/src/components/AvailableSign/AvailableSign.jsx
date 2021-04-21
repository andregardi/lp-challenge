import styles from "./AvailableSign.module.css";

const AvailableSign = ({ isAvailable }) => {
  const colorStyle = {
    backgroundColor: isAvailable ? "lightgreen" : "red"
  };

  return <span className={styles.sign} style={colorStyle} />;
};

export default AvailableSign;
