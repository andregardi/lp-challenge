import PropertyCard from "./PropertyCard/PropertyCard";
import styles from "./PropertiesShelf.module.css";

const useContent = (service) => {
  const { loading, error, data } = service();

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h4>Error loading data</h4>;

  return data.map((property) => (
    <PropertyCard {...property} key={property.id} />
  ));
};

const PropertiesShelf = (props) => {
  const { title, service } = props;
  const content = useContent(service);
  return (
    <section className={styles.shelf}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.shelfsContainer}>{content}</div>
    </section>
  );
};

export default PropertiesShelf;
