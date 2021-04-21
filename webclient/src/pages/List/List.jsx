import { useLocation } from "react-router-dom";
import usePaginatedProperties from "../../services/properties/getPaginatedProperties";
import usePaginatedSearch from "../../services/properties/getPaginatedSearch";
import ListCard from "./ListCard/ListCard";
import ListFooter from "./ListFooter/ListFooter";
import styles from "./List.module.css";

const useContent = (page, searchParam) => {
  const hook = searchParam ? usePaginatedSearch : usePaginatedProperties;
  const { loading, error, data } = hook(parseInt(page), searchParam);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h4>Error loading data</h4>;

  const { pages, properties } = data;
  const mappedProperties = properties.map((property) => (
    <ListCard {...property} key={property.id} />
  ));
  return (
    <>
      {mappedProperties}
      <ListFooter
        currentPage={parseInt(page)}
        searchParam={searchParam}
        pagesCount={parseInt(pages)}
      />
    </>
  );
};

const List = () => {
  const urlParams = new URLSearchParams(useLocation().search);
  const searchParam = urlParams.get("searchParam");
  const page = urlParams.get("page") || 1;

  const content = useContent(page, searchParam);
  return (
    <div className={styles.container}>
      <h1>LIST OF HOMES</h1>
      {content}
    </div>
  );
};

export default List;
